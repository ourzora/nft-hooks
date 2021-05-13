import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';
import { Validator } from '@zoralabs/media-metadata-schemas';

import { RequestError } from './RequestError';
import {
  THEGRAPH_API_URL_BY_NETWORK,
  THEGRAPH_UNISWAP_URL_BY_NETWORK,
} from '../constants/urls';
import type { NetworkIDs } from '../constants/networks';
import { GET_MEDIA_QUERY } from '../graph-queries/zora';
import type { GetMediaAndAuctionsQuery } from '../graph-queries/zora-types';
import { GET_TOKEN_VALUES_QUERY } from '../graph-queries/uniswap';
import type { GetTokenPricesQuery } from '../graph-queries/uniswap-types';
import { TimeoutsLookupType, DEFAULT_NETWORK_TIMEOUTS_MS } from '../constants/timeouts';
import {
  ChainCurrencyType,
  NFTDataType,
  MediaContentType,
  MetadataResultType,
  NFTMediaDataType,
} from './FetchResultTypes';
import {
  transformCurrencyForKey,
  transformMediaForKey,
  addAuctionInformation,
} from './TransformFetchResults';
import { FetchWithTimeout } from './FetchWithTimeout';
import { CurrencyLookupType } from './AuctionInfoTypes';

/**
 * Internal agent for NFT Hooks to fetch NFT information.
 * Can be used directly for interaction with non-react web frameworks or server frameworks.
 * Uses a cached promise-based API.
 * Fetches from IPFS providers and thegraph.
 */
export class MediaFetchAgent {
  // Network ID used to set fetch URLs
  readonly networkId: NetworkIDs;

  // Used to store the given graphEndpoint for each network id.
  readonly graphEndpoint: string;

  private timeouts: TimeoutsLookupType;

  // Batching content loaders
  private loaders: {
    // fetches NFT data from Zora subgraph, cached and batched
    mediaLoader: DataLoader<string, NFTMediaDataType>;
    // fetches eth currency data from Uniswap subgraph, cached and batched
    currencyLoader: DataLoader<string, ChainCurrencyType>;
    // fetches NFT ipfs metadata from url, not batched but cached
    metadataLoader: DataLoader<string, any>;
  };

  constructor(network: NetworkIDs) {
    // TODO(iain): Make configurable
    this.timeouts = DEFAULT_NETWORK_TIMEOUTS_MS;
    this.networkId = network;
    this.graphEndpoint = THEGRAPH_API_URL_BY_NETWORK[network];
    this.loaders = {
      mediaLoader: new DataLoader((keys) => this.fetchMediaGraph(keys)),
      currencyLoader: new DataLoader((keys) => this.fetchCurrenciesGraph(keys)),
      metadataLoader: new DataLoader(
        async (keys) => {
          if (keys.length !== 1) {
            throw new Error('Wrong keys!');
          }
          const key = keys[0];
          return [await this.fetchIPFSMetadataCached(key)];
        },
        { maxBatchSize: 1 }
      ),
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
   * Cached, non-batched function to retrieve NFT media information from a JSON blob at the given url
   * @param url URL fo Metadata to fetch
   * @returns Metadata Information
   */
  async loadMetadata(url: string): Promise<MetadataResultType> {
    const metadata = await this.loaders.metadataLoader.load(url);

    let valid = false;
    try {
      const validator = new Validator(metadata.version);
      valid = validator.validate(metadata);
    } catch (e) {
      // skip validator errors
    }
    return { metadata, valid };
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
  async loadNFTData(
    mediaId: string,
    currencyInfos: CurrencyLookupType = {}
  ): Promise<NFTDataType> {
    const chainInfo = await this.loaders.mediaLoader.load(mediaId);
    if (!chainInfo) {
      throw new RequestError('Cannot fetch chain information');
    }
    return addAuctionInformation(chainInfo, currencyInfos);
  }

  /**
   * Internal fetch function to retrieve Graph data for Zora NFT IDs
   *
   * @function fetchMediaGraph
   * @private
   * @param mediaIds list of Zora NFT IDs to fetch from the graph datastore
   * @returns mapped transformed list of zora NFT ID data
   */
  private async fetchMediaGraph(mediaIds: readonly string[]) {
    const fetchWithTimeout = new FetchWithTimeout(this.timeouts.Graph);
    const client = new GraphQLClient(this.graphEndpoint, {
      fetch: fetchWithTimeout.fetch,
    });
    const response = (await client.request(GET_MEDIA_QUERY, {
      ids_id: mediaIds,
      ids_bigint: mediaIds,
    })) as GetMediaAndAuctionsQuery;
    return mediaIds.map((key) => transformMediaForKey(response, key));
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
   * Internal fetch method to query metadata from IPFS
   *
   * @function fetchIPFSMetadataCached
   * @private
   * @param url Metadata Source
   * @returns IPFS Metadata Fetch
   * @throws RequestError
   */
  private async fetchIPFSMetadataCached(url: string) {
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
