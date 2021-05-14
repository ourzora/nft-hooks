export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};




export type Ask = {
  __typename?: 'Ask';
  /** <tokenId>-<ownerAddress> */
  id: Scalars['ID'];
  /** The Media associated with the Ask */
  media: Media;
  /** The Currency of the Ask */
  currency: Currency;
  /** The amount of Currency of the Ask */
  amount: Scalars['BigInt'];
  /** The owner of the Ask */
  owner: User;
  /** The timestamp of the block the Ask was created in */
  createdAtTimestamp: Scalars['BigInt'];
  /** The number of the block the Ask created in */
  createdAtBlockNumber: Scalars['BigInt'];
};

export type Ask_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  media?: Maybe<Scalars['String']>;
  media_not?: Maybe<Scalars['String']>;
  media_gt?: Maybe<Scalars['String']>;
  media_lt?: Maybe<Scalars['String']>;
  media_gte?: Maybe<Scalars['String']>;
  media_lte?: Maybe<Scalars['String']>;
  media_in?: Maybe<Array<Scalars['String']>>;
  media_not_in?: Maybe<Array<Scalars['String']>>;
  media_contains?: Maybe<Scalars['String']>;
  media_not_contains?: Maybe<Scalars['String']>;
  media_starts_with?: Maybe<Scalars['String']>;
  media_not_starts_with?: Maybe<Scalars['String']>;
  media_ends_with?: Maybe<Scalars['String']>;
  media_not_ends_with?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  currency_not?: Maybe<Scalars['String']>;
  currency_gt?: Maybe<Scalars['String']>;
  currency_lt?: Maybe<Scalars['String']>;
  currency_gte?: Maybe<Scalars['String']>;
  currency_lte?: Maybe<Scalars['String']>;
  currency_in?: Maybe<Array<Scalars['String']>>;
  currency_not_in?: Maybe<Array<Scalars['String']>>;
  currency_contains?: Maybe<Scalars['String']>;
  currency_not_contains?: Maybe<Scalars['String']>;
  currency_starts_with?: Maybe<Scalars['String']>;
  currency_not_starts_with?: Maybe<Scalars['String']>;
  currency_ends_with?: Maybe<Scalars['String']>;
  currency_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  owner?: Maybe<Scalars['String']>;
  owner_not?: Maybe<Scalars['String']>;
  owner_gt?: Maybe<Scalars['String']>;
  owner_lt?: Maybe<Scalars['String']>;
  owner_gte?: Maybe<Scalars['String']>;
  owner_lte?: Maybe<Scalars['String']>;
  owner_in?: Maybe<Array<Scalars['String']>>;
  owner_not_in?: Maybe<Array<Scalars['String']>>;
  owner_contains?: Maybe<Scalars['String']>;
  owner_not_contains?: Maybe<Scalars['String']>;
  owner_starts_with?: Maybe<Scalars['String']>;
  owner_not_starts_with?: Maybe<Scalars['String']>;
  owner_ends_with?: Maybe<Scalars['String']>;
  owner_not_ends_with?: Maybe<Scalars['String']>;
  createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Ask_OrderBy {
  Id = 'id',
  Media = 'media',
  Currency = 'currency',
  Amount = 'amount',
  Owner = 'owner',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber'
}

export type Bid = {
  __typename?: 'Bid';
  /** <token-id>-<bidderAddress> */
  id: Scalars['ID'];
  /** The Media associated with the Bid */
  media: Media;
  /** The Currency of the Bid */
  currency: Currency;
  /** The amount of Currency of the Bid */
  amount: Scalars['BigInt'];
  /** The sellOnShare of the Bid */
  sellOnShare: Scalars['BigInt'];
  /** The bidder of the Bid */
  bidder: User;
  /** The recipient of Media if the Bid is accepted */
  recipient: User;
  /** The timestamp of the block the Bid was created in */
  createdAtTimestamp: Scalars['BigInt'];
  /** The number of the block the Bid was created in */
  createdAtBlockNumber: Scalars['BigInt'];
};

export type Bid_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  media?: Maybe<Scalars['String']>;
  media_not?: Maybe<Scalars['String']>;
  media_gt?: Maybe<Scalars['String']>;
  media_lt?: Maybe<Scalars['String']>;
  media_gte?: Maybe<Scalars['String']>;
  media_lte?: Maybe<Scalars['String']>;
  media_in?: Maybe<Array<Scalars['String']>>;
  media_not_in?: Maybe<Array<Scalars['String']>>;
  media_contains?: Maybe<Scalars['String']>;
  media_not_contains?: Maybe<Scalars['String']>;
  media_starts_with?: Maybe<Scalars['String']>;
  media_not_starts_with?: Maybe<Scalars['String']>;
  media_ends_with?: Maybe<Scalars['String']>;
  media_not_ends_with?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  currency_not?: Maybe<Scalars['String']>;
  currency_gt?: Maybe<Scalars['String']>;
  currency_lt?: Maybe<Scalars['String']>;
  currency_gte?: Maybe<Scalars['String']>;
  currency_lte?: Maybe<Scalars['String']>;
  currency_in?: Maybe<Array<Scalars['String']>>;
  currency_not_in?: Maybe<Array<Scalars['String']>>;
  currency_contains?: Maybe<Scalars['String']>;
  currency_not_contains?: Maybe<Scalars['String']>;
  currency_starts_with?: Maybe<Scalars['String']>;
  currency_not_starts_with?: Maybe<Scalars['String']>;
  currency_ends_with?: Maybe<Scalars['String']>;
  currency_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  sellOnShare?: Maybe<Scalars['BigInt']>;
  sellOnShare_not?: Maybe<Scalars['BigInt']>;
  sellOnShare_gt?: Maybe<Scalars['BigInt']>;
  sellOnShare_lt?: Maybe<Scalars['BigInt']>;
  sellOnShare_gte?: Maybe<Scalars['BigInt']>;
  sellOnShare_lte?: Maybe<Scalars['BigInt']>;
  sellOnShare_in?: Maybe<Array<Scalars['BigInt']>>;
  sellOnShare_not_in?: Maybe<Array<Scalars['BigInt']>>;
  bidder?: Maybe<Scalars['String']>;
  bidder_not?: Maybe<Scalars['String']>;
  bidder_gt?: Maybe<Scalars['String']>;
  bidder_lt?: Maybe<Scalars['String']>;
  bidder_gte?: Maybe<Scalars['String']>;
  bidder_lte?: Maybe<Scalars['String']>;
  bidder_in?: Maybe<Array<Scalars['String']>>;
  bidder_not_in?: Maybe<Array<Scalars['String']>>;
  bidder_contains?: Maybe<Scalars['String']>;
  bidder_not_contains?: Maybe<Scalars['String']>;
  bidder_starts_with?: Maybe<Scalars['String']>;
  bidder_not_starts_with?: Maybe<Scalars['String']>;
  bidder_ends_with?: Maybe<Scalars['String']>;
  bidder_not_ends_with?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  recipient_not?: Maybe<Scalars['String']>;
  recipient_gt?: Maybe<Scalars['String']>;
  recipient_lt?: Maybe<Scalars['String']>;
  recipient_gte?: Maybe<Scalars['String']>;
  recipient_lte?: Maybe<Scalars['String']>;
  recipient_in?: Maybe<Array<Scalars['String']>>;
  recipient_not_in?: Maybe<Array<Scalars['String']>>;
  recipient_contains?: Maybe<Scalars['String']>;
  recipient_not_contains?: Maybe<Scalars['String']>;
  recipient_starts_with?: Maybe<Scalars['String']>;
  recipient_not_starts_with?: Maybe<Scalars['String']>;
  recipient_ends_with?: Maybe<Scalars['String']>;
  recipient_not_ends_with?: Maybe<Scalars['String']>;
  createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Bid_OrderBy {
  Id = 'id',
  Media = 'media',
  Currency = 'currency',
  Amount = 'amount',
  SellOnShare = 'sellOnShare',
  Bidder = 'bidder',
  Recipient = 'recipient',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber'
}



export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};


export type Currency = {
  __typename?: 'Currency';
  /** The address of the Currency */
  id: Scalars['ID'];
  /** The name of the Currency */
  name: Scalars['String'];
  /** The symbol of the Currency */
  symbol: Scalars['String'];
  /** The decimals of the Currency */
  decimals?: Maybe<Scalars['Int']>;
  /** Total Bid Liquidity of the Currency on all Zora Media */
  liquidity: Scalars['BigInt'];
  /** The active Bids denominated in the Currency */
  activeBids?: Maybe<Array<Bid>>;
  /** The active Asks denominated in the Currency */
  activeAsks?: Maybe<Array<Ask>>;
  /** The InactiveBids denominated in the Currency */
  inactiveBids?: Maybe<Array<InactiveBid>>;
  /** The InactiveAsks denominated in the Currency */
  inactiveAsks?: Maybe<Array<InactiveAsk>>;
};


