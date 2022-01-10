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






export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
  number_gte?: Maybe<Scalars['Int']>;
};

export type Bundle = {
  __typename?: 'Bundle';
  id: Scalars['ID'];
  ethPrice: Scalars['BigDecimal'];
};

export type Bundle_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  ethPrice?: Maybe<Scalars['BigDecimal']>;
  ethPrice_not?: Maybe<Scalars['BigDecimal']>;
  ethPrice_gt?: Maybe<Scalars['BigDecimal']>;
  ethPrice_lt?: Maybe<Scalars['BigDecimal']>;
  ethPrice_gte?: Maybe<Scalars['BigDecimal']>;
  ethPrice_lte?: Maybe<Scalars['BigDecimal']>;
  ethPrice_in?: Maybe<Array<Scalars['BigDecimal']>>;
  ethPrice_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum Bundle_OrderBy {
  Id = 'id',
  EthPrice = 'ethPrice'
}

export type Burn = {
  __typename?: 'Burn';
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  liquidity: Scalars['BigDecimal'];
  sender?: Maybe<Scalars['Bytes']>;
  amount0?: Maybe<Scalars['BigDecimal']>;
  amount1?: Maybe<Scalars['BigDecimal']>;
  to?: Maybe<Scalars['Bytes']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  needsComplete: Scalars['Boolean'];
  feeTo?: Maybe<Scalars['Bytes']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
};

export type Burn_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  pair?: Maybe<Scalars['String']>;
  pair_not?: Maybe<Scalars['String']>;
  pair_gt?: Maybe<Scalars['String']>;
  pair_lt?: Maybe<Scalars['String']>;
  pair_gte?: Maybe<Scalars['String']>;
  pair_lte?: Maybe<Scalars['String']>;
  pair_in?: Maybe<Array<Scalars['String']>>;
  pair_not_in?: Maybe<Array<Scalars['String']>>;
  pair_contains?: Maybe<Scalars['String']>;
  pair_not_contains?: Maybe<Scalars['String']>;
  pair_starts_with?: Maybe<Scalars['String']>;
  pair_not_starts_with?: Maybe<Scalars['String']>;
  pair_ends_with?: Maybe<Scalars['String']>;
  pair_not_ends_with?: Maybe<Scalars['String']>;
  liquidity?: Maybe<Scalars['BigDecimal']>;
  liquidity_not?: Maybe<Scalars['BigDecimal']>;
  liquidity_gt?: Maybe<Scalars['BigDecimal']>;
  liquidity_lt?: Maybe<Scalars['BigDecimal']>;
  liquidity_gte?: Maybe<Scalars['BigDecimal']>;
  liquidity_lte?: Maybe<Scalars['BigDecimal']>;
  liquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sender?: Maybe<Scalars['Bytes']>;
  sender_not?: Maybe<Scalars['Bytes']>;
  sender_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_contains?: Maybe<Scalars['Bytes']>;
  sender_not_contains?: Maybe<Scalars['Bytes']>;
  amount0?: Maybe<Scalars['BigDecimal']>;
  amount0_not?: Maybe<Scalars['BigDecimal']>;
  amount0_gt?: Maybe<Scalars['BigDecimal']>;
  amount0_lt?: Maybe<Scalars['BigDecimal']>;
  amount0_gte?: Maybe<Scalars['BigDecimal']>;
  amount0_lte?: Maybe<Scalars['BigDecimal']>;
  amount0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1?: Maybe<Scalars['BigDecimal']>;
  amount1_not?: Maybe<Scalars['BigDecimal']>;
  amount1_gt?: Maybe<Scalars['BigDecimal']>;
  amount1_lt?: Maybe<Scalars['BigDecimal']>;
  amount1_gte?: Maybe<Scalars['BigDecimal']>;
  amount1_lte?: Maybe<Scalars['BigDecimal']>;
  amount1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  to?: Maybe<Scalars['Bytes']>;
  to_not?: Maybe<Scalars['Bytes']>;
  to_in?: Maybe<Array<Scalars['Bytes']>>;
  to_not_in?: Maybe<Array<Scalars['Bytes']>>;
  to_contains?: Maybe<Scalars['Bytes']>;
  to_not_contains?: Maybe<Scalars['Bytes']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  logIndex_not?: Maybe<Scalars['BigInt']>;
  logIndex_gt?: Maybe<Scalars['BigInt']>;
  logIndex_lt?: Maybe<Scalars['BigInt']>;
  logIndex_gte?: Maybe<Scalars['BigInt']>;
  logIndex_lte?: Maybe<Scalars['BigInt']>;
  logIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  amountUSD_not?: Maybe<Scalars['BigDecimal']>;
  amountUSD_gt?: Maybe<Scalars['BigDecimal']>;
  amountUSD_lt?: Maybe<Scalars['BigDecimal']>;
  amountUSD_gte?: Maybe<Scalars['BigDecimal']>;
  amountUSD_lte?: Maybe<Scalars['BigDecimal']>;
  amountUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  needsComplete?: Maybe<Scalars['Boolean']>;
  needsComplete_not?: Maybe<Scalars['Boolean']>;
  needsComplete_in?: Maybe<Array<Scalars['Boolean']>>;
  needsComplete_not_in?: Maybe<Array<Scalars['Boolean']>>;
  feeTo?: Maybe<Scalars['Bytes']>;
  feeTo_not?: Maybe<Scalars['Bytes']>;
  feeTo_in?: Maybe<Array<Scalars['Bytes']>>;
  feeTo_not_in?: Maybe<Array<Scalars['Bytes']>>;
  feeTo_contains?: Maybe<Scalars['Bytes']>;
  feeTo_not_contains?: Maybe<Scalars['Bytes']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_not?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  feeLiquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum Burn_OrderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pair = 'pair',
  Liquidity = 'liquidity',
  Sender = 'sender',
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  To = 'to',
  LogIndex = 'logIndex',
  AmountUsd = 'amountUSD',
  NeedsComplete = 'needsComplete',
  FeeTo = 'feeTo',
  FeeLiquidity = 'feeLiquidity'
}


export type LiquidityPosition = {
  __typename?: 'LiquidityPosition';
  id: Scalars['ID'];
  user: User;
  pair: Pair;
  liquidityTokenBalance: Scalars['BigDecimal'];
};

export type LiquidityPositionSnapshot = {
  __typename?: 'LiquidityPositionSnapshot';
  id: Scalars['ID'];
  liquidityPosition: LiquidityPosition;
  timestamp: Scalars['Int'];
  block: Scalars['Int'];
  user: User;
  pair: Pair;
  token0PriceUSD: Scalars['BigDecimal'];
  token1PriceUSD: Scalars['BigDecimal'];
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  liquidityTokenTotalSupply: Scalars['BigDecimal'];
  liquidityTokenBalance: Scalars['BigDecimal'];
};

