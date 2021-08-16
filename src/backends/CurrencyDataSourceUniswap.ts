import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';
import { NetworkIDs } from '../constants/networks';
import { THEGRAPH_UNISWAP_URL_BY_NETWORK } from '../constants/urls';
import { FetchWithTimeout } from '../fetcher/FetchWithTimeout';
import { transformCurrencyForKey } from '../fetcher/TransformFetchResults';
import { GET_TOKEN_VALUES_QUERY } from '../graph-queries/uniswap';
import { GetTokenPricesQuery } from '../graph-queries/uniswap-types';
import { ChainCurrencyType } from '../fetcher/FetchResultTypes';
import { CurrencyInterface, CurrencyLookupType } from './CurrencyInterface';

export class CurrencyDataSourceUniswap implements CurrencyInterface {
  currencyLoader: DataLoader<string, ChainCurrencyType>;
  endpoint: string;
  timeout: number;
  constructor(networkId: NetworkIDs, timeout = 10) {
    this.currencyLoader = new DataLoader(this.fetchCurrenciesGraph);
    this.endpoint = THEGRAPH_UNISWAP_URL_BY_NETWORK[networkId];
    this.timeout = timeout;
  }

  /**
   * Gets information of currencies and trading prices from uniswap
   * @param currencies list of currency contract ids on ethereum
   * @returns Promise<CurrencyLookupType>
   */
  async loadCurrencies(currencies: string[]): Promise<CurrencyLookupType> {
    const results = await this.currencyLoader.loadMany(currencies);
    return results.reduce((last: CurrencyLookupType, result) => {
      if (!(result instanceof Error)) {
        last[result.token.id] = result;
      }
      return last;
    }, {});
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
    const fetchWithTimeout = new FetchWithTimeout(this.timeout);
    const client = new GraphQLClient(this.endpoint, {
      fetch: fetchWithTimeout.fetch,
    });
    const currencies = (await client.request(GET_TOKEN_VALUES_QUERY, {
      currencyContracts,
    })) as GetTokenPricesQuery;

    return currencyContracts.map((key) => transformCurrencyForKey(currencies, key));
  }
}