export type CurrencyActiveBidsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bid_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bid_Filter>;
};


export type CurrencyActiveAsksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Ask_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Ask_Filter>;
};


export type CurrencyInactiveBidsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InactiveBid_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InactiveBid_Filter>;
};


export type CurrencyInactiveAsksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InactiveAsk_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InactiveAsk_Filter>;
};

export type Currency_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  decimals_not?: Maybe<Scalars['Int']>;
  decimals_gt?: Maybe<Scalars['Int']>;
  decimals_lt?: Maybe<Scalars['Int']>;
  decimals_gte?: Maybe<Scalars['Int']>;
  decimals_lte?: Maybe<Scalars['Int']>;
  decimals_in?: Maybe<Array<Scalars['Int']>>;
  decimals_not_in?: Maybe<Array<Scalars['Int']>>;
  liquidity?: Maybe<Scalars['BigInt']>;
  liquidity_not?: Maybe<Scalars['BigInt']>;
  liquidity_gt?: Maybe<Scalars['BigInt']>;
  liquidity_lt?: Maybe<Scalars['BigInt']>;
  liquidity_gte?: Maybe<Scalars['BigInt']>;
  liquidity_lte?: Maybe<Scalars['BigInt']>;
  liquidity_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Currency_OrderBy {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Decimals = 'decimals',
  Liquidity = 'liquidity',
  ActiveBids = 'activeBids',
  ActiveAsks = 'activeAsks',
  InactiveBids = 'inactiveBids',
  InactiveAsks = 'inactiveAsks'
}

export type InactiveAsk = {
  __typename?: 'InactiveAsk';
  /** <tokenId>-<transactionHash>-<logIndex> */
  id: Scalars['ID'];
  /** The Media associated with the InactiveAsk */
  media: Media;
  /** The why this Ask is Inactive */
  type: MarketEventType;
  /** The Currency of the InactiveAsk */
  currency: Currency;
  /** The amount of Currency of the InactiveAsk */
  amount: Scalars['BigInt'];
  /** The owner of the InactiveAsk */
  owner: User;
  /** The timestamp of the block the original Ask was created in */
  createdAtTimestamp: Scalars['BigInt'];
  /** The number of the block the original Ask was created in */
  createdAtBlockNumber: Scalars['BigInt'];
  /** The timestamp of the block the original Ask was inactivated in */
  inactivatedAtTimestamp: Scalars['BigInt'];
  /** The number of the block the original Ask was inactivated in */
  inactivatedAtBlockNumber: Scalars['BigInt'];
};

export type InactiveAsk_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  media?: Maybe<Scalars['String']>;
  media_not?: Maybe<Scalars['String']>;
  media_gt?: Maybe<Scalars['String']>;
  media_lt?: Maybe<Scalars['String']>;
  media_gte?: Maybe<Scalars['String']>;
  media_lte?: Maybe<Scalars['String']>;
  media_in?: Maybe<Array<Scalars['String']>>;
  media_not_in?: Maybe<Array<Scalars['String']>>;
  media_contains?: Maybe<Scalars['String']>;
  media_not_contains?: Maybe<Scalars['String']>;
  media_starts_with?: Maybe<Scalars['String']>;
  media_not_starts_with?: Maybe<Scalars['String']>;
  media_ends_with?: Maybe<Scalars['String']>;
  media_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<MarketEventType>;
  type_not?: Maybe<MarketEventType>;
  currency?: Maybe<Scalars['String']>;
  currency_not?: Maybe<Scalars['String']>;
  currency_gt?: Maybe<Scalars['String']>;
  currency_lt?: Maybe<Scalars['String']>;
  currency_gte?: Maybe<Scalars['String']>;
  currency_lte?: Maybe<Scalars['String']>;
  currency_in?: Maybe<Array<Scalars['String']>>;
  currency_not_in?: Maybe<Array<Scalars['String']>>;
  currency_contains?: Maybe<Scalars['String']>;
  currency_not_contains?: Maybe<Scalars['String']>;
  currency_starts_with?: Maybe<Scalars['String']>;
  currency_not_starts_with?: Maybe<Scalars['String']>;
  currency_ends_with?: Maybe<Scalars['String']>;
  currency_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  owner?: Maybe<Scalars['String']>;
  owner_not?: Maybe<Scalars['String']>;
  owner_gt?: Maybe<Scalars['String']>;
  owner_lt?: Maybe<Scalars['String']>;
  owner_gte?: Maybe<Scalars['String']>;
  owner_lte?: Maybe<Scalars['String']>;
  owner_in?: Maybe<Array<Scalars['String']>>;
  owner_not_in?: Maybe<Array<Scalars['String']>>;
  owner_contains?: Maybe<Scalars['String']>;
  owner_not_contains?: Maybe<Scalars['String']>;
  owner_starts_with?: Maybe<Scalars['String']>;
  owner_not_starts_with?: Maybe<Scalars['String']>;
  owner_ends_with?: Maybe<Scalars['String']>;
  owner_not_ends_with?: Maybe<Scalars['String']>;
  createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
  inactivatedAtTimestamp?: Maybe<Scalars['BigInt']>;
  inactivatedAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  inactivatedAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  inactivatedAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  inactivatedAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  inactivatedAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  inactivatedAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  inactivatedAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  inactivatedAtBlockNumber?: Maybe<Scalars['BigInt']>;
  inactivatedAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  inactivatedAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  inactivatedAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  inactivatedAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  inactivatedAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  inactivatedAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  inactivatedAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum InactiveAsk_OrderBy {
  Id = 'id',
  Media = 'media',
  Type = 'type',
  Currency = 'currency',
  Amount = 'amount',
  Owner = 'owner',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  InactivatedAtTimestamp = 'inactivatedAtTimestamp',
  InactivatedAtBlockNumber = 'inactivatedAtBlockNumber'
}

export type InactiveBid = {
  __typename?: 'InactiveBid';
  /** <tokenId>-<transactionHash>-<logIndex> */
  id: Scalars['ID'];
  /** The Media associated with the InactiveBid */
  media: Media;
  /** The reason why this Bid is Inactive */
  type: MarketEventType;
  /** The Currency of the InactiveBid */
  currency: Currency;
  /** The amount of Currency of the InactiveBid */
  amount: Scalars['BigInt'];
  /** The sellOnShare of the InactiveBid */
  sellOnShare: Scalars['BigInt'];
  /** The bidder of the InactiveBid */
  bidder: User;
  /** The recipient of the InactiveBid */
  recipient: User;
  /** The timestamp of the block the original Bid was created in */
  createdAtTimestamp: Scalars['BigInt'];
  /** The number of the block the original Bid was created in */
  createdAtBlockNumber: Scalars['BigInt'];
  /** The timestamp of the block the original Bid was inactivated in */
  inactivatedAtTimestamp: Scalars['BigInt'];
  /** The number of the block the original Bid was inactivated in */
  inactivatedAtBlockNumber: Scalars['BigInt'];
};