export type LiquidityPositionSnapshot_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  liquidityPosition?: Maybe<Scalars['String']>;
  liquidityPosition_not?: Maybe<Scalars['String']>;
  liquidityPosition_gt?: Maybe<Scalars['String']>;
  liquidityPosition_lt?: Maybe<Scalars['String']>;
  liquidityPosition_gte?: Maybe<Scalars['String']>;
  liquidityPosition_lte?: Maybe<Scalars['String']>;
  liquidityPosition_in?: Maybe<Array<Scalars['String']>>;
  liquidityPosition_not_in?: Maybe<Array<Scalars['String']>>;
  liquidityPosition_contains?: Maybe<Scalars['String']>;
  liquidityPosition_not_contains?: Maybe<Scalars['String']>;
  liquidityPosition_starts_with?: Maybe<Scalars['String']>;
  liquidityPosition_not_starts_with?: Maybe<Scalars['String']>;
  liquidityPosition_ends_with?: Maybe<Scalars['String']>;
  liquidityPosition_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
  block?: Maybe<Scalars['Int']>;
  block_not?: Maybe<Scalars['Int']>;
  block_gt?: Maybe<Scalars['Int']>;
  block_lt?: Maybe<Scalars['Int']>;
  block_gte?: Maybe<Scalars['Int']>;
  block_lte?: Maybe<Scalars['Int']>;
  block_in?: Maybe<Array<Scalars['Int']>>;
  block_not_in?: Maybe<Array<Scalars['Int']>>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  pair?: Maybe<Scalars['String']>;
  pair_not?: Maybe<Scalars['String']>;
  pair_gt?: Maybe<Scalars['String']>;
  pair_lt?: Maybe<Scalars['String']>;
  pair_gte?: Maybe<Scalars['String']>;
  pair_lte?: Maybe<Scalars['String']>;
  pair_in?: Maybe<Array<Scalars['String']>>;
  pair_not_in?: Maybe<Array<Scalars['String']>>;
  pair_contains?: Maybe<Scalars['String']>;
  pair_not_contains?: Maybe<Scalars['String']>;
  pair_starts_with?: Maybe<Scalars['String']>;
  pair_not_starts_with?: Maybe<Scalars['String']>;
  pair_ends_with?: Maybe<Scalars['String']>;
  pair_not_ends_with?: Maybe<Scalars['String']>;
  token0PriceUSD?: Maybe<Scalars['BigDecimal']>;
  token0PriceUSD_not?: Maybe<Scalars['BigDecimal']>;
  token0PriceUSD_gt?: Maybe<Scalars['BigDecimal']>;
  token0PriceUSD_lt?: Maybe<Scalars['BigDecimal']>;
  token0PriceUSD_gte?: Maybe<Scalars['BigDecimal']>;
  token0PriceUSD_lte?: Maybe<Scalars['BigDecimal']>;
  token0PriceUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  token0PriceUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  token1PriceUSD?: Maybe<Scalars['BigDecimal']>;
  token1PriceUSD_not?: Maybe<Scalars['BigDecimal']>;
  token1PriceUSD_gt?: Maybe<Scalars['BigDecimal']>;
  token1PriceUSD_lt?: Maybe<Scalars['BigDecimal']>;
  token1PriceUSD_gte?: Maybe<Scalars['BigDecimal']>;
  token1PriceUSD_lte?: Maybe<Scalars['BigDecimal']>;
  token1PriceUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  token1PriceUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve0?: Maybe<Scalars['BigDecimal']>;
  reserve0_not?: Maybe<Scalars['BigDecimal']>;
  reserve0_gt?: Maybe<Scalars['BigDecimal']>;
  reserve0_lt?: Maybe<Scalars['BigDecimal']>;
  reserve0_gte?: Maybe<Scalars['BigDecimal']>;
  reserve0_lte?: Maybe<Scalars['BigDecimal']>;
  reserve0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1?: Maybe<Scalars['BigDecimal']>;
  reserve1_not?: Maybe<Scalars['BigDecimal']>;
  reserve1_gt?: Maybe<Scalars['BigDecimal']>;
  reserve1_lt?: Maybe<Scalars['BigDecimal']>;
  reserve1_gte?: Maybe<Scalars['BigDecimal']>;
  reserve1_lte?: Maybe<Scalars['BigDecimal']>;
  reserve1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_not?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenTotalSupply?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_not?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenTotalSupply_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenBalance?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_not?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenBalance_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum LiquidityPositionSnapshot_OrderBy {
  Id = 'id',
  LiquidityPosition = 'liquidityPosition',
  Timestamp = 'timestamp',
  Block = 'block',
  User = 'user',
  Pair = 'pair',
  Token0PriceUsd = 'token0PriceUSD',
  Token1PriceUsd = 'token1PriceUSD',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  ReserveUsd = 'reserveUSD',
  LiquidityTokenTotalSupply = 'liquidityTokenTotalSupply',
  LiquidityTokenBalance = 'liquidityTokenBalance'
}

export type LiquidityPosition_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  pair?: Maybe<Scalars['String']>;
  pair_not?: Maybe<Scalars['String']>;
  pair_gt?: Maybe<Scalars['String']>;
  pair_lt?: Maybe<Scalars['String']>;
  pair_gte?: Maybe<Scalars['String']>;
  pair_lte?: Maybe<Scalars['String']>;
  pair_in?: Maybe<Array<Scalars['String']>>;
  pair_not_in?: Maybe<Array<Scalars['String']>>;
  pair_contains?: Maybe<Scalars['String']>;
  pair_not_contains?: Maybe<Scalars['String']>;
  pair_starts_with?: Maybe<Scalars['String']>;
  pair_not_starts_with?: Maybe<Scalars['String']>;
  pair_ends_with?: Maybe<Scalars['String']>;
  pair_not_ends_with?: Maybe<Scalars['String']>;
  liquidityTokenBalance?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_not?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenBalance_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum LiquidityPosition_OrderBy {
  Id = 'id',
  User = 'user',
  Pair = 'pair',
  LiquidityTokenBalance = 'liquidityTokenBalance'
}

export type Mint = {
  __typename?: 'Mint';
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  to: Scalars['Bytes'];
  liquidity: Scalars['BigDecimal'];
  sender?: Maybe<Scalars['Bytes']>;
  amount0?: Maybe<Scalars['BigDecimal']>;
  amount1?: Maybe<Scalars['BigDecimal']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  feeTo?: Maybe<Scalars['Bytes']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
};

