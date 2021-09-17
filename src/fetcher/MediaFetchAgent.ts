import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';
import { getAddress } from '@ethersproject/address';

import { RequestError } from './RequestError';
import {
  ENS_GRAPH_URL_BY_NETWORK,
  OPENSEA_API_URL_BY_NETWORK,
  THEGRAPH_API_URL_BY_NETWORK,
  THEGRAPH_UNISWAP_URL_BY_NETWORK,
  ZORA_INDEXER_URL_BY_NETWORK,
  ZORA_USERNAME_API_URL,
} from '../constants/urls';
import type { NetworkIDs } from '../constants/networks';
import {
  GET_ALL_AUCTIONS,
  GET_AUCTION_BY_CURATOR,
  GET_AUCTION_BY_MEDIA,
  GET_MEDIAS_QUERY,
} from '../graph-queries/zora-graph';
import type {
  GetMediaAndAuctionsQuery,
  GetAllAuctionsQuery,
  GetAuctionByMediaQuery,
  ReserveAuctionPartialFragment,
} from '../graph-queries/zora-graph-types';
import {
  IndexerAuctionWithTokenFragment,
  IndexerTokenPartFragment,
  IndexerTokenWithAuctionFragment,
} from '../graph-queries/zora-indexer-types';
import { GET_TOKEN_VALUES_QUERY } from '../graph-queries/uniswap';
import type { GetTokenPricesQuery } from '../graph-queries/uniswap-types';
import { TimeoutsLookupType, DEFAULT_NETWORK_TIMEOUTS_MS } from '../constants/timeouts';
import {
  ChainCurrencyType,
  FetchGroupTypes,
  MediaContentType,
  UsernameResponseType,
} from './FetchResultTypes';
import {
  transformCurrencyForKey,
  transformMediaForKey,
  addAuctionInformation,
  transformMediaItem,
  NULL_ETH_CURRENCY_ID,
} from './TransformFetchResults';
import { FetchWithTimeout } from './FetchWithTimeout';
import { CurrencyLookupType, NFTDataType, ZNFTMediaDataType } from './AuctionInfoTypes';
import {
  OpenseaResponse,
  transformGenericNFTForKey,
  transformOpenseaResponse,
} from './OpenseaUtils';
import {
  ACTIVE_AUCTIONS_QUERY,
  BY_IDS as INDEXER_BY_IDS_QUERY,
  BY_OWNER,
  TOKENS_WITHOUT_AUCTIONS,
} from '../graph-queries/zora-indexer';
import { FetchZoraIndexerListCollectionType } from './ZoraIndexerTypes';
import { RESOLVE_ENS_FROM_ADDRESS_QUERY } from '../graph-queries/ens-graph';
import {
  DomainResolvedPartFragment,
  ResolveNamesQuery,
} from '../graph-queries/ens-graph-types';
import { ArgumentsError, NotFoundError } from './ErrorUtils';

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
    // zoraNFTIndexer uses zora indexer
    zoraNFTIndexerLoader: DataLoader<string, IndexerTokenWithAuctionFragment>;
    // auctionInfoLoader fetches auction info for non-zora NFTs
    auctionInfoLoader: DataLoader<string, ReserveAuctionPartialFragment>;
    // ensLoader
    ensLoader: DataLoader<string, DomainResolvedPartFragment>;
  };

  constructor(network: NetworkIDs) {
    this.timeouts = DEFAULT_NETWORK_TIMEOUTS_MS;
    this.networkId = network;

    this.loaders = {
      mediaLoader: new DataLoader((keys) => this.fetchMediaGraph(keys), { cache: false }),
      currencyLoader: new DataLoader((keys) => this.fetchCurrenciesGraph(keys), {
        cache: false,
      }),
      zoraNFTIndexerLoader: new DataLoader((keys) => this.fetchZoraNFTIndexerNFTs(keys)),
      usernameLoader: new DataLoader((keys) => this.fetchZoraUsernames(keys)),
      genericNFTLoader: new DataLoader((keys) => this.fetchGenericNFT(keys), {
        cache: false,
        maxBatchSize: 30,
      }),
      ensLoader: new DataLoader((keys) => this.loadEnsBatch(keys), { maxBatchSize: 400 }),
      auctionInfoLoader: new DataLoader((keys) => this.fetchAuctionNFTInfo(keys), {
        cache: false,
        maxBatchSize: 300,
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
      } catch (e: any) {
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
   * Un-batched fetch function to fetch a group of ZNFT data
   *
   * @param ids list of ids to query
   * @param type type of ids: creator, id (of media), owner
   * @returns
   */
  async fetchZNFTGroupData(ids: string[], type: FetchGroupTypes) {
    const fetchWithTimeout = new FetchWithTimeout(this.timeouts.Graph);
    const client = new GraphQLClient(THEGRAPH_API_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });

    const getQuery = () => {
      let base: Record<string, string[]> = {
        id_ids: [],
        creator_ids: [],
        owner_ids: [],
      };
      const idsNormalized = ids.map((id) => id.toLowerCase());
      switch (type) {
        case 'id':
          base.id_ids = idsNormalized;
          break;
        case 'creator':
          base.creator_ids = idsNormalized;
          break;
        case 'owner':
          base.owner_ids = idsNormalized;
          break;
      }
      return base;
    };

    const response = (await client.request(
      GET_MEDIAS_QUERY,
      getQuery
    )) as GetMediaAndAuctionsQuery;
    const medias = [...response.creator, ...response.owner, ...response.id];
    return medias.map((media) => transformMediaItem(media, this.networkId));
  }

  async loadEnsBatch(addresses: readonly string[]) {
    const fetchWithTimeout = new FetchWithTimeout(this.timeouts.Graph);
    const client = new GraphQLClient(ENS_GRAPH_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });


    const ensResponse = (await client.request(RESOLVE_ENS_FROM_ADDRESS_QUERY, {
      addresses: addresses.map((address) => address.toLowerCase()),
    })) as ResolveNamesQuery;
    return addresses.map(
      (address) =>
        ensResponse.domains.find(
          (domain) => domain.resolvedAddress?.id.toLowerCase() === address.toLowerCase()
        ) || new Error('Not found')
    );
  }

  // Alpha: uses zora indexer
  // format CONTRACT_ID-TOKEN_ID
  async fetchZoraNFTIndexerNFTs(keys: readonly string[]) {
    const fetchWithTimeout = new FetchWithTimeout(this.timeouts.ZoraIndexer);
    const client = new GraphQLClient(ZORA_INDEXER_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });

    const response = await client.request(INDEXER_BY_IDS_QUERY, {
      ids: keys,
    });

    return keys.map(
      (key: string) =>
        response.Token.find(
          (token: IndexerTokenWithAuctionFragment) => token.id === key
        ) || new NotFoundError('Did not find token')
    );
  }

  async loadZoraNFTIndexerNFTUntransformed(contractAddress: string, tokenId: string) {
    return this.loaders.zoraNFTIndexerLoader.load(
      `${getAddress(contractAddress)}-${tokenId}`
    );
  }

  async loadZoraNFTIndexerNFTsUntransformed(tokenAndIds: readonly string[]) {
    return this.loaders.zoraNFTIndexerLoader.loadMany(tokenAndIds);
  }

  /**
   * Un-batched fetch function to fetch a group of NFT data from the zora indexer
   *
   * @param collectionAddresses list of collections to include
   * @param curatorAddress curator to query
   * @param approved boolean if the auction is approved (null for approved and un-approved auctions)
   */
  async fetchZoraIndexerGroupData({
    collectionAddresses = [],
    curatorAddress,
    approved = null,
    onlyAuctions = false,
    limit = 200,
    offset = 0,
  }: FetchZoraIndexerListCollectionType): Promise<IndexerTokenWithAuctionFragment[]> {
    if (!collectionAddresses && !curatorAddress) {
      throw new ArgumentsError('Needs to have at least one curator or collector');
    }
    if (!onlyAuctions && approved !== null) {
      throw new ArgumentsError(
        'approved=true or approved=false and onlyAuctions=false cannot be set at the same time for fetchZoraIndexerGroupData'
      );
    }
    const fetchWithTimeout = new FetchWithTimeout(this.timeouts.ZoraIndexer);
    const client = new GraphQLClient(ZORA_INDEXER_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });

    const addresses = collectionAddresses.map((address) => getAddress(address));

    const approved_exp = approved === null ? {} : { _eq: approved };

    const auctionsResponse = (
      await client.request(ACTIVE_AUCTIONS_QUERY, {
        addresses,
        curators: curatorAddress ? [getAddress(curatorAddress)] : [],
        approved_exp,
        offset,
        limit,
      })
    ).Auction as IndexerAuctionWithTokenFragment[];
    let tokenResponse: IndexerTokenPartFragment[] = [];
    if (!onlyAuctions) {
      tokenResponse = (
        await client.request(TOKENS_WITHOUT_AUCTIONS, {
          addresses,
          limit,
        })
      ).Token as IndexerTokenPartFragment[];
    }

    // @ts-ignore
    tokenResponse = [
      ...tokenResponse,
      ...auctionsResponse.map(({ token, ...auctionResponse }) => ({
        ...token,
        auctions: [auctionResponse],
      })),
    ];
    return tokenResponse as IndexerTokenWithAuctionFragment[];
  }

  /**
   * Un-batched fetch function to fetch a group of NFT data from the zora indexer
   *
   * @param collectionAddresses list of addresses for collection
   * @param userAddress address of user
   * @param type type of ids: creator, id (of media), owner
   * @returns
   */
  async fetchZoraIndexerUserOwnedNFTs({
    collectionAddresses,
    userAddress,
    offset = 0,
    limit = 250,
  }: {
    collectionAddresses: string[];
    userAddress: string;
    offset?: number;
    limit?: number;
  }) {
    const fetchWithTimeout = new FetchWithTimeout(this.timeouts.ZoraIndexer);
    const client = new GraphQLClient(ZORA_INDEXER_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });

    const response = await client.request(BY_OWNER, {
      addresses: collectionAddresses.map((address) => getAddress(address)),
      owner: getAddress(userAddress),
      offset,
      limit,
    });
    return response.Token as IndexerTokenWithAuctionFragment[];
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
      try {
        auctionData = await this.loadAuctionInfo(contractAddress, tokenId);
      } catch (err) {
        if (!(err instanceof NotFoundError)) {
          // Log any not-found error
          console.error(err);
        }
      }
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
      [tokenContract.toLowerCase(), tokenId].join('-')
    );
  }

  // use dash between lowercase contract id and token id
  async loadAuctionInfos(tokenContractAndIds: readonly string[]) {
    return await this.loaders.auctionInfoLoader.loadMany(tokenContractAndIds);
  }

  /**
   *
   * @param address string address of username to load
   * @returns
   */
  async loadUsername(address: string) {
    return this.loaders.usernameLoader.load(address.toLowerCase());
  }

  async loadEnsName(address: string) {
    return this.loaders.ensLoader.load(address.toLowerCase());
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
    const fetchWithTimeout = new FetchWithTimeout(this.timeouts.Graph);
    const client = new GraphQLClient(THEGRAPH_API_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });
    const response = (await client.request(GET_AUCTION_BY_MEDIA, {
      tokens: tokenAndAddresses.map((tokenAndAddress) => tokenAndAddress.toLowerCase()),
    })) as GetAuctionByMediaQuery;
    if (!response.reserveAuctions) {
      throw new RequestError('Missing auction in reponse');
    }
    return tokenAndAddresses.map(
      (tokenAndAddress: string) =>
        response.reserveAuctions.find((auction) => auction.token === tokenAndAddress) ||
        new NotFoundError('Missing Auction')
    );
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
    const response = (await client.request(GET_MEDIAS_QUERY, {
      id_ids: mediaIds,
      creator_ids: [],
      owner_ids: [],
    })) as GetMediaAndAuctionsQuery;
    const ids = mediaIds.map((key) =>
      transformMediaForKey(response, key, this.networkId)
    );
    console.log({ ids });
    return ids;
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
      `${apiBase}assets?${urlParams.join('&')}&order_direction=desc&offset=0&limit=50`
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
      currencyContracts: currencyContracts.filter(
        (contract) => contract !== NULL_ETH_CURRENCY_ID
      ),
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