export type InactiveBid_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  media?: Maybe<Scalars['String']>;
  media_not?: Maybe<Scalars['String']>;
  media_gt?: Maybe<Scalars['String']>;
  media_lt?: Maybe<Scalars['String']>;
  media_gte?: Maybe<Scalars['String']>;
  media_lte?: Maybe<Scalars['String']>;
  media_in?: Maybe<Array<Scalars['String']>>;
  media_not_in?: Maybe<Array<Scalars['String']>>;
  media_contains?: Maybe<Scalars['String']>;
  media_not_contains?: Maybe<Scalars['String']>;
  media_starts_with?: Maybe<Scalars['String']>;
  media_not_starts_with?: Maybe<Scalars['String']>;
  media_ends_with?: Maybe<Scalars['String']>;
  media_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<MarketEventType>;
  type_not?: Maybe<MarketEventType>;
  currency?: Maybe<Scalars['String']>;
  currency_not?: Maybe<Scalars['String']>;
  currency_gt?: Maybe<Scalars['String']>;
  currency_lt?: Maybe<Scalars['String']>;
  currency_gte?: Maybe<Scalars['String']>;
  currency_lte?: Maybe<Scalars['String']>;
  currency_in?: Maybe<Array<Scalars['String']>>;
  currency_not_in?: Maybe<Array<Scalars['String']>>;
  currency_contains?: Maybe<Scalars['String']>;
  currency_not_contains?: Maybe<Scalars['String']>;
  currency_starts_with?: Maybe<Scalars['String']>;
  currency_not_starts_with?: Maybe<Scalars['String']>;
  currency_ends_with?: Maybe<Scalars['String']>;
  currency_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  sellOnShare?: Maybe<Scalars['BigInt']>;
  sellOnShare_not?: Maybe<Scalars['BigInt']>;
  sellOnShare_gt?: Maybe<Scalars['BigInt']>;
  sellOnShare_lt?: Maybe<Scalars['BigInt']>;
  sellOnShare_gte?: Maybe<Scalars['BigInt']>;
  sellOnShare_lte?: Maybe<Scalars['BigInt']>;
  sellOnShare_in?: Maybe<Array<Scalars['BigInt']>>;
  sellOnShare_not_in?: Maybe<Array<Scalars['BigInt']>>;
  bidder?: Maybe<Scalars['String']>;
  bidder_not?: Maybe<Scalars['String']>;
  bidder_gt?: Maybe<Scalars['String']>;
  bidder_lt?: Maybe<Scalars['String']>;
  bidder_gte?: Maybe<Scalars['String']>;
  bidder_lte?: Maybe<Scalars['String']>;
  bidder_in?: Maybe<Array<Scalars['String']>>;
  bidder_not_in?: Maybe<Array<Scalars['String']>>;
  bidder_contains?: Maybe<Scalars['String']>;
  bidder_not_contains?: Maybe<Scalars['String']>;
  bidder_starts_with?: Maybe<Scalars['String']>;
  bidder_not_starts_with?: Maybe<Scalars['String']>;
  bidder_ends_with?: Maybe<Scalars['String']>;
  bidder_not_ends_with?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  recipient_not?: Maybe<Scalars['String']>;
  recipient_gt?: Maybe<Scalars['String']>;
  recipient_lt?: Maybe<Scalars['String']>;
  recipient_gte?: Maybe<Scalars['String']>;
  recipient_lte?: Maybe<Scalars['String']>;
  recipient_in?: Maybe<Array<Scalars['String']>>;
  recipient_not_in?: Maybe<Array<Scalars['String']>>;
  recipient_contains?: Maybe<Scalars['String']>;
  recipient_not_contains?: Maybe<Scalars['String']>;
  recipient_starts_with?: Maybe<Scalars['String']>;
  recipient_not_starts_with?: Maybe<Scalars['String']>;
  recipient_ends_with?: Maybe<Scalars['String']>;
  recipient_not_ends_with?: Maybe<Scalars['String']>;
  createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
  inactivatedAtTimestamp?: Maybe<Scalars['BigInt']>;
  inactivatedAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  inactivatedAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  inactivatedAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  inactivatedAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  inactivatedAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  inactivatedAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  inactivatedAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  inactivatedAtBlockNumber?: Maybe<Scalars['BigInt']>;
  inactivatedAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  inactivatedAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  inactivatedAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  inactivatedAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  inactivatedAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  inactivatedAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  inactivatedAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum InactiveBid_OrderBy {
  Id = 'id',
  Media = 'media',
  Type = 'type',
  Currency = 'currency',
  Amount = 'amount',
  SellOnShare = 'sellOnShare',
  Bidder = 'bidder',
  Recipient = 'recipient',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  InactivatedAtTimestamp = 'inactivatedAtTimestamp',
  InactivatedAtBlockNumber = 'inactivatedAtBlockNumber'
}

export type InactiveReserveAuctionBid = {
  __typename?: 'InactiveReserveAuctionBid';
  /** <auctionId>-<txHash>-<logIndex> */
  id: Scalars['ID'];
  /** The Reserve auction associated with the Bid */
  reserveAuction: ReserveAuction;
  /** The amount of the Bid */
  amount: Scalars['BigInt'];
  /** The bidder of the Bid */
  bidder: User;
  /** The type of bid (active, refunded, final) */
  bidType: ReserveAuctionBidType;
  /** The timestamp of the block the bid was inactivated at (via outbid, cancellation, winning bid) */
  bidInactivatedAtTimestamp: Scalars['BigInt'];
  /** The number of the block the bid was inactivated at (via outbid, cancellation, winning bid) */
  bidInactivatedAtBlockNumber: Scalars['BigInt'];
  /** The timestamp of the block the Bid was created in */
  createdAtTimestamp: Scalars['BigInt'];
  /** The number of the block the Bid was created in */
  createdAtBlockNumber: Scalars['BigInt'];
};

export type InactiveReserveAuctionBid_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  reserveAuction?: Maybe<Scalars['String']>;
  reserveAuction_not?: Maybe<Scalars['String']>;
  reserveAuction_gt?: Maybe<Scalars['String']>;
  reserveAuction_lt?: Maybe<Scalars['String']>;
  reserveAuction_gte?: Maybe<Scalars['String']>;
  reserveAuction_lte?: Maybe<Scalars['String']>;
  reserveAuction_in?: Maybe<Array<Scalars['String']>>;
  reserveAuction_not_in?: Maybe<Array<Scalars['String']>>;
  reserveAuction_contains?: Maybe<Scalars['String']>;
  reserveAuction_not_contains?: Maybe<Scalars['String']>;
  reserveAuction_starts_with?: Maybe<Scalars['String']>;
  reserveAuction_not_starts_with?: Maybe<Scalars['String']>;
  reserveAuction_ends_with?: Maybe<Scalars['String']>;
  reserveAuction_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  bidder?: Maybe<Scalars['String']>;
  bidder_not?: Maybe<Scalars['String']>;
  bidder_gt?: Maybe<Scalars['String']>;
  bidder_lt?: Maybe<Scalars['String']>;
  bidder_gte?: Maybe<Scalars['String']>;
  bidder_lte?: Maybe<Scalars['String']>;
  bidder_in?: Maybe<Array<Scalars['String']>>;
  bidder_not_in?: Maybe<Array<Scalars['String']>>;
  bidder_contains?: Maybe<Scalars['String']>;
  bidder_not_contains?: Maybe<Scalars['String']>;
  bidder_starts_with?: Maybe<Scalars['String']>;
  bidder_not_starts_with?: Maybe<Scalars['String']>;
  bidder_ends_with?: Maybe<Scalars['String']>;
  bidder_not_ends_with?: Maybe<Scalars['String']>;
  bidType?: Maybe<ReserveAuctionBidType>;
  bidType_not?: Maybe<ReserveAuctionBidType>;
  bidInactivatedAtTimestamp?: Maybe<Scalars['BigInt']>;
  bidInactivatedAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  bidInactivatedAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  bidInactivatedAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  bidInactivatedAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  bidInactivatedAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  bidInactivatedAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  bidInactivatedAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  bidInactivatedAtBlockNumber?: Maybe<Scalars['BigInt']>;
  bidInactivatedAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  bidInactivatedAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  bidInactivatedAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  bidInactivatedAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  bidInactivatedAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  bidInactivatedAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  bidInactivatedAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum InactiveReserveAuctionBid_OrderBy {
  Id = 'id',
  ReserveAuction = 'reserveAuction',
  Amount = 'amount',
  Bidder = 'bidder',
  BidType = 'bidType',
  BidInactivatedAtTimestamp = 'bidInactivatedAtTimestamp',
  BidInactivatedAtBlockNumber = 'bidInactivatedAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber'
}

/** The Types for MarketEvents (Asks, Bids) */
export enum MarketEventType {
  Finalized = 'Finalized',
  Removed = 'Removed'
}

export type Media = {
  __typename?: 'Media';
  /** The tokenId on the Zora Media Contract */
  id: Scalars['ID'];
  /** The current owner of the Media */
  owner: User;
  /** The creator of the Media */
  creator: User;
  /** The previous owner of the Zora Media's Market */
  prevOwner: User;
  /** The approved user of the Media */
  approved?: Maybe<User>;
  /** The sha256 hash of the media's content */
  contentHash: Scalars['Bytes'];
  /** The sha256 hash of the media's metadata */
  metadataHash: Scalars['Bytes'];
  /** The uri of the content */
  contentURI: Scalars['String'];
  /** The uri of the metadata */
  metadataURI: Scalars['String'];
  /** The bid share for the current owner of the Media */
  ownerBidShare: Scalars['BigInt'];
  /** The bid share for the creator of the Media */
  creatorBidShare: Scalars['BigInt'];
  /** The bid share for the previous owner of the Media's market */
  prevOwnerBidShare: Scalars['BigInt'];
  /** The timestamp of the block the Media was minted in */
  createdAtTimestamp: Scalars['BigInt'];
  /** The number of the block the Media was minted in */
  createdAtBlockNumber: Scalars['BigInt'];
  /** The timestamp of the block the Media was burned in */
  burnedAtTimeStamp?: Maybe<Scalars['BigInt']>;
  /** The number of the block the Media was burned in */
  burnedAtBlockNumber?: Maybe<Scalars['BigInt']>;
  /** The current Ask of the Media */
  currentAsk?: Maybe<Ask>;
  /** The current Bids on the Media */
  currentBids?: Maybe<Array<Bid>>;
  /** The InactiveAsks of the Media */
  inactiveAsks?: Maybe<Array<InactiveAsk>>;
  /** The InactiveBids of the Media */
  inactiveBids?: Maybe<Array<InactiveBid>>;
  /** The ReserveAuctions of the Media */
  reserveAuctions?: Maybe<Array<ReserveAuction>>;
};


