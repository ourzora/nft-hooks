import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';

import { RequestError } from './RequestError';
import {
  OPENSEA_API_URL_BY_NETWORK,
  THEGRAPH_API_URL_BY_NETWORK,
  THEGRAPH_UNISWAP_URL_BY_NETWORK,
  ZORA_USERNAME_API_URL,
} from '../constants/urls';
import type { NetworkIDs } from '../constants/networks';
import {
  GET_ALL_AUCTIONS,
  GET_AUCTION_BY_CURATOR,
  GET_AUCTION_BY_MEDIA,
  GET_MEDIA_QUERY,
} from '../graph-queries/zora';
import type {
  GetMediaAndAuctionsQuery,
  GetAllAuctionsQuery,
  GetAuctionByMediaQuery,
  ReserveAuctionPartialFragment,
} from '../graph-queries/zora-types';
import { GET_TOKEN_VALUES_QUERY } from '../graph-queries/uniswap';
import type { GetTokenPricesQuery } from '../graph-queries/uniswap-types';
import { TimeoutsLookupType, DEFAULT_NETWORK_TIMEOUTS_MS } from '../constants/timeouts';
import {
  ChainCurrencyType,
  MediaContentType,
  UsernameResponseType,
} from './FetchResultTypes';
import {
  transformCurrencyForKey,
  transformMediaForKey,
  addAuctionInformation,
} from './TransformFetchResults';
import { FetchWithTimeout } from './FetchWithTimeout';
import { CurrencyLookupType, NFTDataType, ZNFTMediaDataType } from './AuctionInfoTypes';
import {
  OpenseaResponse,
  transformGenericNFTForKey,
  transformOpenseaResponse,
} from './OpenseaUtils';

/**
 * Internal agent for NFT Hooks to fetch NFT information.
 * Can be used directly for interaction with non-react web frameworks or server frameworks.
 * Uses a cached promise-based API.
 * Fetches from IPFS providers and thegraph.
 */
export class MediaFetchAgent {
  // Network ID used to set fetch URLs
  readonly networkId: NetworkIDs;

  private timeouts: TimeoutsLookupType;

  // Batching content loaders
  private loaders: {
    // fetches NFT data from Zora subgraph, cached and batched
    mediaLoader: DataLoader<string, ZNFTMediaDataType>;
    // fetches eth currency data from Uniswap subgraph, cached and batched
    currencyLoader: DataLoader<string, ChainCurrencyType>;
    // fetches NFT ipfs metadata from url, not batched but cached
    usernameLoader: DataLoader<string, UsernameResponseType>;
    // genericNFTLoader currently uses opensea
    genericNFTLoader: DataLoader<string, OpenseaResponse>;
    // auctionIfnoLoader fetches auction info for non-zora NFTs
    auctionInfoLoader: DataLoader<string, ReserveAuctionPartialFragment>;
  };

  constructor(network: NetworkIDs) {
    this.timeouts = DEFAULT_NETWORK_TIMEOUTS_MS;
    this.networkId = network;

    this.loaders = {
      mediaLoader: new DataLoader((keys) => this.fetchMediaGraph(keys), { cache: false }),
      currencyLoader: new DataLoader((keys) => this.fetchCurrenciesGraph(keys), {
        cache: false,
      }),
      usernameLoader: new DataLoader((keys) => this.fetchZoraUsernames(keys)),
      genericNFTLoader: new DataLoader((keys) => this.fetchGenericNFT(keys), {
        cache: false,
      }),
      auctionInfoLoader: new DataLoader((keys) => this.fetchAuctionNFTInfo(keys), {
        maxBatchSize: 1,
        cache: false,
      }),
    };
  }

  /**
   * Clear all cached responses from metadata, currency, and NFT chain information loaders
   */
  clearCache() {
    Object.values(this.loaders).forEach((loader) => loader.clearAll());
  }

  /**
   * Gets information of currencies and trading prices from uniswap
   * @param currencies list of currency contract ids on ethereum
   * @returns Promise<CurrencyLookupType>
   */
  async loadCurrencies(currencies: string[]): Promise<CurrencyLookupType> {
    const results = await this.loaders.currencyLoader.loadMany(currencies);
    return results.reduce((last: CurrencyLookupType, result) => {
      if (!(result instanceof Error)) {
        last[result.token.id] = result;
      }
      return last;
    }, {});
  }

