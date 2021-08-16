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

export interface CurrencyInterface {
  loadCurrencies(currencies: string[]): Promise<CurrencyLookupType>;
}