export type Mint_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  pair?: Maybe<Scalars['String']>;
  pair_not?: Maybe<Scalars['String']>;
  pair_gt?: Maybe<Scalars['String']>;
  pair_lt?: Maybe<Scalars['String']>;
  pair_gte?: Maybe<Scalars['String']>;
  pair_lte?: Maybe<Scalars['String']>;
  pair_in?: Maybe<Array<Scalars['String']>>;
  pair_not_in?: Maybe<Array<Scalars['String']>>;
  pair_contains?: Maybe<Scalars['String']>;
  pair_not_contains?: Maybe<Scalars['String']>;
  pair_starts_with?: Maybe<Scalars['String']>;
  pair_not_starts_with?: Maybe<Scalars['String']>;
  pair_ends_with?: Maybe<Scalars['String']>;
  pair_not_ends_with?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['Bytes']>;
  to_not?: Maybe<Scalars['Bytes']>;
  to_in?: Maybe<Array<Scalars['Bytes']>>;
  to_not_in?: Maybe<Array<Scalars['Bytes']>>;
  to_contains?: Maybe<Scalars['Bytes']>;
  to_not_contains?: Maybe<Scalars['Bytes']>;
  liquidity?: Maybe<Scalars['BigDecimal']>;
  liquidity_not?: Maybe<Scalars['BigDecimal']>;
  liquidity_gt?: Maybe<Scalars['BigDecimal']>;
  liquidity_lt?: Maybe<Scalars['BigDecimal']>;
  liquidity_gte?: Maybe<Scalars['BigDecimal']>;
  liquidity_lte?: Maybe<Scalars['BigDecimal']>;
  liquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sender?: Maybe<Scalars['Bytes']>;
  sender_not?: Maybe<Scalars['Bytes']>;
  sender_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_contains?: Maybe<Scalars['Bytes']>;
  sender_not_contains?: Maybe<Scalars['Bytes']>;
  amount0?: Maybe<Scalars['BigDecimal']>;
  amount0_not?: Maybe<Scalars['BigDecimal']>;
  amount0_gt?: Maybe<Scalars['BigDecimal']>;
  amount0_lt?: Maybe<Scalars['BigDecimal']>;
  amount0_gte?: Maybe<Scalars['BigDecimal']>;
  amount0_lte?: Maybe<Scalars['BigDecimal']>;
  amount0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1?: Maybe<Scalars['BigDecimal']>;
  amount1_not?: Maybe<Scalars['BigDecimal']>;
  amount1_gt?: Maybe<Scalars['BigDecimal']>;
  amount1_lt?: Maybe<Scalars['BigDecimal']>;
  amount1_gte?: Maybe<Scalars['BigDecimal']>;
  amount1_lte?: Maybe<Scalars['BigDecimal']>;
  amount1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  logIndex?: Maybe<Scalars['BigInt']>;
  logIndex_not?: Maybe<Scalars['BigInt']>;
  logIndex_gt?: Maybe<Scalars['BigInt']>;
  logIndex_lt?: Maybe<Scalars['BigInt']>;
  logIndex_gte?: Maybe<Scalars['BigInt']>;
  logIndex_lte?: Maybe<Scalars['BigInt']>;
  logIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  amountUSD_not?: Maybe<Scalars['BigDecimal']>;
  amountUSD_gt?: Maybe<Scalars['BigDecimal']>;
  amountUSD_lt?: Maybe<Scalars['BigDecimal']>;
  amountUSD_gte?: Maybe<Scalars['BigDecimal']>;
  amountUSD_lte?: Maybe<Scalars['BigDecimal']>;
  amountUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  feeTo?: Maybe<Scalars['Bytes']>;
  feeTo_not?: Maybe<Scalars['Bytes']>;
  feeTo_in?: Maybe<Array<Scalars['Bytes']>>;
  feeTo_not_in?: Maybe<Array<Scalars['Bytes']>>;
  feeTo_contains?: Maybe<Scalars['Bytes']>;
  feeTo_not_contains?: Maybe<Scalars['Bytes']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_not?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  feeLiquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum Mint_OrderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pair = 'pair',
  To = 'to',
  Liquidity = 'liquidity',
  Sender = 'sender',
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  LogIndex = 'logIndex',
  AmountUsd = 'amountUSD',
  FeeTo = 'feeTo',
  FeeLiquidity = 'feeLiquidity'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Pair = {
  __typename?: 'Pair';
  id: Scalars['ID'];
  token0: Token;
  token1: Token;
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  totalSupply: Scalars['BigDecimal'];
  reserveETH: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  trackedReserveETH: Scalars['BigDecimal'];
  token0Price: Scalars['BigDecimal'];
  token1Price: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  liquidityProviderCount: Scalars['BigInt'];
};

export type PairDayData = {
  __typename?: 'PairDayData';
  id: Scalars['ID'];
  date: Scalars['Int'];
  pairAddress: Scalars['Bytes'];
  token0: Token;
  token1: Token;
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  totalSupply: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  dailyVolumeToken0: Scalars['BigDecimal'];
  dailyVolumeToken1: Scalars['BigDecimal'];
  dailyVolumeUSD: Scalars['BigDecimal'];
  dailyTxns: Scalars['BigInt'];
};

export type PairDayData_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  date?: Maybe<Scalars['Int']>;
  date_not?: Maybe<Scalars['Int']>;
  date_gt?: Maybe<Scalars['Int']>;
  date_lt?: Maybe<Scalars['Int']>;
  date_gte?: Maybe<Scalars['Int']>;
  date_lte?: Maybe<Scalars['Int']>;
  date_in?: Maybe<Array<Scalars['Int']>>;
  date_not_in?: Maybe<Array<Scalars['Int']>>;
  pairAddress?: Maybe<Scalars['Bytes']>;
  pairAddress_not?: Maybe<Scalars['Bytes']>;
  pairAddress_in?: Maybe<Array<Scalars['Bytes']>>;
  pairAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
  pairAddress_contains?: Maybe<Scalars['Bytes']>;
  pairAddress_not_contains?: Maybe<Scalars['Bytes']>;
  token0?: Maybe<Scalars['String']>;
  token0_not?: Maybe<Scalars['String']>;
  token0_gt?: Maybe<Scalars['String']>;
  token0_lt?: Maybe<Scalars['String']>;
  token0_gte?: Maybe<Scalars['String']>;
  token0_lte?: Maybe<Scalars['String']>;
  token0_in?: Maybe<Array<Scalars['String']>>;
  token0_not_in?: Maybe<Array<Scalars['String']>>;
  token0_contains?: Maybe<Scalars['String']>;
  token0_not_contains?: Maybe<Scalars['String']>;
  token0_starts_with?: Maybe<Scalars['String']>;
  token0_not_starts_with?: Maybe<Scalars['String']>;
  token0_ends_with?: Maybe<Scalars['String']>;
  token0_not_ends_with?: Maybe<Scalars['String']>;
  token1?: Maybe<Scalars['String']>;
  token1_not?: Maybe<Scalars['String']>;
  token1_gt?: Maybe<Scalars['String']>;
  token1_lt?: Maybe<Scalars['String']>;
  token1_gte?: Maybe<Scalars['String']>;
  token1_lte?: Maybe<Scalars['String']>;
  token1_in?: Maybe<Array<Scalars['String']>>;
  token1_not_in?: Maybe<Array<Scalars['String']>>;
  token1_contains?: Maybe<Scalars['String']>;
  token1_not_contains?: Maybe<Scalars['String']>;
  token1_starts_with?: Maybe<Scalars['String']>;
  token1_not_starts_with?: Maybe<Scalars['String']>;
  token1_ends_with?: Maybe<Scalars['String']>;
  token1_not_ends_with?: Maybe<Scalars['String']>;
  reserve0?: Maybe<Scalars['BigDecimal']>;
  reserve0_not?: Maybe<Scalars['BigDecimal']>;
  reserve0_gt?: Maybe<Scalars['BigDecimal']>;
  reserve0_lt?: Maybe<Scalars['BigDecimal']>;
  reserve0_gte?: Maybe<Scalars['BigDecimal']>;
  reserve0_lte?: Maybe<Scalars['BigDecimal']>;
  reserve0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1?: Maybe<Scalars['BigDecimal']>;
  reserve1_not?: Maybe<Scalars['BigDecimal']>;
  reserve1_gt?: Maybe<Scalars['BigDecimal']>;
  reserve1_lt?: Maybe<Scalars['BigDecimal']>;
  reserve1_gte?: Maybe<Scalars['BigDecimal']>;
  reserve1_lte?: Maybe<Scalars['BigDecimal']>;
  reserve1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSupply?: Maybe<Scalars['BigDecimal']>;
  totalSupply_not?: Maybe<Scalars['BigDecimal']>;
  totalSupply_gt?: Maybe<Scalars['BigDecimal']>;
  totalSupply_lt?: Maybe<Scalars['BigDecimal']>;
  totalSupply_gte?: Maybe<Scalars['BigDecimal']>;
  totalSupply_lte?: Maybe<Scalars['BigDecimal']>;
  totalSupply_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSupply_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_not?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeToken0?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_not?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_gt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_lt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_gte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_lte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeToken0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeToken1?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_not?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_gt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_lt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_gte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_lte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeToken1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyTxns?: Maybe<Scalars['BigInt']>;
  dailyTxns_not?: Maybe<Scalars['BigInt']>;
  dailyTxns_gt?: Maybe<Scalars['BigInt']>;
  dailyTxns_lt?: Maybe<Scalars['BigInt']>;
  dailyTxns_gte?: Maybe<Scalars['BigInt']>;
  dailyTxns_lte?: Maybe<Scalars['BigInt']>;
  dailyTxns_in?: Maybe<Array<Scalars['BigInt']>>;
  dailyTxns_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum PairDayData_OrderBy {
  Id = 'id',
  Date = 'date',
  PairAddress = 'pairAddress',
  Token0 = 'token0',
  Token1 = 'token1',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  TotalSupply = 'totalSupply',
  ReserveUsd = 'reserveUSD',
  DailyVolumeToken0 = 'dailyVolumeToken0',
  DailyVolumeToken1 = 'dailyVolumeToken1',
  DailyVolumeUsd = 'dailyVolumeUSD',
  DailyTxns = 'dailyTxns'
}