export type MediaCurrentBidsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bid_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bid_Filter>;
};


export type MediaInactiveAsksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InactiveAsk_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InactiveAsk_Filter>;
};


export type MediaInactiveBidsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InactiveBid_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InactiveBid_Filter>;
};


export type MediaReserveAuctionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReserveAuction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ReserveAuction_Filter>;
};

export type Media_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  owner?: Maybe<Scalars['String']>;
  owner_not?: Maybe<Scalars['String']>;
  owner_gt?: Maybe<Scalars['String']>;
  owner_lt?: Maybe<Scalars['String']>;
  owner_gte?: Maybe<Scalars['String']>;
  owner_lte?: Maybe<Scalars['String']>;
  owner_in?: Maybe<Array<Scalars['String']>>;
  owner_not_in?: Maybe<Array<Scalars['String']>>;
  owner_contains?: Maybe<Scalars['String']>;
  owner_not_contains?: Maybe<Scalars['String']>;
  owner_starts_with?: Maybe<Scalars['String']>;
  owner_not_starts_with?: Maybe<Scalars['String']>;
  owner_ends_with?: Maybe<Scalars['String']>;
  owner_not_ends_with?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['String']>;
  creator_not?: Maybe<Scalars['String']>;
  creator_gt?: Maybe<Scalars['String']>;
  creator_lt?: Maybe<Scalars['String']>;
  creator_gte?: Maybe<Scalars['String']>;
  creator_lte?: Maybe<Scalars['String']>;
  creator_in?: Maybe<Array<Scalars['String']>>;
  creator_not_in?: Maybe<Array<Scalars['String']>>;
  creator_contains?: Maybe<Scalars['String']>;
  creator_not_contains?: Maybe<Scalars['String']>;
  creator_starts_with?: Maybe<Scalars['String']>;
  creator_not_starts_with?: Maybe<Scalars['String']>;
  creator_ends_with?: Maybe<Scalars['String']>;
  creator_not_ends_with?: Maybe<Scalars['String']>;
  prevOwner?: Maybe<Scalars['String']>;
  prevOwner_not?: Maybe<Scalars['String']>;
  prevOwner_gt?: Maybe<Scalars['String']>;
  prevOwner_lt?: Maybe<Scalars['String']>;
  prevOwner_gte?: Maybe<Scalars['String']>;
  prevOwner_lte?: Maybe<Scalars['String']>;
  prevOwner_in?: Maybe<Array<Scalars['String']>>;
  prevOwner_not_in?: Maybe<Array<Scalars['String']>>;
  prevOwner_contains?: Maybe<Scalars['String']>;
  prevOwner_not_contains?: Maybe<Scalars['String']>;
  prevOwner_starts_with?: Maybe<Scalars['String']>;
  prevOwner_not_starts_with?: Maybe<Scalars['String']>;
  prevOwner_ends_with?: Maybe<Scalars['String']>;
  prevOwner_not_ends_with?: Maybe<Scalars['String']>;
  approved?: Maybe<Scalars['String']>;
  approved_not?: Maybe<Scalars['String']>;
  approved_gt?: Maybe<Scalars['String']>;
  approved_lt?: Maybe<Scalars['String']>;
  approved_gte?: Maybe<Scalars['String']>;
  approved_lte?: Maybe<Scalars['String']>;
  approved_in?: Maybe<Array<Scalars['String']>>;
  approved_not_in?: Maybe<Array<Scalars['String']>>;
  approved_contains?: Maybe<Scalars['String']>;
  approved_not_contains?: Maybe<Scalars['String']>;
  approved_starts_with?: Maybe<Scalars['String']>;
  approved_not_starts_with?: Maybe<Scalars['String']>;
  approved_ends_with?: Maybe<Scalars['String']>;
  approved_not_ends_with?: Maybe<Scalars['String']>;
  contentHash?: Maybe<Scalars['Bytes']>;
  contentHash_not?: Maybe<Scalars['Bytes']>;
  contentHash_in?: Maybe<Array<Scalars['Bytes']>>;
  contentHash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  contentHash_contains?: Maybe<Scalars['Bytes']>;
  contentHash_not_contains?: Maybe<Scalars['Bytes']>;
  metadataHash?: Maybe<Scalars['Bytes']>;
  metadataHash_not?: Maybe<Scalars['Bytes']>;
  metadataHash_in?: Maybe<Array<Scalars['Bytes']>>;
  metadataHash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  metadataHash_contains?: Maybe<Scalars['Bytes']>;
  metadataHash_not_contains?: Maybe<Scalars['Bytes']>;
  contentURI?: Maybe<Scalars['String']>;
  contentURI_not?: Maybe<Scalars['String']>;
  contentURI_gt?: Maybe<Scalars['String']>;
  contentURI_lt?: Maybe<Scalars['String']>;
  contentURI_gte?: Maybe<Scalars['String']>;
  contentURI_lte?: Maybe<Scalars['String']>;
  contentURI_in?: Maybe<Array<Scalars['String']>>;
  contentURI_not_in?: Maybe<Array<Scalars['String']>>;
  contentURI_contains?: Maybe<Scalars['String']>;
  contentURI_not_contains?: Maybe<Scalars['String']>;
  contentURI_starts_with?: Maybe<Scalars['String']>;
  contentURI_not_starts_with?: Maybe<Scalars['String']>;
  contentURI_ends_with?: Maybe<Scalars['String']>;
  contentURI_not_ends_with?: Maybe<Scalars['String']>;
  metadataURI?: Maybe<Scalars['String']>;
  metadataURI_not?: Maybe<Scalars['String']>;
  metadataURI_gt?: Maybe<Scalars['String']>;
  metadataURI_lt?: Maybe<Scalars['String']>;
  metadataURI_gte?: Maybe<Scalars['String']>;
  metadataURI_lte?: Maybe<Scalars['String']>;
  metadataURI_in?: Maybe<Array<Scalars['String']>>;
  metadataURI_not_in?: Maybe<Array<Scalars['String']>>;
  metadataURI_contains?: Maybe<Scalars['String']>;
  metadataURI_not_contains?: Maybe<Scalars['String']>;
  metadataURI_starts_with?: Maybe<Scalars['String']>;
  metadataURI_not_starts_with?: Maybe<Scalars['String']>;
  metadataURI_ends_with?: Maybe<Scalars['String']>;
  metadataURI_not_ends_with?: Maybe<Scalars['String']>;
  ownerBidShare?: Maybe<Scalars['BigInt']>;
  ownerBidShare_not?: Maybe<Scalars['BigInt']>;
  ownerBidShare_gt?: Maybe<Scalars['BigInt']>;
  ownerBidShare_lt?: Maybe<Scalars['BigInt']>;
  ownerBidShare_gte?: Maybe<Scalars['BigInt']>;
  ownerBidShare_lte?: Maybe<Scalars['BigInt']>;
  ownerBidShare_in?: Maybe<Array<Scalars['BigInt']>>;
  ownerBidShare_not_in?: Maybe<Array<Scalars['BigInt']>>;
  creatorBidShare?: Maybe<Scalars['BigInt']>;
  creatorBidShare_not?: Maybe<Scalars['BigInt']>;
  creatorBidShare_gt?: Maybe<Scalars['BigInt']>;
  creatorBidShare_lt?: Maybe<Scalars['BigInt']>;
  creatorBidShare_gte?: Maybe<Scalars['BigInt']>;
  creatorBidShare_lte?: Maybe<Scalars['BigInt']>;
  creatorBidShare_in?: Maybe<Array<Scalars['BigInt']>>;
  creatorBidShare_not_in?: Maybe<Array<Scalars['BigInt']>>;
  prevOwnerBidShare?: Maybe<Scalars['BigInt']>;
  prevOwnerBidShare_not?: Maybe<Scalars['BigInt']>;
  prevOwnerBidShare_gt?: Maybe<Scalars['BigInt']>;
  prevOwnerBidShare_lt?: Maybe<Scalars['BigInt']>;
  prevOwnerBidShare_gte?: Maybe<Scalars['BigInt']>;
  prevOwnerBidShare_lte?: Maybe<Scalars['BigInt']>;
  prevOwnerBidShare_in?: Maybe<Array<Scalars['BigInt']>>;
  prevOwnerBidShare_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
  burnedAtTimeStamp?: Maybe<Scalars['BigInt']>;
  burnedAtTimeStamp_not?: Maybe<Scalars['BigInt']>;
  burnedAtTimeStamp_gt?: Maybe<Scalars['BigInt']>;
  burnedAtTimeStamp_lt?: Maybe<Scalars['BigInt']>;
  burnedAtTimeStamp_gte?: Maybe<Scalars['BigInt']>;
  burnedAtTimeStamp_lte?: Maybe<Scalars['BigInt']>;
  burnedAtTimeStamp_in?: Maybe<Array<Scalars['BigInt']>>;
  burnedAtTimeStamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  burnedAtBlockNumber?: Maybe<Scalars['BigInt']>;
  burnedAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  burnedAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  burnedAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  burnedAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  burnedAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  burnedAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  burnedAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Media_OrderBy {
  Id = 'id',
  Owner = 'owner',
  Creator = 'creator',
  PrevOwner = 'prevOwner',
  Approved = 'approved',
  ContentHash = 'contentHash',
  MetadataHash = 'metadataHash',
  ContentUri = 'contentURI',
  MetadataUri = 'metadataURI',
  OwnerBidShare = 'ownerBidShare',
  CreatorBidShare = 'creatorBidShare',
  PrevOwnerBidShare = 'prevOwnerBidShare',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  BurnedAtTimeStamp = 'burnedAtTimeStamp',
  BurnedAtBlockNumber = 'burnedAtBlockNumber',
  CurrentAsk = 'currentAsk',
  CurrentBids = 'currentBids',
  InactiveAsks = 'inactiveAsks',
  InactiveBids = 'inactiveBids',
  ReserveAuctions = 'reserveAuctions'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  media?: Maybe<Media>;
  medias: Array<Media>;
  user?: Maybe<User>;
  users: Array<User>;
  ask?: Maybe<Ask>;
  asks: Array<Ask>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  inactiveBid?: Maybe<InactiveBid>;
  inactiveBids: Array<InactiveBid>;
  inactiveAsk?: Maybe<InactiveAsk>;
  inactiveAsks: Array<InactiveAsk>;
  currency?: Maybe<Currency>;
  currencies: Array<Currency>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  uriupdate?: Maybe<UriUpdate>;
  uriupdates: Array<UriUpdate>;
  reserveAuctionBid?: Maybe<ReserveAuctionBid>;
  reserveAuctionBids: Array<ReserveAuctionBid>;
  inactiveReserveAuctionBid?: Maybe<InactiveReserveAuctionBid>;
  inactiveReserveAuctionBids: Array<InactiveReserveAuctionBid>;
  reserveAuction?: Maybe<ReserveAuction>;
  reserveAuctions: Array<ReserveAuction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryMediaArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMediasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Media_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Media_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAskArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAsksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Ask_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Ask_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryBidArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryBidsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bid_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bid_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryInactiveBidArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryInactiveBidsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InactiveBid_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InactiveBid_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryInactiveAskArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryInactiveAsksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InactiveAsk_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InactiveAsk_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryCurrencyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryCurrenciesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Currency_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Currency_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTransferArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transfer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transfer_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryUriupdateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryUriupdatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UriUpdate_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UriUpdate_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryReserveAuctionBidArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryReserveAuctionBidsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReserveAuctionBid_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ReserveAuctionBid_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryInactiveReserveAuctionBidArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryInactiveReserveAuctionBidsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InactiveReserveAuctionBid_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InactiveReserveAuctionBid_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryReserveAuctionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryReserveAuctionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReserveAuction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ReserveAuction_Filter>;
  block?: Maybe<Block_Height>;
};


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type ReserveAuction = {
  __typename?: 'ReserveAuction';
  /** <tokenContract>-<tokenId> */
  id: Scalars['ID'];
  /** The originating token contract for this auction */
  tokenContract: Scalars['String'];
  /** The token ID for this auction */
  tokenId: Scalars['BigInt'];
  /** The media for the auction, if it is a zora NFT */
  media?: Maybe<Media>;
  /** Whether or not the auction has been approved by the curator */
  approved: Scalars['Boolean'];
  /** The length of time the auction is intended to run for, after the first bid is made */
  duration: Scalars['BigInt'];
  /**
   * The expected end of auction timestamp, which can change if bids were placed
   * within the last 15 minutes, and is not set until the first bid is placed
   */
  expectedEndTimestamp?: Maybe<Scalars['BigInt']>;
  /** The time the first bid was placed */
  firstBidTime?: Maybe<Scalars['BigInt']>;
  /** The minimum price of the first bid */
  reservePrice: Scalars['BigInt'];
  /** The sale percentage to send to the curator */
  curatorFeePercentage: Scalars['Int'];
  /** The address that should receive the funds once the NFT is sold */
  tokenOwner: User;
  /** The address of the auction's curator */
  curator: User;
  /** The address of the ERC-20 currency to run the auction with, or 0x0 for ETH */
  auctionCurrency: Currency;
  status: ReserveAuctionStatus;
  /** The current bid on this auction */
  currentBid?: Maybe<ReserveAuctionBid>;
  /** The previous bids on this auction */
  previousBids?: Maybe<Array<InactiveReserveAuctionBid>>;
  /** The timestamp of the block the Transfer was created in */
  createdAtTimestamp: Scalars['BigInt'];
  /** The number of the block the Transfer was created in */
  createdAtBlockNumber: Scalars['BigInt'];
  /** The timestamp at which the auction end function was called */
  finalizedAtTimestamp?: Maybe<Scalars['BigInt']>;
  /** The block number at which the auction end function was called */
  finalizedAtBlockNumber?: Maybe<Scalars['BigInt']>;
};


export type ReserveAuctionPreviousBidsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InactiveReserveAuctionBid_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InactiveReserveAuctionBid_Filter>;
};

export type ReserveAuctionBid = {
  __typename?: 'ReserveAuctionBid';
  /** <auctionId>-<txHash>-<logIndex> */
  id: Scalars['ID'];
  /** The Reserve auction associated with the Bid */
  reserveAuction: ReserveAuction;
  /** The amount of the Bid */
  amount: Scalars['BigInt'];
  /** The bidder of the Bid */
  bidder: User;
  /** The type of bid (active, refunded, final) */
  bidType: ReserveAuctionBidType;
  /** The timestamp of the block the Bid was created in */
  createdAtTimestamp: Scalars['BigInt'];
  /** The number of the block the Bid was created in */
  createdAtBlockNumber: Scalars['BigInt'];
};

export enum ReserveAuctionBidType {
  Active = 'Active',
  Refunded = 'Refunded',
  Final = 'Final'
}

export type ReserveAuctionBid_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  reserveAuction?: Maybe<Scalars['String']>;
  reserveAuction_not?: Maybe<Scalars['String']>;
  reserveAuction_gt?: Maybe<Scalars['String']>;
  reserveAuction_lt?: Maybe<Scalars['String']>;
  reserveAuction_gte?: Maybe<Scalars['String']>;
  reserveAuction_lte?: Maybe<Scalars['String']>;
  reserveAuction_in?: Maybe<Array<Scalars['String']>>;
  reserveAuction_not_in?: Maybe<Array<Scalars['String']>>;
  reserveAuction_contains?: Maybe<Scalars['String']>;
  reserveAuction_not_contains?: Maybe<Scalars['String']>;
  reserveAuction_starts_with?: Maybe<Scalars['String']>;
  reserveAuction_not_starts_with?: Maybe<Scalars['String']>;
  reserveAuction_ends_with?: Maybe<Scalars['String']>;
  reserveAuction_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  bidder?: Maybe<Scalars['String']>;
  bidder_not?: Maybe<Scalars['String']>;
  bidder_gt?: Maybe<Scalars['String']>;
  bidder_lt?: Maybe<Scalars['String']>;
  bidder_gte?: Maybe<Scalars['String']>;
  bidder_lte?: Maybe<Scalars['String']>;
  bidder_in?: Maybe<Array<Scalars['String']>>;
  bidder_not_in?: Maybe<Array<Scalars['String']>>;
  bidder_contains?: Maybe<Scalars['String']>;
  bidder_not_contains?: Maybe<Scalars['String']>;
  bidder_starts_with?: Maybe<Scalars['String']>;
  bidder_not_starts_with?: Maybe<Scalars['String']>;
  bidder_ends_with?: Maybe<Scalars['String']>;
  bidder_not_ends_with?: Maybe<Scalars['String']>;
  bidType?: Maybe<ReserveAuctionBidType>;
  bidType_not?: Maybe<ReserveAuctionBidType>;
  createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum ReserveAuctionBid_OrderBy {
  Id = 'id',
  ReserveAuction = 'reserveAuction',
  Amount = 'amount',
  Bidder = 'bidder',
  BidType = 'bidType',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber'
}

