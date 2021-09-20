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
  ask_event_status_enum: any;
  bid_event_status_enum: any;
  bid_status_enum: any;
  jsonb: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};


/** columns and relationships of "auction" */
export type Auction = {
  __typename?: 'Auction';
  amountTokenOwnerReceived?: Maybe<Scalars['String']>;
  /** An array relationship */
  approvalEvents: Array<AuctionApprovalUpdatedEvent>;
  /** An aggregate relationship */
  approvalEvents_aggregate: AuctionApprovalUpdatedEvent_Aggregate;
  approved?: Maybe<Scalars['Boolean']>;
  auctionCurrency?: Maybe<Scalars['String']>;
  auctionId: Scalars['String'];
  /** An array relationship */
  bidEvents: Array<AuctionBidEvent>;
  /** An aggregate relationship */
  bidEvents_aggregate: AuctionBidEvent_Aggregate;
  /** An object relationship */
  canceledEvent?: Maybe<AuctionCanceledEvent>;
  /** An object relationship */
  createdEvent?: Maybe<AuctionCreatedEvent>;
  curator?: Maybe<Scalars['String']>;
  curatorFee?: Maybe<Scalars['String']>;
  curatorFeePercentage?: Maybe<Scalars['Int']>;
  /** An object relationship */
  currency?: Maybe<Currency>;
  duration?: Maybe<Scalars['String']>;
  /** An array relationship */
  durationExtendedEvents: Array<AuctionDurationExtendedEvent>;
  /** An aggregate relationship */
  durationExtendedEvents_aggregate: AuctionDurationExtendedEvent_Aggregate;
  /** An object relationship */
  endedEvent?: Maybe<AuctionEndedEvent>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  firstBidTime?: Maybe<Scalars['String']>;
  lastBidAmount?: Maybe<Scalars['String']>;
  lastBidder?: Maybe<Scalars['String']>;
  /** An object relationship */
  media?: Maybe<Media>;
  reservePrice?: Maybe<Scalars['String']>;
  /** An array relationship */
  reservePriceUpdatedEvents: Array<AuctionReservePriceUpdatedEvent>;
  /** An aggregate relationship */
  reservePriceUpdatedEvents_aggregate: AuctionReservePriceUpdatedEvent_Aggregate;
  /** An object relationship */
  token?: Maybe<Token>;
  tokenContract: Scalars['String'];
  tokenId: Scalars['String'];
  tokenOwner?: Maybe<Scalars['String']>;
  winner?: Maybe<Scalars['String']>;
};


/** columns and relationships of "auction" */
export type AuctionApprovalEventsArgs = {
  distinct_on?: Maybe<Array<AuctionApprovalUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionApprovalUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionApprovalUpdatedEvent_Bool_Exp>;
};


/** columns and relationships of "auction" */
export type AuctionApprovalEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionApprovalUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionApprovalUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionApprovalUpdatedEvent_Bool_Exp>;
};


/** columns and relationships of "auction" */
export type AuctionBidEventsArgs = {
  distinct_on?: Maybe<Array<AuctionBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionBidEvent_Order_By>>;
  where?: Maybe<AuctionBidEvent_Bool_Exp>;
};


/** columns and relationships of "auction" */
export type AuctionBidEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionBidEvent_Order_By>>;
  where?: Maybe<AuctionBidEvent_Bool_Exp>;
};


/** columns and relationships of "auction" */
export type AuctionDurationExtendedEventsArgs = {
  distinct_on?: Maybe<Array<AuctionDurationExtendedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionDurationExtendedEvent_Order_By>>;
  where?: Maybe<AuctionDurationExtendedEvent_Bool_Exp>;
};


/** columns and relationships of "auction" */
export type AuctionDurationExtendedEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionDurationExtendedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionDurationExtendedEvent_Order_By>>;
  where?: Maybe<AuctionDurationExtendedEvent_Bool_Exp>;
};


/** columns and relationships of "auction" */
export type AuctionReservePriceUpdatedEventsArgs = {
  distinct_on?: Maybe<Array<AuctionReservePriceUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionReservePriceUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionReservePriceUpdatedEvent_Bool_Exp>;
};


/** columns and relationships of "auction" */
export type AuctionReservePriceUpdatedEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionReservePriceUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionReservePriceUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionReservePriceUpdatedEvent_Bool_Exp>;
};

/** columns and relationships of "auction_approval_updated_event" */
export type AuctionApprovalUpdatedEvent = {
  __typename?: 'AuctionApprovalUpdatedEvent';
  address: Scalars['String'];
  approved: Scalars['Boolean'];
  /** An object relationship */
  auction?: Maybe<Auction>;
  auctionId: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  /** An object relationship */
  eventLog: EventLog;
  eventLogId: Scalars['String'];
  id: Scalars['String'];
  logIndex: Scalars['Int'];
  /** An object relationship */
  media?: Maybe<Media>;
  /** An object relationship */
  token?: Maybe<Token>;
  tokenContract: Scalars['String'];
  tokenId: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transactionHash: Scalars['String'];
};

/** aggregated selection of "auction_approval_updated_event" */
export type AuctionApprovalUpdatedEvent_Aggregate = {
  __typename?: 'AuctionApprovalUpdatedEvent_aggregate';
  aggregate?: Maybe<AuctionApprovalUpdatedEvent_Aggregate_Fields>;
  nodes: Array<AuctionApprovalUpdatedEvent>;
};

/** aggregate fields of "auction_approval_updated_event" */
export type AuctionApprovalUpdatedEvent_Aggregate_Fields = {
  __typename?: 'AuctionApprovalUpdatedEvent_aggregate_fields';
  avg?: Maybe<AuctionApprovalUpdatedEvent_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuctionApprovalUpdatedEvent_Max_Fields>;
  min?: Maybe<AuctionApprovalUpdatedEvent_Min_Fields>;
  stddev?: Maybe<AuctionApprovalUpdatedEvent_Stddev_Fields>;
  stddev_pop?: Maybe<AuctionApprovalUpdatedEvent_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuctionApprovalUpdatedEvent_Stddev_Samp_Fields>;
  sum?: Maybe<AuctionApprovalUpdatedEvent_Sum_Fields>;
  var_pop?: Maybe<AuctionApprovalUpdatedEvent_Var_Pop_Fields>;
  var_samp?: Maybe<AuctionApprovalUpdatedEvent_Var_Samp_Fields>;
  variance?: Maybe<AuctionApprovalUpdatedEvent_Variance_Fields>;
};


/** aggregate fields of "auction_approval_updated_event" */
export type AuctionApprovalUpdatedEvent_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<AuctionApprovalUpdatedEvent_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auction_approval_updated_event" */
export type AuctionApprovalUpdatedEvent_Aggregate_Order_By = {
  avg?: Maybe<AuctionApprovalUpdatedEvent_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<AuctionApprovalUpdatedEvent_Max_Order_By>;
  min?: Maybe<AuctionApprovalUpdatedEvent_Min_Order_By>;
  stddev?: Maybe<AuctionApprovalUpdatedEvent_Stddev_Order_By>;
  stddev_pop?: Maybe<AuctionApprovalUpdatedEvent_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<AuctionApprovalUpdatedEvent_Stddev_Samp_Order_By>;
  sum?: Maybe<AuctionApprovalUpdatedEvent_Sum_Order_By>;
  var_pop?: Maybe<AuctionApprovalUpdatedEvent_Var_Pop_Order_By>;
  var_samp?: Maybe<AuctionApprovalUpdatedEvent_Var_Samp_Order_By>;
  variance?: Maybe<AuctionApprovalUpdatedEvent_Variance_Order_By>;
};

