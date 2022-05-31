import type { NetworkIDs } from '../constants/networks';
import { TimeoutsLookupType, DEFAULT_NETWORK_TIMEOUTS_MS } from '../constants/timeouts';

import { CurrencyDataSourceUniswap } from '../backends/currency/CurrencyDataSourceUniswap';
import { ZoraUserDataSource } from '../backends/zora-user/ZoraUserDataSource';
import { ENSDataSource } from '../backends/ens-reverse/ENSDataSource';
import {
  CurrencyInterface,
  CurrencyLookupType,
} from '../backends/currency/CurrencyInterface';
import { ZoraUserInterface } from '../backends/zora-user/ZoraUserInterface';
import { ENSInterface } from '../backends/ens-reverse/ENSInterface';
import { GenericMediaData } from '../backends/generic-media/GenericMediaData';
import {
  GenericMediaInterface,
  MediaContentType,
} from '../backends/generic-media/GenericMediaInterface';

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

  currencyFetcher: CurrencyInterface;
  usernameFetcher: ZoraUserInterface;
  ensFetcher: ENSInterface;
  genericMediaFetcher: GenericMediaInterface;

  constructor(network: NetworkIDs) {
    this.timeouts = DEFAULT_NETWORK_TIMEOUTS_MS;
    this.networkId = network;

    this.currencyFetcher = new CurrencyDataSourceUniswap(
      this.networkId,
      this.timeouts.Graph
    );
    this.usernameFetcher = new ZoraUserDataSource(this.timeouts.Zora);
    this.ensFetcher = new ENSDataSource(this.networkId, this.timeouts.Rpc);
    this.genericMediaFetcher = new GenericMediaData(this.timeouts.IPFS);
  }

  /**
   * Gets information of currencies and trading prices from uniswap
   * @param currencies list of currency contract ids on ethereum
   * @returns Promise<CurrencyLookupType>
   */
  loadCurrencies = async (currencies: string[]): Promise<CurrencyLookupType> =>
    this.currencyFetcher.loadCurrencies(currencies);

  /**
   * Fetch NFT content or retun URI if content shouild not be fetched
   * @param url NFT Content URL
   * @param contentType string mime type to fetch
   * @returns Promise<MediaContentType> Media content information or URL
   */
  fetchContent = (url: string, contentType: string): Promise<MediaContentType> =>
    this.genericMediaFetcher.fetchContent(url, contentType);

  /**
   * Fetch Content MIME type from content URI
   *
   * @param url IPFS Content URI
   * @returns mime type as a string
   * @throws RequestError
   */
  fetchContentMimeType = (url: string): Promise<string> =>
    this.genericMediaFetcher.fetchContentMimeType(url);

  /**
   *
   * @param address string address of username to load
   * @returns
   */
  async loadUsername(address: string) {
    return this.usernameFetcher.loadProfile(address);
  }

  async loadEnsName(address: string) {
    return (await this.ensFetcher.loadEnsFromAddresses([address]))[address];
  }

  /**
   * Fetches zora username information from blockchain addresses for displaying user
   * information.
   *
   * @param addresses string list of addresses to map to Zora usernames
   * @returns list of UsernameResponseType - all fields are optional except address
   */
  async fetchZoraUsernames(addresses: readonly string[]) {
    return this.usernameFetcher.loadProfiles(addresses);
  }

  /**
   * Internal fetch function to retrieve currency information from TheGraph
   *
   * @function fetchCurrenciesGraph
   * @private
   * @param currencyContracts list of Ethereum addresses of currency contract data to retrieve
   * @returns mapped transformed list of ETH currency mapping data
   */
  async fetchCurrenciesGraph(currencyContracts: readonly string[]) {
    return this.currencyFetcher.loadCurrencies(currencyContracts);
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
  public fetchIPFSMetadata = (url: string) => this.genericMediaFetcher.fetchMetadata(url);
}