export type PairHourData = {
  __typename?: 'PairHourData';
  id: Scalars['ID'];
  hourStartUnix: Scalars['Int'];
  pair: Pair;
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  hourlyVolumeToken0: Scalars['BigDecimal'];
  hourlyVolumeToken1: Scalars['BigDecimal'];
  hourlyVolumeUSD: Scalars['BigDecimal'];
  hourlyTxns: Scalars['BigInt'];
};

export type PairHourData_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  hourStartUnix?: Maybe<Scalars['Int']>;
  hourStartUnix_not?: Maybe<Scalars['Int']>;
  hourStartUnix_gt?: Maybe<Scalars['Int']>;
  hourStartUnix_lt?: Maybe<Scalars['Int']>;
  hourStartUnix_gte?: Maybe<Scalars['Int']>;
  hourStartUnix_lte?: Maybe<Scalars['Int']>;
  hourStartUnix_in?: Maybe<Array<Scalars['Int']>>;
  hourStartUnix_not_in?: Maybe<Array<Scalars['Int']>>;
  pair?: Maybe<Scalars['String']>;
  pair_not?: Maybe<Scalars['String']>;
  pair_gt?: Maybe<Scalars['String']>;
  pair_lt?: Maybe<Scalars['String']>;
  pair_gte?: Maybe<Scalars['String']>;
  pair_lte?: Maybe<Scalars['String']>;
  pair_in?: Maybe<Array<Scalars['String']>>;
  pair_not_in?: Maybe<Array<Scalars['String']>>;
  pair_contains?: Maybe<Scalars['String']>;
  pair_not_contains?: Maybe<Scalars['String']>;
  pair_starts_with?: Maybe<Scalars['String']>;
  pair_not_starts_with?: Maybe<Scalars['String']>;
  pair_ends_with?: Maybe<Scalars['String']>;
  pair_not_ends_with?: Maybe<Scalars['String']>;
  reserve0?: Maybe<Scalars['BigDecimal']>;
  reserve0_not?: Maybe<Scalars['BigDecimal']>;
  reserve0_gt?: Maybe<Scalars['BigDecimal']>;
  reserve0_lt?: Maybe<Scalars['BigDecimal']>;
  reserve0_gte?: Maybe<Scalars['BigDecimal']>;
  reserve0_lte?: Maybe<Scalars['BigDecimal']>;
  reserve0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1?: Maybe<Scalars['BigDecimal']>;
  reserve1_not?: Maybe<Scalars['BigDecimal']>;
  reserve1_gt?: Maybe<Scalars['BigDecimal']>;
  reserve1_lt?: Maybe<Scalars['BigDecimal']>;
  reserve1_gte?: Maybe<Scalars['BigDecimal']>;
  reserve1_lte?: Maybe<Scalars['BigDecimal']>;
  reserve1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_not?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeToken0?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_not?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_gt?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_lt?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_gte?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_lte?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeToken0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeToken1?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_not?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_gt?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_lt?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_gte?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_lte?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeToken1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  hourlyTxns?: Maybe<Scalars['BigInt']>;
  hourlyTxns_not?: Maybe<Scalars['BigInt']>;
  hourlyTxns_gt?: Maybe<Scalars['BigInt']>;
  hourlyTxns_lt?: Maybe<Scalars['BigInt']>;
  hourlyTxns_gte?: Maybe<Scalars['BigInt']>;
  hourlyTxns_lte?: Maybe<Scalars['BigInt']>;
  hourlyTxns_in?: Maybe<Array<Scalars['BigInt']>>;
  hourlyTxns_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum PairHourData_OrderBy {
  Id = 'id',
  HourStartUnix = 'hourStartUnix',
  Pair = 'pair',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  ReserveUsd = 'reserveUSD',
  HourlyVolumeToken0 = 'hourlyVolumeToken0',
  HourlyVolumeToken1 = 'hourlyVolumeToken1',
  HourlyVolumeUsd = 'hourlyVolumeUSD',
  HourlyTxns = 'hourlyTxns'
}

