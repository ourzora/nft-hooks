import { TokenShortFragment } from './uniswap-types';

type TokenInfo = {
  id: string;
  symbol: string;
  name: string;
  decimals?: number;
  derivedETH?: string;
};

export type CurrencyLookupType = {
  [currencyId: string]: {
    ethToUsd: string;
    token: TokenInfo;
  };
};

export type ChainCurrencyType = {
  ethToUsd: string;
  token: TokenShortFragment;
};

export const NULL_ETH_CURRENCY_ID = '0x0000000000000000000000000000000000000000';

export interface CurrencyInterface {
  loadCurrencies(currencies: readonly string[]): Promise<CurrencyLookupType>;
}