/** aggregate avg on columns */
export type AuctionApprovalUpdatedEvent_Avg_Fields = {
  __typename?: 'AuctionApprovalUpdatedEvent_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auction_approval_updated_event" */
export type AuctionApprovalUpdatedEvent_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/**
 * Boolean expression to filter rows from the table
 * "auction_approval_updated_event". All fields are combined with a logical 'AND'.
 */
export type AuctionApprovalUpdatedEvent_Bool_Exp = {
  _and?: Maybe<Array<AuctionApprovalUpdatedEvent_Bool_Exp>>;
  _not?: Maybe<AuctionApprovalUpdatedEvent_Bool_Exp>;
  _or?: Maybe<Array<AuctionApprovalUpdatedEvent_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  approved?: Maybe<Boolean_Comparison_Exp>;
  auction?: Maybe<Auction_Bool_Exp>;
  auctionId?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  eventLog?: Maybe<EventLog_Bool_Exp>;
  eventLogId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  tokenContract?: Maybe<String_Comparison_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transactionHash?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type AuctionApprovalUpdatedEvent_Max_Fields = {
  __typename?: 'AuctionApprovalUpdatedEvent_max_fields';
  address?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auction_approval_updated_event" */
export type AuctionApprovalUpdatedEvent_Max_Order_By = {
  address?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type AuctionApprovalUpdatedEvent_Min_Fields = {
  __typename?: 'AuctionApprovalUpdatedEvent_min_fields';
  address?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auction_approval_updated_event" */
export type AuctionApprovalUpdatedEvent_Min_Order_By = {
  address?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "auction_approval_updated_event". */
export type AuctionApprovalUpdatedEvent_Order_By = {
  address?: Maybe<Order_By>;
  approved?: Maybe<Order_By>;
  auction?: Maybe<Auction_Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLog?: Maybe<EventLog_Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  token?: Maybe<Token_Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** select columns of table "auction_approval_updated_event" */
export enum AuctionApprovalUpdatedEvent_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Approved = 'approved',
  /** column name */
  AuctionId = 'auctionId',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  EventLogId = 'eventLogId',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  TokenContract = 'tokenContract',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TransactionHash = 'transactionHash'
}

/** aggregate stddev on columns */
export type AuctionApprovalUpdatedEvent_Stddev_Fields = {
  __typename?: 'AuctionApprovalUpdatedEvent_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auction_approval_updated_event" */
export type AuctionApprovalUpdatedEvent_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuctionApprovalUpdatedEvent_Stddev_Pop_Fields = {
  __typename?: 'AuctionApprovalUpdatedEvent_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auction_approval_updated_event" */
export type AuctionApprovalUpdatedEvent_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuctionApprovalUpdatedEvent_Stddev_Samp_Fields = {
  __typename?: 'AuctionApprovalUpdatedEvent_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auction_approval_updated_event" */
export type AuctionApprovalUpdatedEvent_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type AuctionApprovalUpdatedEvent_Sum_Fields = {
  __typename?: 'AuctionApprovalUpdatedEvent_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "auction_approval_updated_event" */
export type AuctionApprovalUpdatedEvent_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type AuctionApprovalUpdatedEvent_Var_Pop_Fields = {
  __typename?: 'AuctionApprovalUpdatedEvent_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auction_approval_updated_event" */
export type AuctionApprovalUpdatedEvent_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuctionApprovalUpdatedEvent_Var_Samp_Fields = {
  __typename?: 'AuctionApprovalUpdatedEvent_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auction_approval_updated_event" */
export type AuctionApprovalUpdatedEvent_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type AuctionApprovalUpdatedEvent_Variance_Fields = {
  __typename?: 'AuctionApprovalUpdatedEvent_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auction_approval_updated_event" */
export type AuctionApprovalUpdatedEvent_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** columns and relationships of "auction_bid_event" */
export type AuctionBidEvent = {
  __typename?: 'AuctionBidEvent';
  address: Scalars['String'];
  /** An object relationship */
  auction?: Maybe<Auction>;
  auctionId: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  /** An object relationship */
  eventLog: EventLog;
  eventLogId: Scalars['String'];
  extended: Scalars['Boolean'];
  firstBid: Scalars['Boolean'];
  id: Scalars['String'];
  logIndex: Scalars['Int'];
  /** An object relationship */
  media?: Maybe<Media>;
  sender: Scalars['String'];
  /** An object relationship */
  token?: Maybe<Token>;
  tokenContract: Scalars['String'];
  tokenId: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transactionHash: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "auction_bid_event" */
export type AuctionBidEvent_Aggregate = {
  __typename?: 'AuctionBidEvent_aggregate';
  aggregate?: Maybe<AuctionBidEvent_Aggregate_Fields>;
  nodes: Array<AuctionBidEvent>;
};

/** aggregate fields of "auction_bid_event" */
export type AuctionBidEvent_Aggregate_Fields = {
  __typename?: 'AuctionBidEvent_aggregate_fields';
  avg?: Maybe<AuctionBidEvent_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuctionBidEvent_Max_Fields>;
  min?: Maybe<AuctionBidEvent_Min_Fields>;
  stddev?: Maybe<AuctionBidEvent_Stddev_Fields>;
  stddev_pop?: Maybe<AuctionBidEvent_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuctionBidEvent_Stddev_Samp_Fields>;
  sum?: Maybe<AuctionBidEvent_Sum_Fields>;
  var_pop?: Maybe<AuctionBidEvent_Var_Pop_Fields>;
  var_samp?: Maybe<AuctionBidEvent_Var_Samp_Fields>;
  variance?: Maybe<AuctionBidEvent_Variance_Fields>;
};


/** aggregate fields of "auction_bid_event" */
export type AuctionBidEvent_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<AuctionBidEvent_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auction_bid_event" */
export type AuctionBidEvent_Aggregate_Order_By = {
  avg?: Maybe<AuctionBidEvent_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<AuctionBidEvent_Max_Order_By>;
  min?: Maybe<AuctionBidEvent_Min_Order_By>;
  stddev?: Maybe<AuctionBidEvent_Stddev_Order_By>;
  stddev_pop?: Maybe<AuctionBidEvent_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<AuctionBidEvent_Stddev_Samp_Order_By>;
  sum?: Maybe<AuctionBidEvent_Sum_Order_By>;
  var_pop?: Maybe<AuctionBidEvent_Var_Pop_Order_By>;
  var_samp?: Maybe<AuctionBidEvent_Var_Samp_Order_By>;
  variance?: Maybe<AuctionBidEvent_Variance_Order_By>;
};

/** aggregate avg on columns */
export type AuctionBidEvent_Avg_Fields = {
  __typename?: 'AuctionBidEvent_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auction_bid_event" */
export type AuctionBidEvent_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auction_bid_event". All fields are combined with a logical 'AND'. */
export type AuctionBidEvent_Bool_Exp = {
  _and?: Maybe<Array<AuctionBidEvent_Bool_Exp>>;
  _not?: Maybe<AuctionBidEvent_Bool_Exp>;
  _or?: Maybe<Array<AuctionBidEvent_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  auction?: Maybe<Auction_Bool_Exp>;
  auctionId?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  eventLog?: Maybe<EventLog_Bool_Exp>;
  eventLogId?: Maybe<String_Comparison_Exp>;
  extended?: Maybe<Boolean_Comparison_Exp>;
  firstBid?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  sender?: Maybe<String_Comparison_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  tokenContract?: Maybe<String_Comparison_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transactionHash?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type AuctionBidEvent_Max_Fields = {
  __typename?: 'AuctionBidEvent_max_fields';
  address?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['String']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auction_bid_event" */
export type AuctionBidEvent_Max_Order_By = {
  address?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  sender?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type AuctionBidEvent_Min_Fields = {
  __typename?: 'AuctionBidEvent_min_fields';
  address?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['String']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auction_bid_event" */
export type AuctionBidEvent_Min_Order_By = {
  address?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  sender?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "auction_bid_event". */
export type AuctionBidEvent_Order_By = {
  address?: Maybe<Order_By>;
  auction?: Maybe<Auction_Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLog?: Maybe<EventLog_Order_By>;
  eventLogId?: Maybe<Order_By>;
  extended?: Maybe<Order_By>;
  firstBid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  sender?: Maybe<Order_By>;
  token?: Maybe<Token_Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transactionHash?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "auction_bid_event" */
export enum AuctionBidEvent_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AuctionId = 'auctionId',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  EventLogId = 'eventLogId',
  /** column name */
  Extended = 'extended',
  /** column name */
  FirstBid = 'firstBid',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  Sender = 'sender',
  /** column name */
  TokenContract = 'tokenContract',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type AuctionBidEvent_Stddev_Fields = {
  __typename?: 'AuctionBidEvent_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auction_bid_event" */
export type AuctionBidEvent_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuctionBidEvent_Stddev_Pop_Fields = {
  __typename?: 'AuctionBidEvent_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auction_bid_event" */
export type AuctionBidEvent_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuctionBidEvent_Stddev_Samp_Fields = {
  __typename?: 'AuctionBidEvent_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auction_bid_event" */
export type AuctionBidEvent_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type AuctionBidEvent_Sum_Fields = {
  __typename?: 'AuctionBidEvent_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "auction_bid_event" */
export type AuctionBidEvent_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type AuctionBidEvent_Var_Pop_Fields = {
  __typename?: 'AuctionBidEvent_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auction_bid_event" */
export type AuctionBidEvent_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuctionBidEvent_Var_Samp_Fields = {
  __typename?: 'AuctionBidEvent_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auction_bid_event" */
export type AuctionBidEvent_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type AuctionBidEvent_Variance_Fields = {
  __typename?: 'AuctionBidEvent_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auction_bid_event" */
export type AuctionBidEvent_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** columns and relationships of "auction_canceled_event" */
export type AuctionCanceledEvent = {
  __typename?: 'AuctionCanceledEvent';
  address: Scalars['String'];
  /** An object relationship */
  auction?: Maybe<Auction>;
  auctionId: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  /** An object relationship */
  eventLog: EventLog;
  eventLogId: Scalars['String'];
  id: Scalars['String'];
  logIndex: Scalars['Int'];
  /** An object relationship */
  media?: Maybe<Media>;
  /** An object relationship */
  token?: Maybe<Token>;
  tokenContract: Scalars['String'];
  tokenId: Scalars['String'];
  tokenOwner: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transactionHash: Scalars['String'];
};

/** aggregated selection of "auction_canceled_event" */
export type AuctionCanceledEvent_Aggregate = {
  __typename?: 'AuctionCanceledEvent_aggregate';
  aggregate?: Maybe<AuctionCanceledEvent_Aggregate_Fields>;
  nodes: Array<AuctionCanceledEvent>;
};

/** aggregate fields of "auction_canceled_event" */
export type AuctionCanceledEvent_Aggregate_Fields = {
  __typename?: 'AuctionCanceledEvent_aggregate_fields';
  avg?: Maybe<AuctionCanceledEvent_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuctionCanceledEvent_Max_Fields>;
  min?: Maybe<AuctionCanceledEvent_Min_Fields>;
  stddev?: Maybe<AuctionCanceledEvent_Stddev_Fields>;
  stddev_pop?: Maybe<AuctionCanceledEvent_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuctionCanceledEvent_Stddev_Samp_Fields>;
  sum?: Maybe<AuctionCanceledEvent_Sum_Fields>;
  var_pop?: Maybe<AuctionCanceledEvent_Var_Pop_Fields>;
  var_samp?: Maybe<AuctionCanceledEvent_Var_Samp_Fields>;
  variance?: Maybe<AuctionCanceledEvent_Variance_Fields>;
};


/** aggregate fields of "auction_canceled_event" */
export type AuctionCanceledEvent_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<AuctionCanceledEvent_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auction_canceled_event" */
export type AuctionCanceledEvent_Aggregate_Order_By = {
  avg?: Maybe<AuctionCanceledEvent_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<AuctionCanceledEvent_Max_Order_By>;
  min?: Maybe<AuctionCanceledEvent_Min_Order_By>;
  stddev?: Maybe<AuctionCanceledEvent_Stddev_Order_By>;
  stddev_pop?: Maybe<AuctionCanceledEvent_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<AuctionCanceledEvent_Stddev_Samp_Order_By>;
  sum?: Maybe<AuctionCanceledEvent_Sum_Order_By>;
  var_pop?: Maybe<AuctionCanceledEvent_Var_Pop_Order_By>;
  var_samp?: Maybe<AuctionCanceledEvent_Var_Samp_Order_By>;
  variance?: Maybe<AuctionCanceledEvent_Variance_Order_By>;
};

/** aggregate avg on columns */
export type AuctionCanceledEvent_Avg_Fields = {
  __typename?: 'AuctionCanceledEvent_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auction_canceled_event" */
export type AuctionCanceledEvent_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auction_canceled_event". All fields are combined with a logical 'AND'. */
export type AuctionCanceledEvent_Bool_Exp = {
  _and?: Maybe<Array<AuctionCanceledEvent_Bool_Exp>>;
  _not?: Maybe<AuctionCanceledEvent_Bool_Exp>;
  _or?: Maybe<Array<AuctionCanceledEvent_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  auction?: Maybe<Auction_Bool_Exp>;
  auctionId?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  eventLog?: Maybe<EventLog_Bool_Exp>;
  eventLogId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  tokenContract?: Maybe<String_Comparison_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  tokenOwner?: Maybe<String_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transactionHash?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type AuctionCanceledEvent_Max_Fields = {
  __typename?: 'AuctionCanceledEvent_max_fields';
  address?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenOwner?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auction_canceled_event" */
export type AuctionCanceledEvent_Max_Order_By = {
  address?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  tokenOwner?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type AuctionCanceledEvent_Min_Fields = {
  __typename?: 'AuctionCanceledEvent_min_fields';
  address?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenOwner?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auction_canceled_event" */
export type AuctionCanceledEvent_Min_Order_By = {
  address?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  tokenOwner?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "auction_canceled_event". */
export type AuctionCanceledEvent_Order_By = {
  address?: Maybe<Order_By>;
  auction?: Maybe<Auction_Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLog?: Maybe<EventLog_Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  token?: Maybe<Token_Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  tokenOwner?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** select columns of table "auction_canceled_event" */
export enum AuctionCanceledEvent_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AuctionId = 'auctionId',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  EventLogId = 'eventLogId',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  TokenContract = 'tokenContract',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TokenOwner = 'tokenOwner',
  /** column name */
  TransactionHash = 'transactionHash'
}

/** aggregate stddev on columns */
export type AuctionCanceledEvent_Stddev_Fields = {
  __typename?: 'AuctionCanceledEvent_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auction_canceled_event" */
export type AuctionCanceledEvent_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuctionCanceledEvent_Stddev_Pop_Fields = {
  __typename?: 'AuctionCanceledEvent_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auction_canceled_event" */
export type AuctionCanceledEvent_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuctionCanceledEvent_Stddev_Samp_Fields = {
  __typename?: 'AuctionCanceledEvent_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auction_canceled_event" */
export type AuctionCanceledEvent_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type AuctionCanceledEvent_Sum_Fields = {
  __typename?: 'AuctionCanceledEvent_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "auction_canceled_event" */
export type AuctionCanceledEvent_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type AuctionCanceledEvent_Var_Pop_Fields = {
  __typename?: 'AuctionCanceledEvent_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auction_canceled_event" */
export type AuctionCanceledEvent_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuctionCanceledEvent_Var_Samp_Fields = {
  __typename?: 'AuctionCanceledEvent_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auction_canceled_event" */
export type AuctionCanceledEvent_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type AuctionCanceledEvent_Variance_Fields = {
  __typename?: 'AuctionCanceledEvent_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auction_canceled_event" */
export type AuctionCanceledEvent_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** columns and relationships of "auction_created_event" */
export type AuctionCreatedEvent = {
  __typename?: 'AuctionCreatedEvent';
  address: Scalars['String'];
  /** An object relationship */
  auction?: Maybe<Auction>;
  auctionCurrency: Scalars['String'];
  auctionId: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  curator: Scalars['String'];
  curatorFeePercentage: Scalars['Int'];
  duration: Scalars['String'];
  /** An object relationship */
  eventLog: EventLog;
  eventLogId: Scalars['String'];
  id: Scalars['String'];
  logIndex: Scalars['Int'];
  /** An object relationship */
  media?: Maybe<Media>;
  reservePrice: Scalars['String'];
  /** An object relationship */
  token?: Maybe<Token>;
  tokenContract: Scalars['String'];
  tokenId: Scalars['String'];
  tokenOwner: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transactionHash: Scalars['String'];
};

/** aggregated selection of "auction_created_event" */
export type AuctionCreatedEvent_Aggregate = {
  __typename?: 'AuctionCreatedEvent_aggregate';
  aggregate?: Maybe<AuctionCreatedEvent_Aggregate_Fields>;
  nodes: Array<AuctionCreatedEvent>;
};

/** aggregate fields of "auction_created_event" */
export type AuctionCreatedEvent_Aggregate_Fields = {
  __typename?: 'AuctionCreatedEvent_aggregate_fields';
  avg?: Maybe<AuctionCreatedEvent_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuctionCreatedEvent_Max_Fields>;
  min?: Maybe<AuctionCreatedEvent_Min_Fields>;
  stddev?: Maybe<AuctionCreatedEvent_Stddev_Fields>;
  stddev_pop?: Maybe<AuctionCreatedEvent_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuctionCreatedEvent_Stddev_Samp_Fields>;
  sum?: Maybe<AuctionCreatedEvent_Sum_Fields>;
  var_pop?: Maybe<AuctionCreatedEvent_Var_Pop_Fields>;
  var_samp?: Maybe<AuctionCreatedEvent_Var_Samp_Fields>;
  variance?: Maybe<AuctionCreatedEvent_Variance_Fields>;
};


/** aggregate fields of "auction_created_event" */
export type AuctionCreatedEvent_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<AuctionCreatedEvent_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auction_created_event" */
export type AuctionCreatedEvent_Aggregate_Order_By = {
  avg?: Maybe<AuctionCreatedEvent_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<AuctionCreatedEvent_Max_Order_By>;
  min?: Maybe<AuctionCreatedEvent_Min_Order_By>;
  stddev?: Maybe<AuctionCreatedEvent_Stddev_Order_By>;
  stddev_pop?: Maybe<AuctionCreatedEvent_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<AuctionCreatedEvent_Stddev_Samp_Order_By>;
  sum?: Maybe<AuctionCreatedEvent_Sum_Order_By>;
  var_pop?: Maybe<AuctionCreatedEvent_Var_Pop_Order_By>;
  var_samp?: Maybe<AuctionCreatedEvent_Var_Samp_Order_By>;
  variance?: Maybe<AuctionCreatedEvent_Variance_Order_By>;
};

/** aggregate avg on columns */
export type AuctionCreatedEvent_Avg_Fields = {
  __typename?: 'AuctionCreatedEvent_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  curatorFeePercentage?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auction_created_event" */
export type AuctionCreatedEvent_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>;
  curatorFeePercentage?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auction_created_event". All fields are combined with a logical 'AND'. */
export type AuctionCreatedEvent_Bool_Exp = {
  _and?: Maybe<Array<AuctionCreatedEvent_Bool_Exp>>;
  _not?: Maybe<AuctionCreatedEvent_Bool_Exp>;
  _or?: Maybe<Array<AuctionCreatedEvent_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  auction?: Maybe<Auction_Bool_Exp>;
  auctionCurrency?: Maybe<String_Comparison_Exp>;
  auctionId?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  curator?: Maybe<String_Comparison_Exp>;
  curatorFeePercentage?: Maybe<Int_Comparison_Exp>;
  duration?: Maybe<String_Comparison_Exp>;
  eventLog?: Maybe<EventLog_Bool_Exp>;
  eventLogId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  reservePrice?: Maybe<String_Comparison_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  tokenContract?: Maybe<String_Comparison_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  tokenOwner?: Maybe<String_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transactionHash?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type AuctionCreatedEvent_Max_Fields = {
  __typename?: 'AuctionCreatedEvent_max_fields';
  address?: Maybe<Scalars['String']>;
  auctionCurrency?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  curator?: Maybe<Scalars['String']>;
  curatorFeePercentage?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  reservePrice?: Maybe<Scalars['String']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenOwner?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auction_created_event" */
export type AuctionCreatedEvent_Max_Order_By = {
  address?: Maybe<Order_By>;
  auctionCurrency?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  curator?: Maybe<Order_By>;
  curatorFeePercentage?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  reservePrice?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  tokenOwner?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type AuctionCreatedEvent_Min_Fields = {
  __typename?: 'AuctionCreatedEvent_min_fields';
  address?: Maybe<Scalars['String']>;
  auctionCurrency?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  curator?: Maybe<Scalars['String']>;
  curatorFeePercentage?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  reservePrice?: Maybe<Scalars['String']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenOwner?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auction_created_event" */
export type AuctionCreatedEvent_Min_Order_By = {
  address?: Maybe<Order_By>;
  auctionCurrency?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  curator?: Maybe<Order_By>;
  curatorFeePercentage?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  reservePrice?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  tokenOwner?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "auction_created_event". */
export type AuctionCreatedEvent_Order_By = {
  address?: Maybe<Order_By>;
  auction?: Maybe<Auction_Order_By>;
  auctionCurrency?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  curator?: Maybe<Order_By>;
  curatorFeePercentage?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  eventLog?: Maybe<EventLog_Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  reservePrice?: Maybe<Order_By>;
  token?: Maybe<Token_Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  tokenOwner?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** select columns of table "auction_created_event" */
export enum AuctionCreatedEvent_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AuctionCurrency = 'auctionCurrency',
  /** column name */
  AuctionId = 'auctionId',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  Curator = 'curator',
  /** column name */
  CuratorFeePercentage = 'curatorFeePercentage',
  /** column name */
  Duration = 'duration',
  /** column name */
  EventLogId = 'eventLogId',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  ReservePrice = 'reservePrice',
  /** column name */
  TokenContract = 'tokenContract',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TokenOwner = 'tokenOwner',
  /** column name */
  TransactionHash = 'transactionHash'
}

/** aggregate stddev on columns */
export type AuctionCreatedEvent_Stddev_Fields = {
  __typename?: 'AuctionCreatedEvent_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  curatorFeePercentage?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auction_created_event" */
export type AuctionCreatedEvent_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>;
  curatorFeePercentage?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuctionCreatedEvent_Stddev_Pop_Fields = {
  __typename?: 'AuctionCreatedEvent_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  curatorFeePercentage?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auction_created_event" */
export type AuctionCreatedEvent_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  curatorFeePercentage?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuctionCreatedEvent_Stddev_Samp_Fields = {
  __typename?: 'AuctionCreatedEvent_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  curatorFeePercentage?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auction_created_event" */
export type AuctionCreatedEvent_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  curatorFeePercentage?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type AuctionCreatedEvent_Sum_Fields = {
  __typename?: 'AuctionCreatedEvent_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  curatorFeePercentage?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "auction_created_event" */
export type AuctionCreatedEvent_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>;
  curatorFeePercentage?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type AuctionCreatedEvent_Var_Pop_Fields = {
  __typename?: 'AuctionCreatedEvent_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  curatorFeePercentage?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auction_created_event" */
export type AuctionCreatedEvent_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  curatorFeePercentage?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuctionCreatedEvent_Var_Samp_Fields = {
  __typename?: 'AuctionCreatedEvent_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  curatorFeePercentage?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auction_created_event" */
export type AuctionCreatedEvent_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  curatorFeePercentage?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type AuctionCreatedEvent_Variance_Fields = {
  __typename?: 'AuctionCreatedEvent_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  curatorFeePercentage?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auction_created_event" */
export type AuctionCreatedEvent_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>;
  curatorFeePercentage?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** columns and relationships of "auction_duration_extended_event" */
export type AuctionDurationExtendedEvent = {
  __typename?: 'AuctionDurationExtendedEvent';
  address: Scalars['String'];
  /** An object relationship */
  auction?: Maybe<Auction>;
  auctionId: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  duration: Scalars['String'];
  /** An object relationship */
  eventLog: EventLog;
  eventLogId: Scalars['String'];
  id: Scalars['String'];
  logIndex: Scalars['Int'];
  /** An object relationship */
  media?: Maybe<Media>;
  /** An object relationship */
  token?: Maybe<Token>;
  tokenContract: Scalars['String'];
  tokenId: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transactionHash: Scalars['String'];
};

/** aggregated selection of "auction_duration_extended_event" */
export type AuctionDurationExtendedEvent_Aggregate = {
  __typename?: 'AuctionDurationExtendedEvent_aggregate';
  aggregate?: Maybe<AuctionDurationExtendedEvent_Aggregate_Fields>;
  nodes: Array<AuctionDurationExtendedEvent>;
};

/** aggregate fields of "auction_duration_extended_event" */
export type AuctionDurationExtendedEvent_Aggregate_Fields = {
  __typename?: 'AuctionDurationExtendedEvent_aggregate_fields';
  avg?: Maybe<AuctionDurationExtendedEvent_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuctionDurationExtendedEvent_Max_Fields>;
  min?: Maybe<AuctionDurationExtendedEvent_Min_Fields>;
  stddev?: Maybe<AuctionDurationExtendedEvent_Stddev_Fields>;
  stddev_pop?: Maybe<AuctionDurationExtendedEvent_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuctionDurationExtendedEvent_Stddev_Samp_Fields>;
  sum?: Maybe<AuctionDurationExtendedEvent_Sum_Fields>;
  var_pop?: Maybe<AuctionDurationExtendedEvent_Var_Pop_Fields>;
  var_samp?: Maybe<AuctionDurationExtendedEvent_Var_Samp_Fields>;
  variance?: Maybe<AuctionDurationExtendedEvent_Variance_Fields>;
};


/** aggregate fields of "auction_duration_extended_event" */
export type AuctionDurationExtendedEvent_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<AuctionDurationExtendedEvent_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auction_duration_extended_event" */
export type AuctionDurationExtendedEvent_Aggregate_Order_By = {
  avg?: Maybe<AuctionDurationExtendedEvent_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<AuctionDurationExtendedEvent_Max_Order_By>;
  min?: Maybe<AuctionDurationExtendedEvent_Min_Order_By>;
  stddev?: Maybe<AuctionDurationExtendedEvent_Stddev_Order_By>;
  stddev_pop?: Maybe<AuctionDurationExtendedEvent_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<AuctionDurationExtendedEvent_Stddev_Samp_Order_By>;
  sum?: Maybe<AuctionDurationExtendedEvent_Sum_Order_By>;
  var_pop?: Maybe<AuctionDurationExtendedEvent_Var_Pop_Order_By>;
  var_samp?: Maybe<AuctionDurationExtendedEvent_Var_Samp_Order_By>;
  variance?: Maybe<AuctionDurationExtendedEvent_Variance_Order_By>;
};

/** aggregate avg on columns */
export type AuctionDurationExtendedEvent_Avg_Fields = {
  __typename?: 'AuctionDurationExtendedEvent_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auction_duration_extended_event" */
export type AuctionDurationExtendedEvent_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/**
 * Boolean expression to filter rows from the table
 * "auction_duration_extended_event". All fields are combined with a logical 'AND'.
 */
export type AuctionDurationExtendedEvent_Bool_Exp = {
  _and?: Maybe<Array<AuctionDurationExtendedEvent_Bool_Exp>>;
  _not?: Maybe<AuctionDurationExtendedEvent_Bool_Exp>;
  _or?: Maybe<Array<AuctionDurationExtendedEvent_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  auction?: Maybe<Auction_Bool_Exp>;
  auctionId?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  duration?: Maybe<String_Comparison_Exp>;
  eventLog?: Maybe<EventLog_Bool_Exp>;
  eventLogId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  tokenContract?: Maybe<String_Comparison_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transactionHash?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type AuctionDurationExtendedEvent_Max_Fields = {
  __typename?: 'AuctionDurationExtendedEvent_max_fields';
  address?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  duration?: Maybe<Scalars['String']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auction_duration_extended_event" */
export type AuctionDurationExtendedEvent_Max_Order_By = {
  address?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type AuctionDurationExtendedEvent_Min_Fields = {
  __typename?: 'AuctionDurationExtendedEvent_min_fields';
  address?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  duration?: Maybe<Scalars['String']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auction_duration_extended_event" */
export type AuctionDurationExtendedEvent_Min_Order_By = {
  address?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "auction_duration_extended_event". */
export type AuctionDurationExtendedEvent_Order_By = {
  address?: Maybe<Order_By>;
  auction?: Maybe<Auction_Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  eventLog?: Maybe<EventLog_Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  token?: Maybe<Token_Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** select columns of table "auction_duration_extended_event" */
export enum AuctionDurationExtendedEvent_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AuctionId = 'auctionId',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  Duration = 'duration',
  /** column name */
  EventLogId = 'eventLogId',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  TokenContract = 'tokenContract',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TransactionHash = 'transactionHash'
}

/** aggregate stddev on columns */
export type AuctionDurationExtendedEvent_Stddev_Fields = {
  __typename?: 'AuctionDurationExtendedEvent_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auction_duration_extended_event" */
export type AuctionDurationExtendedEvent_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuctionDurationExtendedEvent_Stddev_Pop_Fields = {
  __typename?: 'AuctionDurationExtendedEvent_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auction_duration_extended_event" */
export type AuctionDurationExtendedEvent_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuctionDurationExtendedEvent_Stddev_Samp_Fields = {
  __typename?: 'AuctionDurationExtendedEvent_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auction_duration_extended_event" */
export type AuctionDurationExtendedEvent_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type AuctionDurationExtendedEvent_Sum_Fields = {
  __typename?: 'AuctionDurationExtendedEvent_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "auction_duration_extended_event" */
export type AuctionDurationExtendedEvent_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type AuctionDurationExtendedEvent_Var_Pop_Fields = {
  __typename?: 'AuctionDurationExtendedEvent_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auction_duration_extended_event" */
export type AuctionDurationExtendedEvent_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuctionDurationExtendedEvent_Var_Samp_Fields = {
  __typename?: 'AuctionDurationExtendedEvent_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auction_duration_extended_event" */
export type AuctionDurationExtendedEvent_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type AuctionDurationExtendedEvent_Variance_Fields = {
  __typename?: 'AuctionDurationExtendedEvent_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auction_duration_extended_event" */
export type AuctionDurationExtendedEvent_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** columns and relationships of "auction_ended_event" */
export type AuctionEndedEvent = {
  __typename?: 'AuctionEndedEvent';
  address: Scalars['String'];
  amount: Scalars['String'];
  /** An object relationship */
  auction?: Maybe<Auction>;
  auctionCurrency: Scalars['String'];
  auctionId: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  curator: Scalars['String'];
  curatorFee: Scalars['String'];
  /** An object relationship */
  eventLog: EventLog;
  eventLogId: Scalars['String'];
  id: Scalars['String'];
  logIndex: Scalars['Int'];
  /** An object relationship */
  media?: Maybe<Media>;
  /** An object relationship */
  token?: Maybe<Token>;
  tokenContract: Scalars['String'];
  tokenId: Scalars['String'];
  tokenOwner: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transactionHash: Scalars['String'];
  winner: Scalars['String'];
};

/** aggregated selection of "auction_ended_event" */
export type AuctionEndedEvent_Aggregate = {
  __typename?: 'AuctionEndedEvent_aggregate';
  aggregate?: Maybe<AuctionEndedEvent_Aggregate_Fields>;
  nodes: Array<AuctionEndedEvent>;
};

/** aggregate fields of "auction_ended_event" */
export type AuctionEndedEvent_Aggregate_Fields = {
  __typename?: 'AuctionEndedEvent_aggregate_fields';
  avg?: Maybe<AuctionEndedEvent_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuctionEndedEvent_Max_Fields>;
  min?: Maybe<AuctionEndedEvent_Min_Fields>;
  stddev?: Maybe<AuctionEndedEvent_Stddev_Fields>;
  stddev_pop?: Maybe<AuctionEndedEvent_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuctionEndedEvent_Stddev_Samp_Fields>;
  sum?: Maybe<AuctionEndedEvent_Sum_Fields>;
  var_pop?: Maybe<AuctionEndedEvent_Var_Pop_Fields>;
  var_samp?: Maybe<AuctionEndedEvent_Var_Samp_Fields>;
  variance?: Maybe<AuctionEndedEvent_Variance_Fields>;
};


/** aggregate fields of "auction_ended_event" */
export type AuctionEndedEvent_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<AuctionEndedEvent_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auction_ended_event" */
export type AuctionEndedEvent_Aggregate_Order_By = {
  avg?: Maybe<AuctionEndedEvent_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<AuctionEndedEvent_Max_Order_By>;
  min?: Maybe<AuctionEndedEvent_Min_Order_By>;
  stddev?: Maybe<AuctionEndedEvent_Stddev_Order_By>;
  stddev_pop?: Maybe<AuctionEndedEvent_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<AuctionEndedEvent_Stddev_Samp_Order_By>;
  sum?: Maybe<AuctionEndedEvent_Sum_Order_By>;
  var_pop?: Maybe<AuctionEndedEvent_Var_Pop_Order_By>;
  var_samp?: Maybe<AuctionEndedEvent_Var_Samp_Order_By>;
  variance?: Maybe<AuctionEndedEvent_Variance_Order_By>;
};

/** aggregate avg on columns */
export type AuctionEndedEvent_Avg_Fields = {
  __typename?: 'AuctionEndedEvent_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auction_ended_event" */
export type AuctionEndedEvent_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auction_ended_event". All fields are combined with a logical 'AND'. */
export type AuctionEndedEvent_Bool_Exp = {
  _and?: Maybe<Array<AuctionEndedEvent_Bool_Exp>>;
  _not?: Maybe<AuctionEndedEvent_Bool_Exp>;
  _or?: Maybe<Array<AuctionEndedEvent_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  amount?: Maybe<String_Comparison_Exp>;
  auction?: Maybe<Auction_Bool_Exp>;
  auctionCurrency?: Maybe<String_Comparison_Exp>;
  auctionId?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  curator?: Maybe<String_Comparison_Exp>;
  curatorFee?: Maybe<String_Comparison_Exp>;
  eventLog?: Maybe<EventLog_Bool_Exp>;
  eventLogId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  tokenContract?: Maybe<String_Comparison_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  tokenOwner?: Maybe<String_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transactionHash?: Maybe<String_Comparison_Exp>;
  winner?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type AuctionEndedEvent_Max_Fields = {
  __typename?: 'AuctionEndedEvent_max_fields';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  auctionCurrency?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  curator?: Maybe<Scalars['String']>;
  curatorFee?: Maybe<Scalars['String']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenOwner?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
  winner?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auction_ended_event" */
export type AuctionEndedEvent_Max_Order_By = {
  address?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  auctionCurrency?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  curator?: Maybe<Order_By>;
  curatorFee?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  tokenOwner?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
  winner?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type AuctionEndedEvent_Min_Fields = {
  __typename?: 'AuctionEndedEvent_min_fields';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  auctionCurrency?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  curator?: Maybe<Scalars['String']>;
  curatorFee?: Maybe<Scalars['String']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenOwner?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
  winner?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auction_ended_event" */
export type AuctionEndedEvent_Min_Order_By = {
  address?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  auctionCurrency?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  curator?: Maybe<Order_By>;
  curatorFee?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  tokenOwner?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
  winner?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "auction_ended_event". */
export type AuctionEndedEvent_Order_By = {
  address?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  auction?: Maybe<Auction_Order_By>;
  auctionCurrency?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  curator?: Maybe<Order_By>;
  curatorFee?: Maybe<Order_By>;
  eventLog?: Maybe<EventLog_Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  token?: Maybe<Token_Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  tokenOwner?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transactionHash?: Maybe<Order_By>;
  winner?: Maybe<Order_By>;
};

/** select columns of table "auction_ended_event" */
export enum AuctionEndedEvent_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Amount = 'amount',
  /** column name */
  AuctionCurrency = 'auctionCurrency',
  /** column name */
  AuctionId = 'auctionId',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  Curator = 'curator',
  /** column name */
  CuratorFee = 'curatorFee',
  /** column name */
  EventLogId = 'eventLogId',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  TokenContract = 'tokenContract',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TokenOwner = 'tokenOwner',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  Winner = 'winner'
}

/** aggregate stddev on columns */
export type AuctionEndedEvent_Stddev_Fields = {
  __typename?: 'AuctionEndedEvent_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auction_ended_event" */
export type AuctionEndedEvent_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuctionEndedEvent_Stddev_Pop_Fields = {
  __typename?: 'AuctionEndedEvent_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auction_ended_event" */
export type AuctionEndedEvent_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuctionEndedEvent_Stddev_Samp_Fields = {
  __typename?: 'AuctionEndedEvent_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auction_ended_event" */
export type AuctionEndedEvent_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type AuctionEndedEvent_Sum_Fields = {
  __typename?: 'AuctionEndedEvent_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "auction_ended_event" */
export type AuctionEndedEvent_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type AuctionEndedEvent_Var_Pop_Fields = {
  __typename?: 'AuctionEndedEvent_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auction_ended_event" */
export type AuctionEndedEvent_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuctionEndedEvent_Var_Samp_Fields = {
  __typename?: 'AuctionEndedEvent_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auction_ended_event" */
export type AuctionEndedEvent_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type AuctionEndedEvent_Variance_Fields = {
  __typename?: 'AuctionEndedEvent_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auction_ended_event" */
export type AuctionEndedEvent_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** columns and relationships of "auction_reserve_price_updated_event" */
export type AuctionReservePriceUpdatedEvent = {
  __typename?: 'AuctionReservePriceUpdatedEvent';
  address: Scalars['String'];
  /** An object relationship */
  auction?: Maybe<Auction>;
  auctionId: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  /** An object relationship */
  eventLog: EventLog;
  eventLogId: Scalars['String'];
  id: Scalars['String'];
  logIndex: Scalars['Int'];
  /** An object relationship */
  media?: Maybe<Media>;
  reservePrice: Scalars['String'];
  /** An object relationship */
  token?: Maybe<Token>;
  tokenContract: Scalars['String'];
  tokenId: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transactionHash: Scalars['String'];
};

/** aggregated selection of "auction_reserve_price_updated_event" */
export type AuctionReservePriceUpdatedEvent_Aggregate = {
  __typename?: 'AuctionReservePriceUpdatedEvent_aggregate';
  aggregate?: Maybe<AuctionReservePriceUpdatedEvent_Aggregate_Fields>;
  nodes: Array<AuctionReservePriceUpdatedEvent>;
};

/** aggregate fields of "auction_reserve_price_updated_event" */
export type AuctionReservePriceUpdatedEvent_Aggregate_Fields = {
  __typename?: 'AuctionReservePriceUpdatedEvent_aggregate_fields';
  avg?: Maybe<AuctionReservePriceUpdatedEvent_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuctionReservePriceUpdatedEvent_Max_Fields>;
  min?: Maybe<AuctionReservePriceUpdatedEvent_Min_Fields>;
  stddev?: Maybe<AuctionReservePriceUpdatedEvent_Stddev_Fields>;
  stddev_pop?: Maybe<AuctionReservePriceUpdatedEvent_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuctionReservePriceUpdatedEvent_Stddev_Samp_Fields>;
  sum?: Maybe<AuctionReservePriceUpdatedEvent_Sum_Fields>;
  var_pop?: Maybe<AuctionReservePriceUpdatedEvent_Var_Pop_Fields>;
  var_samp?: Maybe<AuctionReservePriceUpdatedEvent_Var_Samp_Fields>;
  variance?: Maybe<AuctionReservePriceUpdatedEvent_Variance_Fields>;
};


/** aggregate fields of "auction_reserve_price_updated_event" */
export type AuctionReservePriceUpdatedEvent_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<AuctionReservePriceUpdatedEvent_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auction_reserve_price_updated_event" */
export type AuctionReservePriceUpdatedEvent_Aggregate_Order_By = {
  avg?: Maybe<AuctionReservePriceUpdatedEvent_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<AuctionReservePriceUpdatedEvent_Max_Order_By>;
  min?: Maybe<AuctionReservePriceUpdatedEvent_Min_Order_By>;
  stddev?: Maybe<AuctionReservePriceUpdatedEvent_Stddev_Order_By>;
  stddev_pop?: Maybe<AuctionReservePriceUpdatedEvent_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<AuctionReservePriceUpdatedEvent_Stddev_Samp_Order_By>;
  sum?: Maybe<AuctionReservePriceUpdatedEvent_Sum_Order_By>;
  var_pop?: Maybe<AuctionReservePriceUpdatedEvent_Var_Pop_Order_By>;
  var_samp?: Maybe<AuctionReservePriceUpdatedEvent_Var_Samp_Order_By>;
  variance?: Maybe<AuctionReservePriceUpdatedEvent_Variance_Order_By>;
};

/** aggregate avg on columns */
export type AuctionReservePriceUpdatedEvent_Avg_Fields = {
  __typename?: 'AuctionReservePriceUpdatedEvent_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auction_reserve_price_updated_event" */
export type AuctionReservePriceUpdatedEvent_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/**
 * Boolean expression to filter rows from the table
 * "auction_reserve_price_updated_event". All fields are combined with a logical 'AND'.
 */
export type AuctionReservePriceUpdatedEvent_Bool_Exp = {
  _and?: Maybe<Array<AuctionReservePriceUpdatedEvent_Bool_Exp>>;
  _not?: Maybe<AuctionReservePriceUpdatedEvent_Bool_Exp>;
  _or?: Maybe<Array<AuctionReservePriceUpdatedEvent_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  auction?: Maybe<Auction_Bool_Exp>;
  auctionId?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  eventLog?: Maybe<EventLog_Bool_Exp>;
  eventLogId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  reservePrice?: Maybe<String_Comparison_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  tokenContract?: Maybe<String_Comparison_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transactionHash?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type AuctionReservePriceUpdatedEvent_Max_Fields = {
  __typename?: 'AuctionReservePriceUpdatedEvent_max_fields';
  address?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  reservePrice?: Maybe<Scalars['String']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auction_reserve_price_updated_event" */
export type AuctionReservePriceUpdatedEvent_Max_Order_By = {
  address?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  reservePrice?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type AuctionReservePriceUpdatedEvent_Min_Fields = {
  __typename?: 'AuctionReservePriceUpdatedEvent_min_fields';
  address?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  reservePrice?: Maybe<Scalars['String']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auction_reserve_price_updated_event" */
export type AuctionReservePriceUpdatedEvent_Min_Order_By = {
  address?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  reservePrice?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "auction_reserve_price_updated_event". */
export type AuctionReservePriceUpdatedEvent_Order_By = {
  address?: Maybe<Order_By>;
  auction?: Maybe<Auction_Order_By>;
  auctionId?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLog?: Maybe<EventLog_Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  reservePrice?: Maybe<Order_By>;
  token?: Maybe<Token_Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** select columns of table "auction_reserve_price_updated_event" */
export enum AuctionReservePriceUpdatedEvent_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AuctionId = 'auctionId',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  EventLogId = 'eventLogId',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  ReservePrice = 'reservePrice',
  /** column name */
  TokenContract = 'tokenContract',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TransactionHash = 'transactionHash'
}

/** aggregate stddev on columns */
export type AuctionReservePriceUpdatedEvent_Stddev_Fields = {
  __typename?: 'AuctionReservePriceUpdatedEvent_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auction_reserve_price_updated_event" */
export type AuctionReservePriceUpdatedEvent_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuctionReservePriceUpdatedEvent_Stddev_Pop_Fields = {
  __typename?: 'AuctionReservePriceUpdatedEvent_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auction_reserve_price_updated_event" */
export type AuctionReservePriceUpdatedEvent_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuctionReservePriceUpdatedEvent_Stddev_Samp_Fields = {
  __typename?: 'AuctionReservePriceUpdatedEvent_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auction_reserve_price_updated_event" */
export type AuctionReservePriceUpdatedEvent_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type AuctionReservePriceUpdatedEvent_Sum_Fields = {
  __typename?: 'AuctionReservePriceUpdatedEvent_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "auction_reserve_price_updated_event" */
export type AuctionReservePriceUpdatedEvent_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type AuctionReservePriceUpdatedEvent_Var_Pop_Fields = {
  __typename?: 'AuctionReservePriceUpdatedEvent_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auction_reserve_price_updated_event" */
export type AuctionReservePriceUpdatedEvent_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuctionReservePriceUpdatedEvent_Var_Samp_Fields = {
  __typename?: 'AuctionReservePriceUpdatedEvent_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auction_reserve_price_updated_event" */
export type AuctionReservePriceUpdatedEvent_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type AuctionReservePriceUpdatedEvent_Variance_Fields = {
  __typename?: 'AuctionReservePriceUpdatedEvent_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auction_reserve_price_updated_event" */
export type AuctionReservePriceUpdatedEvent_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregated selection of "auction" */
export type Auction_Aggregate = {
  __typename?: 'Auction_aggregate';
  aggregate?: Maybe<Auction_Aggregate_Fields>;
  nodes: Array<Auction>;
};

/** aggregate fields of "auction" */
export type Auction_Aggregate_Fields = {
  __typename?: 'Auction_aggregate_fields';
  avg?: Maybe<Auction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auction_Max_Fields>;
  min?: Maybe<Auction_Min_Fields>;
  stddev?: Maybe<Auction_Stddev_Fields>;
  stddev_pop?: Maybe<Auction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auction_Stddev_Samp_Fields>;
  sum?: Maybe<Auction_Sum_Fields>;
  var_pop?: Maybe<Auction_Var_Pop_Fields>;
  var_samp?: Maybe<Auction_Var_Samp_Fields>;
  variance?: Maybe<Auction_Variance_Fields>;
};


/** aggregate fields of "auction" */
export type Auction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auction" */
export type Auction_Aggregate_Order_By = {
  avg?: Maybe<Auction_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Auction_Max_Order_By>;
  min?: Maybe<Auction_Min_Order_By>;
  stddev?: Maybe<Auction_Stddev_Order_By>;
  stddev_pop?: Maybe<Auction_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Auction_Stddev_Samp_Order_By>;
  sum?: Maybe<Auction_Sum_Order_By>;
  var_pop?: Maybe<Auction_Var_Pop_Order_By>;
  var_samp?: Maybe<Auction_Var_Samp_Order_By>;
  variance?: Maybe<Auction_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Auction_Avg_Fields = {
  __typename?: 'Auction_avg_fields';
  curatorFeePercentage?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auction" */
export type Auction_Avg_Order_By = {
  curatorFeePercentage?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auction". All fields are combined with a logical 'AND'. */
export type Auction_Bool_Exp = {
  _and?: Maybe<Array<Auction_Bool_Exp>>;
  _not?: Maybe<Auction_Bool_Exp>;
  _or?: Maybe<Array<Auction_Bool_Exp>>;
  amountTokenOwnerReceived?: Maybe<String_Comparison_Exp>;
  approvalEvents?: Maybe<AuctionApprovalUpdatedEvent_Bool_Exp>;
  approved?: Maybe<Boolean_Comparison_Exp>;
  auctionCurrency?: Maybe<String_Comparison_Exp>;
  auctionId?: Maybe<String_Comparison_Exp>;
  bidEvents?: Maybe<AuctionBidEvent_Bool_Exp>;
  canceledEvent?: Maybe<AuctionCanceledEvent_Bool_Exp>;
  createdEvent?: Maybe<AuctionCreatedEvent_Bool_Exp>;
  curator?: Maybe<String_Comparison_Exp>;
  curatorFee?: Maybe<String_Comparison_Exp>;
  curatorFeePercentage?: Maybe<Int_Comparison_Exp>;
  currency?: Maybe<Currency_Bool_Exp>;
  duration?: Maybe<String_Comparison_Exp>;
  durationExtendedEvents?: Maybe<AuctionDurationExtendedEvent_Bool_Exp>;
  endedEvent?: Maybe<AuctionEndedEvent_Bool_Exp>;
  expiresAt?: Maybe<Timestamptz_Comparison_Exp>;
  firstBidTime?: Maybe<String_Comparison_Exp>;
  lastBidAmount?: Maybe<String_Comparison_Exp>;
  lastBidder?: Maybe<String_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  reservePrice?: Maybe<String_Comparison_Exp>;
  reservePriceUpdatedEvents?: Maybe<AuctionReservePriceUpdatedEvent_Bool_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  tokenContract?: Maybe<String_Comparison_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  tokenOwner?: Maybe<String_Comparison_Exp>;
  winner?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Auction_Max_Fields = {
  __typename?: 'Auction_max_fields';
  amountTokenOwnerReceived?: Maybe<Scalars['String']>;
  auctionCurrency?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  curator?: Maybe<Scalars['String']>;
  curatorFee?: Maybe<Scalars['String']>;
  curatorFeePercentage?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  firstBidTime?: Maybe<Scalars['String']>;
  lastBidAmount?: Maybe<Scalars['String']>;
  lastBidder?: Maybe<Scalars['String']>;
  reservePrice?: Maybe<Scalars['String']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenOwner?: Maybe<Scalars['String']>;
  winner?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auction" */
export type Auction_Max_Order_By = {
  amountTokenOwnerReceived?: Maybe<Order_By>;
  auctionCurrency?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  curator?: Maybe<Order_By>;
  curatorFee?: Maybe<Order_By>;
  curatorFeePercentage?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  expiresAt?: Maybe<Order_By>;
  firstBidTime?: Maybe<Order_By>;
  lastBidAmount?: Maybe<Order_By>;
  lastBidder?: Maybe<Order_By>;
  reservePrice?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  tokenOwner?: Maybe<Order_By>;
  winner?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auction_Min_Fields = {
  __typename?: 'Auction_min_fields';
  amountTokenOwnerReceived?: Maybe<Scalars['String']>;
  auctionCurrency?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  curator?: Maybe<Scalars['String']>;
  curatorFee?: Maybe<Scalars['String']>;
  curatorFeePercentage?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  firstBidTime?: Maybe<Scalars['String']>;
  lastBidAmount?: Maybe<Scalars['String']>;
  lastBidder?: Maybe<Scalars['String']>;
  reservePrice?: Maybe<Scalars['String']>;
  tokenContract?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenOwner?: Maybe<Scalars['String']>;
  winner?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auction" */
export type Auction_Min_Order_By = {
  amountTokenOwnerReceived?: Maybe<Order_By>;
  auctionCurrency?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  curator?: Maybe<Order_By>;
  curatorFee?: Maybe<Order_By>;
  curatorFeePercentage?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  expiresAt?: Maybe<Order_By>;
  firstBidTime?: Maybe<Order_By>;
  lastBidAmount?: Maybe<Order_By>;
  lastBidder?: Maybe<Order_By>;
  reservePrice?: Maybe<Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  tokenOwner?: Maybe<Order_By>;
  winner?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "auction". */
export type Auction_Order_By = {
  amountTokenOwnerReceived?: Maybe<Order_By>;
  approvalEvents_aggregate?: Maybe<AuctionApprovalUpdatedEvent_Aggregate_Order_By>;
  approved?: Maybe<Order_By>;
  auctionCurrency?: Maybe<Order_By>;
  auctionId?: Maybe<Order_By>;
  bidEvents_aggregate?: Maybe<AuctionBidEvent_Aggregate_Order_By>;
  canceledEvent?: Maybe<AuctionCanceledEvent_Order_By>;
  createdEvent?: Maybe<AuctionCreatedEvent_Order_By>;
  curator?: Maybe<Order_By>;
  curatorFee?: Maybe<Order_By>;
  curatorFeePercentage?: Maybe<Order_By>;
  currency?: Maybe<Currency_Order_By>;
  duration?: Maybe<Order_By>;
  durationExtendedEvents_aggregate?: Maybe<AuctionDurationExtendedEvent_Aggregate_Order_By>;
  endedEvent?: Maybe<AuctionEndedEvent_Order_By>;
  expiresAt?: Maybe<Order_By>;
  firstBidTime?: Maybe<Order_By>;
  lastBidAmount?: Maybe<Order_By>;
  lastBidder?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  reservePrice?: Maybe<Order_By>;
  reservePriceUpdatedEvents_aggregate?: Maybe<AuctionReservePriceUpdatedEvent_Aggregate_Order_By>;
  token?: Maybe<Token_Order_By>;
  tokenContract?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  tokenOwner?: Maybe<Order_By>;
  winner?: Maybe<Order_By>;
};

/** select columns of table "auction" */
export enum Auction_Select_Column {
  /** column name */
  AmountTokenOwnerReceived = 'amountTokenOwnerReceived',
  /** column name */
  Approved = 'approved',
  /** column name */
  AuctionCurrency = 'auctionCurrency',
  /** column name */
  AuctionId = 'auctionId',
  /** column name */
  Curator = 'curator',
  /** column name */
  CuratorFee = 'curatorFee',
  /** column name */
  CuratorFeePercentage = 'curatorFeePercentage',
  /** column name */
  Duration = 'duration',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  FirstBidTime = 'firstBidTime',
  /** column name */
  LastBidAmount = 'lastBidAmount',
  /** column name */
  LastBidder = 'lastBidder',
  /** column name */
  ReservePrice = 'reservePrice',
  /** column name */
  TokenContract = 'tokenContract',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TokenOwner = 'tokenOwner',
  /** column name */
  Winner = 'winner'
}

/** aggregate stddev on columns */
export type Auction_Stddev_Fields = {
  __typename?: 'Auction_stddev_fields';
  curatorFeePercentage?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auction" */
export type Auction_Stddev_Order_By = {
  curatorFeePercentage?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Auction_Stddev_Pop_Fields = {
  __typename?: 'Auction_stddev_pop_fields';
  curatorFeePercentage?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auction" */
export type Auction_Stddev_Pop_Order_By = {
  curatorFeePercentage?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Auction_Stddev_Samp_Fields = {
  __typename?: 'Auction_stddev_samp_fields';
  curatorFeePercentage?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auction" */
export type Auction_Stddev_Samp_Order_By = {
  curatorFeePercentage?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Auction_Sum_Fields = {
  __typename?: 'Auction_sum_fields';
  curatorFeePercentage?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "auction" */
export type Auction_Sum_Order_By = {
  curatorFeePercentage?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Auction_Var_Pop_Fields = {
  __typename?: 'Auction_var_pop_fields';
  curatorFeePercentage?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auction" */
export type Auction_Var_Pop_Order_By = {
  curatorFeePercentage?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Auction_Var_Samp_Fields = {
  __typename?: 'Auction_var_samp_fields';
  curatorFeePercentage?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auction" */
export type Auction_Var_Samp_Order_By = {
  curatorFeePercentage?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Auction_Variance_Fields = {
  __typename?: 'Auction_variance_fields';
  curatorFeePercentage?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auction" */
export type Auction_Variance_Order_By = {
  curatorFeePercentage?: Maybe<Order_By>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "currency" */
export type Currency = {
  __typename?: 'Currency';
  address: Scalars['String'];
  decimals: Scalars['Int'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

/** aggregated selection of "currency" */
export type Currency_Aggregate = {
  __typename?: 'Currency_aggregate';
  aggregate?: Maybe<Currency_Aggregate_Fields>;
  nodes: Array<Currency>;
};

/** aggregate fields of "currency" */
export type Currency_Aggregate_Fields = {
  __typename?: 'Currency_aggregate_fields';
  avg?: Maybe<Currency_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Currency_Max_Fields>;
  min?: Maybe<Currency_Min_Fields>;
  stddev?: Maybe<Currency_Stddev_Fields>;
  stddev_pop?: Maybe<Currency_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Currency_Stddev_Samp_Fields>;
  sum?: Maybe<Currency_Sum_Fields>;
  var_pop?: Maybe<Currency_Var_Pop_Fields>;
  var_samp?: Maybe<Currency_Var_Samp_Fields>;
  variance?: Maybe<Currency_Variance_Fields>;
};


/** aggregate fields of "currency" */
export type Currency_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Currency_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Currency_Avg_Fields = {
  __typename?: 'Currency_avg_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "currency". All fields are combined with a logical 'AND'. */
export type Currency_Bool_Exp = {
  _and?: Maybe<Array<Currency_Bool_Exp>>;
  _not?: Maybe<Currency_Bool_Exp>;
  _or?: Maybe<Array<Currency_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  decimals?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  symbol?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Currency_Max_Fields = {
  __typename?: 'Currency_max_fields';
  address?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Currency_Min_Fields = {
  __typename?: 'Currency_min_fields';
  address?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "currency". */
export type Currency_Order_By = {
  address?: Maybe<Order_By>;
  decimals?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  symbol?: Maybe<Order_By>;
};

/** select columns of table "currency" */
export enum Currency_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  Name = 'name',
  /** column name */
  Symbol = 'symbol'
}

/** aggregate stddev on columns */
export type Currency_Stddev_Fields = {
  __typename?: 'Currency_stddev_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Currency_Stddev_Pop_Fields = {
  __typename?: 'Currency_stddev_pop_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Currency_Stddev_Samp_Fields = {
  __typename?: 'Currency_stddev_samp_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Currency_Sum_Fields = {
  __typename?: 'Currency_sum_fields';
  decimals?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Currency_Var_Pop_Fields = {
  __typename?: 'Currency_var_pop_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Currency_Var_Samp_Fields = {
  __typename?: 'Currency_var_samp_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Currency_Variance_Fields = {
  __typename?: 'Currency_variance_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "raw_log" */
export type EventLog = {
  __typename?: 'EventLog';
  address: Scalars['String'];
  /** An object relationship */
  auctionApprovalUpdatedEvent?: Maybe<AuctionApprovalUpdatedEvent>;
  /** An object relationship */
  auctionBidEvent?: Maybe<AuctionBidEvent>;
  /** An object relationship */
  auctionCanceledEvent?: Maybe<AuctionCanceledEvent>;
  /** An object relationship */
  auctionCreatedEvent?: Maybe<AuctionCreatedEvent>;
  /** An object relationship */
  auctionDurationExtendedEvent?: Maybe<AuctionDurationExtendedEvent>;
  /** An object relationship */
  auctionEndedEvent?: Maybe<AuctionEndedEvent>;
  /** An object relationship */
  auctionReservePriceUpdatedEvent?: Maybe<AuctionReservePriceUpdatedEvent>;
  blockHash: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  data: Scalars['String'];
  id: Scalars['String'];
  logIndex: Scalars['Int'];
  /** An object relationship */
  marketAskEvent?: Maybe<MarketAskEvent>;
  /** An object relationship */
  marketBidEvent?: Maybe<MarketBidEvent>;
  /** An object relationship */
  marketBidShareUpdatedEvent?: Maybe<MarketBidShareEvent>;
  /** An object relationship */
  mediaMint?: Maybe<MediaMint>;
  /** An object relationship */
  mediaTokenMetadataURIUpdatedEvent?: Maybe<MediaTokenMetadataUriUpdatedEvent>;
  /** An object relationship */
  mediaTokenURIUpdatedEvent?: Maybe<MediaTokenUriUpdatedEvent>;
  /** An object relationship */
  tokenTransferEvent?: Maybe<TokenTransferEvent>;
  topics: Scalars['jsonb'];
  /** An object relationship */
  transaction: Transaction;
  transactionHash: Scalars['String'];
};


/** columns and relationships of "raw_log" */
export type EventLogTopicsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "raw_log" */
export type EventLog_Aggregate = {
  __typename?: 'EventLog_aggregate';
  aggregate?: Maybe<EventLog_Aggregate_Fields>;
  nodes: Array<EventLog>;
};

/** aggregate fields of "raw_log" */
export type EventLog_Aggregate_Fields = {
  __typename?: 'EventLog_aggregate_fields';
  avg?: Maybe<EventLog_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<EventLog_Max_Fields>;
  min?: Maybe<EventLog_Min_Fields>;
  stddev?: Maybe<EventLog_Stddev_Fields>;
  stddev_pop?: Maybe<EventLog_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<EventLog_Stddev_Samp_Fields>;
  sum?: Maybe<EventLog_Sum_Fields>;
  var_pop?: Maybe<EventLog_Var_Pop_Fields>;
  var_samp?: Maybe<EventLog_Var_Samp_Fields>;
  variance?: Maybe<EventLog_Variance_Fields>;
};


/** aggregate fields of "raw_log" */
export type EventLog_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<EventLog_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "raw_log" */
export type EventLog_Aggregate_Order_By = {
  avg?: Maybe<EventLog_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<EventLog_Max_Order_By>;
  min?: Maybe<EventLog_Min_Order_By>;
  stddev?: Maybe<EventLog_Stddev_Order_By>;
  stddev_pop?: Maybe<EventLog_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<EventLog_Stddev_Samp_Order_By>;
  sum?: Maybe<EventLog_Sum_Order_By>;
  var_pop?: Maybe<EventLog_Var_Pop_Order_By>;
  var_samp?: Maybe<EventLog_Var_Samp_Order_By>;
  variance?: Maybe<EventLog_Variance_Order_By>;
};

/** aggregate avg on columns */
export type EventLog_Avg_Fields = {
  __typename?: 'EventLog_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "raw_log" */
export type EventLog_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "raw_log". All fields are combined with a logical 'AND'. */
export type EventLog_Bool_Exp = {
  _and?: Maybe<Array<EventLog_Bool_Exp>>;
  _not?: Maybe<EventLog_Bool_Exp>;
  _or?: Maybe<Array<EventLog_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  auctionApprovalUpdatedEvent?: Maybe<AuctionApprovalUpdatedEvent_Bool_Exp>;
  auctionBidEvent?: Maybe<AuctionBidEvent_Bool_Exp>;
  auctionCanceledEvent?: Maybe<AuctionCanceledEvent_Bool_Exp>;
  auctionCreatedEvent?: Maybe<AuctionCreatedEvent_Bool_Exp>;
  auctionDurationExtendedEvent?: Maybe<AuctionDurationExtendedEvent_Bool_Exp>;
  auctionEndedEvent?: Maybe<AuctionEndedEvent_Bool_Exp>;
  auctionReservePriceUpdatedEvent?: Maybe<AuctionReservePriceUpdatedEvent_Bool_Exp>;
  blockHash?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  data?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  marketAskEvent?: Maybe<MarketAskEvent_Bool_Exp>;
  marketBidEvent?: Maybe<MarketBidEvent_Bool_Exp>;
  marketBidShareUpdatedEvent?: Maybe<MarketBidShareEvent_Bool_Exp>;
  mediaMint?: Maybe<MediaMint_Bool_Exp>;
  mediaTokenMetadataURIUpdatedEvent?: Maybe<MediaTokenMetadataUriUpdatedEvent_Bool_Exp>;
  mediaTokenURIUpdatedEvent?: Maybe<MediaTokenUriUpdatedEvent_Bool_Exp>;
  tokenTransferEvent?: Maybe<TokenTransferEvent_Bool_Exp>;
  topics?: Maybe<Jsonb_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transactionHash?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type EventLog_Max_Fields = {
  __typename?: 'EventLog_max_fields';
  address?: Maybe<Scalars['String']>;
  blockHash?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  data?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "raw_log" */
export type EventLog_Max_Order_By = {
  address?: Maybe<Order_By>;
  blockHash?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  data?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type EventLog_Min_Fields = {
  __typename?: 'EventLog_min_fields';
  address?: Maybe<Scalars['String']>;
  blockHash?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  data?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "raw_log" */
export type EventLog_Min_Order_By = {
  address?: Maybe<Order_By>;
  blockHash?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  data?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "raw_log". */
export type EventLog_Order_By = {
  address?: Maybe<Order_By>;
  auctionApprovalUpdatedEvent?: Maybe<AuctionApprovalUpdatedEvent_Order_By>;
  auctionBidEvent?: Maybe<AuctionBidEvent_Order_By>;
  auctionCanceledEvent?: Maybe<AuctionCanceledEvent_Order_By>;
  auctionCreatedEvent?: Maybe<AuctionCreatedEvent_Order_By>;
  auctionDurationExtendedEvent?: Maybe<AuctionDurationExtendedEvent_Order_By>;
  auctionEndedEvent?: Maybe<AuctionEndedEvent_Order_By>;
  auctionReservePriceUpdatedEvent?: Maybe<AuctionReservePriceUpdatedEvent_Order_By>;
  blockHash?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  data?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  marketAskEvent?: Maybe<MarketAskEvent_Order_By>;
  marketBidEvent?: Maybe<MarketBidEvent_Order_By>;
  marketBidShareUpdatedEvent?: Maybe<MarketBidShareEvent_Order_By>;
  mediaMint?: Maybe<MediaMint_Order_By>;
  mediaTokenMetadataURIUpdatedEvent?: Maybe<MediaTokenMetadataUriUpdatedEvent_Order_By>;
  mediaTokenURIUpdatedEvent?: Maybe<MediaTokenUriUpdatedEvent_Order_By>;
  tokenTransferEvent?: Maybe<TokenTransferEvent_Order_By>;
  topics?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** select columns of table "raw_log" */
export enum EventLog_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BlockHash = 'blockHash',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  Topics = 'topics',
  /** column name */
  TransactionHash = 'transactionHash'
}

/** aggregate stddev on columns */
export type EventLog_Stddev_Fields = {
  __typename?: 'EventLog_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "raw_log" */
export type EventLog_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type EventLog_Stddev_Pop_Fields = {
  __typename?: 'EventLog_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "raw_log" */
export type EventLog_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type EventLog_Stddev_Samp_Fields = {
  __typename?: 'EventLog_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "raw_log" */
export type EventLog_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type EventLog_Sum_Fields = {
  __typename?: 'EventLog_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "raw_log" */
export type EventLog_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type EventLog_Var_Pop_Fields = {
  __typename?: 'EventLog_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "raw_log" */
export type EventLog_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type EventLog_Var_Samp_Fields = {
  __typename?: 'EventLog_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "raw_log" */
export type EventLog_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type EventLog_Variance_Fields = {
  __typename?: 'EventLog_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "raw_log" */
export type EventLog_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "ask" */
export type MarketAsk = {
  __typename?: 'MarketAsk';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  currencyAddress?: Maybe<Scalars['String']>;
  /** An object relationship */
  media?: Maybe<Media>;
  status?: Maybe<Scalars['ask_event_status_enum']>;
  tokenId?: Maybe<Scalars['String']>;
};

/** columns and relationships of "ask_event" */
export type MarketAskEvent = {
  __typename?: 'MarketAskEvent';
  address: Scalars['String'];
  amount: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  currency: Scalars['String'];
  /** An object relationship */
  eventLog: EventLog;
  eventLogId: Scalars['String'];
  id: Scalars['String'];
  logIndex: Scalars['Int'];
  /** An object relationship */
  media?: Maybe<Media>;
  status: Scalars['ask_event_status_enum'];
  tokenId: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transactionHash: Scalars['String'];
};

/** aggregated selection of "ask_event" */
export type MarketAskEvent_Aggregate = {
  __typename?: 'MarketAskEvent_aggregate';
  aggregate?: Maybe<MarketAskEvent_Aggregate_Fields>;
  nodes: Array<MarketAskEvent>;
};

/** aggregate fields of "ask_event" */
export type MarketAskEvent_Aggregate_Fields = {
  __typename?: 'MarketAskEvent_aggregate_fields';
  avg?: Maybe<MarketAskEvent_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<MarketAskEvent_Max_Fields>;
  min?: Maybe<MarketAskEvent_Min_Fields>;
  stddev?: Maybe<MarketAskEvent_Stddev_Fields>;
  stddev_pop?: Maybe<MarketAskEvent_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<MarketAskEvent_Stddev_Samp_Fields>;
  sum?: Maybe<MarketAskEvent_Sum_Fields>;
  var_pop?: Maybe<MarketAskEvent_Var_Pop_Fields>;
  var_samp?: Maybe<MarketAskEvent_Var_Samp_Fields>;
  variance?: Maybe<MarketAskEvent_Variance_Fields>;
};


/** aggregate fields of "ask_event" */
export type MarketAskEvent_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<MarketAskEvent_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ask_event" */
export type MarketAskEvent_Aggregate_Order_By = {
  avg?: Maybe<MarketAskEvent_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<MarketAskEvent_Max_Order_By>;
  min?: Maybe<MarketAskEvent_Min_Order_By>;
  stddev?: Maybe<MarketAskEvent_Stddev_Order_By>;
  stddev_pop?: Maybe<MarketAskEvent_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<MarketAskEvent_Stddev_Samp_Order_By>;
  sum?: Maybe<MarketAskEvent_Sum_Order_By>;
  var_pop?: Maybe<MarketAskEvent_Var_Pop_Order_By>;
  var_samp?: Maybe<MarketAskEvent_Var_Samp_Order_By>;
  variance?: Maybe<MarketAskEvent_Variance_Order_By>;
};

/** aggregate avg on columns */
export type MarketAskEvent_Avg_Fields = {
  __typename?: 'MarketAskEvent_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ask_event" */
export type MarketAskEvent_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ask_event". All fields are combined with a logical 'AND'. */
export type MarketAskEvent_Bool_Exp = {
  _and?: Maybe<Array<MarketAskEvent_Bool_Exp>>;
  _not?: Maybe<MarketAskEvent_Bool_Exp>;
  _or?: Maybe<Array<MarketAskEvent_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  amount?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  currency?: Maybe<String_Comparison_Exp>;
  eventLog?: Maybe<EventLog_Bool_Exp>;
  eventLogId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  status?: Maybe<Ask_Event_Status_Enum_Comparison_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transactionHash?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type MarketAskEvent_Max_Fields = {
  __typename?: 'MarketAskEvent_max_fields';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ask_event" */
export type MarketAskEvent_Max_Order_By = {
  address?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type MarketAskEvent_Min_Fields = {
  __typename?: 'MarketAskEvent_min_fields';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ask_event" */
export type MarketAskEvent_Min_Order_By = {
  address?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "ask_event". */
export type MarketAskEvent_Order_By = {
  address?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  eventLog?: Maybe<EventLog_Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  status?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** select columns of table "ask_event" */
export enum MarketAskEvent_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Amount = 'amount',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  Currency = 'currency',
  /** column name */
  EventLogId = 'eventLogId',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  Status = 'status',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TransactionHash = 'transactionHash'
}

/** aggregate stddev on columns */
export type MarketAskEvent_Stddev_Fields = {
  __typename?: 'MarketAskEvent_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ask_event" */
export type MarketAskEvent_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type MarketAskEvent_Stddev_Pop_Fields = {
  __typename?: 'MarketAskEvent_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ask_event" */
export type MarketAskEvent_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type MarketAskEvent_Stddev_Samp_Fields = {
  __typename?: 'MarketAskEvent_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ask_event" */
export type MarketAskEvent_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type MarketAskEvent_Sum_Fields = {
  __typename?: 'MarketAskEvent_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ask_event" */
export type MarketAskEvent_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type MarketAskEvent_Var_Pop_Fields = {
  __typename?: 'MarketAskEvent_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ask_event" */
export type MarketAskEvent_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type MarketAskEvent_Var_Samp_Fields = {
  __typename?: 'MarketAskEvent_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ask_event" */
export type MarketAskEvent_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type MarketAskEvent_Variance_Fields = {
  __typename?: 'MarketAskEvent_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ask_event" */
export type MarketAskEvent_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregated selection of "ask" */
export type MarketAsk_Aggregate = {
  __typename?: 'MarketAsk_aggregate';
  aggregate?: Maybe<MarketAsk_Aggregate_Fields>;
  nodes: Array<MarketAsk>;
};

/** aggregate fields of "ask" */
export type MarketAsk_Aggregate_Fields = {
  __typename?: 'MarketAsk_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MarketAsk_Max_Fields>;
  min?: Maybe<MarketAsk_Min_Fields>;
};


/** aggregate fields of "ask" */
export type MarketAsk_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<MarketAsk_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ask" */
export type MarketAsk_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<MarketAsk_Max_Order_By>;
  min?: Maybe<MarketAsk_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "ask". All fields are combined with a logical 'AND'. */
export type MarketAsk_Bool_Exp = {
  _and?: Maybe<Array<MarketAsk_Bool_Exp>>;
  _not?: Maybe<MarketAsk_Bool_Exp>;
  _or?: Maybe<Array<MarketAsk_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  amount?: Maybe<String_Comparison_Exp>;
  currencyAddress?: Maybe<String_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  status?: Maybe<Ask_Event_Status_Enum_Comparison_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type MarketAsk_Max_Fields = {
  __typename?: 'MarketAsk_max_fields';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  currencyAddress?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ask" */
export type MarketAsk_Max_Order_By = {
  address?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  currencyAddress?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type MarketAsk_Min_Fields = {
  __typename?: 'MarketAsk_min_fields';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  currencyAddress?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ask" */
export type MarketAsk_Min_Order_By = {
  address?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  currencyAddress?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "ask". */
export type MarketAsk_Order_By = {
  address?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  currencyAddress?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  status?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
};

/** select columns of table "ask" */
export enum MarketAsk_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Amount = 'amount',
  /** column name */
  CurrencyAddress = 'currencyAddress',
  /** column name */
  Status = 'status',
  /** column name */
  TokenId = 'tokenId'
}

/** columns and relationships of "bid" */
export type MarketBid = {
  __typename?: 'MarketBid';
  amount: Scalars['String'];
  bidder: Scalars['String'];
  /** An object relationship */
  currency?: Maybe<Currency>;
  currencyAddress: Scalars['String'];
  id: Scalars['String'];
  /** An object relationship */
  media?: Maybe<Media>;
  recipient: Scalars['String'];
  sellOnShare: Scalars['String'];
  status: Scalars['bid_status_enum'];
  tokenId: Scalars['String'];
};

/** columns and relationships of "bid_event" */
export type MarketBidEvent = {
  __typename?: 'MarketBidEvent';
  address: Scalars['String'];
  amount: Scalars['String'];
  bidder: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  /** An object relationship */
  currency?: Maybe<Currency>;
  currencyAddress: Scalars['String'];
  /** An object relationship */
  eventLog: EventLog;
  eventLogId: Scalars['String'];
  id: Scalars['String'];
  logIndex: Scalars['Int'];
  /** An object relationship */
  media?: Maybe<Media>;
  recipient: Scalars['String'];
  sellOnShare: Scalars['String'];
  status: Scalars['bid_event_status_enum'];
  tokenId: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transactionHash: Scalars['String'];
};

/** aggregated selection of "bid_event" */
export type MarketBidEvent_Aggregate = {
  __typename?: 'MarketBidEvent_aggregate';
  aggregate?: Maybe<MarketBidEvent_Aggregate_Fields>;
  nodes: Array<MarketBidEvent>;
};

/** aggregate fields of "bid_event" */
export type MarketBidEvent_Aggregate_Fields = {
  __typename?: 'MarketBidEvent_aggregate_fields';
  avg?: Maybe<MarketBidEvent_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<MarketBidEvent_Max_Fields>;
  min?: Maybe<MarketBidEvent_Min_Fields>;
  stddev?: Maybe<MarketBidEvent_Stddev_Fields>;
  stddev_pop?: Maybe<MarketBidEvent_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<MarketBidEvent_Stddev_Samp_Fields>;
  sum?: Maybe<MarketBidEvent_Sum_Fields>;
  var_pop?: Maybe<MarketBidEvent_Var_Pop_Fields>;
  var_samp?: Maybe<MarketBidEvent_Var_Samp_Fields>;
  variance?: Maybe<MarketBidEvent_Variance_Fields>;
};


/** aggregate fields of "bid_event" */
export type MarketBidEvent_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<MarketBidEvent_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bid_event" */
export type MarketBidEvent_Aggregate_Order_By = {
  avg?: Maybe<MarketBidEvent_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<MarketBidEvent_Max_Order_By>;
  min?: Maybe<MarketBidEvent_Min_Order_By>;
  stddev?: Maybe<MarketBidEvent_Stddev_Order_By>;
  stddev_pop?: Maybe<MarketBidEvent_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<MarketBidEvent_Stddev_Samp_Order_By>;
  sum?: Maybe<MarketBidEvent_Sum_Order_By>;
  var_pop?: Maybe<MarketBidEvent_Var_Pop_Order_By>;
  var_samp?: Maybe<MarketBidEvent_Var_Samp_Order_By>;
  variance?: Maybe<MarketBidEvent_Variance_Order_By>;
};

/** aggregate avg on columns */
export type MarketBidEvent_Avg_Fields = {
  __typename?: 'MarketBidEvent_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "bid_event" */
export type MarketBidEvent_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bid_event". All fields are combined with a logical 'AND'. */
export type MarketBidEvent_Bool_Exp = {
  _and?: Maybe<Array<MarketBidEvent_Bool_Exp>>;
  _not?: Maybe<MarketBidEvent_Bool_Exp>;
  _or?: Maybe<Array<MarketBidEvent_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  amount?: Maybe<String_Comparison_Exp>;
  bidder?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  currency?: Maybe<Currency_Bool_Exp>;
  currencyAddress?: Maybe<String_Comparison_Exp>;
  eventLog?: Maybe<EventLog_Bool_Exp>;
  eventLogId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  recipient?: Maybe<String_Comparison_Exp>;
  sellOnShare?: Maybe<String_Comparison_Exp>;
  status?: Maybe<Bid_Event_Status_Enum_Comparison_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transactionHash?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type MarketBidEvent_Max_Fields = {
  __typename?: 'MarketBidEvent_max_fields';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  bidder?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  currencyAddress?: Maybe<Scalars['String']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  recipient?: Maybe<Scalars['String']>;
  sellOnShare?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "bid_event" */
export type MarketBidEvent_Max_Order_By = {
  address?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  bidder?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  currencyAddress?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  recipient?: Maybe<Order_By>;
  sellOnShare?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type MarketBidEvent_Min_Fields = {
  __typename?: 'MarketBidEvent_min_fields';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  bidder?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  currencyAddress?: Maybe<Scalars['String']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  recipient?: Maybe<Scalars['String']>;
  sellOnShare?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "bid_event" */
export type MarketBidEvent_Min_Order_By = {
  address?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  bidder?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  currencyAddress?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  recipient?: Maybe<Order_By>;
  sellOnShare?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "bid_event". */
export type MarketBidEvent_Order_By = {
  address?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  bidder?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  currency?: Maybe<Currency_Order_By>;
  currencyAddress?: Maybe<Order_By>;
  eventLog?: Maybe<EventLog_Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  recipient?: Maybe<Order_By>;
  sellOnShare?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** select columns of table "bid_event" */
export enum MarketBidEvent_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Amount = 'amount',
  /** column name */
  Bidder = 'bidder',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  CurrencyAddress = 'currencyAddress',
  /** column name */
  EventLogId = 'eventLogId',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  Recipient = 'recipient',
  /** column name */
  SellOnShare = 'sellOnShare',
  /** column name */
  Status = 'status',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TransactionHash = 'transactionHash'
}

/** aggregate stddev on columns */
export type MarketBidEvent_Stddev_Fields = {
  __typename?: 'MarketBidEvent_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "bid_event" */
export type MarketBidEvent_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type MarketBidEvent_Stddev_Pop_Fields = {
  __typename?: 'MarketBidEvent_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "bid_event" */
export type MarketBidEvent_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type MarketBidEvent_Stddev_Samp_Fields = {
  __typename?: 'MarketBidEvent_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "bid_event" */
export type MarketBidEvent_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type MarketBidEvent_Sum_Fields = {
  __typename?: 'MarketBidEvent_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "bid_event" */
export type MarketBidEvent_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type MarketBidEvent_Var_Pop_Fields = {
  __typename?: 'MarketBidEvent_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "bid_event" */
export type MarketBidEvent_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type MarketBidEvent_Var_Samp_Fields = {
  __typename?: 'MarketBidEvent_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "bid_event" */
export type MarketBidEvent_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type MarketBidEvent_Variance_Fields = {
  __typename?: 'MarketBidEvent_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "bid_event" */
export type MarketBidEvent_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** columns and relationships of "bid_share" */
export type MarketBidShare = {
  __typename?: 'MarketBidShare';
  creator?: Maybe<Scalars['String']>;
  /** An object relationship */
  media?: Maybe<Media>;
  owner?: Maybe<Scalars['String']>;
  prevOwner?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
};

/** columns and relationships of "bid_share_event" */
export type MarketBidShareEvent = {
  __typename?: 'MarketBidShareEvent';
  address: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  creator: Scalars['String'];
  /** An object relationship */
  eventLog: EventLog;
  eventLogId: Scalars['String'];
  id: Scalars['String'];
  logIndex: Scalars['Int'];
  /** An object relationship */
  media?: Maybe<Media>;
  owner: Scalars['String'];
  prevOwner: Scalars['String'];
  tokenId: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transactionHash: Scalars['String'];
};

/** aggregated selection of "bid_share_event" */
export type MarketBidShareEvent_Aggregate = {
  __typename?: 'MarketBidShareEvent_aggregate';
  aggregate?: Maybe<MarketBidShareEvent_Aggregate_Fields>;
  nodes: Array<MarketBidShareEvent>;
};

/** aggregate fields of "bid_share_event" */
export type MarketBidShareEvent_Aggregate_Fields = {
  __typename?: 'MarketBidShareEvent_aggregate_fields';
  avg?: Maybe<MarketBidShareEvent_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<MarketBidShareEvent_Max_Fields>;
  min?: Maybe<MarketBidShareEvent_Min_Fields>;
  stddev?: Maybe<MarketBidShareEvent_Stddev_Fields>;
  stddev_pop?: Maybe<MarketBidShareEvent_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<MarketBidShareEvent_Stddev_Samp_Fields>;
  sum?: Maybe<MarketBidShareEvent_Sum_Fields>;
  var_pop?: Maybe<MarketBidShareEvent_Var_Pop_Fields>;
  var_samp?: Maybe<MarketBidShareEvent_Var_Samp_Fields>;
  variance?: Maybe<MarketBidShareEvent_Variance_Fields>;
};


/** aggregate fields of "bid_share_event" */
export type MarketBidShareEvent_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<MarketBidShareEvent_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bid_share_event" */
export type MarketBidShareEvent_Aggregate_Order_By = {
  avg?: Maybe<MarketBidShareEvent_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<MarketBidShareEvent_Max_Order_By>;
  min?: Maybe<MarketBidShareEvent_Min_Order_By>;
  stddev?: Maybe<MarketBidShareEvent_Stddev_Order_By>;
  stddev_pop?: Maybe<MarketBidShareEvent_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<MarketBidShareEvent_Stddev_Samp_Order_By>;
  sum?: Maybe<MarketBidShareEvent_Sum_Order_By>;
  var_pop?: Maybe<MarketBidShareEvent_Var_Pop_Order_By>;
  var_samp?: Maybe<MarketBidShareEvent_Var_Samp_Order_By>;
  variance?: Maybe<MarketBidShareEvent_Variance_Order_By>;
};

/** aggregate avg on columns */
export type MarketBidShareEvent_Avg_Fields = {
  __typename?: 'MarketBidShareEvent_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "bid_share_event" */
export type MarketBidShareEvent_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bid_share_event". All fields are combined with a logical 'AND'. */
export type MarketBidShareEvent_Bool_Exp = {
  _and?: Maybe<Array<MarketBidShareEvent_Bool_Exp>>;
  _not?: Maybe<MarketBidShareEvent_Bool_Exp>;
  _or?: Maybe<Array<MarketBidShareEvent_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  creator?: Maybe<String_Comparison_Exp>;
  eventLog?: Maybe<EventLog_Bool_Exp>;
  eventLogId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  owner?: Maybe<String_Comparison_Exp>;
  prevOwner?: Maybe<String_Comparison_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transactionHash?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type MarketBidShareEvent_Max_Fields = {
  __typename?: 'MarketBidShareEvent_max_fields';
  address?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  creator?: Maybe<Scalars['String']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  prevOwner?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "bid_share_event" */
export type MarketBidShareEvent_Max_Order_By = {
  address?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  creator?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  prevOwner?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type MarketBidShareEvent_Min_Fields = {
  __typename?: 'MarketBidShareEvent_min_fields';
  address?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  creator?: Maybe<Scalars['String']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  prevOwner?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "bid_share_event" */
export type MarketBidShareEvent_Min_Order_By = {
  address?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  creator?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  prevOwner?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "bid_share_event". */
export type MarketBidShareEvent_Order_By = {
  address?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  creator?: Maybe<Order_By>;
  eventLog?: Maybe<EventLog_Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  owner?: Maybe<Order_By>;
  prevOwner?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** select columns of table "bid_share_event" */
export enum MarketBidShareEvent_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  Creator = 'creator',
  /** column name */
  EventLogId = 'eventLogId',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  Owner = 'owner',
  /** column name */
  PrevOwner = 'prevOwner',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TransactionHash = 'transactionHash'
}

/** aggregate stddev on columns */
export type MarketBidShareEvent_Stddev_Fields = {
  __typename?: 'MarketBidShareEvent_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "bid_share_event" */
export type MarketBidShareEvent_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type MarketBidShareEvent_Stddev_Pop_Fields = {
  __typename?: 'MarketBidShareEvent_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "bid_share_event" */
export type MarketBidShareEvent_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type MarketBidShareEvent_Stddev_Samp_Fields = {
  __typename?: 'MarketBidShareEvent_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "bid_share_event" */
export type MarketBidShareEvent_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type MarketBidShareEvent_Sum_Fields = {
  __typename?: 'MarketBidShareEvent_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "bid_share_event" */
export type MarketBidShareEvent_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type MarketBidShareEvent_Var_Pop_Fields = {
  __typename?: 'MarketBidShareEvent_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "bid_share_event" */
export type MarketBidShareEvent_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type MarketBidShareEvent_Var_Samp_Fields = {
  __typename?: 'MarketBidShareEvent_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "bid_share_event" */
export type MarketBidShareEvent_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type MarketBidShareEvent_Variance_Fields = {
  __typename?: 'MarketBidShareEvent_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "bid_share_event" */
export type MarketBidShareEvent_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregated selection of "bid_share" */
export type MarketBidShare_Aggregate = {
  __typename?: 'MarketBidShare_aggregate';
  aggregate?: Maybe<MarketBidShare_Aggregate_Fields>;
  nodes: Array<MarketBidShare>;
};

/** aggregate fields of "bid_share" */
export type MarketBidShare_Aggregate_Fields = {
  __typename?: 'MarketBidShare_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MarketBidShare_Max_Fields>;
  min?: Maybe<MarketBidShare_Min_Fields>;
};


/** aggregate fields of "bid_share" */
export type MarketBidShare_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<MarketBidShare_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "bid_share". All fields are combined with a logical 'AND'. */
export type MarketBidShare_Bool_Exp = {
  _and?: Maybe<Array<MarketBidShare_Bool_Exp>>;
  _not?: Maybe<MarketBidShare_Bool_Exp>;
  _or?: Maybe<Array<MarketBidShare_Bool_Exp>>;
  creator?: Maybe<String_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  owner?: Maybe<String_Comparison_Exp>;
  prevOwner?: Maybe<String_Comparison_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type MarketBidShare_Max_Fields = {
  __typename?: 'MarketBidShare_max_fields';
  creator?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  prevOwner?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type MarketBidShare_Min_Fields = {
  __typename?: 'MarketBidShare_min_fields';
  creator?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  prevOwner?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "bid_share". */
export type MarketBidShare_Order_By = {
  creator?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  owner?: Maybe<Order_By>;
  prevOwner?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
};

/** select columns of table "bid_share" */
export enum MarketBidShare_Select_Column {
  /** column name */
  Creator = 'creator',
  /** column name */
  Owner = 'owner',
  /** column name */
  PrevOwner = 'prevOwner',
  /** column name */
  TokenId = 'tokenId'
}

/** aggregated selection of "bid" */
export type MarketBid_Aggregate = {
  __typename?: 'MarketBid_aggregate';
  aggregate?: Maybe<MarketBid_Aggregate_Fields>;
  nodes: Array<MarketBid>;
};

/** aggregate fields of "bid" */
export type MarketBid_Aggregate_Fields = {
  __typename?: 'MarketBid_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MarketBid_Max_Fields>;
  min?: Maybe<MarketBid_Min_Fields>;
};


/** aggregate fields of "bid" */
export type MarketBid_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<MarketBid_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bid" */
export type MarketBid_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<MarketBid_Max_Order_By>;
  min?: Maybe<MarketBid_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "bid". All fields are combined with a logical 'AND'. */
export type MarketBid_Bool_Exp = {
  _and?: Maybe<Array<MarketBid_Bool_Exp>>;
  _not?: Maybe<MarketBid_Bool_Exp>;
  _or?: Maybe<Array<MarketBid_Bool_Exp>>;
  amount?: Maybe<String_Comparison_Exp>;
  bidder?: Maybe<String_Comparison_Exp>;
  currency?: Maybe<Currency_Bool_Exp>;
  currencyAddress?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  recipient?: Maybe<String_Comparison_Exp>;
  sellOnShare?: Maybe<String_Comparison_Exp>;
  status?: Maybe<Bid_Status_Enum_Comparison_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type MarketBid_Max_Fields = {
  __typename?: 'MarketBid_max_fields';
  amount?: Maybe<Scalars['String']>;
  bidder?: Maybe<Scalars['String']>;
  currencyAddress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  sellOnShare?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "bid" */
export type MarketBid_Max_Order_By = {
  amount?: Maybe<Order_By>;
  bidder?: Maybe<Order_By>;
  currencyAddress?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  recipient?: Maybe<Order_By>;
  sellOnShare?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type MarketBid_Min_Fields = {
  __typename?: 'MarketBid_min_fields';
  amount?: Maybe<Scalars['String']>;
  bidder?: Maybe<Scalars['String']>;
  currencyAddress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  sellOnShare?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "bid" */
export type MarketBid_Min_Order_By = {
  amount?: Maybe<Order_By>;
  bidder?: Maybe<Order_By>;
  currencyAddress?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  recipient?: Maybe<Order_By>;
  sellOnShare?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "bid". */
export type MarketBid_Order_By = {
  amount?: Maybe<Order_By>;
  bidder?: Maybe<Order_By>;
  currency?: Maybe<Currency_Order_By>;
  currencyAddress?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  recipient?: Maybe<Order_By>;
  sellOnShare?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
};

/** select columns of table "bid" */
export enum MarketBid_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Bidder = 'bidder',
  /** column name */
  CurrencyAddress = 'currencyAddress',
  /** column name */
  Id = 'id',
  /** column name */
  Recipient = 'recipient',
  /** column name */
  SellOnShare = 'sellOnShare',
  /** column name */
  Status = 'status',
  /** column name */
  TokenId = 'tokenId'
}

/** columns and relationships of "media" */
export type Media = {
  __typename?: 'Media';
  address: Scalars['String'];
  /** An array relationship */
  askEvents: Array<MarketAskEvent>;
  /** An aggregate relationship */
  askEvents_aggregate: MarketAskEvent_Aggregate;
  /** An array relationship */
  asks: Array<MarketAsk>;
  /** An aggregate relationship */
  asks_aggregate: MarketAsk_Aggregate;
  /** An array relationship */
  auctions: Array<Auction>;
  /** An aggregate relationship */
  auctions_aggregate: Auction_Aggregate;
  /** An array relationship */
  bidEvents: Array<MarketBidEvent>;
  /** An aggregate relationship */
  bidEvents_aggregate: MarketBidEvent_Aggregate;
  /** An array relationship */
  bids: Array<MarketBid>;
  /** An aggregate relationship */
  bids_aggregate: MarketBid_Aggregate;
  contentHash?: Maybe<Scalars['String']>;
  contentURI?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['String']>;
  creatorBidShare?: Maybe<Scalars['String']>;
  /** An object relationship */
  metadata?: Maybe<MediaMetadata>;
  metadataHash?: Maybe<Scalars['String']>;
  metadataURI?: Maybe<Scalars['String']>;
  mintTransferEventId?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  ownerBidShare?: Maybe<Scalars['String']>;
  prevOwner?: Maybe<Scalars['String']>;
  prevOwnerBidShare?: Maybe<Scalars['String']>;
  /** An object relationship */
  token?: Maybe<Token>;
  tokenId: Scalars['String'];
  /** An array relationship */
  tokenMetadataURIUpdatedEvents: Array<MediaTokenMetadataUriUpdatedEvent>;
  /** An aggregate relationship */
  tokenMetadataURIUpdatedEvents_aggregate: MediaTokenMetadataUriUpdatedEvent_Aggregate;
  /** An array relationship */
  tokenURIUpdatedEvents: Array<MediaTokenUriUpdatedEvent>;
  /** An aggregate relationship */
  tokenURIUpdatedEvents_aggregate: MediaTokenUriUpdatedEvent_Aggregate;
  /** An array relationship */
  transferEvents: Array<TokenTransferEvent>;
  /** An aggregate relationship */
  transferEvents_aggregate: TokenTransferEvent_Aggregate;
};


/** columns and relationships of "media" */
export type MediaAskEventsArgs = {
  distinct_on?: Maybe<Array<MarketAskEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketAskEvent_Order_By>>;
  where?: Maybe<MarketAskEvent_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaAskEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketAskEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketAskEvent_Order_By>>;
  where?: Maybe<MarketAskEvent_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaAsksArgs = {
  distinct_on?: Maybe<Array<MarketAsk_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketAsk_Order_By>>;
  where?: Maybe<MarketAsk_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaAsks_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketAsk_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketAsk_Order_By>>;
  where?: Maybe<MarketAsk_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaAuctionsArgs = {
  distinct_on?: Maybe<Array<Auction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auction_Order_By>>;
  where?: Maybe<Auction_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaAuctions_AggregateArgs = {
  distinct_on?: Maybe<Array<Auction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auction_Order_By>>;
  where?: Maybe<Auction_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaBidEventsArgs = {
  distinct_on?: Maybe<Array<MarketBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidEvent_Order_By>>;
  where?: Maybe<MarketBidEvent_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaBidEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidEvent_Order_By>>;
  where?: Maybe<MarketBidEvent_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaBidsArgs = {
  distinct_on?: Maybe<Array<MarketBid_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBid_Order_By>>;
  where?: Maybe<MarketBid_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaBids_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketBid_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBid_Order_By>>;
  where?: Maybe<MarketBid_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaTokenMetadataUriUpdatedEventsArgs = {
  distinct_on?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenMetadataUriUpdatedEvent_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaTokenMetadataUriUpdatedEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenMetadataUriUpdatedEvent_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaTokenUriUpdatedEventsArgs = {
  distinct_on?: Maybe<Array<MediaTokenUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenUriUpdatedEvent_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaTokenUriUpdatedEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<MediaTokenUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenUriUpdatedEvent_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaTransferEventsArgs = {
  distinct_on?: Maybe<Array<TokenTransferEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenTransferEvent_Order_By>>;
  where?: Maybe<TokenTransferEvent_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaTransferEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<TokenTransferEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenTransferEvent_Order_By>>;
  where?: Maybe<TokenTransferEvent_Bool_Exp>;
};

/** columns and relationships of "metadata" */
export type MediaMetadata = {
  __typename?: 'MediaMetadata';
  blockNumber: Scalars['Int'];
  createdAt: Scalars['timestamp'];
  id: Scalars['String'];
  json?: Maybe<Scalars['jsonb']>;
  logIndex: Scalars['Int'];
  /** An object relationship */
  media?: Maybe<Media>;
  tokenId: Scalars['String'];
  updatedAt: Scalars['timestamp'];
  uri: Scalars['String'];
};


/** columns and relationships of "metadata" */
export type MediaMetadataJsonArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "metadata" */
export type MediaMetadata_Aggregate = {
  __typename?: 'MediaMetadata_aggregate';
  aggregate?: Maybe<MediaMetadata_Aggregate_Fields>;
  nodes: Array<MediaMetadata>;
};

/** aggregate fields of "metadata" */
export type MediaMetadata_Aggregate_Fields = {
  __typename?: 'MediaMetadata_aggregate_fields';
  avg?: Maybe<MediaMetadata_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<MediaMetadata_Max_Fields>;
  min?: Maybe<MediaMetadata_Min_Fields>;
  stddev?: Maybe<MediaMetadata_Stddev_Fields>;
  stddev_pop?: Maybe<MediaMetadata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<MediaMetadata_Stddev_Samp_Fields>;
  sum?: Maybe<MediaMetadata_Sum_Fields>;
  var_pop?: Maybe<MediaMetadata_Var_Pop_Fields>;
  var_samp?: Maybe<MediaMetadata_Var_Samp_Fields>;
  variance?: Maybe<MediaMetadata_Variance_Fields>;
};


/** aggregate fields of "metadata" */
export type MediaMetadata_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<MediaMetadata_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type MediaMetadata_Avg_Fields = {
  __typename?: 'MediaMetadata_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "metadata". All fields are combined with a logical 'AND'. */
export type MediaMetadata_Bool_Exp = {
  _and?: Maybe<Array<MediaMetadata_Bool_Exp>>;
  _not?: Maybe<MediaMetadata_Bool_Exp>;
  _or?: Maybe<Array<MediaMetadata_Bool_Exp>>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  json?: Maybe<Jsonb_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamp_Comparison_Exp>;
  uri?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type MediaMetadata_Max_Fields = {
  __typename?: 'MediaMetadata_max_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  tokenId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  uri?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type MediaMetadata_Min_Fields = {
  __typename?: 'MediaMetadata_min_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  tokenId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  uri?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "metadata". */
export type MediaMetadata_Order_By = {
  blockNumber?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  json?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  tokenId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  uri?: Maybe<Order_By>;
};

/** select columns of table "metadata" */
export enum MediaMetadata_Select_Column {
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Uri = 'uri'
}

/** aggregate stddev on columns */
export type MediaMetadata_Stddev_Fields = {
  __typename?: 'MediaMetadata_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type MediaMetadata_Stddev_Pop_Fields = {
  __typename?: 'MediaMetadata_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type MediaMetadata_Stddev_Samp_Fields = {
  __typename?: 'MediaMetadata_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type MediaMetadata_Sum_Fields = {
  __typename?: 'MediaMetadata_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type MediaMetadata_Var_Pop_Fields = {
  __typename?: 'MediaMetadata_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type MediaMetadata_Var_Samp_Fields = {
  __typename?: 'MediaMetadata_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type MediaMetadata_Variance_Fields = {
  __typename?: 'MediaMetadata_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "mint_event" */
export type MediaMint = {
  __typename?: 'MediaMint';
  address: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  contentHash: Scalars['String'];
  contentURI: Scalars['String'];
  creator: Scalars['String'];
  /** An object relationship */
  eventLog: EventLog;
  eventLogId: Scalars['String'];
  id: Scalars['String'];
  logIndex: Scalars['Int'];
  /** An object relationship */
  media?: Maybe<Media>;
  metadataHash: Scalars['String'];
  metadataURI: Scalars['String'];
  /** An object relationship */
  token?: Maybe<Token>;
  tokenId: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transactionHash: Scalars['String'];
};

/** aggregated selection of "mint_event" */
export type MediaMint_Aggregate = {
  __typename?: 'MediaMint_aggregate';
  aggregate?: Maybe<MediaMint_Aggregate_Fields>;
  nodes: Array<MediaMint>;
};

/** aggregate fields of "mint_event" */
export type MediaMint_Aggregate_Fields = {
  __typename?: 'MediaMint_aggregate_fields';
  avg?: Maybe<MediaMint_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<MediaMint_Max_Fields>;
  min?: Maybe<MediaMint_Min_Fields>;
  stddev?: Maybe<MediaMint_Stddev_Fields>;
  stddev_pop?: Maybe<MediaMint_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<MediaMint_Stddev_Samp_Fields>;
  sum?: Maybe<MediaMint_Sum_Fields>;
  var_pop?: Maybe<MediaMint_Var_Pop_Fields>;
  var_samp?: Maybe<MediaMint_Var_Samp_Fields>;
  variance?: Maybe<MediaMint_Variance_Fields>;
};


/** aggregate fields of "mint_event" */
export type MediaMint_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<MediaMint_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "mint_event" */
export type MediaMint_Aggregate_Order_By = {
  avg?: Maybe<MediaMint_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<MediaMint_Max_Order_By>;
  min?: Maybe<MediaMint_Min_Order_By>;
  stddev?: Maybe<MediaMint_Stddev_Order_By>;
  stddev_pop?: Maybe<MediaMint_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<MediaMint_Stddev_Samp_Order_By>;
  sum?: Maybe<MediaMint_Sum_Order_By>;
  var_pop?: Maybe<MediaMint_Var_Pop_Order_By>;
  var_samp?: Maybe<MediaMint_Var_Samp_Order_By>;
  variance?: Maybe<MediaMint_Variance_Order_By>;
};

/** aggregate avg on columns */
export type MediaMint_Avg_Fields = {
  __typename?: 'MediaMint_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "mint_event" */
export type MediaMint_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "mint_event". All fields are combined with a logical 'AND'. */
export type MediaMint_Bool_Exp = {
  _and?: Maybe<Array<MediaMint_Bool_Exp>>;
  _not?: Maybe<MediaMint_Bool_Exp>;
  _or?: Maybe<Array<MediaMint_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  contentHash?: Maybe<String_Comparison_Exp>;
  contentURI?: Maybe<String_Comparison_Exp>;
  creator?: Maybe<String_Comparison_Exp>;
  eventLog?: Maybe<EventLog_Bool_Exp>;
  eventLogId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  metadataHash?: Maybe<String_Comparison_Exp>;
  metadataURI?: Maybe<String_Comparison_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transactionHash?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type MediaMint_Max_Fields = {
  __typename?: 'MediaMint_max_fields';
  address?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  contentHash?: Maybe<Scalars['String']>;
  contentURI?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['String']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  metadataHash?: Maybe<Scalars['String']>;
  metadataURI?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "mint_event" */
export type MediaMint_Max_Order_By = {
  address?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  contentHash?: Maybe<Order_By>;
  contentURI?: Maybe<Order_By>;
  creator?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  metadataHash?: Maybe<Order_By>;
  metadataURI?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type MediaMint_Min_Fields = {
  __typename?: 'MediaMint_min_fields';
  address?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  contentHash?: Maybe<Scalars['String']>;
  contentURI?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['String']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  metadataHash?: Maybe<Scalars['String']>;
  metadataURI?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "mint_event" */
export type MediaMint_Min_Order_By = {
  address?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  contentHash?: Maybe<Order_By>;
  contentURI?: Maybe<Order_By>;
  creator?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  metadataHash?: Maybe<Order_By>;
  metadataURI?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "mint_event". */
export type MediaMint_Order_By = {
  address?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  contentHash?: Maybe<Order_By>;
  contentURI?: Maybe<Order_By>;
  creator?: Maybe<Order_By>;
  eventLog?: Maybe<EventLog_Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  metadataHash?: Maybe<Order_By>;
  metadataURI?: Maybe<Order_By>;
  token?: Maybe<Token_Order_By>;
  tokenId?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** select columns of table "mint_event" */
export enum MediaMint_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  ContentHash = 'contentHash',
  /** column name */
  ContentUri = 'contentURI',
  /** column name */
  Creator = 'creator',
  /** column name */
  EventLogId = 'eventLogId',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  MetadataHash = 'metadataHash',
  /** column name */
  MetadataUri = 'metadataURI',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TransactionHash = 'transactionHash'
}

/** aggregate stddev on columns */
export type MediaMint_Stddev_Fields = {
  __typename?: 'MediaMint_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "mint_event" */
export type MediaMint_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type MediaMint_Stddev_Pop_Fields = {
  __typename?: 'MediaMint_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "mint_event" */
export type MediaMint_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type MediaMint_Stddev_Samp_Fields = {
  __typename?: 'MediaMint_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "mint_event" */
export type MediaMint_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type MediaMint_Sum_Fields = {
  __typename?: 'MediaMint_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "mint_event" */
export type MediaMint_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type MediaMint_Var_Pop_Fields = {
  __typename?: 'MediaMint_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "mint_event" */
export type MediaMint_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type MediaMint_Var_Samp_Fields = {
  __typename?: 'MediaMint_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "mint_event" */
export type MediaMint_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type MediaMint_Variance_Fields = {
  __typename?: 'MediaMint_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "mint_event" */
export type MediaMint_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** columns and relationships of "metadata_uri_updated_event" */
export type MediaTokenMetadataUriUpdatedEvent = {
  __typename?: 'MediaTokenMetadataURIUpdatedEvent';
  address: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  /** An object relationship */
  eventLog: EventLog;
  eventLogId: Scalars['String'];
  id: Scalars['String'];
  logIndex: Scalars['Int'];
  /** An object relationship */
  media?: Maybe<Media>;
  owner: Scalars['String'];
  /** An object relationship */
  token?: Maybe<Token>;
  tokenId: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transactionHash: Scalars['String'];
  uri: Scalars['String'];
};

/** aggregated selection of "metadata_uri_updated_event" */
export type MediaTokenMetadataUriUpdatedEvent_Aggregate = {
  __typename?: 'MediaTokenMetadataURIUpdatedEvent_aggregate';
  aggregate?: Maybe<MediaTokenMetadataUriUpdatedEvent_Aggregate_Fields>;
  nodes: Array<MediaTokenMetadataUriUpdatedEvent>;
};

/** aggregate fields of "metadata_uri_updated_event" */
export type MediaTokenMetadataUriUpdatedEvent_Aggregate_Fields = {
  __typename?: 'MediaTokenMetadataURIUpdatedEvent_aggregate_fields';
  avg?: Maybe<MediaTokenMetadataUriUpdatedEvent_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<MediaTokenMetadataUriUpdatedEvent_Max_Fields>;
  min?: Maybe<MediaTokenMetadataUriUpdatedEvent_Min_Fields>;
  stddev?: Maybe<MediaTokenMetadataUriUpdatedEvent_Stddev_Fields>;
  stddev_pop?: Maybe<MediaTokenMetadataUriUpdatedEvent_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<MediaTokenMetadataUriUpdatedEvent_Stddev_Samp_Fields>;
  sum?: Maybe<MediaTokenMetadataUriUpdatedEvent_Sum_Fields>;
  var_pop?: Maybe<MediaTokenMetadataUriUpdatedEvent_Var_Pop_Fields>;
  var_samp?: Maybe<MediaTokenMetadataUriUpdatedEvent_Var_Samp_Fields>;
  variance?: Maybe<MediaTokenMetadataUriUpdatedEvent_Variance_Fields>;
};


/** aggregate fields of "metadata_uri_updated_event" */
export type MediaTokenMetadataUriUpdatedEvent_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "metadata_uri_updated_event" */
export type MediaTokenMetadataUriUpdatedEvent_Aggregate_Order_By = {
  avg?: Maybe<MediaTokenMetadataUriUpdatedEvent_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<MediaTokenMetadataUriUpdatedEvent_Max_Order_By>;
  min?: Maybe<MediaTokenMetadataUriUpdatedEvent_Min_Order_By>;
  stddev?: Maybe<MediaTokenMetadataUriUpdatedEvent_Stddev_Order_By>;
  stddev_pop?: Maybe<MediaTokenMetadataUriUpdatedEvent_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<MediaTokenMetadataUriUpdatedEvent_Stddev_Samp_Order_By>;
  sum?: Maybe<MediaTokenMetadataUriUpdatedEvent_Sum_Order_By>;
  var_pop?: Maybe<MediaTokenMetadataUriUpdatedEvent_Var_Pop_Order_By>;
  var_samp?: Maybe<MediaTokenMetadataUriUpdatedEvent_Var_Samp_Order_By>;
  variance?: Maybe<MediaTokenMetadataUriUpdatedEvent_Variance_Order_By>;
};

/** aggregate avg on columns */
export type MediaTokenMetadataUriUpdatedEvent_Avg_Fields = {
  __typename?: 'MediaTokenMetadataURIUpdatedEvent_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "metadata_uri_updated_event" */
export type MediaTokenMetadataUriUpdatedEvent_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "metadata_uri_updated_event". All fields are combined with a logical 'AND'. */
export type MediaTokenMetadataUriUpdatedEvent_Bool_Exp = {
  _and?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Bool_Exp>>;
  _not?: Maybe<MediaTokenMetadataUriUpdatedEvent_Bool_Exp>;
  _or?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  eventLog?: Maybe<EventLog_Bool_Exp>;
  eventLogId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  owner?: Maybe<String_Comparison_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transactionHash?: Maybe<String_Comparison_Exp>;
  uri?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type MediaTokenMetadataUriUpdatedEvent_Max_Fields = {
  __typename?: 'MediaTokenMetadataURIUpdatedEvent_max_fields';
  address?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "metadata_uri_updated_event" */
export type MediaTokenMetadataUriUpdatedEvent_Max_Order_By = {
  address?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
  uri?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type MediaTokenMetadataUriUpdatedEvent_Min_Fields = {
  __typename?: 'MediaTokenMetadataURIUpdatedEvent_min_fields';
  address?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "metadata_uri_updated_event" */
export type MediaTokenMetadataUriUpdatedEvent_Min_Order_By = {
  address?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
  uri?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "metadata_uri_updated_event". */
export type MediaTokenMetadataUriUpdatedEvent_Order_By = {
  address?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLog?: Maybe<EventLog_Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  owner?: Maybe<Order_By>;
  token?: Maybe<Token_Order_By>;
  tokenId?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transactionHash?: Maybe<Order_By>;
  uri?: Maybe<Order_By>;
};

/** select columns of table "metadata_uri_updated_event" */
export enum MediaTokenMetadataUriUpdatedEvent_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  EventLogId = 'eventLogId',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  Owner = 'owner',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  Uri = 'uri'
}

/** aggregate stddev on columns */
export type MediaTokenMetadataUriUpdatedEvent_Stddev_Fields = {
  __typename?: 'MediaTokenMetadataURIUpdatedEvent_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "metadata_uri_updated_event" */
export type MediaTokenMetadataUriUpdatedEvent_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type MediaTokenMetadataUriUpdatedEvent_Stddev_Pop_Fields = {
  __typename?: 'MediaTokenMetadataURIUpdatedEvent_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "metadata_uri_updated_event" */
export type MediaTokenMetadataUriUpdatedEvent_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type MediaTokenMetadataUriUpdatedEvent_Stddev_Samp_Fields = {
  __typename?: 'MediaTokenMetadataURIUpdatedEvent_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "metadata_uri_updated_event" */
export type MediaTokenMetadataUriUpdatedEvent_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type MediaTokenMetadataUriUpdatedEvent_Sum_Fields = {
  __typename?: 'MediaTokenMetadataURIUpdatedEvent_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "metadata_uri_updated_event" */
export type MediaTokenMetadataUriUpdatedEvent_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type MediaTokenMetadataUriUpdatedEvent_Var_Pop_Fields = {
  __typename?: 'MediaTokenMetadataURIUpdatedEvent_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "metadata_uri_updated_event" */
export type MediaTokenMetadataUriUpdatedEvent_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type MediaTokenMetadataUriUpdatedEvent_Var_Samp_Fields = {
  __typename?: 'MediaTokenMetadataURIUpdatedEvent_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "metadata_uri_updated_event" */
export type MediaTokenMetadataUriUpdatedEvent_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type MediaTokenMetadataUriUpdatedEvent_Variance_Fields = {
  __typename?: 'MediaTokenMetadataURIUpdatedEvent_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "metadata_uri_updated_event" */
export type MediaTokenMetadataUriUpdatedEvent_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** columns and relationships of "media_uri_updated_event" */
export type MediaTokenUriUpdatedEvent = {
  __typename?: 'MediaTokenURIUpdatedEvent';
  address: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  /** An object relationship */
  eventLog: EventLog;
  eventLogId: Scalars['String'];
  id: Scalars['String'];
  logIndex: Scalars['Int'];
  /** An object relationship */
  media?: Maybe<Media>;
  owner: Scalars['String'];
  /** An object relationship */
  token?: Maybe<Token>;
  tokenId: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transactionHash: Scalars['String'];
  uri: Scalars['String'];
};

/** aggregated selection of "media_uri_updated_event" */
export type MediaTokenUriUpdatedEvent_Aggregate = {
  __typename?: 'MediaTokenURIUpdatedEvent_aggregate';
  aggregate?: Maybe<MediaTokenUriUpdatedEvent_Aggregate_Fields>;
  nodes: Array<MediaTokenUriUpdatedEvent>;
};

/** aggregate fields of "media_uri_updated_event" */
export type MediaTokenUriUpdatedEvent_Aggregate_Fields = {
  __typename?: 'MediaTokenURIUpdatedEvent_aggregate_fields';
  avg?: Maybe<MediaTokenUriUpdatedEvent_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<MediaTokenUriUpdatedEvent_Max_Fields>;
  min?: Maybe<MediaTokenUriUpdatedEvent_Min_Fields>;
  stddev?: Maybe<MediaTokenUriUpdatedEvent_Stddev_Fields>;
  stddev_pop?: Maybe<MediaTokenUriUpdatedEvent_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<MediaTokenUriUpdatedEvent_Stddev_Samp_Fields>;
  sum?: Maybe<MediaTokenUriUpdatedEvent_Sum_Fields>;
  var_pop?: Maybe<MediaTokenUriUpdatedEvent_Var_Pop_Fields>;
  var_samp?: Maybe<MediaTokenUriUpdatedEvent_Var_Samp_Fields>;
  variance?: Maybe<MediaTokenUriUpdatedEvent_Variance_Fields>;
};


/** aggregate fields of "media_uri_updated_event" */
export type MediaTokenUriUpdatedEvent_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<MediaTokenUriUpdatedEvent_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "media_uri_updated_event" */
export type MediaTokenUriUpdatedEvent_Aggregate_Order_By = {
  avg?: Maybe<MediaTokenUriUpdatedEvent_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<MediaTokenUriUpdatedEvent_Max_Order_By>;
  min?: Maybe<MediaTokenUriUpdatedEvent_Min_Order_By>;
  stddev?: Maybe<MediaTokenUriUpdatedEvent_Stddev_Order_By>;
  stddev_pop?: Maybe<MediaTokenUriUpdatedEvent_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<MediaTokenUriUpdatedEvent_Stddev_Samp_Order_By>;
  sum?: Maybe<MediaTokenUriUpdatedEvent_Sum_Order_By>;
  var_pop?: Maybe<MediaTokenUriUpdatedEvent_Var_Pop_Order_By>;
  var_samp?: Maybe<MediaTokenUriUpdatedEvent_Var_Samp_Order_By>;
  variance?: Maybe<MediaTokenUriUpdatedEvent_Variance_Order_By>;
};

/** aggregate avg on columns */
export type MediaTokenUriUpdatedEvent_Avg_Fields = {
  __typename?: 'MediaTokenURIUpdatedEvent_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "media_uri_updated_event" */
export type MediaTokenUriUpdatedEvent_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "media_uri_updated_event". All fields are combined with a logical 'AND'. */
export type MediaTokenUriUpdatedEvent_Bool_Exp = {
  _and?: Maybe<Array<MediaTokenUriUpdatedEvent_Bool_Exp>>;
  _not?: Maybe<MediaTokenUriUpdatedEvent_Bool_Exp>;
  _or?: Maybe<Array<MediaTokenUriUpdatedEvent_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  eventLog?: Maybe<EventLog_Bool_Exp>;
  eventLogId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  owner?: Maybe<String_Comparison_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transactionHash?: Maybe<String_Comparison_Exp>;
  uri?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type MediaTokenUriUpdatedEvent_Max_Fields = {
  __typename?: 'MediaTokenURIUpdatedEvent_max_fields';
  address?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "media_uri_updated_event" */
export type MediaTokenUriUpdatedEvent_Max_Order_By = {
  address?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
  uri?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type MediaTokenUriUpdatedEvent_Min_Fields = {
  __typename?: 'MediaTokenURIUpdatedEvent_min_fields';
  address?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  eventLogId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "media_uri_updated_event" */
export type MediaTokenUriUpdatedEvent_Min_Order_By = {
  address?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
  uri?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "media_uri_updated_event". */
export type MediaTokenUriUpdatedEvent_Order_By = {
  address?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLog?: Maybe<EventLog_Order_By>;
  eventLogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  owner?: Maybe<Order_By>;
  token?: Maybe<Token_Order_By>;
  tokenId?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transactionHash?: Maybe<Order_By>;
  uri?: Maybe<Order_By>;
};

/** select columns of table "media_uri_updated_event" */
export enum MediaTokenUriUpdatedEvent_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  EventLogId = 'eventLogId',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  Owner = 'owner',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  Uri = 'uri'
}

/** aggregate stddev on columns */
export type MediaTokenUriUpdatedEvent_Stddev_Fields = {
  __typename?: 'MediaTokenURIUpdatedEvent_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "media_uri_updated_event" */
export type MediaTokenUriUpdatedEvent_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type MediaTokenUriUpdatedEvent_Stddev_Pop_Fields = {
  __typename?: 'MediaTokenURIUpdatedEvent_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "media_uri_updated_event" */
export type MediaTokenUriUpdatedEvent_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type MediaTokenUriUpdatedEvent_Stddev_Samp_Fields = {
  __typename?: 'MediaTokenURIUpdatedEvent_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "media_uri_updated_event" */
export type MediaTokenUriUpdatedEvent_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type MediaTokenUriUpdatedEvent_Sum_Fields = {
  __typename?: 'MediaTokenURIUpdatedEvent_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "media_uri_updated_event" */
export type MediaTokenUriUpdatedEvent_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type MediaTokenUriUpdatedEvent_Var_Pop_Fields = {
  __typename?: 'MediaTokenURIUpdatedEvent_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "media_uri_updated_event" */
export type MediaTokenUriUpdatedEvent_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type MediaTokenUriUpdatedEvent_Var_Samp_Fields = {
  __typename?: 'MediaTokenURIUpdatedEvent_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "media_uri_updated_event" */
export type MediaTokenUriUpdatedEvent_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type MediaTokenUriUpdatedEvent_Variance_Fields = {
  __typename?: 'MediaTokenURIUpdatedEvent_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "media_uri_updated_event" */
export type MediaTokenUriUpdatedEvent_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregated selection of "media" */
export type Media_Aggregate = {
  __typename?: 'Media_aggregate';
  aggregate?: Maybe<Media_Aggregate_Fields>;
  nodes: Array<Media>;
};

/** aggregate fields of "media" */
export type Media_Aggregate_Fields = {
  __typename?: 'Media_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Media_Max_Fields>;
  min?: Maybe<Media_Min_Fields>;
};


/** aggregate fields of "media" */
export type Media_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Media_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "media". All fields are combined with a logical 'AND'. */
export type Media_Bool_Exp = {
  _and?: Maybe<Array<Media_Bool_Exp>>;
  _not?: Maybe<Media_Bool_Exp>;
  _or?: Maybe<Array<Media_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  askEvents?: Maybe<MarketAskEvent_Bool_Exp>;
  asks?: Maybe<MarketAsk_Bool_Exp>;
  auctions?: Maybe<Auction_Bool_Exp>;
  bidEvents?: Maybe<MarketBidEvent_Bool_Exp>;
  bids?: Maybe<MarketBid_Bool_Exp>;
  contentHash?: Maybe<String_Comparison_Exp>;
  contentURI?: Maybe<String_Comparison_Exp>;
  creator?: Maybe<String_Comparison_Exp>;
  creatorBidShare?: Maybe<String_Comparison_Exp>;
  metadata?: Maybe<MediaMetadata_Bool_Exp>;
  metadataHash?: Maybe<String_Comparison_Exp>;
  metadataURI?: Maybe<String_Comparison_Exp>;
  mintTransferEventId?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<String_Comparison_Exp>;
  ownerBidShare?: Maybe<String_Comparison_Exp>;
  prevOwner?: Maybe<String_Comparison_Exp>;
  prevOwnerBidShare?: Maybe<String_Comparison_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  tokenMetadataURIUpdatedEvents?: Maybe<MediaTokenMetadataUriUpdatedEvent_Bool_Exp>;
  tokenURIUpdatedEvents?: Maybe<MediaTokenUriUpdatedEvent_Bool_Exp>;
  transferEvents?: Maybe<TokenTransferEvent_Bool_Exp>;
};

/** aggregate max on columns */
export type Media_Max_Fields = {
  __typename?: 'Media_max_fields';
  address?: Maybe<Scalars['String']>;
  contentHash?: Maybe<Scalars['String']>;
  contentURI?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['String']>;
  creatorBidShare?: Maybe<Scalars['String']>;
  metadataHash?: Maybe<Scalars['String']>;
  metadataURI?: Maybe<Scalars['String']>;
  mintTransferEventId?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  ownerBidShare?: Maybe<Scalars['String']>;
  prevOwner?: Maybe<Scalars['String']>;
  prevOwnerBidShare?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Media_Min_Fields = {
  __typename?: 'Media_min_fields';
  address?: Maybe<Scalars['String']>;
  contentHash?: Maybe<Scalars['String']>;
  contentURI?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['String']>;
  creatorBidShare?: Maybe<Scalars['String']>;
  metadataHash?: Maybe<Scalars['String']>;
  metadataURI?: Maybe<Scalars['String']>;
  mintTransferEventId?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  ownerBidShare?: Maybe<Scalars['String']>;
  prevOwner?: Maybe<Scalars['String']>;
  prevOwnerBidShare?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "media". */
export type Media_Order_By = {
  address?: Maybe<Order_By>;
  askEvents_aggregate?: Maybe<MarketAskEvent_Aggregate_Order_By>;
  asks_aggregate?: Maybe<MarketAsk_Aggregate_Order_By>;
  auctions_aggregate?: Maybe<Auction_Aggregate_Order_By>;
  bidEvents_aggregate?: Maybe<MarketBidEvent_Aggregate_Order_By>;
  bids_aggregate?: Maybe<MarketBid_Aggregate_Order_By>;
  contentHash?: Maybe<Order_By>;
  contentURI?: Maybe<Order_By>;
  creator?: Maybe<Order_By>;
  creatorBidShare?: Maybe<Order_By>;
  metadata?: Maybe<MediaMetadata_Order_By>;
  metadataHash?: Maybe<Order_By>;
  metadataURI?: Maybe<Order_By>;
  mintTransferEventId?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  ownerBidShare?: Maybe<Order_By>;
  prevOwner?: Maybe<Order_By>;
  prevOwnerBidShare?: Maybe<Order_By>;
  token?: Maybe<Token_Order_By>;
  tokenId?: Maybe<Order_By>;
  tokenMetadataURIUpdatedEvents_aggregate?: Maybe<MediaTokenMetadataUriUpdatedEvent_Aggregate_Order_By>;
  tokenURIUpdatedEvents_aggregate?: Maybe<MediaTokenUriUpdatedEvent_Aggregate_Order_By>;
  transferEvents_aggregate?: Maybe<TokenTransferEvent_Aggregate_Order_By>;
};

/** select columns of table "media" */
export enum Media_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  ContentHash = 'contentHash',
  /** column name */
  ContentUri = 'contentURI',
  /** column name */
  Creator = 'creator',
  /** column name */
  CreatorBidShare = 'creatorBidShare',
  /** column name */
  MetadataHash = 'metadataHash',
  /** column name */
  MetadataUri = 'metadataURI',
  /** column name */
  MintTransferEventId = 'mintTransferEventId',
  /** column name */
  Owner = 'owner',
  /** column name */
  OwnerBidShare = 'ownerBidShare',
  /** column name */
  PrevOwner = 'prevOwner',
  /** column name */
  PrevOwnerBidShare = 'prevOwnerBidShare',
  /** column name */
  TokenId = 'tokenId'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "token" */
export type Token = {
  __typename?: 'Token';
  address: Scalars['String'];
  /** An array relationship */
  auctions: Array<Auction>;
  /** An aggregate relationship */
  auctions_aggregate: Auction_Aggregate;
  id: Scalars['String'];
  /** An object relationship */
  media?: Maybe<Media>;
  /** An object relationship */
  metadata?: Maybe<TokenMetadata>;
  metadataId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  mintTransferEvent?: Maybe<TokenTransferEvent>;
  mintTransferEventId?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  supportsMetadata?: Maybe<Scalars['Boolean']>;
  symbol?: Maybe<Scalars['String']>;
  /** An object relationship */
  tokenContract?: Maybe<TokenContract>;
  tokenId: Scalars['String'];
  tokenURI?: Maybe<Scalars['String']>;
  /** An array relationship */
  transferEvents: Array<TokenTransferEvent>;
  /** An aggregate relationship */
  transferEvents_aggregate: TokenTransferEvent_Aggregate;
};


/** columns and relationships of "token" */
export type TokenAuctionsArgs = {
  distinct_on?: Maybe<Array<Auction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auction_Order_By>>;
  where?: Maybe<Auction_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenAuctions_AggregateArgs = {
  distinct_on?: Maybe<Array<Auction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auction_Order_By>>;
  where?: Maybe<Auction_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenTransferEventsArgs = {
  distinct_on?: Maybe<Array<TokenTransferEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenTransferEvent_Order_By>>;
  where?: Maybe<TokenTransferEvent_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenTransferEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<TokenTransferEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenTransferEvent_Order_By>>;
  where?: Maybe<TokenTransferEvent_Bool_Exp>;
};

/** columns and relationships of "nft_contract" */
export type TokenContract = {
  __typename?: 'TokenContract';
  address: Scalars['String'];
  deployedAtBlockNumber: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  supportsMetadata: Scalars['Boolean'];
  symbol?: Maybe<Scalars['String']>;
};

/** aggregated selection of "nft_contract" */
export type TokenContract_Aggregate = {
  __typename?: 'TokenContract_aggregate';
  aggregate?: Maybe<TokenContract_Aggregate_Fields>;
  nodes: Array<TokenContract>;
};

/** aggregate fields of "nft_contract" */
export type TokenContract_Aggregate_Fields = {
  __typename?: 'TokenContract_aggregate_fields';
  avg?: Maybe<TokenContract_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<TokenContract_Max_Fields>;
  min?: Maybe<TokenContract_Min_Fields>;
  stddev?: Maybe<TokenContract_Stddev_Fields>;
  stddev_pop?: Maybe<TokenContract_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TokenContract_Stddev_Samp_Fields>;
  sum?: Maybe<TokenContract_Sum_Fields>;
  var_pop?: Maybe<TokenContract_Var_Pop_Fields>;
  var_samp?: Maybe<TokenContract_Var_Samp_Fields>;
  variance?: Maybe<TokenContract_Variance_Fields>;
};


/** aggregate fields of "nft_contract" */
export type TokenContract_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<TokenContract_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type TokenContract_Avg_Fields = {
  __typename?: 'TokenContract_avg_fields';
  deployedAtBlockNumber?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nft_contract". All fields are combined with a logical 'AND'. */
export type TokenContract_Bool_Exp = {
  _and?: Maybe<Array<TokenContract_Bool_Exp>>;
  _not?: Maybe<TokenContract_Bool_Exp>;
  _or?: Maybe<Array<TokenContract_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  deployedAtBlockNumber?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  supportsMetadata?: Maybe<Boolean_Comparison_Exp>;
  symbol?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type TokenContract_Max_Fields = {
  __typename?: 'TokenContract_max_fields';
  address?: Maybe<Scalars['String']>;
  deployedAtBlockNumber?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TokenContract_Min_Fields = {
  __typename?: 'TokenContract_min_fields';
  address?: Maybe<Scalars['String']>;
  deployedAtBlockNumber?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "nft_contract". */
export type TokenContract_Order_By = {
  address?: Maybe<Order_By>;
  deployedAtBlockNumber?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  supportsMetadata?: Maybe<Order_By>;
  symbol?: Maybe<Order_By>;
};

/** select columns of table "nft_contract" */
export enum TokenContract_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  DeployedAtBlockNumber = 'deployedAtBlockNumber',
  /** column name */
  Name = 'name',
  /** column name */
  SupportsMetadata = 'supportsMetadata',
  /** column name */
  Symbol = 'symbol'
}

/** aggregate stddev on columns */
export type TokenContract_Stddev_Fields = {
  __typename?: 'TokenContract_stddev_fields';
  deployedAtBlockNumber?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TokenContract_Stddev_Pop_Fields = {
  __typename?: 'TokenContract_stddev_pop_fields';
  deployedAtBlockNumber?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TokenContract_Stddev_Samp_Fields = {
  __typename?: 'TokenContract_stddev_samp_fields';
  deployedAtBlockNumber?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type TokenContract_Sum_Fields = {
  __typename?: 'TokenContract_sum_fields';
  deployedAtBlockNumber?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type TokenContract_Var_Pop_Fields = {
  __typename?: 'TokenContract_var_pop_fields';
  deployedAtBlockNumber?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TokenContract_Var_Samp_Fields = {
  __typename?: 'TokenContract_var_samp_fields';
  deployedAtBlockNumber?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TokenContract_Variance_Fields = {
  __typename?: 'TokenContract_variance_fields';
  deployedAtBlockNumber?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nft_metadata" */
export type TokenMetadata = {
  __typename?: 'TokenMetadata';
  address: Scalars['String'];
  createdAt: Scalars['timestamp'];
  id: Scalars['uuid'];
  json?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  token?: Maybe<Token>;
  tokenId: Scalars['String'];
  tokenURI: Scalars['String'];
};


/** columns and relationships of "nft_metadata" */
export type TokenMetadataJsonArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "nft_metadata" */
export type TokenMetadata_Aggregate = {
  __typename?: 'TokenMetadata_aggregate';
  aggregate?: Maybe<TokenMetadata_Aggregate_Fields>;
  nodes: Array<TokenMetadata>;
};

/** aggregate fields of "nft_metadata" */
export type TokenMetadata_Aggregate_Fields = {
  __typename?: 'TokenMetadata_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TokenMetadata_Max_Fields>;
  min?: Maybe<TokenMetadata_Min_Fields>;
};


/** aggregate fields of "nft_metadata" */
export type TokenMetadata_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<TokenMetadata_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "nft_metadata". All fields are combined with a logical 'AND'. */
export type TokenMetadata_Bool_Exp = {
  _and?: Maybe<Array<TokenMetadata_Bool_Exp>>;
  _not?: Maybe<TokenMetadata_Bool_Exp>;
  _or?: Maybe<Array<TokenMetadata_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  json?: Maybe<Jsonb_Comparison_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  tokenURI?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type TokenMetadata_Max_Fields = {
  __typename?: 'TokenMetadata_max_fields';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenURI?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TokenMetadata_Min_Fields = {
  __typename?: 'TokenMetadata_min_fields';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenURI?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "nft_metadata". */
export type TokenMetadata_Order_By = {
  address?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  json?: Maybe<Order_By>;
  token?: Maybe<Token_Order_By>;
  tokenId?: Maybe<Order_By>;
  tokenURI?: Maybe<Order_By>;
};

/** select columns of table "nft_metadata" */
export enum TokenMetadata_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TokenUri = 'tokenURI'
}

/** columns and relationships of "nft_transfer_event" */
export type TokenTransferEvent = {
  __typename?: 'TokenTransferEvent';
  address: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  /** An object relationship */
  eventLog: EventLog;
  from: Scalars['String'];
  id: Scalars['String'];
  logIndex: Scalars['Int'];
  /** An object relationship */
  media?: Maybe<Media>;
  rawLogId: Scalars['String'];
  to: Scalars['String'];
  /** An object relationship */
  token?: Maybe<Token>;
  tokenId: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transactionHash: Scalars['String'];
};

/** aggregated selection of "nft_transfer_event" */
export type TokenTransferEvent_Aggregate = {
  __typename?: 'TokenTransferEvent_aggregate';
  aggregate?: Maybe<TokenTransferEvent_Aggregate_Fields>;
  nodes: Array<TokenTransferEvent>;
};

/** aggregate fields of "nft_transfer_event" */
export type TokenTransferEvent_Aggregate_Fields = {
  __typename?: 'TokenTransferEvent_aggregate_fields';
  avg?: Maybe<TokenTransferEvent_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<TokenTransferEvent_Max_Fields>;
  min?: Maybe<TokenTransferEvent_Min_Fields>;
  stddev?: Maybe<TokenTransferEvent_Stddev_Fields>;
  stddev_pop?: Maybe<TokenTransferEvent_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TokenTransferEvent_Stddev_Samp_Fields>;
  sum?: Maybe<TokenTransferEvent_Sum_Fields>;
  var_pop?: Maybe<TokenTransferEvent_Var_Pop_Fields>;
  var_samp?: Maybe<TokenTransferEvent_Var_Samp_Fields>;
  variance?: Maybe<TokenTransferEvent_Variance_Fields>;
};


/** aggregate fields of "nft_transfer_event" */
export type TokenTransferEvent_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<TokenTransferEvent_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nft_transfer_event" */
export type TokenTransferEvent_Aggregate_Order_By = {
  avg?: Maybe<TokenTransferEvent_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<TokenTransferEvent_Max_Order_By>;
  min?: Maybe<TokenTransferEvent_Min_Order_By>;
  stddev?: Maybe<TokenTransferEvent_Stddev_Order_By>;
  stddev_pop?: Maybe<TokenTransferEvent_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<TokenTransferEvent_Stddev_Samp_Order_By>;
  sum?: Maybe<TokenTransferEvent_Sum_Order_By>;
  var_pop?: Maybe<TokenTransferEvent_Var_Pop_Order_By>;
  var_samp?: Maybe<TokenTransferEvent_Var_Samp_Order_By>;
  variance?: Maybe<TokenTransferEvent_Variance_Order_By>;
};

/** aggregate avg on columns */
export type TokenTransferEvent_Avg_Fields = {
  __typename?: 'TokenTransferEvent_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nft_transfer_event" */
export type TokenTransferEvent_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nft_transfer_event". All fields are combined with a logical 'AND'. */
export type TokenTransferEvent_Bool_Exp = {
  _and?: Maybe<Array<TokenTransferEvent_Bool_Exp>>;
  _not?: Maybe<TokenTransferEvent_Bool_Exp>;
  _or?: Maybe<Array<TokenTransferEvent_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  eventLog?: Maybe<EventLog_Bool_Exp>;
  from?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  logIndex?: Maybe<Int_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  rawLogId?: Maybe<String_Comparison_Exp>;
  to?: Maybe<String_Comparison_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transactionHash?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type TokenTransferEvent_Max_Fields = {
  __typename?: 'TokenTransferEvent_max_fields';
  address?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  rawLogId?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "nft_transfer_event" */
export type TokenTransferEvent_Max_Order_By = {
  address?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  from?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  rawLogId?: Maybe<Order_By>;
  to?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type TokenTransferEvent_Min_Fields = {
  __typename?: 'TokenTransferEvent_min_fields';
  address?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['Int']>;
  rawLogId?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "nft_transfer_event" */
export type TokenTransferEvent_Min_Order_By = {
  address?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  from?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  rawLogId?: Maybe<Order_By>;
  to?: Maybe<Order_By>;
  tokenId?: Maybe<Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "nft_transfer_event". */
export type TokenTransferEvent_Order_By = {
  address?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLog?: Maybe<EventLog_Order_By>;
  from?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  rawLogId?: Maybe<Order_By>;
  to?: Maybe<Order_By>;
  token?: Maybe<Token_Order_By>;
  tokenId?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transactionHash?: Maybe<Order_By>;
};

/** select columns of table "nft_transfer_event" */
export enum TokenTransferEvent_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  From = 'from',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  RawLogId = 'rawLogId',
  /** column name */
  To = 'to',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TransactionHash = 'transactionHash'
}

/** aggregate stddev on columns */
export type TokenTransferEvent_Stddev_Fields = {
  __typename?: 'TokenTransferEvent_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nft_transfer_event" */
export type TokenTransferEvent_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type TokenTransferEvent_Stddev_Pop_Fields = {
  __typename?: 'TokenTransferEvent_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nft_transfer_event" */
export type TokenTransferEvent_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type TokenTransferEvent_Stddev_Samp_Fields = {
  __typename?: 'TokenTransferEvent_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nft_transfer_event" */
export type TokenTransferEvent_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type TokenTransferEvent_Sum_Fields = {
  __typename?: 'TokenTransferEvent_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  logIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "nft_transfer_event" */
export type TokenTransferEvent_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type TokenTransferEvent_Var_Pop_Fields = {
  __typename?: 'TokenTransferEvent_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nft_transfer_event" */
export type TokenTransferEvent_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type TokenTransferEvent_Var_Samp_Fields = {
  __typename?: 'TokenTransferEvent_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nft_transfer_event" */
export type TokenTransferEvent_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type TokenTransferEvent_Variance_Fields = {
  __typename?: 'TokenTransferEvent_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  logIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nft_transfer_event" */
export type TokenTransferEvent_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>;
  logIndex?: Maybe<Order_By>;
};

/** aggregated selection of "token" */
export type Token_Aggregate = {
  __typename?: 'Token_aggregate';
  aggregate?: Maybe<Token_Aggregate_Fields>;
  nodes: Array<Token>;
};

/** aggregate fields of "token" */
export type Token_Aggregate_Fields = {
  __typename?: 'Token_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Token_Max_Fields>;
  min?: Maybe<Token_Min_Fields>;
};


/** aggregate fields of "token" */
export type Token_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: Maybe<Array<Token_Bool_Exp>>;
  _not?: Maybe<Token_Bool_Exp>;
  _or?: Maybe<Array<Token_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  auctions?: Maybe<Auction_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  media?: Maybe<Media_Bool_Exp>;
  metadata?: Maybe<TokenMetadata_Bool_Exp>;
  metadataId?: Maybe<Uuid_Comparison_Exp>;
  mintTransferEvent?: Maybe<TokenTransferEvent_Bool_Exp>;
  mintTransferEventId?: Maybe<String_Comparison_Exp>;
  minter?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<String_Comparison_Exp>;
  supportsMetadata?: Maybe<Boolean_Comparison_Exp>;
  symbol?: Maybe<String_Comparison_Exp>;
  tokenContract?: Maybe<TokenContract_Bool_Exp>;
  tokenId?: Maybe<String_Comparison_Exp>;
  tokenURI?: Maybe<String_Comparison_Exp>;
  transferEvents?: Maybe<TokenTransferEvent_Bool_Exp>;
};

/** aggregate max on columns */
export type Token_Max_Fields = {
  __typename?: 'Token_max_fields';
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  metadataId?: Maybe<Scalars['uuid']>;
  mintTransferEventId?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenURI?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Token_Min_Fields = {
  __typename?: 'Token_min_fields';
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  metadataId?: Maybe<Scalars['uuid']>;
  mintTransferEventId?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenURI?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  address?: Maybe<Order_By>;
  auctions_aggregate?: Maybe<Auction_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  media?: Maybe<Media_Order_By>;
  metadata?: Maybe<TokenMetadata_Order_By>;
  metadataId?: Maybe<Order_By>;
  mintTransferEvent?: Maybe<TokenTransferEvent_Order_By>;
  mintTransferEventId?: Maybe<Order_By>;
  minter?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  supportsMetadata?: Maybe<Order_By>;
  symbol?: Maybe<Order_By>;
  tokenContract?: Maybe<TokenContract_Order_By>;
  tokenId?: Maybe<Order_By>;
  tokenURI?: Maybe<Order_By>;
  transferEvents_aggregate?: Maybe<TokenTransferEvent_Aggregate_Order_By>;
};

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  MetadataId = 'metadataId',
  /** column name */
  MintTransferEventId = 'mintTransferEventId',
  /** column name */
  Minter = 'minter',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  SupportsMetadata = 'supportsMetadata',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TokenUri = 'tokenURI'
}

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'Transaction';
  /** An array relationship */
  auctionApprovalUpdatedEvents: Array<AuctionApprovalUpdatedEvent>;
  /** An aggregate relationship */
  auctionApprovalUpdatedEvents_aggregate: AuctionApprovalUpdatedEvent_Aggregate;
  /** An array relationship */
  auctionBidEvents: Array<AuctionBidEvent>;
  /** An aggregate relationship */
  auctionBidEvents_aggregate: AuctionBidEvent_Aggregate;
  /** An array relationship */
  auctionCanceledEvents: Array<AuctionCanceledEvent>;
  /** An aggregate relationship */
  auctionCanceledEvents_aggregate: AuctionCanceledEvent_Aggregate;
  /** An array relationship */
  auctionCreatedEvents: Array<AuctionCreatedEvent>;
  /** An aggregate relationship */
  auctionCreatedEvents_aggregate: AuctionCreatedEvent_Aggregate;
  /** An array relationship */
  auctionDurationExtendedEvents: Array<AuctionDurationExtendedEvent>;
  /** An aggregate relationship */
  auctionDurationExtendedEvents_aggregate: AuctionDurationExtendedEvent_Aggregate;
  /** An array relationship */
  auctionEndedEvents: Array<AuctionEndedEvent>;
  /** An aggregate relationship */
  auctionEndedEvents_aggregate: AuctionEndedEvent_Aggregate;
  /** An array relationship */
  auctionReservePriceUpdatedEvents: Array<AuctionReservePriceUpdatedEvent>;
  /** An aggregate relationship */
  auctionReservePriceUpdatedEvents_aggregate: AuctionReservePriceUpdatedEvent_Aggregate;
  blockHash: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['timestamp'];
  /** An array relationship */
  eventLogs: Array<EventLog>;
  /** An aggregate relationship */
  eventLogs_aggregate: EventLog_Aggregate;
  failureReason?: Maybe<Scalars['String']>;
  from: Scalars['String'];
  gas: Scalars['Int'];
  gasPrice: Scalars['String'];
  hash: Scalars['String'];
  input: Scalars['String'];
  /** An array relationship */
  marketAskEvents: Array<MarketAskEvent>;
  /** An aggregate relationship */
  marketAskEvents_aggregate: MarketAskEvent_Aggregate;
  /** An array relationship */
  marketBidEvents: Array<MarketBidEvent>;
  /** An aggregate relationship */
  marketBidEvents_aggregate: MarketBidEvent_Aggregate;
  /** An array relationship */
  marketBidShareEvents: Array<MarketBidShareEvent>;
  /** An aggregate relationship */
  marketBidShareEvents_aggregate: MarketBidShareEvent_Aggregate;
  /** An array relationship */
  mediaMints: Array<MediaMint>;
  /** An aggregate relationship */
  mediaMints_aggregate: MediaMint_Aggregate;
  /** An array relationship */
  mediaTokenMetadataURIUpdatedEvents: Array<MediaTokenMetadataUriUpdatedEvent>;
  /** An aggregate relationship */
  mediaTokenMetadataURIUpdatedEvents_aggregate: MediaTokenMetadataUriUpdatedEvent_Aggregate;
  /** An array relationship */
  mediaTokenURIUpdatedEvents: Array<MediaTokenUriUpdatedEvent>;
  /** An aggregate relationship */
  mediaTokenURIUpdatedEvents_aggregate: MediaTokenUriUpdatedEvent_Aggregate;
  network: Scalars['String'];
  nonce: Scalars['Int'];
  status: Scalars['String'];
  to?: Maybe<Scalars['String']>;
  /** An array relationship */
  tokenTransferEvents: Array<TokenTransferEvent>;
  /** An aggregate relationship */
  tokenTransferEvents_aggregate: TokenTransferEvent_Aggregate;
  transactionIndex: Scalars['Int'];
  value: Scalars['String'];
};


/** columns and relationships of "transaction" */
export type TransactionAuctionApprovalUpdatedEventsArgs = {
  distinct_on?: Maybe<Array<AuctionApprovalUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionApprovalUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionApprovalUpdatedEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionAuctionApprovalUpdatedEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionApprovalUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionApprovalUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionApprovalUpdatedEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionAuctionBidEventsArgs = {
  distinct_on?: Maybe<Array<AuctionBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionBidEvent_Order_By>>;
  where?: Maybe<AuctionBidEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionAuctionBidEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionBidEvent_Order_By>>;
  where?: Maybe<AuctionBidEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionAuctionCanceledEventsArgs = {
  distinct_on?: Maybe<Array<AuctionCanceledEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionCanceledEvent_Order_By>>;
  where?: Maybe<AuctionCanceledEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionAuctionCanceledEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionCanceledEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionCanceledEvent_Order_By>>;
  where?: Maybe<AuctionCanceledEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionAuctionCreatedEventsArgs = {
  distinct_on?: Maybe<Array<AuctionCreatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionCreatedEvent_Order_By>>;
  where?: Maybe<AuctionCreatedEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionAuctionCreatedEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionCreatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionCreatedEvent_Order_By>>;
  where?: Maybe<AuctionCreatedEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionAuctionDurationExtendedEventsArgs = {
  distinct_on?: Maybe<Array<AuctionDurationExtendedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionDurationExtendedEvent_Order_By>>;
  where?: Maybe<AuctionDurationExtendedEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionAuctionDurationExtendedEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionDurationExtendedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionDurationExtendedEvent_Order_By>>;
  where?: Maybe<AuctionDurationExtendedEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionAuctionEndedEventsArgs = {
  distinct_on?: Maybe<Array<AuctionEndedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionEndedEvent_Order_By>>;
  where?: Maybe<AuctionEndedEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionAuctionEndedEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionEndedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionEndedEvent_Order_By>>;
  where?: Maybe<AuctionEndedEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionAuctionReservePriceUpdatedEventsArgs = {
  distinct_on?: Maybe<Array<AuctionReservePriceUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionReservePriceUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionReservePriceUpdatedEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionAuctionReservePriceUpdatedEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionReservePriceUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionReservePriceUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionReservePriceUpdatedEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionEventLogsArgs = {
  distinct_on?: Maybe<Array<EventLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EventLog_Order_By>>;
  where?: Maybe<EventLog_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionEventLogs_AggregateArgs = {
  distinct_on?: Maybe<Array<EventLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EventLog_Order_By>>;
  where?: Maybe<EventLog_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMarketAskEventsArgs = {
  distinct_on?: Maybe<Array<MarketAskEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketAskEvent_Order_By>>;
  where?: Maybe<MarketAskEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMarketAskEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketAskEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketAskEvent_Order_By>>;
  where?: Maybe<MarketAskEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMarketBidEventsArgs = {
  distinct_on?: Maybe<Array<MarketBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidEvent_Order_By>>;
  where?: Maybe<MarketBidEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMarketBidEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidEvent_Order_By>>;
  where?: Maybe<MarketBidEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMarketBidShareEventsArgs = {
  distinct_on?: Maybe<Array<MarketBidShareEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidShareEvent_Order_By>>;
  where?: Maybe<MarketBidShareEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMarketBidShareEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketBidShareEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidShareEvent_Order_By>>;
  where?: Maybe<MarketBidShareEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMediaMintsArgs = {
  distinct_on?: Maybe<Array<MediaMint_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaMint_Order_By>>;
  where?: Maybe<MediaMint_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMediaMints_AggregateArgs = {
  distinct_on?: Maybe<Array<MediaMint_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaMint_Order_By>>;
  where?: Maybe<MediaMint_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMediaTokenMetadataUriUpdatedEventsArgs = {
  distinct_on?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenMetadataUriUpdatedEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMediaTokenMetadataUriUpdatedEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenMetadataUriUpdatedEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMediaTokenUriUpdatedEventsArgs = {
  distinct_on?: Maybe<Array<MediaTokenUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenUriUpdatedEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMediaTokenUriUpdatedEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<MediaTokenUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenUriUpdatedEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionTokenTransferEventsArgs = {
  distinct_on?: Maybe<Array<TokenTransferEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenTransferEvent_Order_By>>;
  where?: Maybe<TokenTransferEvent_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionTokenTransferEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<TokenTransferEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenTransferEvent_Order_By>>;
  where?: Maybe<TokenTransferEvent_Bool_Exp>;
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'Transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'Transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'Transaction_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  gas?: Maybe<Scalars['Float']>;
  nonce?: Maybe<Scalars['Float']>;
  transactionIndex?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: Maybe<Array<Transaction_Bool_Exp>>;
  _not?: Maybe<Transaction_Bool_Exp>;
  _or?: Maybe<Array<Transaction_Bool_Exp>>;
  auctionApprovalUpdatedEvents?: Maybe<AuctionApprovalUpdatedEvent_Bool_Exp>;
  auctionBidEvents?: Maybe<AuctionBidEvent_Bool_Exp>;
  auctionCanceledEvents?: Maybe<AuctionCanceledEvent_Bool_Exp>;
  auctionCreatedEvents?: Maybe<AuctionCreatedEvent_Bool_Exp>;
  auctionDurationExtendedEvents?: Maybe<AuctionDurationExtendedEvent_Bool_Exp>;
  auctionEndedEvents?: Maybe<AuctionEndedEvent_Bool_Exp>;
  auctionReservePriceUpdatedEvents?: Maybe<AuctionReservePriceUpdatedEvent_Bool_Exp>;
  blockHash?: Maybe<String_Comparison_Exp>;
  blockNumber?: Maybe<Int_Comparison_Exp>;
  blockTimestamp?: Maybe<Timestamp_Comparison_Exp>;
  eventLogs?: Maybe<EventLog_Bool_Exp>;
  failureReason?: Maybe<String_Comparison_Exp>;
  from?: Maybe<String_Comparison_Exp>;
  gas?: Maybe<Int_Comparison_Exp>;
  gasPrice?: Maybe<String_Comparison_Exp>;
  hash?: Maybe<String_Comparison_Exp>;
  input?: Maybe<String_Comparison_Exp>;
  marketAskEvents?: Maybe<MarketAskEvent_Bool_Exp>;
  marketBidEvents?: Maybe<MarketBidEvent_Bool_Exp>;
  marketBidShareEvents?: Maybe<MarketBidShareEvent_Bool_Exp>;
  mediaMints?: Maybe<MediaMint_Bool_Exp>;
  mediaTokenMetadataURIUpdatedEvents?: Maybe<MediaTokenMetadataUriUpdatedEvent_Bool_Exp>;
  mediaTokenURIUpdatedEvents?: Maybe<MediaTokenUriUpdatedEvent_Bool_Exp>;
  network?: Maybe<String_Comparison_Exp>;
  nonce?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  to?: Maybe<String_Comparison_Exp>;
  tokenTransferEvents?: Maybe<TokenTransferEvent_Bool_Exp>;
  transactionIndex?: Maybe<Int_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'Transaction_max_fields';
  blockHash?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  failureReason?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  gas?: Maybe<Scalars['Int']>;
  gasPrice?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  input?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  transactionIndex?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'Transaction_min_fields';
  blockHash?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['timestamp']>;
  failureReason?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  gas?: Maybe<Scalars['Int']>;
  gasPrice?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  input?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  transactionIndex?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  auctionApprovalUpdatedEvents_aggregate?: Maybe<AuctionApprovalUpdatedEvent_Aggregate_Order_By>;
  auctionBidEvents_aggregate?: Maybe<AuctionBidEvent_Aggregate_Order_By>;
  auctionCanceledEvents_aggregate?: Maybe<AuctionCanceledEvent_Aggregate_Order_By>;
  auctionCreatedEvents_aggregate?: Maybe<AuctionCreatedEvent_Aggregate_Order_By>;
  auctionDurationExtendedEvents_aggregate?: Maybe<AuctionDurationExtendedEvent_Aggregate_Order_By>;
  auctionEndedEvents_aggregate?: Maybe<AuctionEndedEvent_Aggregate_Order_By>;
  auctionReservePriceUpdatedEvents_aggregate?: Maybe<AuctionReservePriceUpdatedEvent_Aggregate_Order_By>;
  blockHash?: Maybe<Order_By>;
  blockNumber?: Maybe<Order_By>;
  blockTimestamp?: Maybe<Order_By>;
  eventLogs_aggregate?: Maybe<EventLog_Aggregate_Order_By>;
  failureReason?: Maybe<Order_By>;
  from?: Maybe<Order_By>;
  gas?: Maybe<Order_By>;
  gasPrice?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  input?: Maybe<Order_By>;
  marketAskEvents_aggregate?: Maybe<MarketAskEvent_Aggregate_Order_By>;
  marketBidEvents_aggregate?: Maybe<MarketBidEvent_Aggregate_Order_By>;
  marketBidShareEvents_aggregate?: Maybe<MarketBidShareEvent_Aggregate_Order_By>;
  mediaMints_aggregate?: Maybe<MediaMint_Aggregate_Order_By>;
  mediaTokenMetadataURIUpdatedEvents_aggregate?: Maybe<MediaTokenMetadataUriUpdatedEvent_Aggregate_Order_By>;
  mediaTokenURIUpdatedEvents_aggregate?: Maybe<MediaTokenUriUpdatedEvent_Aggregate_Order_By>;
  network?: Maybe<Order_By>;
  nonce?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  to?: Maybe<Order_By>;
  tokenTransferEvents_aggregate?: Maybe<TokenTransferEvent_Aggregate_Order_By>;
  transactionIndex?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  BlockHash = 'blockHash',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  FailureReason = 'failureReason',
  /** column name */
  From = 'from',
  /** column name */
  Gas = 'gas',
  /** column name */
  GasPrice = 'gasPrice',
  /** column name */
  Hash = 'hash',
  /** column name */
  Input = 'input',
  /** column name */
  Network = 'network',
  /** column name */
  Nonce = 'nonce',
  /** column name */
  Status = 'status',
  /** column name */
  To = 'to',
  /** column name */
  TransactionIndex = 'transactionIndex',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'Transaction_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  gas?: Maybe<Scalars['Float']>;
  nonce?: Maybe<Scalars['Float']>;
  transactionIndex?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'Transaction_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  gas?: Maybe<Scalars['Float']>;
  nonce?: Maybe<Scalars['Float']>;
  transactionIndex?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'Transaction_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  gas?: Maybe<Scalars['Float']>;
  nonce?: Maybe<Scalars['Float']>;
  transactionIndex?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'Transaction_sum_fields';
  blockNumber?: Maybe<Scalars['Int']>;
  gas?: Maybe<Scalars['Int']>;
  nonce?: Maybe<Scalars['Int']>;
  transactionIndex?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'Transaction_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  gas?: Maybe<Scalars['Float']>;
  nonce?: Maybe<Scalars['Float']>;
  transactionIndex?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'Transaction_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  gas?: Maybe<Scalars['Float']>;
  nonce?: Maybe<Scalars['Float']>;
  transactionIndex?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'Transaction_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  gas?: Maybe<Scalars['Float']>;
  nonce?: Maybe<Scalars['Float']>;
  transactionIndex?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "ask_event_status_enum". All fields are combined with logical 'AND'. */
export type Ask_Event_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars['ask_event_status_enum']>;
  _gt?: Maybe<Scalars['ask_event_status_enum']>;
  _gte?: Maybe<Scalars['ask_event_status_enum']>;
  _in?: Maybe<Array<Scalars['ask_event_status_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['ask_event_status_enum']>;
  _lte?: Maybe<Scalars['ask_event_status_enum']>;
  _neq?: Maybe<Scalars['ask_event_status_enum']>;
  _nin?: Maybe<Array<Scalars['ask_event_status_enum']>>;
};


/** Boolean expression to compare columns of type "bid_event_status_enum". All fields are combined with logical 'AND'. */
export type Bid_Event_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars['bid_event_status_enum']>;
  _gt?: Maybe<Scalars['bid_event_status_enum']>;
  _gte?: Maybe<Scalars['bid_event_status_enum']>;
  _in?: Maybe<Array<Scalars['bid_event_status_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bid_event_status_enum']>;
  _lte?: Maybe<Scalars['bid_event_status_enum']>;
  _neq?: Maybe<Scalars['bid_event_status_enum']>;
  _nin?: Maybe<Array<Scalars['bid_event_status_enum']>>;
};


/** Boolean expression to compare columns of type "bid_status_enum". All fields are combined with logical 'AND'. */
export type Bid_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars['bid_status_enum']>;
  _gt?: Maybe<Scalars['bid_status_enum']>;
  _gte?: Maybe<Scalars['bid_status_enum']>;
  _in?: Maybe<Array<Scalars['bid_status_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bid_status_enum']>;
  _lte?: Maybe<Scalars['bid_status_enum']>;
  _neq?: Maybe<Scalars['bid_status_enum']>;
  _nin?: Maybe<Array<Scalars['bid_status_enum']>>;
};


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auction" */
  Auction: Array<Auction>;
  /** fetch data from the table: "auction_approval_updated_event" */
  AuctionApprovalUpdatedEvent: Array<AuctionApprovalUpdatedEvent>;
  /** fetch aggregated fields from the table: "auction_approval_updated_event" */
  AuctionApprovalUpdatedEvent_aggregate: AuctionApprovalUpdatedEvent_Aggregate;
  /** fetch data from the table: "auction_approval_updated_event" using primary key columns */
  AuctionApprovalUpdatedEvent_by_pk?: Maybe<AuctionApprovalUpdatedEvent>;
  /** fetch data from the table: "auction_bid_event" */
  AuctionBidEvent: Array<AuctionBidEvent>;
  /** fetch aggregated fields from the table: "auction_bid_event" */
  AuctionBidEvent_aggregate: AuctionBidEvent_Aggregate;
  /** fetch data from the table: "auction_bid_event" using primary key columns */
  AuctionBidEvent_by_pk?: Maybe<AuctionBidEvent>;
  /** fetch data from the table: "auction_canceled_event" */
  AuctionCanceledEvent: Array<AuctionCanceledEvent>;
  /** fetch aggregated fields from the table: "auction_canceled_event" */
  AuctionCanceledEvent_aggregate: AuctionCanceledEvent_Aggregate;
  /** fetch data from the table: "auction_canceled_event" using primary key columns */
  AuctionCanceledEvent_by_pk?: Maybe<AuctionCanceledEvent>;
  /** fetch data from the table: "auction_created_event" */
  AuctionCreatedEvent: Array<AuctionCreatedEvent>;
  /** fetch aggregated fields from the table: "auction_created_event" */
  AuctionCreatedEvent_aggregate: AuctionCreatedEvent_Aggregate;
  /** fetch data from the table: "auction_created_event" using primary key columns */
  AuctionCreatedEvent_by_pk?: Maybe<AuctionCreatedEvent>;
  /** fetch data from the table: "auction_duration_extended_event" */
  AuctionDurationExtendedEvent: Array<AuctionDurationExtendedEvent>;
  /** fetch aggregated fields from the table: "auction_duration_extended_event" */
  AuctionDurationExtendedEvent_aggregate: AuctionDurationExtendedEvent_Aggregate;
  /** fetch data from the table: "auction_duration_extended_event" using primary key columns */
  AuctionDurationExtendedEvent_by_pk?: Maybe<AuctionDurationExtendedEvent>;
  /** fetch data from the table: "auction_ended_event" */
  AuctionEndedEvent: Array<AuctionEndedEvent>;
  /** fetch aggregated fields from the table: "auction_ended_event" */
  AuctionEndedEvent_aggregate: AuctionEndedEvent_Aggregate;
  /** fetch data from the table: "auction_ended_event" using primary key columns */
  AuctionEndedEvent_by_pk?: Maybe<AuctionEndedEvent>;
  /** fetch data from the table: "auction_reserve_price_updated_event" */
  AuctionReservePriceUpdatedEvent: Array<AuctionReservePriceUpdatedEvent>;
  /** fetch aggregated fields from the table: "auction_reserve_price_updated_event" */
  AuctionReservePriceUpdatedEvent_aggregate: AuctionReservePriceUpdatedEvent_Aggregate;
  /** fetch data from the table: "auction_reserve_price_updated_event" using primary key columns */
  AuctionReservePriceUpdatedEvent_by_pk?: Maybe<AuctionReservePriceUpdatedEvent>;
  /** fetch aggregated fields from the table: "auction" */
  Auction_aggregate: Auction_Aggregate;
  /** fetch data from the table: "auction" using primary key columns */
  Auction_by_pk?: Maybe<Auction>;
  /** fetch data from the table: "currency" */
  Currency: Array<Currency>;
  /** fetch aggregated fields from the table: "currency" */
  Currency_aggregate: Currency_Aggregate;
  /** fetch data from the table: "currency" using primary key columns */
  Currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table: "raw_log" */
  EventLog: Array<EventLog>;
  /** fetch aggregated fields from the table: "raw_log" */
  EventLog_aggregate: EventLog_Aggregate;
  /** fetch data from the table: "raw_log" using primary key columns */
  EventLog_by_pk?: Maybe<EventLog>;
  /** fetch data from the table: "ask" */
  MarketAsk: Array<MarketAsk>;
  /** fetch data from the table: "ask_event" */
  MarketAskEvent: Array<MarketAskEvent>;
  /** fetch aggregated fields from the table: "ask_event" */
  MarketAskEvent_aggregate: MarketAskEvent_Aggregate;
  /** fetch data from the table: "ask_event" using primary key columns */
  MarketAskEvent_by_pk?: Maybe<MarketAskEvent>;
  /** fetch aggregated fields from the table: "ask" */
  MarketAsk_aggregate: MarketAsk_Aggregate;
  /** fetch data from the table: "bid" */
  MarketBid: Array<MarketBid>;
  /** fetch data from the table: "bid_event" */
  MarketBidEvent: Array<MarketBidEvent>;
  /** fetch aggregated fields from the table: "bid_event" */
  MarketBidEvent_aggregate: MarketBidEvent_Aggregate;
  /** fetch data from the table: "bid_event" using primary key columns */
  MarketBidEvent_by_pk?: Maybe<MarketBidEvent>;
  /** fetch data from the table: "bid_share" */
  MarketBidShare: Array<MarketBidShare>;
  /** fetch data from the table: "bid_share_event" */
  MarketBidShareEvent: Array<MarketBidShareEvent>;
  /** fetch aggregated fields from the table: "bid_share_event" */
  MarketBidShareEvent_aggregate: MarketBidShareEvent_Aggregate;
  /** fetch data from the table: "bid_share_event" using primary key columns */
  MarketBidShareEvent_by_pk?: Maybe<MarketBidShareEvent>;
  /** fetch aggregated fields from the table: "bid_share" */
  MarketBidShare_aggregate: MarketBidShare_Aggregate;
  /** fetch aggregated fields from the table: "bid" */
  MarketBid_aggregate: MarketBid_Aggregate;
  /** fetch data from the table: "bid" using primary key columns */
  MarketBid_by_pk?: Maybe<MarketBid>;
  /** fetch data from the table: "media" */
  Media: Array<Media>;
  /** fetch data from the table: "metadata" */
  MediaMetadata: Array<MediaMetadata>;
  /** fetch aggregated fields from the table: "metadata" */
  MediaMetadata_aggregate: MediaMetadata_Aggregate;
  /** fetch data from the table: "metadata" using primary key columns */
  MediaMetadata_by_pk?: Maybe<MediaMetadata>;
  /** fetch data from the table: "mint_event" */
  MediaMint: Array<MediaMint>;
  /** fetch aggregated fields from the table: "mint_event" */
  MediaMint_aggregate: MediaMint_Aggregate;
  /** fetch data from the table: "mint_event" using primary key columns */
  MediaMint_by_pk?: Maybe<MediaMint>;
  /** fetch data from the table: "metadata_uri_updated_event" */
  MediaTokenMetadataURIUpdatedEvent: Array<MediaTokenMetadataUriUpdatedEvent>;
  /** fetch aggregated fields from the table: "metadata_uri_updated_event" */
  MediaTokenMetadataURIUpdatedEvent_aggregate: MediaTokenMetadataUriUpdatedEvent_Aggregate;
  /** fetch data from the table: "metadata_uri_updated_event" using primary key columns */
  MediaTokenMetadataURIUpdatedEvent_by_pk?: Maybe<MediaTokenMetadataUriUpdatedEvent>;
  /** fetch data from the table: "media_uri_updated_event" */
  MediaTokenURIUpdatedEvent: Array<MediaTokenUriUpdatedEvent>;
  /** fetch aggregated fields from the table: "media_uri_updated_event" */
  MediaTokenURIUpdatedEvent_aggregate: MediaTokenUriUpdatedEvent_Aggregate;
  /** fetch data from the table: "media_uri_updated_event" using primary key columns */
  MediaTokenURIUpdatedEvent_by_pk?: Maybe<MediaTokenUriUpdatedEvent>;
  /** fetch aggregated fields from the table: "media" */
  Media_aggregate: Media_Aggregate;
  /** fetch data from the table: "media" using primary key columns */
  Media_by_pk?: Maybe<Media>;
  /** fetch data from the table: "token" */
  Token: Array<Token>;
  /** fetch data from the table: "nft_contract" */
  TokenContract: Array<TokenContract>;
  /** fetch aggregated fields from the table: "nft_contract" */
  TokenContract_aggregate: TokenContract_Aggregate;
  /** fetch data from the table: "nft_contract" using primary key columns */
  TokenContract_by_pk?: Maybe<TokenContract>;
  /** fetch data from the table: "nft_metadata" */
  TokenMetadata: Array<TokenMetadata>;
  /** fetch aggregated fields from the table: "nft_metadata" */
  TokenMetadata_aggregate: TokenMetadata_Aggregate;
  /** fetch data from the table: "nft_metadata" using primary key columns */
  TokenMetadata_by_pk?: Maybe<TokenMetadata>;
  /** fetch data from the table: "nft_transfer_event" */
  TokenTransferEvent: Array<TokenTransferEvent>;
  /** fetch aggregated fields from the table: "nft_transfer_event" */
  TokenTransferEvent_aggregate: TokenTransferEvent_Aggregate;
  /** fetch data from the table: "nft_transfer_event" using primary key columns */
  TokenTransferEvent_by_pk?: Maybe<TokenTransferEvent>;
  /** fetch aggregated fields from the table: "token" */
  Token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token" using primary key columns */
  Token_by_pk?: Maybe<Token>;
  /** fetch data from the table: "transaction" */
  Transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  Transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  Transaction_by_pk?: Maybe<Transaction>;
};


export type Query_RootAuctionArgs = {
  distinct_on?: Maybe<Array<Auction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auction_Order_By>>;
  where?: Maybe<Auction_Bool_Exp>;
};


export type Query_RootAuctionApprovalUpdatedEventArgs = {
  distinct_on?: Maybe<Array<AuctionApprovalUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionApprovalUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionApprovalUpdatedEvent_Bool_Exp>;
};


export type Query_RootAuctionApprovalUpdatedEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionApprovalUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionApprovalUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionApprovalUpdatedEvent_Bool_Exp>;
};


export type Query_RootAuctionApprovalUpdatedEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAuctionBidEventArgs = {
  distinct_on?: Maybe<Array<AuctionBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionBidEvent_Order_By>>;
  where?: Maybe<AuctionBidEvent_Bool_Exp>;
};


export type Query_RootAuctionBidEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionBidEvent_Order_By>>;
  where?: Maybe<AuctionBidEvent_Bool_Exp>;
};


export type Query_RootAuctionBidEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAuctionCanceledEventArgs = {
  distinct_on?: Maybe<Array<AuctionCanceledEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionCanceledEvent_Order_By>>;
  where?: Maybe<AuctionCanceledEvent_Bool_Exp>;
};


export type Query_RootAuctionCanceledEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionCanceledEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionCanceledEvent_Order_By>>;
  where?: Maybe<AuctionCanceledEvent_Bool_Exp>;
};


export type Query_RootAuctionCanceledEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAuctionCreatedEventArgs = {
  distinct_on?: Maybe<Array<AuctionCreatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionCreatedEvent_Order_By>>;
  where?: Maybe<AuctionCreatedEvent_Bool_Exp>;
};


export type Query_RootAuctionCreatedEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionCreatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionCreatedEvent_Order_By>>;
  where?: Maybe<AuctionCreatedEvent_Bool_Exp>;
};


export type Query_RootAuctionCreatedEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAuctionDurationExtendedEventArgs = {
  distinct_on?: Maybe<Array<AuctionDurationExtendedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionDurationExtendedEvent_Order_By>>;
  where?: Maybe<AuctionDurationExtendedEvent_Bool_Exp>;
};


export type Query_RootAuctionDurationExtendedEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionDurationExtendedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionDurationExtendedEvent_Order_By>>;
  where?: Maybe<AuctionDurationExtendedEvent_Bool_Exp>;
};


export type Query_RootAuctionDurationExtendedEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAuctionEndedEventArgs = {
  distinct_on?: Maybe<Array<AuctionEndedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionEndedEvent_Order_By>>;
  where?: Maybe<AuctionEndedEvent_Bool_Exp>;
};


export type Query_RootAuctionEndedEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionEndedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionEndedEvent_Order_By>>;
  where?: Maybe<AuctionEndedEvent_Bool_Exp>;
};


export type Query_RootAuctionEndedEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAuctionReservePriceUpdatedEventArgs = {
  distinct_on?: Maybe<Array<AuctionReservePriceUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionReservePriceUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionReservePriceUpdatedEvent_Bool_Exp>;
};


export type Query_RootAuctionReservePriceUpdatedEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionReservePriceUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionReservePriceUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionReservePriceUpdatedEvent_Bool_Exp>;
};


export type Query_RootAuctionReservePriceUpdatedEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAuction_AggregateArgs = {
  distinct_on?: Maybe<Array<Auction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auction_Order_By>>;
  where?: Maybe<Auction_Bool_Exp>;
};


export type Query_RootAuction_By_PkArgs = {
  auctionId: Scalars['String'];
};


export type Query_RootCurrencyArgs = {
  distinct_on?: Maybe<Array<Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_Order_By>>;
  where?: Maybe<Currency_Bool_Exp>;
};


export type Query_RootCurrency_AggregateArgs = {
  distinct_on?: Maybe<Array<Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_Order_By>>;
  where?: Maybe<Currency_Bool_Exp>;
};


export type Query_RootCurrency_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootEventLogArgs = {
  distinct_on?: Maybe<Array<EventLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EventLog_Order_By>>;
  where?: Maybe<EventLog_Bool_Exp>;
};


export type Query_RootEventLog_AggregateArgs = {
  distinct_on?: Maybe<Array<EventLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EventLog_Order_By>>;
  where?: Maybe<EventLog_Bool_Exp>;
};


export type Query_RootEventLog_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootMarketAskArgs = {
  distinct_on?: Maybe<Array<MarketAsk_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketAsk_Order_By>>;
  where?: Maybe<MarketAsk_Bool_Exp>;
};


export type Query_RootMarketAskEventArgs = {
  distinct_on?: Maybe<Array<MarketAskEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketAskEvent_Order_By>>;
  where?: Maybe<MarketAskEvent_Bool_Exp>;
};


export type Query_RootMarketAskEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketAskEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketAskEvent_Order_By>>;
  where?: Maybe<MarketAskEvent_Bool_Exp>;
};


export type Query_RootMarketAskEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootMarketAsk_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketAsk_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketAsk_Order_By>>;
  where?: Maybe<MarketAsk_Bool_Exp>;
};


export type Query_RootMarketBidArgs = {
  distinct_on?: Maybe<Array<MarketBid_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBid_Order_By>>;
  where?: Maybe<MarketBid_Bool_Exp>;
};


export type Query_RootMarketBidEventArgs = {
  distinct_on?: Maybe<Array<MarketBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidEvent_Order_By>>;
  where?: Maybe<MarketBidEvent_Bool_Exp>;
};


export type Query_RootMarketBidEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidEvent_Order_By>>;
  where?: Maybe<MarketBidEvent_Bool_Exp>;
};


export type Query_RootMarketBidEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootMarketBidShareArgs = {
  distinct_on?: Maybe<Array<MarketBidShare_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidShare_Order_By>>;
  where?: Maybe<MarketBidShare_Bool_Exp>;
};


export type Query_RootMarketBidShareEventArgs = {
  distinct_on?: Maybe<Array<MarketBidShareEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidShareEvent_Order_By>>;
  where?: Maybe<MarketBidShareEvent_Bool_Exp>;
};


export type Query_RootMarketBidShareEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketBidShareEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidShareEvent_Order_By>>;
  where?: Maybe<MarketBidShareEvent_Bool_Exp>;
};


export type Query_RootMarketBidShareEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootMarketBidShare_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketBidShare_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidShare_Order_By>>;
  where?: Maybe<MarketBidShare_Bool_Exp>;
};


export type Query_RootMarketBid_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketBid_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBid_Order_By>>;
  where?: Maybe<MarketBid_Bool_Exp>;
};


export type Query_RootMarketBid_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootMediaArgs = {
  distinct_on?: Maybe<Array<Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Media_Order_By>>;
  where?: Maybe<Media_Bool_Exp>;
};


export type Query_RootMediaMetadataArgs = {
  distinct_on?: Maybe<Array<MediaMetadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaMetadata_Order_By>>;
  where?: Maybe<MediaMetadata_Bool_Exp>;
};


export type Query_RootMediaMetadata_AggregateArgs = {
  distinct_on?: Maybe<Array<MediaMetadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaMetadata_Order_By>>;
  where?: Maybe<MediaMetadata_Bool_Exp>;
};


export type Query_RootMediaMetadata_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootMediaMintArgs = {
  distinct_on?: Maybe<Array<MediaMint_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaMint_Order_By>>;
  where?: Maybe<MediaMint_Bool_Exp>;
};


export type Query_RootMediaMint_AggregateArgs = {
  distinct_on?: Maybe<Array<MediaMint_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaMint_Order_By>>;
  where?: Maybe<MediaMint_Bool_Exp>;
};


export type Query_RootMediaMint_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootMediaTokenMetadataUriUpdatedEventArgs = {
  distinct_on?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenMetadataUriUpdatedEvent_Bool_Exp>;
};


export type Query_RootMediaTokenMetadataUriUpdatedEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenMetadataUriUpdatedEvent_Bool_Exp>;
};


export type Query_RootMediaTokenMetadataUriUpdatedEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootMediaTokenUriUpdatedEventArgs = {
  distinct_on?: Maybe<Array<MediaTokenUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenUriUpdatedEvent_Bool_Exp>;
};


export type Query_RootMediaTokenUriUpdatedEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<MediaTokenUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenUriUpdatedEvent_Bool_Exp>;
};


export type Query_RootMediaTokenUriUpdatedEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootMedia_AggregateArgs = {
  distinct_on?: Maybe<Array<Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Media_Order_By>>;
  where?: Maybe<Media_Bool_Exp>;
};


export type Query_RootMedia_By_PkArgs = {
  tokenId: Scalars['String'];
};


export type Query_RootTokenArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Query_RootTokenContractArgs = {
  distinct_on?: Maybe<Array<TokenContract_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenContract_Order_By>>;
  where?: Maybe<TokenContract_Bool_Exp>;
};


export type Query_RootTokenContract_AggregateArgs = {
  distinct_on?: Maybe<Array<TokenContract_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenContract_Order_By>>;
  where?: Maybe<TokenContract_Bool_Exp>;
};


export type Query_RootTokenContract_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootTokenMetadataArgs = {
  distinct_on?: Maybe<Array<TokenMetadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenMetadata_Order_By>>;
  where?: Maybe<TokenMetadata_Bool_Exp>;
};


export type Query_RootTokenMetadata_AggregateArgs = {
  distinct_on?: Maybe<Array<TokenMetadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenMetadata_Order_By>>;
  where?: Maybe<TokenMetadata_Bool_Exp>;
};


export type Query_RootTokenMetadata_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTokenTransferEventArgs = {
  distinct_on?: Maybe<Array<TokenTransferEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenTransferEvent_Order_By>>;
  where?: Maybe<TokenTransferEvent_Bool_Exp>;
};


export type Query_RootTokenTransferEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<TokenTransferEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenTransferEvent_Order_By>>;
  where?: Maybe<TokenTransferEvent_Bool_Exp>;
};


export type Query_RootTokenTransferEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootToken_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Query_RootToken_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootTransactionArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_By_PkArgs = {
  hash: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auction" */
  Auction: Array<Auction>;
  /** fetch data from the table: "auction_approval_updated_event" */
  AuctionApprovalUpdatedEvent: Array<AuctionApprovalUpdatedEvent>;
  /** fetch aggregated fields from the table: "auction_approval_updated_event" */
  AuctionApprovalUpdatedEvent_aggregate: AuctionApprovalUpdatedEvent_Aggregate;
  /** fetch data from the table: "auction_approval_updated_event" using primary key columns */
  AuctionApprovalUpdatedEvent_by_pk?: Maybe<AuctionApprovalUpdatedEvent>;
  /** fetch data from the table: "auction_bid_event" */
  AuctionBidEvent: Array<AuctionBidEvent>;
  /** fetch aggregated fields from the table: "auction_bid_event" */
  AuctionBidEvent_aggregate: AuctionBidEvent_Aggregate;
  /** fetch data from the table: "auction_bid_event" using primary key columns */
  AuctionBidEvent_by_pk?: Maybe<AuctionBidEvent>;
  /** fetch data from the table: "auction_canceled_event" */
  AuctionCanceledEvent: Array<AuctionCanceledEvent>;
  /** fetch aggregated fields from the table: "auction_canceled_event" */
  AuctionCanceledEvent_aggregate: AuctionCanceledEvent_Aggregate;
  /** fetch data from the table: "auction_canceled_event" using primary key columns */
  AuctionCanceledEvent_by_pk?: Maybe<AuctionCanceledEvent>;
  /** fetch data from the table: "auction_created_event" */
  AuctionCreatedEvent: Array<AuctionCreatedEvent>;
  /** fetch aggregated fields from the table: "auction_created_event" */
  AuctionCreatedEvent_aggregate: AuctionCreatedEvent_Aggregate;
  /** fetch data from the table: "auction_created_event" using primary key columns */
  AuctionCreatedEvent_by_pk?: Maybe<AuctionCreatedEvent>;
  /** fetch data from the table: "auction_duration_extended_event" */
  AuctionDurationExtendedEvent: Array<AuctionDurationExtendedEvent>;
  /** fetch aggregated fields from the table: "auction_duration_extended_event" */
  AuctionDurationExtendedEvent_aggregate: AuctionDurationExtendedEvent_Aggregate;
  /** fetch data from the table: "auction_duration_extended_event" using primary key columns */
  AuctionDurationExtendedEvent_by_pk?: Maybe<AuctionDurationExtendedEvent>;
  /** fetch data from the table: "auction_ended_event" */
  AuctionEndedEvent: Array<AuctionEndedEvent>;
  /** fetch aggregated fields from the table: "auction_ended_event" */
  AuctionEndedEvent_aggregate: AuctionEndedEvent_Aggregate;
  /** fetch data from the table: "auction_ended_event" using primary key columns */
  AuctionEndedEvent_by_pk?: Maybe<AuctionEndedEvent>;
  /** fetch data from the table: "auction_reserve_price_updated_event" */
  AuctionReservePriceUpdatedEvent: Array<AuctionReservePriceUpdatedEvent>;
  /** fetch aggregated fields from the table: "auction_reserve_price_updated_event" */
  AuctionReservePriceUpdatedEvent_aggregate: AuctionReservePriceUpdatedEvent_Aggregate;
  /** fetch data from the table: "auction_reserve_price_updated_event" using primary key columns */
  AuctionReservePriceUpdatedEvent_by_pk?: Maybe<AuctionReservePriceUpdatedEvent>;
  /** fetch aggregated fields from the table: "auction" */
  Auction_aggregate: Auction_Aggregate;
  /** fetch data from the table: "auction" using primary key columns */
  Auction_by_pk?: Maybe<Auction>;
  /** fetch data from the table: "currency" */
  Currency: Array<Currency>;
  /** fetch aggregated fields from the table: "currency" */
  Currency_aggregate: Currency_Aggregate;
  /** fetch data from the table: "currency" using primary key columns */
  Currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table: "raw_log" */
  EventLog: Array<EventLog>;
  /** fetch aggregated fields from the table: "raw_log" */
  EventLog_aggregate: EventLog_Aggregate;
  /** fetch data from the table: "raw_log" using primary key columns */
  EventLog_by_pk?: Maybe<EventLog>;
  /** fetch data from the table: "ask" */
  MarketAsk: Array<MarketAsk>;
  /** fetch data from the table: "ask_event" */
  MarketAskEvent: Array<MarketAskEvent>;
  /** fetch aggregated fields from the table: "ask_event" */
  MarketAskEvent_aggregate: MarketAskEvent_Aggregate;
  /** fetch data from the table: "ask_event" using primary key columns */
  MarketAskEvent_by_pk?: Maybe<MarketAskEvent>;
  /** fetch aggregated fields from the table: "ask" */
  MarketAsk_aggregate: MarketAsk_Aggregate;
  /** fetch data from the table: "bid" */
  MarketBid: Array<MarketBid>;
  /** fetch data from the table: "bid_event" */
  MarketBidEvent: Array<MarketBidEvent>;
  /** fetch aggregated fields from the table: "bid_event" */
  MarketBidEvent_aggregate: MarketBidEvent_Aggregate;
  /** fetch data from the table: "bid_event" using primary key columns */
  MarketBidEvent_by_pk?: Maybe<MarketBidEvent>;
  /** fetch data from the table: "bid_share" */
  MarketBidShare: Array<MarketBidShare>;
  /** fetch data from the table: "bid_share_event" */
  MarketBidShareEvent: Array<MarketBidShareEvent>;
  /** fetch aggregated fields from the table: "bid_share_event" */
  MarketBidShareEvent_aggregate: MarketBidShareEvent_Aggregate;
  /** fetch data from the table: "bid_share_event" using primary key columns */
  MarketBidShareEvent_by_pk?: Maybe<MarketBidShareEvent>;
  /** fetch aggregated fields from the table: "bid_share" */
  MarketBidShare_aggregate: MarketBidShare_Aggregate;
  /** fetch aggregated fields from the table: "bid" */
  MarketBid_aggregate: MarketBid_Aggregate;
  /** fetch data from the table: "bid" using primary key columns */
  MarketBid_by_pk?: Maybe<MarketBid>;
  /** fetch data from the table: "media" */
  Media: Array<Media>;
  /** fetch data from the table: "metadata" */
  MediaMetadata: Array<MediaMetadata>;
  /** fetch aggregated fields from the table: "metadata" */
  MediaMetadata_aggregate: MediaMetadata_Aggregate;
  /** fetch data from the table: "metadata" using primary key columns */
  MediaMetadata_by_pk?: Maybe<MediaMetadata>;
  /** fetch data from the table: "mint_event" */
  MediaMint: Array<MediaMint>;
  /** fetch aggregated fields from the table: "mint_event" */
  MediaMint_aggregate: MediaMint_Aggregate;
  /** fetch data from the table: "mint_event" using primary key columns */
  MediaMint_by_pk?: Maybe<MediaMint>;
  /** fetch data from the table: "metadata_uri_updated_event" */
  MediaTokenMetadataURIUpdatedEvent: Array<MediaTokenMetadataUriUpdatedEvent>;
  /** fetch aggregated fields from the table: "metadata_uri_updated_event" */
  MediaTokenMetadataURIUpdatedEvent_aggregate: MediaTokenMetadataUriUpdatedEvent_Aggregate;
  /** fetch data from the table: "metadata_uri_updated_event" using primary key columns */
  MediaTokenMetadataURIUpdatedEvent_by_pk?: Maybe<MediaTokenMetadataUriUpdatedEvent>;
  /** fetch data from the table: "media_uri_updated_event" */
  MediaTokenURIUpdatedEvent: Array<MediaTokenUriUpdatedEvent>;
  /** fetch aggregated fields from the table: "media_uri_updated_event" */
  MediaTokenURIUpdatedEvent_aggregate: MediaTokenUriUpdatedEvent_Aggregate;
  /** fetch data from the table: "media_uri_updated_event" using primary key columns */
  MediaTokenURIUpdatedEvent_by_pk?: Maybe<MediaTokenUriUpdatedEvent>;
  /** fetch aggregated fields from the table: "media" */
  Media_aggregate: Media_Aggregate;
  /** fetch data from the table: "media" using primary key columns */
  Media_by_pk?: Maybe<Media>;
  /** fetch data from the table: "token" */
  Token: Array<Token>;
  /** fetch data from the table: "nft_contract" */
  TokenContract: Array<TokenContract>;
  /** fetch aggregated fields from the table: "nft_contract" */
  TokenContract_aggregate: TokenContract_Aggregate;
  /** fetch data from the table: "nft_contract" using primary key columns */
  TokenContract_by_pk?: Maybe<TokenContract>;
  /** fetch data from the table: "nft_metadata" */
  TokenMetadata: Array<TokenMetadata>;
  /** fetch aggregated fields from the table: "nft_metadata" */
  TokenMetadata_aggregate: TokenMetadata_Aggregate;
  /** fetch data from the table: "nft_metadata" using primary key columns */
  TokenMetadata_by_pk?: Maybe<TokenMetadata>;
  /** fetch data from the table: "nft_transfer_event" */
  TokenTransferEvent: Array<TokenTransferEvent>;
  /** fetch aggregated fields from the table: "nft_transfer_event" */
  TokenTransferEvent_aggregate: TokenTransferEvent_Aggregate;
  /** fetch data from the table: "nft_transfer_event" using primary key columns */
  TokenTransferEvent_by_pk?: Maybe<TokenTransferEvent>;
  /** fetch aggregated fields from the table: "token" */
  Token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token" using primary key columns */
  Token_by_pk?: Maybe<Token>;
  /** fetch data from the table: "transaction" */
  Transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  Transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  Transaction_by_pk?: Maybe<Transaction>;
};


export type Subscription_RootAuctionArgs = {
  distinct_on?: Maybe<Array<Auction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auction_Order_By>>;
  where?: Maybe<Auction_Bool_Exp>;
};


export type Subscription_RootAuctionApprovalUpdatedEventArgs = {
  distinct_on?: Maybe<Array<AuctionApprovalUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionApprovalUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionApprovalUpdatedEvent_Bool_Exp>;
};


export type Subscription_RootAuctionApprovalUpdatedEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionApprovalUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionApprovalUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionApprovalUpdatedEvent_Bool_Exp>;
};


export type Subscription_RootAuctionApprovalUpdatedEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuctionBidEventArgs = {
  distinct_on?: Maybe<Array<AuctionBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionBidEvent_Order_By>>;
  where?: Maybe<AuctionBidEvent_Bool_Exp>;
};


export type Subscription_RootAuctionBidEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionBidEvent_Order_By>>;
  where?: Maybe<AuctionBidEvent_Bool_Exp>;
};


export type Subscription_RootAuctionBidEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuctionCanceledEventArgs = {
  distinct_on?: Maybe<Array<AuctionCanceledEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionCanceledEvent_Order_By>>;
  where?: Maybe<AuctionCanceledEvent_Bool_Exp>;
};


export type Subscription_RootAuctionCanceledEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionCanceledEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionCanceledEvent_Order_By>>;
  where?: Maybe<AuctionCanceledEvent_Bool_Exp>;
};


export type Subscription_RootAuctionCanceledEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuctionCreatedEventArgs = {
  distinct_on?: Maybe<Array<AuctionCreatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionCreatedEvent_Order_By>>;
  where?: Maybe<AuctionCreatedEvent_Bool_Exp>;
};


export type Subscription_RootAuctionCreatedEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionCreatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionCreatedEvent_Order_By>>;
  where?: Maybe<AuctionCreatedEvent_Bool_Exp>;
};


export type Subscription_RootAuctionCreatedEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuctionDurationExtendedEventArgs = {
  distinct_on?: Maybe<Array<AuctionDurationExtendedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionDurationExtendedEvent_Order_By>>;
  where?: Maybe<AuctionDurationExtendedEvent_Bool_Exp>;
};


export type Subscription_RootAuctionDurationExtendedEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionDurationExtendedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionDurationExtendedEvent_Order_By>>;
  where?: Maybe<AuctionDurationExtendedEvent_Bool_Exp>;
};


export type Subscription_RootAuctionDurationExtendedEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuctionEndedEventArgs = {
  distinct_on?: Maybe<Array<AuctionEndedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionEndedEvent_Order_By>>;
  where?: Maybe<AuctionEndedEvent_Bool_Exp>;
};


export type Subscription_RootAuctionEndedEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionEndedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionEndedEvent_Order_By>>;
  where?: Maybe<AuctionEndedEvent_Bool_Exp>;
};


export type Subscription_RootAuctionEndedEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuctionReservePriceUpdatedEventArgs = {
  distinct_on?: Maybe<Array<AuctionReservePriceUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionReservePriceUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionReservePriceUpdatedEvent_Bool_Exp>;
};


export type Subscription_RootAuctionReservePriceUpdatedEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<AuctionReservePriceUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuctionReservePriceUpdatedEvent_Order_By>>;
  where?: Maybe<AuctionReservePriceUpdatedEvent_Bool_Exp>;
};


export type Subscription_RootAuctionReservePriceUpdatedEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuction_AggregateArgs = {
  distinct_on?: Maybe<Array<Auction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auction_Order_By>>;
  where?: Maybe<Auction_Bool_Exp>;
};


export type Subscription_RootAuction_By_PkArgs = {
  auctionId: Scalars['String'];
};


export type Subscription_RootCurrencyArgs = {
  distinct_on?: Maybe<Array<Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_Order_By>>;
  where?: Maybe<Currency_Bool_Exp>;
};


export type Subscription_RootCurrency_AggregateArgs = {
  distinct_on?: Maybe<Array<Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_Order_By>>;
  where?: Maybe<Currency_Bool_Exp>;
};


export type Subscription_RootCurrency_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootEventLogArgs = {
  distinct_on?: Maybe<Array<EventLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EventLog_Order_By>>;
  where?: Maybe<EventLog_Bool_Exp>;
};


export type Subscription_RootEventLog_AggregateArgs = {
  distinct_on?: Maybe<Array<EventLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EventLog_Order_By>>;
  where?: Maybe<EventLog_Bool_Exp>;
};


export type Subscription_RootEventLog_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMarketAskArgs = {
  distinct_on?: Maybe<Array<MarketAsk_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketAsk_Order_By>>;
  where?: Maybe<MarketAsk_Bool_Exp>;
};


export type Subscription_RootMarketAskEventArgs = {
  distinct_on?: Maybe<Array<MarketAskEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketAskEvent_Order_By>>;
  where?: Maybe<MarketAskEvent_Bool_Exp>;
};


export type Subscription_RootMarketAskEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketAskEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketAskEvent_Order_By>>;
  where?: Maybe<MarketAskEvent_Bool_Exp>;
};


export type Subscription_RootMarketAskEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMarketAsk_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketAsk_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketAsk_Order_By>>;
  where?: Maybe<MarketAsk_Bool_Exp>;
};


export type Subscription_RootMarketBidArgs = {
  distinct_on?: Maybe<Array<MarketBid_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBid_Order_By>>;
  where?: Maybe<MarketBid_Bool_Exp>;
};


export type Subscription_RootMarketBidEventArgs = {
  distinct_on?: Maybe<Array<MarketBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidEvent_Order_By>>;
  where?: Maybe<MarketBidEvent_Bool_Exp>;
};


export type Subscription_RootMarketBidEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketBidEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidEvent_Order_By>>;
  where?: Maybe<MarketBidEvent_Bool_Exp>;
};


export type Subscription_RootMarketBidEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMarketBidShareArgs = {
  distinct_on?: Maybe<Array<MarketBidShare_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidShare_Order_By>>;
  where?: Maybe<MarketBidShare_Bool_Exp>;
};


export type Subscription_RootMarketBidShareEventArgs = {
  distinct_on?: Maybe<Array<MarketBidShareEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidShareEvent_Order_By>>;
  where?: Maybe<MarketBidShareEvent_Bool_Exp>;
};


export type Subscription_RootMarketBidShareEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketBidShareEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidShareEvent_Order_By>>;
  where?: Maybe<MarketBidShareEvent_Bool_Exp>;
};


export type Subscription_RootMarketBidShareEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMarketBidShare_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketBidShare_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBidShare_Order_By>>;
  where?: Maybe<MarketBidShare_Bool_Exp>;
};


export type Subscription_RootMarketBid_AggregateArgs = {
  distinct_on?: Maybe<Array<MarketBid_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MarketBid_Order_By>>;
  where?: Maybe<MarketBid_Bool_Exp>;
};


export type Subscription_RootMarketBid_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMediaArgs = {
  distinct_on?: Maybe<Array<Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Media_Order_By>>;
  where?: Maybe<Media_Bool_Exp>;
};


export type Subscription_RootMediaMetadataArgs = {
  distinct_on?: Maybe<Array<MediaMetadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaMetadata_Order_By>>;
  where?: Maybe<MediaMetadata_Bool_Exp>;
};


export type Subscription_RootMediaMetadata_AggregateArgs = {
  distinct_on?: Maybe<Array<MediaMetadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaMetadata_Order_By>>;
  where?: Maybe<MediaMetadata_Bool_Exp>;
};


export type Subscription_RootMediaMetadata_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMediaMintArgs = {
  distinct_on?: Maybe<Array<MediaMint_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaMint_Order_By>>;
  where?: Maybe<MediaMint_Bool_Exp>;
};


export type Subscription_RootMediaMint_AggregateArgs = {
  distinct_on?: Maybe<Array<MediaMint_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaMint_Order_By>>;
  where?: Maybe<MediaMint_Bool_Exp>;
};


export type Subscription_RootMediaMint_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMediaTokenMetadataUriUpdatedEventArgs = {
  distinct_on?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenMetadataUriUpdatedEvent_Bool_Exp>;
};


export type Subscription_RootMediaTokenMetadataUriUpdatedEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenMetadataUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenMetadataUriUpdatedEvent_Bool_Exp>;
};


export type Subscription_RootMediaTokenMetadataUriUpdatedEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMediaTokenUriUpdatedEventArgs = {
  distinct_on?: Maybe<Array<MediaTokenUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenUriUpdatedEvent_Bool_Exp>;
};


export type Subscription_RootMediaTokenUriUpdatedEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<MediaTokenUriUpdatedEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MediaTokenUriUpdatedEvent_Order_By>>;
  where?: Maybe<MediaTokenUriUpdatedEvent_Bool_Exp>;
};


export type Subscription_RootMediaTokenUriUpdatedEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMedia_AggregateArgs = {
  distinct_on?: Maybe<Array<Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Media_Order_By>>;
  where?: Maybe<Media_Bool_Exp>;
};


export type Subscription_RootMedia_By_PkArgs = {
  tokenId: Scalars['String'];
};


export type Subscription_RootTokenArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Subscription_RootTokenContractArgs = {
  distinct_on?: Maybe<Array<TokenContract_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenContract_Order_By>>;
  where?: Maybe<TokenContract_Bool_Exp>;
};


export type Subscription_RootTokenContract_AggregateArgs = {
  distinct_on?: Maybe<Array<TokenContract_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenContract_Order_By>>;
  where?: Maybe<TokenContract_Bool_Exp>;
};


export type Subscription_RootTokenContract_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootTokenMetadataArgs = {
  distinct_on?: Maybe<Array<TokenMetadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenMetadata_Order_By>>;
  where?: Maybe<TokenMetadata_Bool_Exp>;
};


export type Subscription_RootTokenMetadata_AggregateArgs = {
  distinct_on?: Maybe<Array<TokenMetadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenMetadata_Order_By>>;
  where?: Maybe<TokenMetadata_Bool_Exp>;
};


export type Subscription_RootTokenMetadata_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTokenTransferEventArgs = {
  distinct_on?: Maybe<Array<TokenTransferEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenTransferEvent_Order_By>>;
  where?: Maybe<TokenTransferEvent_Bool_Exp>;
};


export type Subscription_RootTokenTransferEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<TokenTransferEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TokenTransferEvent_Order_By>>;
  where?: Maybe<TokenTransferEvent_Bool_Exp>;
};


export type Subscription_RootTokenTransferEvent_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootToken_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_By_PkArgs = {
  hash: Scalars['String'];
};


/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type TokenWithAuctionFragment = (
  { __typename?: 'Token' }
  & Pick<Token, 'id' | 'tokenId' | 'owner' | 'address' | 'tokenURI' | 'minter'>
  & { metadata?: Maybe<(
    { __typename?: 'TokenMetadata' }
    & Pick<TokenMetadata, 'json'>
  )>, mintTransferEvent?: Maybe<(
    { __typename?: 'TokenTransferEvent' }
    & Pick<TokenTransferEvent, 'blockTimestamp' | 'blockNumber'>
  )>, media?: Maybe<(
    { __typename?: 'Media' }
    & Pick<Media, 'contentURI' | 'contentHash' | 'metadataHash' | 'metadataURI' | 'ownerBidShare' | 'creatorBidShare'>
  )>, auctions: Array<(
    { __typename?: 'Auction' }
    & Pick<Auction, 'winner' | 'lastBidAmount' | 'duration' | 'tokenId' | 'auctionId' | 'tokenContract' | 'reservePrice' | 'firstBidTime' | 'expiresAt' | 'tokenOwner'>
    & { canceledEvent?: Maybe<(
      { __typename?: 'AuctionCanceledEvent' }
      & Pick<AuctionCanceledEvent, 'id'>
    )>, endedEvent?: Maybe<(
      { __typename?: 'AuctionEndedEvent' }
      & Pick<AuctionEndedEvent, 'id'>
    )>, bidEvents: Array<(
      { __typename?: 'AuctionBidEvent' }
      & Pick<AuctionBidEvent, 'id' | 'value' | 'sender' | 'transactionHash'>
    )> }
  )> }
);

export type ByOwnerQueryVariables = Exact<{
  address?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type ByOwnerQuery = (
  { __typename?: 'query_root' }
  & { Token: Array<(
    { __typename?: 'Token' }
    & TokenWithAuctionFragment
  )> }
);

export type ByIdsQueryVariables = Exact<{
  ids?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type ByIdsQuery = (
  { __typename?: 'query_root' }
  & { Token: Array<(
    { __typename?: 'Token' }
    & TokenWithAuctionFragment
  )> }
);

export type ActiveTokensQueryVariables = Exact<{
  addresses?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  curators?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type ActiveTokensQuery = (
  { __typename?: 'query_root' }
  & { Token: Array<(
    { __typename?: 'Token' }
    & TokenWithAuctionFragment
  )> }
);
