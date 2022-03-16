export enum MarketType {
  FIXED_PRICE,
  ANY_MARKET,
  AUCTION,
  SOLD,
}

export enum SortDirection {
  ASC,
  DESC,
}

export enum SortField {
  MINTED,
  ACTIVE,
  PRICE,
  TOKEN_ID,
}

export type QuerySort = {
  direction: SortDirection;
  field: SortField;
};

export type NFTQuery = {
  query: {
    owners?: string[];
    collections?: string[];
    minters?: string[];
    activeMarkets?: MarketType[];
  };
  sort?: QuerySort[];
  pagination?: {
    limit: number;
    offset: number;
  };
  additional?: any,
};