export enum ReserveAuctionStatus {
  Pending = 'Pending',
  Active = 'Active',
  Canceled = 'Canceled',
  Finished = 'Finished'
}

export type ReserveAuction_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenContract_not?: Maybe<Scalars['String']>;
  tokenContract_gt?: Maybe<Scalars['String']>;
  tokenContract_lt?: Maybe<Scalars['String']>;
  tokenContract_gte?: Maybe<Scalars['String']>;
  tokenContract_lte?: Maybe<Scalars['String']>;
  tokenContract_in?: Maybe<Array<Scalars['String']>>;
  tokenContract_not_in?: Maybe<Array<Scalars['String']>>;
  tokenContract_contains?: Maybe<Scalars['String']>;
  tokenContract_not_contains?: Maybe<Scalars['String']>;
  tokenContract_starts_with?: Maybe<Scalars['String']>;
  tokenContract_not_starts_with?: Maybe<Scalars['String']>;
  tokenContract_ends_with?: Maybe<Scalars['String']>;
  tokenContract_not_ends_with?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['BigInt']>;
  tokenId_not?: Maybe<Scalars['BigInt']>;
  tokenId_gt?: Maybe<Scalars['BigInt']>;
  tokenId_lt?: Maybe<Scalars['BigInt']>;
  tokenId_gte?: Maybe<Scalars['BigInt']>;
  tokenId_lte?: Maybe<Scalars['BigInt']>;
  tokenId_in?: Maybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: Maybe<Array<Scalars['BigInt']>>;
  media?: Maybe<Scalars['String']>;
  media_not?: Maybe<Scalars['String']>;
  media_gt?: Maybe<Scalars['String']>;
  media_lt?: Maybe<Scalars['String']>;
  media_gte?: Maybe<Scalars['String']>;
  media_lte?: Maybe<Scalars['String']>;
  media_in?: Maybe<Array<Scalars['String']>>;
  media_not_in?: Maybe<Array<Scalars['String']>>;
  media_contains?: Maybe<Scalars['String']>;
  media_not_contains?: Maybe<Scalars['String']>;
  media_starts_with?: Maybe<Scalars['String']>;
  media_not_starts_with?: Maybe<Scalars['String']>;
  media_ends_with?: Maybe<Scalars['String']>;
  media_not_ends_with?: Maybe<Scalars['String']>;
  approved?: Maybe<Scalars['Boolean']>;
  approved_not?: Maybe<Scalars['Boolean']>;
  approved_in?: Maybe<Array<Scalars['Boolean']>>;
  approved_not_in?: Maybe<Array<Scalars['Boolean']>>;
  duration?: Maybe<Scalars['BigInt']>;
  duration_not?: Maybe<Scalars['BigInt']>;
  duration_gt?: Maybe<Scalars['BigInt']>;
  duration_lt?: Maybe<Scalars['BigInt']>;
  duration_gte?: Maybe<Scalars['BigInt']>;
  duration_lte?: Maybe<Scalars['BigInt']>;
  duration_in?: Maybe<Array<Scalars['BigInt']>>;
  duration_not_in?: Maybe<Array<Scalars['BigInt']>>;
  expectedEndTimestamp?: Maybe<Scalars['BigInt']>;
  expectedEndTimestamp_not?: Maybe<Scalars['BigInt']>;
  expectedEndTimestamp_gt?: Maybe<Scalars['BigInt']>;
  expectedEndTimestamp_lt?: Maybe<Scalars['BigInt']>;
  expectedEndTimestamp_gte?: Maybe<Scalars['BigInt']>;
  expectedEndTimestamp_lte?: Maybe<Scalars['BigInt']>;
  expectedEndTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  expectedEndTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  firstBidTime?: Maybe<Scalars['BigInt']>;
  firstBidTime_not?: Maybe<Scalars['BigInt']>;
  firstBidTime_gt?: Maybe<Scalars['BigInt']>;
  firstBidTime_lt?: Maybe<Scalars['BigInt']>;
  firstBidTime_gte?: Maybe<Scalars['BigInt']>;
  firstBidTime_lte?: Maybe<Scalars['BigInt']>;
  firstBidTime_in?: Maybe<Array<Scalars['BigInt']>>;
  firstBidTime_not_in?: Maybe<Array<Scalars['BigInt']>>;
  reservePrice?: Maybe<Scalars['BigInt']>;
  reservePrice_not?: Maybe<Scalars['BigInt']>;
  reservePrice_gt?: Maybe<Scalars['BigInt']>;
  reservePrice_lt?: Maybe<Scalars['BigInt']>;
  reservePrice_gte?: Maybe<Scalars['BigInt']>;
  reservePrice_lte?: Maybe<Scalars['BigInt']>;
  reservePrice_in?: Maybe<Array<Scalars['BigInt']>>;
  reservePrice_not_in?: Maybe<Array<Scalars['BigInt']>>;
  curatorFeePercentage?: Maybe<Scalars['Int']>;
  curatorFeePercentage_not?: Maybe<Scalars['Int']>;
  curatorFeePercentage_gt?: Maybe<Scalars['Int']>;
  curatorFeePercentage_lt?: Maybe<Scalars['Int']>;
  curatorFeePercentage_gte?: Maybe<Scalars['Int']>;
  curatorFeePercentage_lte?: Maybe<Scalars['Int']>;
  curatorFeePercentage_in?: Maybe<Array<Scalars['Int']>>;
  curatorFeePercentage_not_in?: Maybe<Array<Scalars['Int']>>;
  tokenOwner?: Maybe<Scalars['String']>;
  tokenOwner_not?: Maybe<Scalars['String']>;
  tokenOwner_gt?: Maybe<Scalars['String']>;
  tokenOwner_lt?: Maybe<Scalars['String']>;
  tokenOwner_gte?: Maybe<Scalars['String']>;
  tokenOwner_lte?: Maybe<Scalars['String']>;
  tokenOwner_in?: Maybe<Array<Scalars['String']>>;
  tokenOwner_not_in?: Maybe<Array<Scalars['String']>>;
  tokenOwner_contains?: Maybe<Scalars['String']>;
  tokenOwner_not_contains?: Maybe<Scalars['String']>;
  tokenOwner_starts_with?: Maybe<Scalars['String']>;
  tokenOwner_not_starts_with?: Maybe<Scalars['String']>;
  tokenOwner_ends_with?: Maybe<Scalars['String']>;
  tokenOwner_not_ends_with?: Maybe<Scalars['String']>;
  curator?: Maybe<Scalars['String']>;
  curator_not?: Maybe<Scalars['String']>;
  curator_gt?: Maybe<Scalars['String']>;
  curator_lt?: Maybe<Scalars['String']>;
  curator_gte?: Maybe<Scalars['String']>;
  curator_lte?: Maybe<Scalars['String']>;
  curator_in?: Maybe<Array<Scalars['String']>>;
  curator_not_in?: Maybe<Array<Scalars['String']>>;
  curator_contains?: Maybe<Scalars['String']>;
  curator_not_contains?: Maybe<Scalars['String']>;
  curator_starts_with?: Maybe<Scalars['String']>;
  curator_not_starts_with?: Maybe<Scalars['String']>;
  curator_ends_with?: Maybe<Scalars['String']>;
  curator_not_ends_with?: Maybe<Scalars['String']>;
  auctionCurrency?: Maybe<Scalars['String']>;
  auctionCurrency_not?: Maybe<Scalars['String']>;
  auctionCurrency_gt?: Maybe<Scalars['String']>;
  auctionCurrency_lt?: Maybe<Scalars['String']>;
  auctionCurrency_gte?: Maybe<Scalars['String']>;
  auctionCurrency_lte?: Maybe<Scalars['String']>;
  auctionCurrency_in?: Maybe<Array<Scalars['String']>>;
  auctionCurrency_not_in?: Maybe<Array<Scalars['String']>>;
  auctionCurrency_contains?: Maybe<Scalars['String']>;
  auctionCurrency_not_contains?: Maybe<Scalars['String']>;
  auctionCurrency_starts_with?: Maybe<Scalars['String']>;
  auctionCurrency_not_starts_with?: Maybe<Scalars['String']>;
  auctionCurrency_ends_with?: Maybe<Scalars['String']>;
  auctionCurrency_not_ends_with?: Maybe<Scalars['String']>;
  status?: Maybe<ReserveAuctionStatus>;
  status_not?: Maybe<ReserveAuctionStatus>;
  currentBid?: Maybe<Scalars['String']>;
  currentBid_not?: Maybe<Scalars['String']>;
  currentBid_gt?: Maybe<Scalars['String']>;
  currentBid_lt?: Maybe<Scalars['String']>;
  currentBid_gte?: Maybe<Scalars['String']>;
  currentBid_lte?: Maybe<Scalars['String']>;
  currentBid_in?: Maybe<Array<Scalars['String']>>;
  currentBid_not_in?: Maybe<Array<Scalars['String']>>;
  currentBid_contains?: Maybe<Scalars['String']>;
  currentBid_not_contains?: Maybe<Scalars['String']>;
  currentBid_starts_with?: Maybe<Scalars['String']>;
  currentBid_not_starts_with?: Maybe<Scalars['String']>;
  currentBid_ends_with?: Maybe<Scalars['String']>;
  currentBid_not_ends_with?: Maybe<Scalars['String']>;
  createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
  finalizedAtTimestamp?: Maybe<Scalars['BigInt']>;
  finalizedAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  finalizedAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  finalizedAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  finalizedAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  finalizedAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  finalizedAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  finalizedAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  finalizedAtBlockNumber?: Maybe<Scalars['BigInt']>;
  finalizedAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  finalizedAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  finalizedAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  finalizedAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  finalizedAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  finalizedAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  finalizedAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum ReserveAuction_OrderBy {
  Id = 'id',
  TokenContract = 'tokenContract',
  TokenId = 'tokenId',
  Media = 'media',
  Approved = 'approved',
  Duration = 'duration',
  ExpectedEndTimestamp = 'expectedEndTimestamp',
  FirstBidTime = 'firstBidTime',
  ReservePrice = 'reservePrice',
  CuratorFeePercentage = 'curatorFeePercentage',
  TokenOwner = 'tokenOwner',
  Curator = 'curator',
  AuctionCurrency = 'auctionCurrency',
  Status = 'status',
  CurrentBid = 'currentBid',
  PreviousBids = 'previousBids',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  FinalizedAtTimestamp = 'finalizedAtTimestamp',
  FinalizedAtBlockNumber = 'finalizedAtBlockNumber'
}

