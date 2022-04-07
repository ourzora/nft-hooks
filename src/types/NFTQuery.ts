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
  ACTIVE,
  ANY_PRICE,
  AUCTION_PRICE,
  FIXED_PRICE,
  MINTED,
  TOKEN_ID,
}

export type QuerySort = {
  direction: SortDirection;
  field: SortField;
};

export enum ViewType {
  SUMMARY,
  FULL,
};

export type NFTQuery = {
  query: {
    owners?: string[];
    collections?: string[];
    minters?: string[];
    activeMarkets?: MarketType[];
  };
  view: ViewType,
  sort?: QuerySort[];
  pagination?: {
    limit: number;
    offset: number;
  };
  additional?: any,
};
