import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';
import { GET_TOKEN_VALUES_QUERY } from './uniswap';
import { GetTokenPricesQuery } from './uniswap-types';
import { ChainCurrencyType, NULL_ETH_CURRENCY_ID } from './CurrencyInterface';
import { CurrencyInterface, CurrencyLookupType } from './CurrencyInterface';
import { RequestError } from '../../fetcher/RequestError';
import { NetworkIDs } from '../../constants/networks';
import { THEGRAPH_UNISWAP_URL_BY_NETWORK } from '../../constants/urls';
import { FetchWithTimeout } from '../../fetcher/FetchWithTimeout';

export function transformCurrencyForKey(
  result: GetTokenPricesQuery,
  key: string
): ChainCurrencyType {
  // Special case ETH
  if (key === NULL_ETH_CURRENCY_ID) {
    return {
      ethToUsd: result.bundle?.ethPrice,
      token: {
        symbol: 'ETH',
        name: 'Ethereum',
        id: NULL_ETH_CURRENCY_ID,
        decimals: 18,
        derivedETH: 1,
      },
    };
  }
  const currency = result.tokens.find((token) => token.id === key);
  if (!currency) {
    throw new RequestError('No currency in response');
  }
  return {
    ethToUsd: result.bundle?.ethPrice,
    token: currency,
  };
}

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