export type Subscription = {
  __typename?: 'Subscription';
  media?: Maybe<Media>;
  medias: Array<Media>;
  user?: Maybe<User>;
  users: Array<User>;
  ask?: Maybe<Ask>;
  asks: Array<Ask>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  inactiveBid?: Maybe<InactiveBid>;
  inactiveBids: Array<InactiveBid>;
  inactiveAsk?: Maybe<InactiveAsk>;
  inactiveAsks: Array<InactiveAsk>;
  currency?: Maybe<Currency>;
  currencies: Array<Currency>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  uriupdate?: Maybe<UriUpdate>;
  uriupdates: Array<UriUpdate>;
  reserveAuctionBid?: Maybe<ReserveAuctionBid>;
  reserveAuctionBids: Array<ReserveAuctionBid>;
  inactiveReserveAuctionBid?: Maybe<InactiveReserveAuctionBid>;
  inactiveReserveAuctionBids: Array<InactiveReserveAuctionBid>;
  reserveAuction?: Maybe<ReserveAuction>;
  reserveAuctions: Array<ReserveAuction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionMediaArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMediasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Media_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Media_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAskArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAsksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Ask_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Ask_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionBidArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionBidsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bid_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bid_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionInactiveBidArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionInactiveBidsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InactiveBid_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InactiveBid_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionInactiveAskArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionInactiveAsksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InactiveAsk_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InactiveAsk_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionCurrencyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionCurrenciesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Currency_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Currency_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTransferArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transfer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transfer_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionUriupdateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionUriupdatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UriUpdate_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UriUpdate_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionReserveAuctionBidArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionReserveAuctionBidsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReserveAuctionBid_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ReserveAuctionBid_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionInactiveReserveAuctionBidArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionInactiveReserveAuctionBidsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InactiveReserveAuctionBid_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InactiveReserveAuctionBid_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionReserveAuctionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionReserveAuctionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReserveAuction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ReserveAuction_Filter>;
  block?: Maybe<Block_Height>;
};


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Transfer = {
  __typename?: 'Transfer';
  /** <tokenId>-<transactionHash>-<logIndex> */
  id: Scalars['ID'];
  /** The Media associated with the Transfer */
  media: Media;
  /** The User transferring the Media */
  from: User;
  /** The User receiving the Media */
  to: User;
  /** The timestamp of the block the Transfer was created in */
  createdAtTimestamp: Scalars['BigInt'];
  /** The number of the block the Transfer was created in */
  createdAtBlockNumber: Scalars['BigInt'];
};

export type Transfer_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  media?: Maybe<Scalars['String']>;
  media_not?: Maybe<Scalars['String']>;
  media_gt?: Maybe<Scalars['String']>;
  media_lt?: Maybe<Scalars['String']>;
  media_gte?: Maybe<Scalars['String']>;
  media_lte?: Maybe<Scalars['String']>;
  media_in?: Maybe<Array<Scalars['String']>>;
  media_not_in?: Maybe<Array<Scalars['String']>>;
  media_contains?: Maybe<Scalars['String']>;
  media_not_contains?: Maybe<Scalars['String']>;
  media_starts_with?: Maybe<Scalars['String']>;
  media_not_starts_with?: Maybe<Scalars['String']>;
  media_ends_with?: Maybe<Scalars['String']>;
  media_not_ends_with?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  from_not?: Maybe<Scalars['String']>;
  from_gt?: Maybe<Scalars['String']>;
  from_lt?: Maybe<Scalars['String']>;
  from_gte?: Maybe<Scalars['String']>;
  from_lte?: Maybe<Scalars['String']>;
  from_in?: Maybe<Array<Scalars['String']>>;
  from_not_in?: Maybe<Array<Scalars['String']>>;
  from_contains?: Maybe<Scalars['String']>;
  from_not_contains?: Maybe<Scalars['String']>;
  from_starts_with?: Maybe<Scalars['String']>;
  from_not_starts_with?: Maybe<Scalars['String']>;
  from_ends_with?: Maybe<Scalars['String']>;
  from_not_ends_with?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  to_not?: Maybe<Scalars['String']>;
  to_gt?: Maybe<Scalars['String']>;
  to_lt?: Maybe<Scalars['String']>;
  to_gte?: Maybe<Scalars['String']>;
  to_lte?: Maybe<Scalars['String']>;
  to_in?: Maybe<Array<Scalars['String']>>;
  to_not_in?: Maybe<Array<Scalars['String']>>;
  to_contains?: Maybe<Scalars['String']>;
  to_not_contains?: Maybe<Scalars['String']>;
  to_starts_with?: Maybe<Scalars['String']>;
  to_not_starts_with?: Maybe<Scalars['String']>;
  to_ends_with?: Maybe<Scalars['String']>;
  to_not_ends_with?: Maybe<Scalars['String']>;
  createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Transfer_OrderBy {
  Id = 'id',
  Media = 'media',
  From = 'from',
  To = 'to',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber'
}

export type UriUpdate = {
  __typename?: 'URIUpdate';
  /** <tokenId>-<transactionHash>-<logIndex> */
  id: Scalars['ID'];
  /** The Type of URIUpdate */
  type: UriUpdateType;
  /** The previous uri */
  from: Scalars['String'];
  /** The new uri */
  to: Scalars['String'];
  /** The Media associated with the URIUpdate */
  media: Media;
  /** The owner of the Media */
  owner: User;
  /** The updater of the Media's URI */
  updater: User;
  /** The timestamp of the block the URIUpdate was created in */
  createdAtTimestamp: Scalars['BigInt'];
  /** The number of the block the URIUpdate was created in */
  createdAtBlockNumber: Scalars['BigInt'];
};

/** The Types of URI Updates */
export enum UriUpdateType {
  Content = 'Content',
  Metadata = 'Metadata'
}