  /**
   * Fetch NFT content or retun URI if content shouild not be fetched
   * @param url NFT Content URL
   * @param contentType string mime type to fetch
   * @returns Promise<MediaContentType> Media content information or URL
   */
  async fetchContent(url: string, contentType: string): Promise<MediaContentType> {
    if (contentType.startsWith('text/')) {
      try {
        const response = await new FetchWithTimeout(this.timeouts.IPFS).fetch(url);
        return {
          text: await response.text(),
          type: 'text',
          mimeType: contentType,
        };
      } catch (e) {
        throw new RequestError('Issue fetching IPFS data', e);
      }
    }
    return { uri: url, type: 'uri', mimeType: contentType };
  }

  /**
   * Fetch Content MIME type from content URI
   *
   * @param url IPFS Content URI
   * @returns mime type as a string
   * @throws RequestError
   */
  async fetchContentMimeType(url: string): Promise<string> {
    const response = await new FetchWithTimeout(this.timeouts.IPFS).fetch(url, {
      method: 'HEAD',
    });
    const header = response.headers.get('content-type');
    if (!header) {
      throw new RequestError('No content type returned for URI');
    }
    return header;
  }

  /**
   * Get on-chain ZORA NFT ID associated media information
   *
   * @param mediaId ZORA NFT id to retrieve information of
   * @returns Promise<NFTDataType> On-chain NFT data
   */
  async loadZNFTData(
    mediaId: string,
    currencyInfos: CurrencyLookupType = {}
  ): Promise<NFTDataType> {
    const chainInfo = await this.loaders.mediaLoader.load(mediaId);
    if (!chainInfo) {
      throw new RequestError('Cannot fetch chain information');
    }
    return {
      ...chainInfo,
      pricing: addAuctionInformation(chainInfo.pricing, currencyInfos),
    };
  }

  async loadNFTData(
    contractAddress: string,
    tokenId: string,
    auctionData?: ReserveAuctionPartialFragment,
    currencyData?: CurrencyLookupType
  ) {
    const contractAndToken = `${contractAddress.toLowerCase()}:${tokenId}`;
    const nftInfo = await this.loaders.genericNFTLoader.load(contractAndToken);
    if (!auctionData) {
      auctionData = await this.loadAuctionInfo(contractAddress, tokenId);
    }
    if (!nftInfo) {
      throw new RequestError('Cannot fetch NFT information');
    }
    return transformOpenseaResponse(nftInfo, auctionData, currencyData);
  }

  async loadNFTDataUntransformed(contractAddress: string, tokenId: string) {
    const contractAndToken = `${contractAddress.toLowerCase()}:${tokenId}`;
    const nftInfo = await this.loaders.genericNFTLoader.load(contractAndToken);
    if (!nftInfo) {
      throw new RequestError('Cannot fetch NFT information');
    }
    return nftInfo;
  }

  async loadZNFTDataUntransformed(mediaId: string) {
    return await this.loaders.mediaLoader.load(mediaId);
  }

  async loadAuctionInfo(tokenContract: string, tokenId: string) {
    return await this.loaders.auctionInfoLoader.load(
      [tokenContract.toLowerCase(), tokenId].join(':')
    );
  }

  /**
   *
   * @param address string address of username to load
   * @returns
   */
  async loadUsername(address: string) {
    return this.loaders.usernameLoader.load(address.toLowerCase());
  }