export type Pair_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  token0?: Maybe<Scalars['String']>;
  token0_not?: Maybe<Scalars['String']>;
  token0_gt?: Maybe<Scalars['String']>;
  token0_lt?: Maybe<Scalars['String']>;
  token0_gte?: Maybe<Scalars['String']>;
  token0_lte?: Maybe<Scalars['String']>;
  token0_in?: Maybe<Array<Scalars['String']>>;
  token0_not_in?: Maybe<Array<Scalars['String']>>;
  token0_contains?: Maybe<Scalars['String']>;
  token0_not_contains?: Maybe<Scalars['String']>;
  token0_starts_with?: Maybe<Scalars['String']>;
  token0_not_starts_with?: Maybe<Scalars['String']>;
  token0_ends_with?: Maybe<Scalars['String']>;
  token0_not_ends_with?: Maybe<Scalars['String']>;
  token1?: Maybe<Scalars['String']>;
  token1_not?: Maybe<Scalars['String']>;
  token1_gt?: Maybe<Scalars['String']>;
  token1_lt?: Maybe<Scalars['String']>;
  token1_gte?: Maybe<Scalars['String']>;
  token1_lte?: Maybe<Scalars['String']>;
  token1_in?: Maybe<Array<Scalars['String']>>;
  token1_not_in?: Maybe<Array<Scalars['String']>>;
  token1_contains?: Maybe<Scalars['String']>;
  token1_not_contains?: Maybe<Scalars['String']>;
  token1_starts_with?: Maybe<Scalars['String']>;
  token1_not_starts_with?: Maybe<Scalars['String']>;
  token1_ends_with?: Maybe<Scalars['String']>;
  token1_not_ends_with?: Maybe<Scalars['String']>;
  reserve0?: Maybe<Scalars['BigDecimal']>;
  reserve0_not?: Maybe<Scalars['BigDecimal']>;
  reserve0_gt?: Maybe<Scalars['BigDecimal']>;
  reserve0_lt?: Maybe<Scalars['BigDecimal']>;
  reserve0_gte?: Maybe<Scalars['BigDecimal']>;
  reserve0_lte?: Maybe<Scalars['BigDecimal']>;
  reserve0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1?: Maybe<Scalars['BigDecimal']>;
  reserve1_not?: Maybe<Scalars['BigDecimal']>;
  reserve1_gt?: Maybe<Scalars['BigDecimal']>;
  reserve1_lt?: Maybe<Scalars['BigDecimal']>;
  reserve1_gte?: Maybe<Scalars['BigDecimal']>;
  reserve1_lte?: Maybe<Scalars['BigDecimal']>;
  reserve1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSupply?: Maybe<Scalars['BigDecimal']>;
  totalSupply_not?: Maybe<Scalars['BigDecimal']>;
  totalSupply_gt?: Maybe<Scalars['BigDecimal']>;
  totalSupply_lt?: Maybe<Scalars['BigDecimal']>;
  totalSupply_gte?: Maybe<Scalars['BigDecimal']>;
  totalSupply_lte?: Maybe<Scalars['BigDecimal']>;
  totalSupply_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSupply_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveETH?: Maybe<Scalars['BigDecimal']>;
  reserveETH_not?: Maybe<Scalars['BigDecimal']>;
  reserveETH_gt?: Maybe<Scalars['BigDecimal']>;
  reserveETH_lt?: Maybe<Scalars['BigDecimal']>;
  reserveETH_gte?: Maybe<Scalars['BigDecimal']>;
  reserveETH_lte?: Maybe<Scalars['BigDecimal']>;
  reserveETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_not?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  trackedReserveETH?: Maybe<Scalars['BigDecimal']>;
  trackedReserveETH_not?: Maybe<Scalars['BigDecimal']>;
  trackedReserveETH_gt?: Maybe<Scalars['BigDecimal']>;
  trackedReserveETH_lt?: Maybe<Scalars['BigDecimal']>;
  trackedReserveETH_gte?: Maybe<Scalars['BigDecimal']>;
  trackedReserveETH_lte?: Maybe<Scalars['BigDecimal']>;
  trackedReserveETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  trackedReserveETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  token0Price?: Maybe<Scalars['BigDecimal']>;
  token0Price_not?: Maybe<Scalars['BigDecimal']>;
  token0Price_gt?: Maybe<Scalars['BigDecimal']>;
  token0Price_lt?: Maybe<Scalars['BigDecimal']>;
  token0Price_gte?: Maybe<Scalars['BigDecimal']>;
  token0Price_lte?: Maybe<Scalars['BigDecimal']>;
  token0Price_in?: Maybe<Array<Scalars['BigDecimal']>>;
  token0Price_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  token1Price?: Maybe<Scalars['BigDecimal']>;
  token1Price_not?: Maybe<Scalars['BigDecimal']>;
  token1Price_gt?: Maybe<Scalars['BigDecimal']>;
  token1Price_lt?: Maybe<Scalars['BigDecimal']>;
  token1Price_gte?: Maybe<Scalars['BigDecimal']>;
  token1Price_lte?: Maybe<Scalars['BigDecimal']>;
  token1Price_in?: Maybe<Array<Scalars['BigDecimal']>>;
  token1Price_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken0?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_not?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_not?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  txCount?: Maybe<Scalars['BigInt']>;
  txCount_not?: Maybe<Scalars['BigInt']>;
  txCount_gt?: Maybe<Scalars['BigInt']>;
  txCount_lt?: Maybe<Scalars['BigInt']>;
  txCount_gte?: Maybe<Scalars['BigInt']>;
  txCount_lte?: Maybe<Scalars['BigInt']>;
  txCount_in?: Maybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
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
  liquidityProviderCount?: Maybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: Maybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: Maybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: Maybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: Maybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: Maybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Pair_OrderBy {
  Id = 'id',
  Token0 = 'token0',
  Token1 = 'token1',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  TotalSupply = 'totalSupply',
  ReserveEth = 'reserveETH',
  ReserveUsd = 'reserveUSD',
  TrackedReserveEth = 'trackedReserveETH',
  Token0Price = 'token0Price',
  Token1Price = 'token1Price',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  TxCount = 'txCount',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  LiquidityProviderCount = 'liquidityProviderCount'
}