export type UriUpdate_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  type?: Maybe<UriUpdateType>;
  type_not?: Maybe<UriUpdateType>;
  from?: Maybe<Scalars['String']>;
  from_not?: Maybe<Scalars['String']>;
  from_gt?: Maybe<Scalars['String']>;
  from_lt?: Maybe<Scalars['String']>;
  from_gte?: Maybe<Scalars['String']>;
  from_lte?: Maybe<Scalars['String']>;
  from_in?: Maybe<Array<Scalars['String']>>;
  from_not_in?: Maybe<Array<Scalars['String']>>;
  from_contains?: Maybe<Scalars['String']>;
  from_not_contains?: Maybe<Scalars['String']>;
  from_starts_with?: Maybe<Scalars['String']>;
  from_not_starts_with?: Maybe<Scalars['String']>;
  from_ends_with?: Maybe<Scalars['String']>;
  from_not_ends_with?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  to_not?: Maybe<Scalars['String']>;
  to_gt?: Maybe<Scalars['String']>;
  to_lt?: Maybe<Scalars['String']>;
  to_gte?: Maybe<Scalars['String']>;
  to_lte?: Maybe<Scalars['String']>;
  to_in?: Maybe<Array<Scalars['String']>>;
  to_not_in?: Maybe<Array<Scalars['String']>>;
  to_contains?: Maybe<Scalars['String']>;
  to_not_contains?: Maybe<Scalars['String']>;
  to_starts_with?: Maybe<Scalars['String']>;
  to_not_starts_with?: Maybe<Scalars['String']>;
  to_ends_with?: Maybe<Scalars['String']>;
  to_not_ends_with?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  media_not?: Maybe<Scalars['String']>;
  media_gt?: Maybe<Scalars['String']>;
  media_lt?: Maybe<Scalars['String']>;
  media_gte?: Maybe<Scalars['String']>;
  media_lte?: Maybe<Scalars['String']>;
  media_in?: Maybe<Array<Scalars['String']>>;
  media_not_in?: Maybe<Array<Scalars['String']>>;
  media_contains?: Maybe<Scalars['String']>;
  media_not_contains?: Maybe<Scalars['String']>;
  media_starts_with?: Maybe<Scalars['String']>;
  media_not_starts_with?: Maybe<Scalars['String']>;
  media_ends_with?: Maybe<Scalars['String']>;
  media_not_ends_with?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  owner_not?: Maybe<Scalars['String']>;
  owner_gt?: Maybe<Scalars['String']>;
  owner_lt?: Maybe<Scalars['String']>;
  owner_gte?: Maybe<Scalars['String']>;
  owner_lte?: Maybe<Scalars['String']>;
  owner_in?: Maybe<Array<Scalars['String']>>;
  owner_not_in?: Maybe<Array<Scalars['String']>>;
  owner_contains?: Maybe<Scalars['String']>;
  owner_not_contains?: Maybe<Scalars['String']>;
  owner_starts_with?: Maybe<Scalars['String']>;
  owner_not_starts_with?: Maybe<Scalars['String']>;
  owner_ends_with?: Maybe<Scalars['String']>;
  owner_not_ends_with?: Maybe<Scalars['String']>;
  updater?: Maybe<Scalars['String']>;
  updater_not?: Maybe<Scalars['String']>;
  updater_gt?: Maybe<Scalars['String']>;
  updater_lt?: Maybe<Scalars['String']>;
  updater_gte?: Maybe<Scalars['String']>;
  updater_lte?: Maybe<Scalars['String']>;
  updater_in?: Maybe<Array<Scalars['String']>>;
  updater_not_in?: Maybe<Array<Scalars['String']>>;
  updater_contains?: Maybe<Scalars['String']>;
  updater_not_contains?: Maybe<Scalars['String']>;
  updater_starts_with?: Maybe<Scalars['String']>;
  updater_not_starts_with?: Maybe<Scalars['String']>;
  updater_ends_with?: Maybe<Scalars['String']>;
  updater_not_ends_with?: Maybe<Scalars['String']>;
  createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum UriUpdate_OrderBy {
  Id = 'id',
  Type = 'type',
  From = 'from',
  To = 'to',
  Media = 'media',
  Owner = 'owner',
  Updater = 'updater',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber'
}

export type User = {
  __typename?: 'User';
  /** Ethereum Address */
  id: Scalars['ID'];
  /** Users that have been granted `ApprovalForAll` Media of the User's Collection */
  authorizedUsers?: Maybe<Array<User>>;
  /** The Media the User owns */
  collection: Array<Media>;
  /** The Media the User created */
  creations: Array<Media>;
  /** The active Bids made by the User */
  currentBids?: Maybe<Array<Bid>>;
};


export type UserAuthorizedUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
};


export type UserCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Media_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Media_Filter>;
};


export type UserCreationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Media_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Media_Filter>;
};


export type UserCurrentBidsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bid_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bid_Filter>;
};

export type User_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  authorizedUsers?: Maybe<Array<Scalars['String']>>;
  authorizedUsers_not?: Maybe<Array<Scalars['String']>>;
  authorizedUsers_contains?: Maybe<Array<Scalars['String']>>;
  authorizedUsers_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum User_OrderBy {
  Id = 'id',
  AuthorizedUsers = 'authorizedUsers',
  Collection = 'collection',
  Creations = 'creations',
  CurrentBids = 'currentBids'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type CurrencyShortFragment = (
  { __typename?: 'Currency' }
  & Pick<Currency, 'id' | 'name' | 'symbol' | 'decimals'>
);

export type PreviousReserveBidFragment = (
  { __typename?: 'InactiveReserveAuctionBid' }
  & Pick<InactiveReserveAuctionBid, 'id' | 'createdAtTimestamp' | 'amount' | 'bidType' | 'bidInactivatedAtTimestamp' | 'bidInactivatedAtBlockNumber'>
  & { bidder: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type CurrentReserveBidFragment = (
  { __typename?: 'ReserveAuctionBid' }
  & Pick<ReserveAuctionBid, 'bidType' | 'amount' | 'createdAtTimestamp'>
  & { bidder: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type AskPriceFragment = (
  { __typename?: 'Ask' }
  & Pick<Ask, 'id' | 'amount' | 'createdAtTimestamp'>
  & { currency: (
    { __typename?: 'Currency' }
    & CurrencyShortFragment
  ) }
);

export type ReserveAuctionPartialFragment = (
  { __typename?: 'ReserveAuction' }
  & Pick<ReserveAuction, 'id' | 'tokenId' | 'status' | 'reservePrice' | 'firstBidTime' | 'createdAtTimestamp' | 'duration' | 'expectedEndTimestamp' | 'finalizedAtTimestamp'>
  & { tokenOwner: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ), auctionCurrency: (
    { __typename?: 'Currency' }
    & CurrencyShortFragment
  ), currentBid?: Maybe<(
    { __typename?: 'ReserveAuctionBid' }
    & CurrentReserveBidFragment
  )>, previousBids?: Maybe<Array<(
    { __typename?: 'InactiveReserveAuctionBid' }
    & PreviousReserveBidFragment
  )>> }
);

export type GetAuctionsQueryVariables = Exact<{
  auctionIds?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type GetAuctionsQuery = (
  { __typename?: 'Query' }
  & { reserveAuctions: Array<(
    { __typename?: 'ReserveAuction' }
    & ReserveAuctionPartialFragment
  )> }
);

export type NftMediaFragment = (
  { __typename?: 'Media' }
  & Pick<Media, 'id' | 'creatorBidShare' | 'createdAtTimestamp' | 'metadataURI' | 'metadataHash' | 'contentURI' | 'contentHash'>
  & { owner: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ), creator: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ), currentAsk?: Maybe<(
    { __typename?: 'Ask' }
    & AskPriceFragment
  )> }
);

export type BidDataPartialFragment = (
  { __typename?: 'Bid' }
  & Pick<Bid, 'id' | 'createdAtTimestamp' | 'amount'>
  & { bidder: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ), currency: (
    { __typename?: 'Currency' }
    & CurrencyShortFragment
  ) }
);

export type GetMediaAndAuctionsQueryVariables = Exact<{
  ids_id?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type GetMediaAndAuctionsQuery = (
  { __typename?: 'Query' }
  & { medias: Array<(
    { __typename?: 'Media' }
    & { currentBids?: Maybe<Array<(
      { __typename?: 'Bid' }
      & BidDataPartialFragment
    )>>, reserveAuctions?: Maybe<Array<(
      { __typename?: 'ReserveAuction' }
      & ReserveAuctionPartialFragment
    )>> }
    & NftMediaFragment
  )> }
);