  /**
   * Fetch function to retrieve Graph data for matching curated auctions
   * This function is not cached
   *
   * @function fetchReserveAuctions
   * @private
   * @param curatorIds list of Zora NFT IDs to fetch from the graph datastore
   * @returns mapped transformed list of curated auction results
   */
  public async fetchReserveAuctions(
    curatorIds: readonly string[],
    isApproved: boolean | null = null,
    first: number = 1000,
    skip: number = 0
  ) {
    const fetchWithTimeout = new FetchWithTimeout(this.timeouts.Graph);
    const client = new GraphQLClient(THEGRAPH_API_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });
    let query = GET_ALL_AUCTIONS;
    if (curatorIds.length) {
      query = GET_AUCTION_BY_CURATOR;
    }
    const response = (await client.request(query, {
      curators: curatorIds.length ? curatorIds : undefined,
      first: first,
      skip: skip,
      approved: isApproved === null ? [true, false] : [isApproved],
    })) as GetAllAuctionsQuery;
    return response.reserveAuctions;
  }

  private async fetchAuctionNFTInfo(tokenAndAddresses: readonly string[]) {
    // TODO(iain): Allow batching w/ graphql subgraph update
    if (tokenAndAddresses.length !== 1) {
      throw new Error('can only fetch one now');
    }

    const [tokenContract, tokenId] = tokenAndAddresses[0].split(':');

    const fetchWithTimeout = new FetchWithTimeout(this.timeouts.Graph);
    const client = new GraphQLClient(THEGRAPH_API_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });
    const response = (await client.request(GET_AUCTION_BY_MEDIA, {
      tokenContract,
      tokenId,
    })) as GetAuctionByMediaQuery;
    if (!response.reserveAuctions) {
      throw new RequestError('Missing auction in reponse');
    }
    return [response.reserveAuctions[0]];
  }

  /**
   * Internal fetch current auctions by curator
   *
   * @function fetchMediaGraph
   * @private
   * @param mediaIds list of Zora NFT IDs to fetch from the graph datastore
   * @returns mapped transformed list of zora NFT ID data
   */
  private async fetchMediaGraph(mediaIds: readonly string[]) {
    const fetchWithTimeout = new FetchWithTimeout(this.timeouts.Graph);
    const client = new GraphQLClient(THEGRAPH_API_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });
    const response = (await client.request(GET_MEDIA_QUERY, {
      ids_id: mediaIds,
    })) as GetMediaAndAuctionsQuery;
    return mediaIds.map((key) => transformMediaForKey(response, key, this.networkId));
  }

  /**
   * Fetches generic NFT information
   *
   * @param nftAddresses list of addresses in a 0xcontractid:tokenid format
   * @returns
   */
  private async fetchGenericNFT(nftAddresses: readonly string[]) {
    const fetchWithTimeout = new FetchWithTimeout(this.timeouts.OpenSea);
    const apiBase = OPENSEA_API_URL_BY_NETWORK[this.networkId];
    const urlParams: string[] = [];
    nftAddresses
      .map((address) => address.split(':'))
      .forEach(([address, tokenId]) => {
        urlParams.push(`token_ids=${tokenId}&asset_contract_addresses=${address}`);
      });
    const response = await fetchWithTimeout.fetch(
      `${apiBase}assets?${urlParams.join('&')}&order_direction=desc&offset=0&limit=100`
    );
    const responseJson = await response.json();

    return nftAddresses.map((nftAddress) =>
      transformGenericNFTForKey(responseJson.assets, nftAddress)
    );
  }

  /**
   * Fetches zora username information from blockchain addresses for displaying user
   * information.
   *
   * @param addresses string list of addresses to map to Zora usernames
   * @returns list of UsernameResponseType - all fields are optional except address
   */
  private async fetchZoraUsernames(addresses: readonly string[]) {
    const fetchWithTimeout = new FetchWithTimeout(this.timeouts.Zora);
    const response = await fetchWithTimeout.fetch(ZORA_USERNAME_API_URL, {
      method: 'POST',
      type: 'cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ addresses }),
    });
    const usernames = (await response.json()) as UsernameResponseType[];
    return addresses.map((address) => {
      const foundUsername = usernames.find(
        (username) => username.address.toLowerCase() === address
      );
      if (foundUsername) {
        return foundUsername;
      }
      return { address };
    });
  }

  /**
   * Internal fetch function to retrieve currency information from TheGraph
   *
   * @function fetchCurrenciesGraph
   * @private
   * @param currencyContracts list of Ethereum addresses of currency contract data to retrieve
   * @returns mapped transformed list of ETH currency mapping data
   */
  private async fetchCurrenciesGraph(currencyContracts: readonly string[]) {
    const fetchWithTimeout = new FetchWithTimeout(this.timeouts.Graph);
    const client = new GraphQLClient(THEGRAPH_UNISWAP_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });
    const currencies = (await client.request(GET_TOKEN_VALUES_QUERY, {
      currencyContracts,
    })) as GetTokenPricesQuery;

    return currencyContracts.map((key) => transformCurrencyForKey(currencies, key));
  }

  /**
   * Fetch method to query metadata from IPFS. Not cached
   *
   * @function fetchIPFSMetadataCached
   * @public
   * @param url Metadata Source
   * @returns IPFS Metadata Fetch
   * @throws RequestError
   */
  public async fetchIPFSMetadata(url: string) {
    // TODO(iain): Properly parse metadata from `ourzora/media-metadata-schemas
    const request = await new FetchWithTimeout(
      this.timeouts.IPFS,
      'application/json'
    ).fetch(url);
    try {
      return await request.json();
    } catch (e) {
      throw new RequestError('Cannot read JSON metadata from IPFS', e);
    }
  }
}