export type Query = {
  __typename?: 'Query';
  uniswapFactory?: Maybe<UniswapFactory>;
  uniswapFactories: Array<UniswapFactory>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  user?: Maybe<User>;
  users: Array<User>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  uniswapDayData?: Maybe<UniswapDayData>;
  uniswapDayDatas: Array<UniswapDayData>;
  pairHourData?: Maybe<PairHourData>;
  pairHourDatas: Array<PairHourData>;
  pairDayData?: Maybe<PairDayData>;
  pairDayDatas: Array<PairDayData>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryUniswapFactoryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUniswapFactoriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UniswapFactory_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UniswapFactory_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPairArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPairsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pair_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pair_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLiquidityPositionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLiquidityPositionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPosition_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPosition_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLiquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLiquidityPositionSnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPositionSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPositionSnapshot_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMintArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMintsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Mint_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Mint_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBurnArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBurnsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Burn_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Burn_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySwapArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySwapsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBundleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBundlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bundle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bundle_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUniswapDayDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUniswapDayDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UniswapDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UniswapDayData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPairHourDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPairHourDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairHourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairHourData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPairDayDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPairDayDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenDayDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenDayDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenDayData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Subscription = {
  __typename?: 'Subscription';
  uniswapFactory?: Maybe<UniswapFactory>;
  uniswapFactories: Array<UniswapFactory>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  user?: Maybe<User>;
  users: Array<User>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  uniswapDayData?: Maybe<UniswapDayData>;
  uniswapDayDatas: Array<UniswapDayData>;
  pairHourData?: Maybe<PairHourData>;
  pairHourDatas: Array<PairHourData>;
  pairDayData?: Maybe<PairDayData>;
  pairDayDatas: Array<PairDayData>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionUniswapFactoryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUniswapFactoriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UniswapFactory_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UniswapFactory_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPairArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPairsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pair_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pair_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLiquidityPositionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLiquidityPositionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPosition_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPosition_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLiquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLiquidityPositionSnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPositionSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPositionSnapshot_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMintArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMintsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Mint_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Mint_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBurnArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBurnsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Burn_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Burn_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSwapArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSwapsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBundleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBundlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bundle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bundle_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUniswapDayDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUniswapDayDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UniswapDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UniswapDayData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPairHourDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPairHourDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairHourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairHourData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPairDayDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPairDayDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenDayDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenDayDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenDayData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Swap = {
  __typename?: 'Swap';
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  sender: Scalars['Bytes'];
  amount0In: Scalars['BigDecimal'];
  amount1In: Scalars['BigDecimal'];
  amount0Out: Scalars['BigDecimal'];
  amount1Out: Scalars['BigDecimal'];
  to: Scalars['Bytes'];
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD: Scalars['BigDecimal'];
};

export type Swap_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  pair?: Maybe<Scalars['String']>;
  pair_not?: Maybe<Scalars['String']>;
  pair_gt?: Maybe<Scalars['String']>;
  pair_lt?: Maybe<Scalars['String']>;
  pair_gte?: Maybe<Scalars['String']>;
  pair_lte?: Maybe<Scalars['String']>;
  pair_in?: Maybe<Array<Scalars['String']>>;
  pair_not_in?: Maybe<Array<Scalars['String']>>;
  pair_contains?: Maybe<Scalars['String']>;
  pair_not_contains?: Maybe<Scalars['String']>;
  pair_starts_with?: Maybe<Scalars['String']>;
  pair_not_starts_with?: Maybe<Scalars['String']>;
  pair_ends_with?: Maybe<Scalars['String']>;
  pair_not_ends_with?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['Bytes']>;
  sender_not?: Maybe<Scalars['Bytes']>;
  sender_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_contains?: Maybe<Scalars['Bytes']>;
  sender_not_contains?: Maybe<Scalars['Bytes']>;
  amount0In?: Maybe<Scalars['BigDecimal']>;
  amount0In_not?: Maybe<Scalars['BigDecimal']>;
  amount0In_gt?: Maybe<Scalars['BigDecimal']>;
  amount0In_lt?: Maybe<Scalars['BigDecimal']>;
  amount0In_gte?: Maybe<Scalars['BigDecimal']>;
  amount0In_lte?: Maybe<Scalars['BigDecimal']>;
  amount0In_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount0In_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1In?: Maybe<Scalars['BigDecimal']>;
  amount1In_not?: Maybe<Scalars['BigDecimal']>;
  amount1In_gt?: Maybe<Scalars['BigDecimal']>;
  amount1In_lt?: Maybe<Scalars['BigDecimal']>;
  amount1In_gte?: Maybe<Scalars['BigDecimal']>;
  amount1In_lte?: Maybe<Scalars['BigDecimal']>;
  amount1In_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1In_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount0Out?: Maybe<Scalars['BigDecimal']>;
  amount0Out_not?: Maybe<Scalars['BigDecimal']>;
  amount0Out_gt?: Maybe<Scalars['BigDecimal']>;
  amount0Out_lt?: Maybe<Scalars['BigDecimal']>;
  amount0Out_gte?: Maybe<Scalars['BigDecimal']>;
  amount0Out_lte?: Maybe<Scalars['BigDecimal']>;
  amount0Out_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount0Out_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1Out?: Maybe<Scalars['BigDecimal']>;
  amount1Out_not?: Maybe<Scalars['BigDecimal']>;
  amount1Out_gt?: Maybe<Scalars['BigDecimal']>;
  amount1Out_lt?: Maybe<Scalars['BigDecimal']>;
  amount1Out_gte?: Maybe<Scalars['BigDecimal']>;
  amount1Out_lte?: Maybe<Scalars['BigDecimal']>;
  amount1Out_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1Out_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  to?: Maybe<Scalars['Bytes']>;
  to_not?: Maybe<Scalars['Bytes']>;
  to_in?: Maybe<Array<Scalars['Bytes']>>;
  to_not_in?: Maybe<Array<Scalars['Bytes']>>;
  to_contains?: Maybe<Scalars['Bytes']>;
  to_not_contains?: Maybe<Scalars['Bytes']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  logIndex_not?: Maybe<Scalars['BigInt']>;
  logIndex_gt?: Maybe<Scalars['BigInt']>;
  logIndex_lt?: Maybe<Scalars['BigInt']>;
  logIndex_gte?: Maybe<Scalars['BigInt']>;
  logIndex_lte?: Maybe<Scalars['BigInt']>;
  logIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  amountUSD_not?: Maybe<Scalars['BigDecimal']>;
  amountUSD_gt?: Maybe<Scalars['BigDecimal']>;
  amountUSD_lt?: Maybe<Scalars['BigDecimal']>;
  amountUSD_gte?: Maybe<Scalars['BigDecimal']>;
  amountUSD_lte?: Maybe<Scalars['BigDecimal']>;
  amountUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum Swap_OrderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pair = 'pair',
  Sender = 'sender',
  Amount0In = 'amount0In',
  Amount1In = 'amount1In',
  Amount0Out = 'amount0Out',
  Amount1Out = 'amount1Out',
  To = 'to',
  LogIndex = 'logIndex',
  AmountUsd = 'amountUSD'
}

export type Token = {
  __typename?: 'Token';
  id: Scalars['ID'];
  symbol: Scalars['String'];
  name: Scalars['String'];
  decimals: Scalars['BigInt'];
  totalSupply: Scalars['BigInt'];
  tradeVolume: Scalars['BigDecimal'];
  tradeVolumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  totalLiquidity: Scalars['BigDecimal'];
  derivedETH?: Maybe<Scalars['BigDecimal']>;
  mostLiquidPairs: Array<Maybe<PairDayData>>;
};


export type TokenMostLiquidPairsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
};

export type TokenDayData = {
  __typename?: 'TokenDayData';
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: Token;
  dailyVolumeToken: Scalars['BigDecimal'];
  dailyVolumeETH: Scalars['BigDecimal'];
  dailyVolumeUSD: Scalars['BigDecimal'];
  dailyTxns: Scalars['BigInt'];
  totalLiquidityToken: Scalars['BigDecimal'];
  totalLiquidityETH: Scalars['BigDecimal'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  priceUSD: Scalars['BigDecimal'];
  maxStored: Scalars['Int'];
  mostLiquidPairs: Array<PairDayData>;
};


export type TokenDayDataMostLiquidPairsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
};

export type TokenDayData_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  date?: Maybe<Scalars['Int']>;
  date_not?: Maybe<Scalars['Int']>;
  date_gt?: Maybe<Scalars['Int']>;
  date_lt?: Maybe<Scalars['Int']>;
  date_gte?: Maybe<Scalars['Int']>;
  date_lte?: Maybe<Scalars['Int']>;
  date_in?: Maybe<Array<Scalars['Int']>>;
  date_not_in?: Maybe<Array<Scalars['Int']>>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_gt?: Maybe<Scalars['String']>;
  token_lt?: Maybe<Scalars['String']>;
  token_gte?: Maybe<Scalars['String']>;
  token_lte?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Scalars['String']>>;
  token_not_in?: Maybe<Array<Scalars['String']>>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  dailyVolumeToken?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken_not?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken_gt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken_lt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken_gte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken_lte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeToken_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeToken_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeETH?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeETH_not?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeETH_gt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeETH_lt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeETH_gte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeETH_lte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyTxns?: Maybe<Scalars['BigInt']>;
  dailyTxns_not?: Maybe<Scalars['BigInt']>;
  dailyTxns_gt?: Maybe<Scalars['BigInt']>;
  dailyTxns_lt?: Maybe<Scalars['BigInt']>;
  dailyTxns_gte?: Maybe<Scalars['BigInt']>;
  dailyTxns_lte?: Maybe<Scalars['BigInt']>;
  dailyTxns_in?: Maybe<Array<Scalars['BigInt']>>;
  dailyTxns_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalLiquidityToken?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityToken_not?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityToken_gt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityToken_lt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityToken_gte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityToken_lte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityToken_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityToken_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_not?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  priceUSD?: Maybe<Scalars['BigDecimal']>;
  priceUSD_not?: Maybe<Scalars['BigDecimal']>;
  priceUSD_gt?: Maybe<Scalars['BigDecimal']>;
  priceUSD_lt?: Maybe<Scalars['BigDecimal']>;
  priceUSD_gte?: Maybe<Scalars['BigDecimal']>;
  priceUSD_lte?: Maybe<Scalars['BigDecimal']>;
  priceUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  priceUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  maxStored?: Maybe<Scalars['Int']>;
  maxStored_not?: Maybe<Scalars['Int']>;
  maxStored_gt?: Maybe<Scalars['Int']>;
  maxStored_lt?: Maybe<Scalars['Int']>;
  maxStored_gte?: Maybe<Scalars['Int']>;
  maxStored_lte?: Maybe<Scalars['Int']>;
  maxStored_in?: Maybe<Array<Scalars['Int']>>;
  maxStored_not_in?: Maybe<Array<Scalars['Int']>>;
  mostLiquidPairs?: Maybe<Array<Scalars['String']>>;
  mostLiquidPairs_not?: Maybe<Array<Scalars['String']>>;
  mostLiquidPairs_contains?: Maybe<Array<Scalars['String']>>;
  mostLiquidPairs_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum TokenDayData_OrderBy {
  Id = 'id',
  Date = 'date',
  Token = 'token',
  DailyVolumeToken = 'dailyVolumeToken',
  DailyVolumeEth = 'dailyVolumeETH',
  DailyVolumeUsd = 'dailyVolumeUSD',
  DailyTxns = 'dailyTxns',
  TotalLiquidityToken = 'totalLiquidityToken',
  TotalLiquidityEth = 'totalLiquidityETH',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  PriceUsd = 'priceUSD',
  MaxStored = 'maxStored',
  MostLiquidPairs = 'mostLiquidPairs'
}

export type Token_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
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
  decimals?: Maybe<Scalars['BigInt']>;
  decimals_not?: Maybe<Scalars['BigInt']>;
  decimals_gt?: Maybe<Scalars['BigInt']>;
  decimals_lt?: Maybe<Scalars['BigInt']>;
  decimals_gte?: Maybe<Scalars['BigInt']>;
  decimals_lte?: Maybe<Scalars['BigInt']>;
  decimals_in?: Maybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply?: Maybe<Scalars['BigInt']>;
  totalSupply_not?: Maybe<Scalars['BigInt']>;
  totalSupply_gt?: Maybe<Scalars['BigInt']>;
  totalSupply_lt?: Maybe<Scalars['BigInt']>;
  totalSupply_gte?: Maybe<Scalars['BigInt']>;
  totalSupply_lte?: Maybe<Scalars['BigInt']>;
  totalSupply_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: Maybe<Array<Scalars['BigInt']>>;
  tradeVolume?: Maybe<Scalars['BigDecimal']>;
  tradeVolume_not?: Maybe<Scalars['BigDecimal']>;
  tradeVolume_gt?: Maybe<Scalars['BigDecimal']>;
  tradeVolume_lt?: Maybe<Scalars['BigDecimal']>;
  tradeVolume_gte?: Maybe<Scalars['BigDecimal']>;
  tradeVolume_lte?: Maybe<Scalars['BigDecimal']>;
  tradeVolume_in?: Maybe<Array<Scalars['BigDecimal']>>;
  tradeVolume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  tradeVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  tradeVolumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  txCount?: Maybe<Scalars['BigInt']>;
  txCount_not?: Maybe<Scalars['BigInt']>;
  txCount_gt?: Maybe<Scalars['BigInt']>;
  txCount_lt?: Maybe<Scalars['BigInt']>;
  txCount_gte?: Maybe<Scalars['BigInt']>;
  txCount_lte?: Maybe<Scalars['BigInt']>;
  txCount_in?: Maybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalLiquidity?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_not?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  derivedETH?: Maybe<Scalars['BigDecimal']>;
  derivedETH_not?: Maybe<Scalars['BigDecimal']>;
  derivedETH_gt?: Maybe<Scalars['BigDecimal']>;
  derivedETH_lt?: Maybe<Scalars['BigDecimal']>;
  derivedETH_gte?: Maybe<Scalars['BigDecimal']>;
  derivedETH_lte?: Maybe<Scalars['BigDecimal']>;
  derivedETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  derivedETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  mostLiquidPairs?: Maybe<Array<Scalars['String']>>;
  mostLiquidPairs_not?: Maybe<Array<Scalars['String']>>;
  mostLiquidPairs_contains?: Maybe<Array<Scalars['String']>>;
  mostLiquidPairs_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum Token_OrderBy {
  Id = 'id',
  Symbol = 'symbol',
  Name = 'name',
  Decimals = 'decimals',
  TotalSupply = 'totalSupply',
  TradeVolume = 'tradeVolume',
  TradeVolumeUsd = 'tradeVolumeUSD',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  TxCount = 'txCount',
  TotalLiquidity = 'totalLiquidity',
  DerivedEth = 'derivedETH',
  MostLiquidPairs = 'mostLiquidPairs'
}

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  mints: Array<Maybe<Mint>>;
  burns: Array<Maybe<Burn>>;
  swaps: Array<Maybe<Swap>>;
};


export type TransactionMintsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Mint_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Mint_Filter>;
};


export type TransactionBurnsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Burn_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Burn_Filter>;
};


export type TransactionSwapsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
};

export type Transaction_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  blockNumber_not?: Maybe<Scalars['BigInt']>;
  blockNumber_gt?: Maybe<Scalars['BigInt']>;
  blockNumber_lt?: Maybe<Scalars['BigInt']>;
  blockNumber_gte?: Maybe<Scalars['BigInt']>;
  blockNumber_lte?: Maybe<Scalars['BigInt']>;
  blockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  mints?: Maybe<Array<Scalars['String']>>;
  mints_not?: Maybe<Array<Scalars['String']>>;
  mints_contains?: Maybe<Array<Scalars['String']>>;
  mints_not_contains?: Maybe<Array<Scalars['String']>>;
  burns?: Maybe<Array<Scalars['String']>>;
  burns_not?: Maybe<Array<Scalars['String']>>;
  burns_contains?: Maybe<Array<Scalars['String']>>;
  burns_not_contains?: Maybe<Array<Scalars['String']>>;
  swaps?: Maybe<Array<Scalars['String']>>;
  swaps_not?: Maybe<Array<Scalars['String']>>;
  swaps_contains?: Maybe<Array<Scalars['String']>>;
  swaps_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum Transaction_OrderBy {
  Id = 'id',
  BlockNumber = 'blockNumber',
  Timestamp = 'timestamp',
  Mints = 'mints',
  Burns = 'burns',
  Swaps = 'swaps'
}

export type UniswapDayData = {
  __typename?: 'UniswapDayData';
  id: Scalars['ID'];
  date: Scalars['Int'];
  dailyVolumeETH: Scalars['BigDecimal'];
  dailyVolumeUSD: Scalars['BigDecimal'];
  dailyVolumeUntracked: Scalars['BigDecimal'];
  totalVolumeETH: Scalars['BigDecimal'];
  totalLiquidityETH: Scalars['BigDecimal'];
  totalVolumeUSD: Scalars['BigDecimal'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  maxStored?: Maybe<Scalars['Int']>;
  mostLiquidTokens: Array<TokenDayData>;
  txCount: Scalars['BigInt'];
};


export type UniswapDayDataMostLiquidTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenDayData_Filter>;
};

export type UniswapDayData_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  date?: Maybe<Scalars['Int']>;
  date_not?: Maybe<Scalars['Int']>;
  date_gt?: Maybe<Scalars['Int']>;
  date_lt?: Maybe<Scalars['Int']>;
  date_gte?: Maybe<Scalars['Int']>;
  date_lte?: Maybe<Scalars['Int']>;
  date_in?: Maybe<Array<Scalars['Int']>>;
  date_not_in?: Maybe<Array<Scalars['Int']>>;
  dailyVolumeETH?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeETH_not?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeETH_gt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeETH_lt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeETH_gte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeETH_lte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUntracked?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_not?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_gt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_lt?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_gte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_lte?: Maybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_in?: Maybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUntracked_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH?: Maybe<Scalars['BigDecimal']>;
  totalVolumeETH_not?: Maybe<Scalars['BigDecimal']>;
  totalVolumeETH_gt?: Maybe<Scalars['BigDecimal']>;
  totalVolumeETH_lt?: Maybe<Scalars['BigDecimal']>;
  totalVolumeETH_gte?: Maybe<Scalars['BigDecimal']>;
  totalVolumeETH_lte?: Maybe<Scalars['BigDecimal']>;
  totalVolumeETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_not?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  totalVolumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  maxStored?: Maybe<Scalars['Int']>;
  maxStored_not?: Maybe<Scalars['Int']>;
  maxStored_gt?: Maybe<Scalars['Int']>;
  maxStored_lt?: Maybe<Scalars['Int']>;
  maxStored_gte?: Maybe<Scalars['Int']>;
  maxStored_lte?: Maybe<Scalars['Int']>;
  maxStored_in?: Maybe<Array<Scalars['Int']>>;
  maxStored_not_in?: Maybe<Array<Scalars['Int']>>;
  mostLiquidTokens?: Maybe<Array<Scalars['String']>>;
  mostLiquidTokens_not?: Maybe<Array<Scalars['String']>>;
  mostLiquidTokens_contains?: Maybe<Array<Scalars['String']>>;
  mostLiquidTokens_not_contains?: Maybe<Array<Scalars['String']>>;
  txCount?: Maybe<Scalars['BigInt']>;
  txCount_not?: Maybe<Scalars['BigInt']>;
  txCount_gt?: Maybe<Scalars['BigInt']>;
  txCount_lt?: Maybe<Scalars['BigInt']>;
  txCount_gte?: Maybe<Scalars['BigInt']>;
  txCount_lte?: Maybe<Scalars['BigInt']>;
  txCount_in?: Maybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum UniswapDayData_OrderBy {
  Id = 'id',
  Date = 'date',
  DailyVolumeEth = 'dailyVolumeETH',
  DailyVolumeUsd = 'dailyVolumeUSD',
  DailyVolumeUntracked = 'dailyVolumeUntracked',
  TotalVolumeEth = 'totalVolumeETH',
  TotalLiquidityEth = 'totalLiquidityETH',
  TotalVolumeUsd = 'totalVolumeUSD',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  MaxStored = 'maxStored',
  MostLiquidTokens = 'mostLiquidTokens',
  TxCount = 'txCount'
}

export type UniswapFactory = {
  __typename?: 'UniswapFactory';
  id: Scalars['ID'];
  pairCount: Scalars['Int'];
  totalVolumeUSD: Scalars['BigDecimal'];
  totalVolumeETH: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  totalLiquidityETH: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  mostLiquidTokens: Array<TokenDayData>;
};


export type UniswapFactoryMostLiquidTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenDayData_Filter>;
};

export type UniswapFactory_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  pairCount?: Maybe<Scalars['Int']>;
  pairCount_not?: Maybe<Scalars['Int']>;
  pairCount_gt?: Maybe<Scalars['Int']>;
  pairCount_lt?: Maybe<Scalars['Int']>;
  pairCount_gte?: Maybe<Scalars['Int']>;
  pairCount_lte?: Maybe<Scalars['Int']>;
  pairCount_in?: Maybe<Array<Scalars['Int']>>;
  pairCount_not_in?: Maybe<Array<Scalars['Int']>>;
  totalVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  totalVolumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH?: Maybe<Scalars['BigDecimal']>;
  totalVolumeETH_not?: Maybe<Scalars['BigDecimal']>;
  totalVolumeETH_gt?: Maybe<Scalars['BigDecimal']>;
  totalVolumeETH_lt?: Maybe<Scalars['BigDecimal']>;
  totalVolumeETH_gte?: Maybe<Scalars['BigDecimal']>;
  totalVolumeETH_lte?: Maybe<Scalars['BigDecimal']>;
  totalVolumeETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_not?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidityETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  txCount?: Maybe<Scalars['BigInt']>;
  txCount_not?: Maybe<Scalars['BigInt']>;
  txCount_gt?: Maybe<Scalars['BigInt']>;
  txCount_lt?: Maybe<Scalars['BigInt']>;
  txCount_gte?: Maybe<Scalars['BigInt']>;
  txCount_lte?: Maybe<Scalars['BigInt']>;
  txCount_in?: Maybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  mostLiquidTokens?: Maybe<Array<Scalars['String']>>;
  mostLiquidTokens_not?: Maybe<Array<Scalars['String']>>;
  mostLiquidTokens_contains?: Maybe<Array<Scalars['String']>>;
  mostLiquidTokens_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum UniswapFactory_OrderBy {
  Id = 'id',
  PairCount = 'pairCount',
  TotalVolumeUsd = 'totalVolumeUSD',
  TotalVolumeEth = 'totalVolumeETH',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalLiquidityEth = 'totalLiquidityETH',
  TxCount = 'txCount',
  MostLiquidTokens = 'mostLiquidTokens'
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  liquidityPositions?: Maybe<Array<LiquidityPosition>>;
  usdSwapped: Scalars['BigDecimal'];
};


export type UserLiquidityPositionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPosition_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPosition_Filter>;
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
  usdSwapped?: Maybe<Scalars['BigDecimal']>;
  usdSwapped_not?: Maybe<Scalars['BigDecimal']>;
  usdSwapped_gt?: Maybe<Scalars['BigDecimal']>;
  usdSwapped_lt?: Maybe<Scalars['BigDecimal']>;
  usdSwapped_gte?: Maybe<Scalars['BigDecimal']>;
  usdSwapped_lte?: Maybe<Scalars['BigDecimal']>;
  usdSwapped_in?: Maybe<Array<Scalars['BigDecimal']>>;
  usdSwapped_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum User_OrderBy {
  Id = 'id',
  LiquidityPositions = 'liquidityPositions',
  UsdSwapped = 'usdSwapped'
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

export type TokenShortFragment = (
  { __typename?: 'Token' }
  & Pick<Token, 'id' | 'symbol' | 'name' | 'decimals' | 'derivedETH'>
);

export type GetTokenPricesQueryVariables = Exact<{
  currencyContracts?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type GetTokenPricesQuery = (
  { __typename?: 'Query' }
  & { bundle?: Maybe<(
    { __typename?: 'Bundle' }
    & Pick<Bundle, 'ethPrice'>
  )>, tokens: Array<(
    { __typename?: 'Token' }
    & TokenShortFragment
  )> }
);
