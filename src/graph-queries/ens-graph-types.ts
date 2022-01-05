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




export type AbiChanged = ResolverEvent & {
  __typename?: 'AbiChanged';
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  contentType: Scalars['BigInt'];
};

export type AbiChanged_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  resolver?: Maybe<Scalars['String']>;
  resolver_not?: Maybe<Scalars['String']>;
  resolver_gt?: Maybe<Scalars['String']>;
  resolver_lt?: Maybe<Scalars['String']>;
  resolver_gte?: Maybe<Scalars['String']>;
  resolver_lte?: Maybe<Scalars['String']>;
  resolver_in?: Maybe<Array<Scalars['String']>>;
  resolver_not_in?: Maybe<Array<Scalars['String']>>;
  resolver_contains?: Maybe<Scalars['String']>;
  resolver_not_contains?: Maybe<Scalars['String']>;
  resolver_starts_with?: Maybe<Scalars['String']>;
  resolver_not_starts_with?: Maybe<Scalars['String']>;
  resolver_ends_with?: Maybe<Scalars['String']>;
  resolver_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
  contentType?: Maybe<Scalars['BigInt']>;
  contentType_not?: Maybe<Scalars['BigInt']>;
  contentType_gt?: Maybe<Scalars['BigInt']>;
  contentType_lt?: Maybe<Scalars['BigInt']>;
  contentType_gte?: Maybe<Scalars['BigInt']>;
  contentType_lte?: Maybe<Scalars['BigInt']>;
  contentType_in?: Maybe<Array<Scalars['BigInt']>>;
  contentType_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum AbiChanged_OrderBy {
  Id = 'id',
  Resolver = 'resolver',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  ContentType = 'contentType'
}

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  domains: Array<Domain>;
  registrations?: Maybe<Array<Registration>>;
};


export type AccountDomainsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Domain_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Domain_Filter>;
};


export type AccountRegistrationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Registration_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Registration_Filter>;
};

export type Account_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum Account_OrderBy {
  Id = 'id',
  Domains = 'domains',
  Registrations = 'registrations'
}

export type AddrChanged = ResolverEvent & {
  __typename?: 'AddrChanged';
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  addr: Account;
};

export type AddrChanged_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  resolver?: Maybe<Scalars['String']>;
  resolver_not?: Maybe<Scalars['String']>;
  resolver_gt?: Maybe<Scalars['String']>;
  resolver_lt?: Maybe<Scalars['String']>;
  resolver_gte?: Maybe<Scalars['String']>;
  resolver_lte?: Maybe<Scalars['String']>;
  resolver_in?: Maybe<Array<Scalars['String']>>;
  resolver_not_in?: Maybe<Array<Scalars['String']>>;
  resolver_contains?: Maybe<Scalars['String']>;
  resolver_not_contains?: Maybe<Scalars['String']>;
  resolver_starts_with?: Maybe<Scalars['String']>;
  resolver_not_starts_with?: Maybe<Scalars['String']>;
  resolver_ends_with?: Maybe<Scalars['String']>;
  resolver_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
  addr?: Maybe<Scalars['String']>;
  addr_not?: Maybe<Scalars['String']>;
  addr_gt?: Maybe<Scalars['String']>;
  addr_lt?: Maybe<Scalars['String']>;
  addr_gte?: Maybe<Scalars['String']>;
  addr_lte?: Maybe<Scalars['String']>;
  addr_in?: Maybe<Array<Scalars['String']>>;
  addr_not_in?: Maybe<Array<Scalars['String']>>;
  addr_contains?: Maybe<Scalars['String']>;
  addr_not_contains?: Maybe<Scalars['String']>;
  addr_starts_with?: Maybe<Scalars['String']>;
  addr_not_starts_with?: Maybe<Scalars['String']>;
  addr_ends_with?: Maybe<Scalars['String']>;
  addr_not_ends_with?: Maybe<Scalars['String']>;
};

export enum AddrChanged_OrderBy {
  Id = 'id',
  Resolver = 'resolver',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  Addr = 'addr'
}

export type AuthorisationChanged = ResolverEvent & {
  __typename?: 'AuthorisationChanged';
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  target: Scalars['Bytes'];
  isAuthorized: Scalars['Boolean'];
};

export type AuthorisationChanged_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  resolver?: Maybe<Scalars['String']>;
  resolver_not?: Maybe<Scalars['String']>;
  resolver_gt?: Maybe<Scalars['String']>;
  resolver_lt?: Maybe<Scalars['String']>;
  resolver_gte?: Maybe<Scalars['String']>;
  resolver_lte?: Maybe<Scalars['String']>;
  resolver_in?: Maybe<Array<Scalars['String']>>;
  resolver_not_in?: Maybe<Array<Scalars['String']>>;
  resolver_contains?: Maybe<Scalars['String']>;
  resolver_not_contains?: Maybe<Scalars['String']>;
  resolver_starts_with?: Maybe<Scalars['String']>;
  resolver_not_starts_with?: Maybe<Scalars['String']>;
  resolver_ends_with?: Maybe<Scalars['String']>;
  resolver_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
  owner?: Maybe<Scalars['Bytes']>;
  owner_not?: Maybe<Scalars['Bytes']>;
  owner_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_not_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_contains?: Maybe<Scalars['Bytes']>;
  owner_not_contains?: Maybe<Scalars['Bytes']>;
  target?: Maybe<Scalars['Bytes']>;
  target_not?: Maybe<Scalars['Bytes']>;
  target_in?: Maybe<Array<Scalars['Bytes']>>;
  target_not_in?: Maybe<Array<Scalars['Bytes']>>;
  target_contains?: Maybe<Scalars['Bytes']>;
  target_not_contains?: Maybe<Scalars['Bytes']>;
  isAuthorized?: Maybe<Scalars['Boolean']>;
  isAuthorized_not?: Maybe<Scalars['Boolean']>;
  isAuthorized_in?: Maybe<Array<Scalars['Boolean']>>;
  isAuthorized_not_in?: Maybe<Array<Scalars['Boolean']>>;
};

export enum AuthorisationChanged_OrderBy {
  Id = 'id',
  Resolver = 'resolver',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  Owner = 'owner',
  Target = 'target',
  IsAuthorized = 'isAuthorized'
}



export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
  number_gte?: Maybe<Scalars['Int']>;
};


export type ContenthashChanged = ResolverEvent & {
  __typename?: 'ContenthashChanged';
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  hash: Scalars['Bytes'];
};

export type ContenthashChanged_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  resolver?: Maybe<Scalars['String']>;
  resolver_not?: Maybe<Scalars['String']>;
  resolver_gt?: Maybe<Scalars['String']>;
  resolver_lt?: Maybe<Scalars['String']>;
  resolver_gte?: Maybe<Scalars['String']>;
  resolver_lte?: Maybe<Scalars['String']>;
  resolver_in?: Maybe<Array<Scalars['String']>>;
  resolver_not_in?: Maybe<Array<Scalars['String']>>;
  resolver_contains?: Maybe<Scalars['String']>;
  resolver_not_contains?: Maybe<Scalars['String']>;
  resolver_starts_with?: Maybe<Scalars['String']>;
  resolver_not_starts_with?: Maybe<Scalars['String']>;
  resolver_ends_with?: Maybe<Scalars['String']>;
  resolver_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
  hash?: Maybe<Scalars['Bytes']>;
  hash_not?: Maybe<Scalars['Bytes']>;
  hash_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_contains?: Maybe<Scalars['Bytes']>;
  hash_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum ContenthashChanged_OrderBy {
  Id = 'id',
  Resolver = 'resolver',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  Hash = 'hash'
}

export type Domain = {
  __typename?: 'Domain';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  labelName?: Maybe<Scalars['String']>;
  labelhash?: Maybe<Scalars['Bytes']>;
  parent?: Maybe<Domain>;
  subdomains: Array<Domain>;
  resolvedAddress?: Maybe<Account>;
  owner: Account;
  resolver?: Maybe<Resolver>;
  ttl?: Maybe<Scalars['BigInt']>;
  isMigrated: Scalars['Boolean'];
  createdAt: Scalars['BigInt'];
  events: Array<DomainEvent>;
};


export type DomainSubdomainsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Domain_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Domain_Filter>;
};


export type DomainEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DomainEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DomainEvent_Filter>;
};

export type DomainEvent = {
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
};

export type DomainEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  domain?: Maybe<Scalars['String']>;
  domain_not?: Maybe<Scalars['String']>;
  domain_gt?: Maybe<Scalars['String']>;
  domain_lt?: Maybe<Scalars['String']>;
  domain_gte?: Maybe<Scalars['String']>;
  domain_lte?: Maybe<Scalars['String']>;
  domain_in?: Maybe<Array<Scalars['String']>>;
  domain_not_in?: Maybe<Array<Scalars['String']>>;
  domain_contains?: Maybe<Scalars['String']>;
  domain_not_contains?: Maybe<Scalars['String']>;
  domain_starts_with?: Maybe<Scalars['String']>;
  domain_not_starts_with?: Maybe<Scalars['String']>;
  domain_ends_with?: Maybe<Scalars['String']>;
  domain_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum DomainEvent_OrderBy {
  Id = 'id',
  Domain = 'domain',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID'
}

export type Domain_Filter = {
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
  labelName?: Maybe<Scalars['String']>;
  labelName_not?: Maybe<Scalars['String']>;
  labelName_gt?: Maybe<Scalars['String']>;
  labelName_lt?: Maybe<Scalars['String']>;
  labelName_gte?: Maybe<Scalars['String']>;
  labelName_lte?: Maybe<Scalars['String']>;
  labelName_in?: Maybe<Array<Scalars['String']>>;
  labelName_not_in?: Maybe<Array<Scalars['String']>>;
  labelName_contains?: Maybe<Scalars['String']>;
  labelName_not_contains?: Maybe<Scalars['String']>;
  labelName_starts_with?: Maybe<Scalars['String']>;
  labelName_not_starts_with?: Maybe<Scalars['String']>;
  labelName_ends_with?: Maybe<Scalars['String']>;
  labelName_not_ends_with?: Maybe<Scalars['String']>;
  labelhash?: Maybe<Scalars['Bytes']>;
  labelhash_not?: Maybe<Scalars['Bytes']>;
  labelhash_in?: Maybe<Array<Scalars['Bytes']>>;
  labelhash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  labelhash_contains?: Maybe<Scalars['Bytes']>;
  labelhash_not_contains?: Maybe<Scalars['Bytes']>;
  parent?: Maybe<Scalars['String']>;
  parent_not?: Maybe<Scalars['String']>;
  parent_gt?: Maybe<Scalars['String']>;
  parent_lt?: Maybe<Scalars['String']>;
  parent_gte?: Maybe<Scalars['String']>;
  parent_lte?: Maybe<Scalars['String']>;
  parent_in?: Maybe<Array<Scalars['String']>>;
  parent_not_in?: Maybe<Array<Scalars['String']>>;
  parent_contains?: Maybe<Scalars['String']>;
  parent_not_contains?: Maybe<Scalars['String']>;
  parent_starts_with?: Maybe<Scalars['String']>;
  parent_not_starts_with?: Maybe<Scalars['String']>;
  parent_ends_with?: Maybe<Scalars['String']>;
  parent_not_ends_with?: Maybe<Scalars['String']>;
  resolvedAddress?: Maybe<Scalars['String']>;
  resolvedAddress_not?: Maybe<Scalars['String']>;
  resolvedAddress_gt?: Maybe<Scalars['String']>;
  resolvedAddress_lt?: Maybe<Scalars['String']>;
  resolvedAddress_gte?: Maybe<Scalars['String']>;
  resolvedAddress_lte?: Maybe<Scalars['String']>;
  resolvedAddress_in?: Maybe<Array<Scalars['String']>>;
  resolvedAddress_not_in?: Maybe<Array<Scalars['String']>>;
  resolvedAddress_contains?: Maybe<Scalars['String']>;
  resolvedAddress_not_contains?: Maybe<Scalars['String']>;
  resolvedAddress_starts_with?: Maybe<Scalars['String']>;
  resolvedAddress_not_starts_with?: Maybe<Scalars['String']>;
  resolvedAddress_ends_with?: Maybe<Scalars['String']>;
  resolvedAddress_not_ends_with?: Maybe<Scalars['String']>;
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
  resolver?: Maybe<Scalars['String']>;
  resolver_not?: Maybe<Scalars['String']>;
  resolver_gt?: Maybe<Scalars['String']>;
  resolver_lt?: Maybe<Scalars['String']>;
  resolver_gte?: Maybe<Scalars['String']>;
  resolver_lte?: Maybe<Scalars['String']>;
  resolver_in?: Maybe<Array<Scalars['String']>>;
  resolver_not_in?: Maybe<Array<Scalars['String']>>;
  resolver_contains?: Maybe<Scalars['String']>;
  resolver_not_contains?: Maybe<Scalars['String']>;
  resolver_starts_with?: Maybe<Scalars['String']>;
  resolver_not_starts_with?: Maybe<Scalars['String']>;
  resolver_ends_with?: Maybe<Scalars['String']>;
  resolver_not_ends_with?: Maybe<Scalars['String']>;
  ttl?: Maybe<Scalars['BigInt']>;
  ttl_not?: Maybe<Scalars['BigInt']>;
  ttl_gt?: Maybe<Scalars['BigInt']>;
  ttl_lt?: Maybe<Scalars['BigInt']>;
  ttl_gte?: Maybe<Scalars['BigInt']>;
  ttl_lte?: Maybe<Scalars['BigInt']>;
  ttl_in?: Maybe<Array<Scalars['BigInt']>>;
  ttl_not_in?: Maybe<Array<Scalars['BigInt']>>;
  isMigrated?: Maybe<Scalars['Boolean']>;
  isMigrated_not?: Maybe<Scalars['Boolean']>;
  isMigrated_in?: Maybe<Array<Scalars['Boolean']>>;
  isMigrated_not_in?: Maybe<Array<Scalars['Boolean']>>;
  createdAt?: Maybe<Scalars['BigInt']>;
  createdAt_not?: Maybe<Scalars['BigInt']>;
  createdAt_gt?: Maybe<Scalars['BigInt']>;
  createdAt_lt?: Maybe<Scalars['BigInt']>;
  createdAt_gte?: Maybe<Scalars['BigInt']>;
  createdAt_lte?: Maybe<Scalars['BigInt']>;
  createdAt_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Domain_OrderBy {
  Id = 'id',
  Name = 'name',
  LabelName = 'labelName',
  Labelhash = 'labelhash',
  Parent = 'parent',
  Subdomains = 'subdomains',
  ResolvedAddress = 'resolvedAddress',
  Owner = 'owner',
  Resolver = 'resolver',
  Ttl = 'ttl',
  IsMigrated = 'isMigrated',
  CreatedAt = 'createdAt',
  Events = 'events'
}

export type InterfaceChanged = ResolverEvent & {
  __typename?: 'InterfaceChanged';
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  interfaceID: Scalars['Bytes'];
  implementer: Scalars['Bytes'];
};

export type InterfaceChanged_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  resolver?: Maybe<Scalars['String']>;
  resolver_not?: Maybe<Scalars['String']>;
  resolver_gt?: Maybe<Scalars['String']>;
  resolver_lt?: Maybe<Scalars['String']>;
  resolver_gte?: Maybe<Scalars['String']>;
  resolver_lte?: Maybe<Scalars['String']>;
  resolver_in?: Maybe<Array<Scalars['String']>>;
  resolver_not_in?: Maybe<Array<Scalars['String']>>;
  resolver_contains?: Maybe<Scalars['String']>;
  resolver_not_contains?: Maybe<Scalars['String']>;
  resolver_starts_with?: Maybe<Scalars['String']>;
  resolver_not_starts_with?: Maybe<Scalars['String']>;
  resolver_ends_with?: Maybe<Scalars['String']>;
  resolver_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
  interfaceID?: Maybe<Scalars['Bytes']>;
  interfaceID_not?: Maybe<Scalars['Bytes']>;
  interfaceID_in?: Maybe<Array<Scalars['Bytes']>>;
  interfaceID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  interfaceID_contains?: Maybe<Scalars['Bytes']>;
  interfaceID_not_contains?: Maybe<Scalars['Bytes']>;
  implementer?: Maybe<Scalars['Bytes']>;
  implementer_not?: Maybe<Scalars['Bytes']>;
  implementer_in?: Maybe<Array<Scalars['Bytes']>>;
  implementer_not_in?: Maybe<Array<Scalars['Bytes']>>;
  implementer_contains?: Maybe<Scalars['Bytes']>;
  implementer_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum InterfaceChanged_OrderBy {
  Id = 'id',
  Resolver = 'resolver',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  InterfaceId = 'interfaceID',
  Implementer = 'implementer'
}

export type MulticoinAddrChanged = ResolverEvent & {
  __typename?: 'MulticoinAddrChanged';
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  coinType: Scalars['BigInt'];
  addr: Scalars['Bytes'];
};

export type MulticoinAddrChanged_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  resolver?: Maybe<Scalars['String']>;
  resolver_not?: Maybe<Scalars['String']>;
  resolver_gt?: Maybe<Scalars['String']>;
  resolver_lt?: Maybe<Scalars['String']>;
  resolver_gte?: Maybe<Scalars['String']>;
  resolver_lte?: Maybe<Scalars['String']>;
  resolver_in?: Maybe<Array<Scalars['String']>>;
  resolver_not_in?: Maybe<Array<Scalars['String']>>;
  resolver_contains?: Maybe<Scalars['String']>;
  resolver_not_contains?: Maybe<Scalars['String']>;
  resolver_starts_with?: Maybe<Scalars['String']>;
  resolver_not_starts_with?: Maybe<Scalars['String']>;
  resolver_ends_with?: Maybe<Scalars['String']>;
  resolver_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
  coinType?: Maybe<Scalars['BigInt']>;
  coinType_not?: Maybe<Scalars['BigInt']>;
  coinType_gt?: Maybe<Scalars['BigInt']>;
  coinType_lt?: Maybe<Scalars['BigInt']>;
  coinType_gte?: Maybe<Scalars['BigInt']>;
  coinType_lte?: Maybe<Scalars['BigInt']>;
  coinType_in?: Maybe<Array<Scalars['BigInt']>>;
  coinType_not_in?: Maybe<Array<Scalars['BigInt']>>;
  addr?: Maybe<Scalars['Bytes']>;
  addr_not?: Maybe<Scalars['Bytes']>;
  addr_in?: Maybe<Array<Scalars['Bytes']>>;
  addr_not_in?: Maybe<Array<Scalars['Bytes']>>;
  addr_contains?: Maybe<Scalars['Bytes']>;
  addr_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum MulticoinAddrChanged_OrderBy {
  Id = 'id',
  Resolver = 'resolver',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  CoinType = 'coinType',
  Addr = 'addr'
}

export type NameChanged = ResolverEvent & {
  __typename?: 'NameChanged';
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  name: Scalars['String'];
};

export type NameChanged_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  resolver?: Maybe<Scalars['String']>;
  resolver_not?: Maybe<Scalars['String']>;
  resolver_gt?: Maybe<Scalars['String']>;
  resolver_lt?: Maybe<Scalars['String']>;
  resolver_gte?: Maybe<Scalars['String']>;
  resolver_lte?: Maybe<Scalars['String']>;
  resolver_in?: Maybe<Array<Scalars['String']>>;
  resolver_not_in?: Maybe<Array<Scalars['String']>>;
  resolver_contains?: Maybe<Scalars['String']>;
  resolver_not_contains?: Maybe<Scalars['String']>;
  resolver_starts_with?: Maybe<Scalars['String']>;
  resolver_not_starts_with?: Maybe<Scalars['String']>;
  resolver_ends_with?: Maybe<Scalars['String']>;
  resolver_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
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
};

export enum NameChanged_OrderBy {
  Id = 'id',
  Resolver = 'resolver',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  Name = 'name'
}

export type NameRegistered = RegistrationEvent & {
  __typename?: 'NameRegistered';
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  registrant: Account;
  expiryDate: Scalars['BigInt'];
};

export type NameRegistered_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  registration?: Maybe<Scalars['String']>;
  registration_not?: Maybe<Scalars['String']>;
  registration_gt?: Maybe<Scalars['String']>;
  registration_lt?: Maybe<Scalars['String']>;
  registration_gte?: Maybe<Scalars['String']>;
  registration_lte?: Maybe<Scalars['String']>;
  registration_in?: Maybe<Array<Scalars['String']>>;
  registration_not_in?: Maybe<Array<Scalars['String']>>;
  registration_contains?: Maybe<Scalars['String']>;
  registration_not_contains?: Maybe<Scalars['String']>;
  registration_starts_with?: Maybe<Scalars['String']>;
  registration_not_starts_with?: Maybe<Scalars['String']>;
  registration_ends_with?: Maybe<Scalars['String']>;
  registration_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
  registrant?: Maybe<Scalars['String']>;
  registrant_not?: Maybe<Scalars['String']>;
  registrant_gt?: Maybe<Scalars['String']>;
  registrant_lt?: Maybe<Scalars['String']>;
  registrant_gte?: Maybe<Scalars['String']>;
  registrant_lte?: Maybe<Scalars['String']>;
  registrant_in?: Maybe<Array<Scalars['String']>>;
  registrant_not_in?: Maybe<Array<Scalars['String']>>;
  registrant_contains?: Maybe<Scalars['String']>;
  registrant_not_contains?: Maybe<Scalars['String']>;
  registrant_starts_with?: Maybe<Scalars['String']>;
  registrant_not_starts_with?: Maybe<Scalars['String']>;
  registrant_ends_with?: Maybe<Scalars['String']>;
  registrant_not_ends_with?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Scalars['BigInt']>;
  expiryDate_not?: Maybe<Scalars['BigInt']>;
  expiryDate_gt?: Maybe<Scalars['BigInt']>;
  expiryDate_lt?: Maybe<Scalars['BigInt']>;
  expiryDate_gte?: Maybe<Scalars['BigInt']>;
  expiryDate_lte?: Maybe<Scalars['BigInt']>;
  expiryDate_in?: Maybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum NameRegistered_OrderBy {
  Id = 'id',
  Registration = 'registration',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  Registrant = 'registrant',
  ExpiryDate = 'expiryDate'
}

export type NameRenewed = RegistrationEvent & {
  __typename?: 'NameRenewed';
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  expiryDate: Scalars['BigInt'];
};

export type NameRenewed_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  registration?: Maybe<Scalars['String']>;
  registration_not?: Maybe<Scalars['String']>;
  registration_gt?: Maybe<Scalars['String']>;
  registration_lt?: Maybe<Scalars['String']>;
  registration_gte?: Maybe<Scalars['String']>;
  registration_lte?: Maybe<Scalars['String']>;
  registration_in?: Maybe<Array<Scalars['String']>>;
  registration_not_in?: Maybe<Array<Scalars['String']>>;
  registration_contains?: Maybe<Scalars['String']>;
  registration_not_contains?: Maybe<Scalars['String']>;
  registration_starts_with?: Maybe<Scalars['String']>;
  registration_not_starts_with?: Maybe<Scalars['String']>;
  registration_ends_with?: Maybe<Scalars['String']>;
  registration_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
  expiryDate?: Maybe<Scalars['BigInt']>;
  expiryDate_not?: Maybe<Scalars['BigInt']>;
  expiryDate_gt?: Maybe<Scalars['BigInt']>;
  expiryDate_lt?: Maybe<Scalars['BigInt']>;
  expiryDate_gte?: Maybe<Scalars['BigInt']>;
  expiryDate_lte?: Maybe<Scalars['BigInt']>;
  expiryDate_in?: Maybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum NameRenewed_OrderBy {
  Id = 'id',
  Registration = 'registration',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  ExpiryDate = 'expiryDate'
}

export type NameTransferred = RegistrationEvent & {
  __typename?: 'NameTransferred';
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  newOwner: Account;
};

export type NameTransferred_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  registration?: Maybe<Scalars['String']>;
  registration_not?: Maybe<Scalars['String']>;
  registration_gt?: Maybe<Scalars['String']>;
  registration_lt?: Maybe<Scalars['String']>;
  registration_gte?: Maybe<Scalars['String']>;
  registration_lte?: Maybe<Scalars['String']>;
  registration_in?: Maybe<Array<Scalars['String']>>;
  registration_not_in?: Maybe<Array<Scalars['String']>>;
  registration_contains?: Maybe<Scalars['String']>;
  registration_not_contains?: Maybe<Scalars['String']>;
  registration_starts_with?: Maybe<Scalars['String']>;
  registration_not_starts_with?: Maybe<Scalars['String']>;
  registration_ends_with?: Maybe<Scalars['String']>;
  registration_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
  newOwner?: Maybe<Scalars['String']>;
  newOwner_not?: Maybe<Scalars['String']>;
  newOwner_gt?: Maybe<Scalars['String']>;
  newOwner_lt?: Maybe<Scalars['String']>;
  newOwner_gte?: Maybe<Scalars['String']>;
  newOwner_lte?: Maybe<Scalars['String']>;
  newOwner_in?: Maybe<Array<Scalars['String']>>;
  newOwner_not_in?: Maybe<Array<Scalars['String']>>;
  newOwner_contains?: Maybe<Scalars['String']>;
  newOwner_not_contains?: Maybe<Scalars['String']>;
  newOwner_starts_with?: Maybe<Scalars['String']>;
  newOwner_not_starts_with?: Maybe<Scalars['String']>;
  newOwner_ends_with?: Maybe<Scalars['String']>;
  newOwner_not_ends_with?: Maybe<Scalars['String']>;
};

export enum NameTransferred_OrderBy {
  Id = 'id',
  Registration = 'registration',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  NewOwner = 'newOwner'
}

export type NewOwner = DomainEvent & {
  __typename?: 'NewOwner';
  id: Scalars['ID'];
  parentDomain: Domain;
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  owner: Account;
};

export type NewOwner_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  parentDomain?: Maybe<Scalars['String']>;
  parentDomain_not?: Maybe<Scalars['String']>;
  parentDomain_gt?: Maybe<Scalars['String']>;
  parentDomain_lt?: Maybe<Scalars['String']>;
  parentDomain_gte?: Maybe<Scalars['String']>;
  parentDomain_lte?: Maybe<Scalars['String']>;
  parentDomain_in?: Maybe<Array<Scalars['String']>>;
  parentDomain_not_in?: Maybe<Array<Scalars['String']>>;
  parentDomain_contains?: Maybe<Scalars['String']>;
  parentDomain_not_contains?: Maybe<Scalars['String']>;
  parentDomain_starts_with?: Maybe<Scalars['String']>;
  parentDomain_not_starts_with?: Maybe<Scalars['String']>;
  parentDomain_ends_with?: Maybe<Scalars['String']>;
  parentDomain_not_ends_with?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  domain_not?: Maybe<Scalars['String']>;
  domain_gt?: Maybe<Scalars['String']>;
  domain_lt?: Maybe<Scalars['String']>;
  domain_gte?: Maybe<Scalars['String']>;
  domain_lte?: Maybe<Scalars['String']>;
  domain_in?: Maybe<Array<Scalars['String']>>;
  domain_not_in?: Maybe<Array<Scalars['String']>>;
  domain_contains?: Maybe<Scalars['String']>;
  domain_not_contains?: Maybe<Scalars['String']>;
  domain_starts_with?: Maybe<Scalars['String']>;
  domain_not_starts_with?: Maybe<Scalars['String']>;
  domain_ends_with?: Maybe<Scalars['String']>;
  domain_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
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
};

export enum NewOwner_OrderBy {
  Id = 'id',
  ParentDomain = 'parentDomain',
  Domain = 'domain',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  Owner = 'owner'
}

export type NewResolver = DomainEvent & {
  __typename?: 'NewResolver';
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  resolver: Resolver;
};

export type NewResolver_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  domain?: Maybe<Scalars['String']>;
  domain_not?: Maybe<Scalars['String']>;
  domain_gt?: Maybe<Scalars['String']>;
  domain_lt?: Maybe<Scalars['String']>;
  domain_gte?: Maybe<Scalars['String']>;
  domain_lte?: Maybe<Scalars['String']>;
  domain_in?: Maybe<Array<Scalars['String']>>;
  domain_not_in?: Maybe<Array<Scalars['String']>>;
  domain_contains?: Maybe<Scalars['String']>;
  domain_not_contains?: Maybe<Scalars['String']>;
  domain_starts_with?: Maybe<Scalars['String']>;
  domain_not_starts_with?: Maybe<Scalars['String']>;
  domain_ends_with?: Maybe<Scalars['String']>;
  domain_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
  resolver?: Maybe<Scalars['String']>;
  resolver_not?: Maybe<Scalars['String']>;
  resolver_gt?: Maybe<Scalars['String']>;
  resolver_lt?: Maybe<Scalars['String']>;
  resolver_gte?: Maybe<Scalars['String']>;
  resolver_lte?: Maybe<Scalars['String']>;
  resolver_in?: Maybe<Array<Scalars['String']>>;
  resolver_not_in?: Maybe<Array<Scalars['String']>>;
  resolver_contains?: Maybe<Scalars['String']>;
  resolver_not_contains?: Maybe<Scalars['String']>;
  resolver_starts_with?: Maybe<Scalars['String']>;
  resolver_not_starts_with?: Maybe<Scalars['String']>;
  resolver_ends_with?: Maybe<Scalars['String']>;
  resolver_not_ends_with?: Maybe<Scalars['String']>;
};

export enum NewResolver_OrderBy {
  Id = 'id',
  Domain = 'domain',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  Resolver = 'resolver'
}

export type NewTtl = DomainEvent & {
  __typename?: 'NewTTL';
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  ttl: Scalars['BigInt'];
};

export type NewTtl_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  domain?: Maybe<Scalars['String']>;
  domain_not?: Maybe<Scalars['String']>;
  domain_gt?: Maybe<Scalars['String']>;
  domain_lt?: Maybe<Scalars['String']>;
  domain_gte?: Maybe<Scalars['String']>;
  domain_lte?: Maybe<Scalars['String']>;
  domain_in?: Maybe<Array<Scalars['String']>>;
  domain_not_in?: Maybe<Array<Scalars['String']>>;
  domain_contains?: Maybe<Scalars['String']>;
  domain_not_contains?: Maybe<Scalars['String']>;
  domain_starts_with?: Maybe<Scalars['String']>;
  domain_not_starts_with?: Maybe<Scalars['String']>;
  domain_ends_with?: Maybe<Scalars['String']>;
  domain_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
  ttl?: Maybe<Scalars['BigInt']>;
  ttl_not?: Maybe<Scalars['BigInt']>;
  ttl_gt?: Maybe<Scalars['BigInt']>;
  ttl_lt?: Maybe<Scalars['BigInt']>;
  ttl_gte?: Maybe<Scalars['BigInt']>;
  ttl_lte?: Maybe<Scalars['BigInt']>;
  ttl_in?: Maybe<Array<Scalars['BigInt']>>;
  ttl_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum NewTtl_OrderBy {
  Id = 'id',
  Domain = 'domain',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  Ttl = 'ttl'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PubkeyChanged = ResolverEvent & {
  __typename?: 'PubkeyChanged';
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  x: Scalars['Bytes'];
  y: Scalars['Bytes'];
};

export type PubkeyChanged_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  resolver?: Maybe<Scalars['String']>;
  resolver_not?: Maybe<Scalars['String']>;
  resolver_gt?: Maybe<Scalars['String']>;
  resolver_lt?: Maybe<Scalars['String']>;
  resolver_gte?: Maybe<Scalars['String']>;
  resolver_lte?: Maybe<Scalars['String']>;
  resolver_in?: Maybe<Array<Scalars['String']>>;
  resolver_not_in?: Maybe<Array<Scalars['String']>>;
  resolver_contains?: Maybe<Scalars['String']>;
  resolver_not_contains?: Maybe<Scalars['String']>;
  resolver_starts_with?: Maybe<Scalars['String']>;
  resolver_not_starts_with?: Maybe<Scalars['String']>;
  resolver_ends_with?: Maybe<Scalars['String']>;
  resolver_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
  x?: Maybe<Scalars['Bytes']>;
  x_not?: Maybe<Scalars['Bytes']>;
  x_in?: Maybe<Array<Scalars['Bytes']>>;
  x_not_in?: Maybe<Array<Scalars['Bytes']>>;
  x_contains?: Maybe<Scalars['Bytes']>;
  x_not_contains?: Maybe<Scalars['Bytes']>;
  y?: Maybe<Scalars['Bytes']>;
  y_not?: Maybe<Scalars['Bytes']>;
  y_in?: Maybe<Array<Scalars['Bytes']>>;
  y_not_in?: Maybe<Array<Scalars['Bytes']>>;
  y_contains?: Maybe<Scalars['Bytes']>;
  y_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum PubkeyChanged_OrderBy {
  Id = 'id',
  Resolver = 'resolver',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  X = 'x',
  Y = 'y'
}

export type Query = {
  __typename?: 'Query';
  domain?: Maybe<Domain>;
  domains: Array<Domain>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  newOwner?: Maybe<NewOwner>;
  newOwners: Array<NewOwner>;
  newResolver?: Maybe<NewResolver>;
  newResolvers: Array<NewResolver>;
  newTTL?: Maybe<NewTtl>;
  newTTLs: Array<NewTtl>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  registration?: Maybe<Registration>;
  registrations: Array<Registration>;
  nameRegistered?: Maybe<NameRegistered>;
  nameRegistereds: Array<NameRegistered>;
  nameRenewed?: Maybe<NameRenewed>;
  nameReneweds: Array<NameRenewed>;
  nameTransferred?: Maybe<NameTransferred>;
  nameTransferreds: Array<NameTransferred>;
  resolver?: Maybe<Resolver>;
  resolvers: Array<Resolver>;
  addrChanged?: Maybe<AddrChanged>;
  addrChangeds: Array<AddrChanged>;
  multicoinAddrChanged?: Maybe<MulticoinAddrChanged>;
  multicoinAddrChangeds: Array<MulticoinAddrChanged>;
  nameChanged?: Maybe<NameChanged>;
  nameChangeds: Array<NameChanged>;
  abiChanged?: Maybe<AbiChanged>;
  abiChangeds: Array<AbiChanged>;
  pubkeyChanged?: Maybe<PubkeyChanged>;
  pubkeyChangeds: Array<PubkeyChanged>;
  textChanged?: Maybe<TextChanged>;
  textChangeds: Array<TextChanged>;
  contenthashChanged?: Maybe<ContenthashChanged>;
  contenthashChangeds: Array<ContenthashChanged>;
  interfaceChanged?: Maybe<InterfaceChanged>;
  interfaceChangeds: Array<InterfaceChanged>;
  authorisationChanged?: Maybe<AuthorisationChanged>;
  authorisationChangeds: Array<AuthorisationChanged>;
  domainEvent?: Maybe<DomainEvent>;
  domainEvents: Array<DomainEvent>;
  registrationEvent?: Maybe<RegistrationEvent>;
  registrationEvents: Array<RegistrationEvent>;
  resolverEvent?: Maybe<ResolverEvent>;
  resolverEvents: Array<ResolverEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryDomainArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDomainsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Domain_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Domain_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transfer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transfer_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNewOwnerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNewOwnersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NewOwner_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NewOwner_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNewResolverArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNewResolversArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NewResolver_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NewResolver_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNewTtlArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNewTtLsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NewTtl_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NewTtl_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Account_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Account_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRegistrationArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRegistrationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Registration_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Registration_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNameRegisteredArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNameRegisteredsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NameRegistered_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NameRegistered_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNameRenewedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNameRenewedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NameRenewed_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NameRenewed_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNameTransferredArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNameTransferredsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NameTransferred_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NameTransferred_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryResolverArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryResolversArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Resolver_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Resolver_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAddrChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAddrChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AddrChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AddrChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMulticoinAddrChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMulticoinAddrChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MulticoinAddrChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MulticoinAddrChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNameChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNameChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NameChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NameChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAbiChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAbiChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AbiChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AbiChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPubkeyChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPubkeyChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PubkeyChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PubkeyChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTextChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTextChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TextChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TextChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContenthashChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContenthashChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ContenthashChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ContenthashChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryInterfaceChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryInterfaceChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InterfaceChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InterfaceChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuthorisationChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuthorisationChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AuthorisationChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AuthorisationChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDomainEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDomainEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DomainEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DomainEvent_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRegistrationEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRegistrationEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RegistrationEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RegistrationEvent_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryResolverEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryResolverEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ResolverEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ResolverEvent_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Registration = {
  __typename?: 'Registration';
  id: Scalars['ID'];
  domain?: Maybe<Domain>;
  registrationDate: Scalars['BigInt'];
  expiryDate: Scalars['BigInt'];
  cost?: Maybe<Scalars['BigInt']>;
  registrant: Account;
  labelName?: Maybe<Scalars['String']>;
  events: Array<RegistrationEvent>;
};


export type RegistrationEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RegistrationEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RegistrationEvent_Filter>;
};

export type RegistrationEvent = {
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
};

export type RegistrationEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  registration?: Maybe<Scalars['String']>;
  registration_not?: Maybe<Scalars['String']>;
  registration_gt?: Maybe<Scalars['String']>;
  registration_lt?: Maybe<Scalars['String']>;
  registration_gte?: Maybe<Scalars['String']>;
  registration_lte?: Maybe<Scalars['String']>;
  registration_in?: Maybe<Array<Scalars['String']>>;
  registration_not_in?: Maybe<Array<Scalars['String']>>;
  registration_contains?: Maybe<Scalars['String']>;
  registration_not_contains?: Maybe<Scalars['String']>;
  registration_starts_with?: Maybe<Scalars['String']>;
  registration_not_starts_with?: Maybe<Scalars['String']>;
  registration_ends_with?: Maybe<Scalars['String']>;
  registration_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum RegistrationEvent_OrderBy {
  Id = 'id',
  Registration = 'registration',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID'
}

export type Registration_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  domain?: Maybe<Scalars['String']>;
  domain_not?: Maybe<Scalars['String']>;
  domain_gt?: Maybe<Scalars['String']>;
  domain_lt?: Maybe<Scalars['String']>;
  domain_gte?: Maybe<Scalars['String']>;
  domain_lte?: Maybe<Scalars['String']>;
  domain_in?: Maybe<Array<Scalars['String']>>;
  domain_not_in?: Maybe<Array<Scalars['String']>>;
  domain_contains?: Maybe<Scalars['String']>;
  domain_not_contains?: Maybe<Scalars['String']>;
  domain_starts_with?: Maybe<Scalars['String']>;
  domain_not_starts_with?: Maybe<Scalars['String']>;
  domain_ends_with?: Maybe<Scalars['String']>;
  domain_not_ends_with?: Maybe<Scalars['String']>;
  registrationDate?: Maybe<Scalars['BigInt']>;
  registrationDate_not?: Maybe<Scalars['BigInt']>;
  registrationDate_gt?: Maybe<Scalars['BigInt']>;
  registrationDate_lt?: Maybe<Scalars['BigInt']>;
  registrationDate_gte?: Maybe<Scalars['BigInt']>;
  registrationDate_lte?: Maybe<Scalars['BigInt']>;
  registrationDate_in?: Maybe<Array<Scalars['BigInt']>>;
  registrationDate_not_in?: Maybe<Array<Scalars['BigInt']>>;
  expiryDate?: Maybe<Scalars['BigInt']>;
  expiryDate_not?: Maybe<Scalars['BigInt']>;
  expiryDate_gt?: Maybe<Scalars['BigInt']>;
  expiryDate_lt?: Maybe<Scalars['BigInt']>;
  expiryDate_gte?: Maybe<Scalars['BigInt']>;
  expiryDate_lte?: Maybe<Scalars['BigInt']>;
  expiryDate_in?: Maybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: Maybe<Array<Scalars['BigInt']>>;
  cost?: Maybe<Scalars['BigInt']>;
  cost_not?: Maybe<Scalars['BigInt']>;
  cost_gt?: Maybe<Scalars['BigInt']>;
  cost_lt?: Maybe<Scalars['BigInt']>;
  cost_gte?: Maybe<Scalars['BigInt']>;
  cost_lte?: Maybe<Scalars['BigInt']>;
  cost_in?: Maybe<Array<Scalars['BigInt']>>;
  cost_not_in?: Maybe<Array<Scalars['BigInt']>>;
  registrant?: Maybe<Scalars['String']>;
  registrant_not?: Maybe<Scalars['String']>;
  registrant_gt?: Maybe<Scalars['String']>;
  registrant_lt?: Maybe<Scalars['String']>;
  registrant_gte?: Maybe<Scalars['String']>;
  registrant_lte?: Maybe<Scalars['String']>;
  registrant_in?: Maybe<Array<Scalars['String']>>;
  registrant_not_in?: Maybe<Array<Scalars['String']>>;
  registrant_contains?: Maybe<Scalars['String']>;
  registrant_not_contains?: Maybe<Scalars['String']>;
  registrant_starts_with?: Maybe<Scalars['String']>;
  registrant_not_starts_with?: Maybe<Scalars['String']>;
  registrant_ends_with?: Maybe<Scalars['String']>;
  registrant_not_ends_with?: Maybe<Scalars['String']>;
  labelName?: Maybe<Scalars['String']>;
  labelName_not?: Maybe<Scalars['String']>;
  labelName_gt?: Maybe<Scalars['String']>;
  labelName_lt?: Maybe<Scalars['String']>;
  labelName_gte?: Maybe<Scalars['String']>;
  labelName_lte?: Maybe<Scalars['String']>;
  labelName_in?: Maybe<Array<Scalars['String']>>;
  labelName_not_in?: Maybe<Array<Scalars['String']>>;
  labelName_contains?: Maybe<Scalars['String']>;
  labelName_not_contains?: Maybe<Scalars['String']>;
  labelName_starts_with?: Maybe<Scalars['String']>;
  labelName_not_starts_with?: Maybe<Scalars['String']>;
  labelName_ends_with?: Maybe<Scalars['String']>;
  labelName_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Registration_OrderBy {
  Id = 'id',
  Domain = 'domain',
  RegistrationDate = 'registrationDate',
  ExpiryDate = 'expiryDate',
  Cost = 'cost',
  Registrant = 'registrant',
  LabelName = 'labelName',
  Events = 'events'
}

export type Resolver = {
  __typename?: 'Resolver';
  id: Scalars['ID'];
  domain?: Maybe<Domain>;
  address: Scalars['Bytes'];
  addr?: Maybe<Account>;
  contentHash?: Maybe<Scalars['Bytes']>;
  texts?: Maybe<Array<Scalars['String']>>;
  coinTypes?: Maybe<Array<Scalars['BigInt']>>;
  events: Array<ResolverEvent>;
};


export type ResolverEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ResolverEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ResolverEvent_Filter>;
};

export type ResolverEvent = {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
};

export type ResolverEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  resolver?: Maybe<Scalars['String']>;
  resolver_not?: Maybe<Scalars['String']>;
  resolver_gt?: Maybe<Scalars['String']>;
  resolver_lt?: Maybe<Scalars['String']>;
  resolver_gte?: Maybe<Scalars['String']>;
  resolver_lte?: Maybe<Scalars['String']>;
  resolver_in?: Maybe<Array<Scalars['String']>>;
  resolver_not_in?: Maybe<Array<Scalars['String']>>;
  resolver_contains?: Maybe<Scalars['String']>;
  resolver_not_contains?: Maybe<Scalars['String']>;
  resolver_starts_with?: Maybe<Scalars['String']>;
  resolver_not_starts_with?: Maybe<Scalars['String']>;
  resolver_ends_with?: Maybe<Scalars['String']>;
  resolver_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum ResolverEvent_OrderBy {
  Id = 'id',
  Resolver = 'resolver',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID'
}

export type Resolver_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  domain?: Maybe<Scalars['String']>;
  domain_not?: Maybe<Scalars['String']>;
  domain_gt?: Maybe<Scalars['String']>;
  domain_lt?: Maybe<Scalars['String']>;
  domain_gte?: Maybe<Scalars['String']>;
  domain_lte?: Maybe<Scalars['String']>;
  domain_in?: Maybe<Array<Scalars['String']>>;
  domain_not_in?: Maybe<Array<Scalars['String']>>;
  domain_contains?: Maybe<Scalars['String']>;
  domain_not_contains?: Maybe<Scalars['String']>;
  domain_starts_with?: Maybe<Scalars['String']>;
  domain_not_starts_with?: Maybe<Scalars['String']>;
  domain_ends_with?: Maybe<Scalars['String']>;
  domain_not_ends_with?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  addr?: Maybe<Scalars['String']>;
  addr_not?: Maybe<Scalars['String']>;
  addr_gt?: Maybe<Scalars['String']>;
  addr_lt?: Maybe<Scalars['String']>;
  addr_gte?: Maybe<Scalars['String']>;
  addr_lte?: Maybe<Scalars['String']>;
  addr_in?: Maybe<Array<Scalars['String']>>;
  addr_not_in?: Maybe<Array<Scalars['String']>>;
  addr_contains?: Maybe<Scalars['String']>;
  addr_not_contains?: Maybe<Scalars['String']>;
  addr_starts_with?: Maybe<Scalars['String']>;
  addr_not_starts_with?: Maybe<Scalars['String']>;
  addr_ends_with?: Maybe<Scalars['String']>;
  addr_not_ends_with?: Maybe<Scalars['String']>;
  contentHash?: Maybe<Scalars['Bytes']>;
  contentHash_not?: Maybe<Scalars['Bytes']>;
  contentHash_in?: Maybe<Array<Scalars['Bytes']>>;
  contentHash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  contentHash_contains?: Maybe<Scalars['Bytes']>;
  contentHash_not_contains?: Maybe<Scalars['Bytes']>;
  texts?: Maybe<Array<Scalars['String']>>;
  texts_not?: Maybe<Array<Scalars['String']>>;
  texts_contains?: Maybe<Array<Scalars['String']>>;
  texts_not_contains?: Maybe<Array<Scalars['String']>>;
  coinTypes?: Maybe<Array<Scalars['BigInt']>>;
  coinTypes_not?: Maybe<Array<Scalars['BigInt']>>;
  coinTypes_contains?: Maybe<Array<Scalars['BigInt']>>;
  coinTypes_not_contains?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Resolver_OrderBy {
  Id = 'id',
  Domain = 'domain',
  Address = 'address',
  Addr = 'addr',
  ContentHash = 'contentHash',
  Texts = 'texts',
  CoinTypes = 'coinTypes',
  Events = 'events'
}

export type Subscription = {
  __typename?: 'Subscription';
  domain?: Maybe<Domain>;
  domains: Array<Domain>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  newOwner?: Maybe<NewOwner>;
  newOwners: Array<NewOwner>;
  newResolver?: Maybe<NewResolver>;
  newResolvers: Array<NewResolver>;
  newTTL?: Maybe<NewTtl>;
  newTTLs: Array<NewTtl>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  registration?: Maybe<Registration>;
  registrations: Array<Registration>;
  nameRegistered?: Maybe<NameRegistered>;
  nameRegistereds: Array<NameRegistered>;
  nameRenewed?: Maybe<NameRenewed>;
  nameReneweds: Array<NameRenewed>;
  nameTransferred?: Maybe<NameTransferred>;
  nameTransferreds: Array<NameTransferred>;
  resolver?: Maybe<Resolver>;
  resolvers: Array<Resolver>;
  addrChanged?: Maybe<AddrChanged>;
  addrChangeds: Array<AddrChanged>;
  multicoinAddrChanged?: Maybe<MulticoinAddrChanged>;
  multicoinAddrChangeds: Array<MulticoinAddrChanged>;
  nameChanged?: Maybe<NameChanged>;
  nameChangeds: Array<NameChanged>;
  abiChanged?: Maybe<AbiChanged>;
  abiChangeds: Array<AbiChanged>;
  pubkeyChanged?: Maybe<PubkeyChanged>;
  pubkeyChangeds: Array<PubkeyChanged>;
  textChanged?: Maybe<TextChanged>;
  textChangeds: Array<TextChanged>;
  contenthashChanged?: Maybe<ContenthashChanged>;
  contenthashChangeds: Array<ContenthashChanged>;
  interfaceChanged?: Maybe<InterfaceChanged>;
  interfaceChangeds: Array<InterfaceChanged>;
  authorisationChanged?: Maybe<AuthorisationChanged>;
  authorisationChangeds: Array<AuthorisationChanged>;
  domainEvent?: Maybe<DomainEvent>;
  domainEvents: Array<DomainEvent>;
  registrationEvent?: Maybe<RegistrationEvent>;
  registrationEvents: Array<RegistrationEvent>;
  resolverEvent?: Maybe<ResolverEvent>;
  resolverEvents: Array<ResolverEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionDomainArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDomainsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Domain_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Domain_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransferArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transfer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transfer_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNewOwnerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNewOwnersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NewOwner_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NewOwner_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNewResolverArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNewResolversArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NewResolver_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NewResolver_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNewTtlArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNewTtLsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NewTtl_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NewTtl_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Account_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Account_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRegistrationArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRegistrationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Registration_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Registration_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNameRegisteredArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNameRegisteredsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NameRegistered_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NameRegistered_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNameRenewedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNameRenewedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NameRenewed_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NameRenewed_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNameTransferredArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNameTransferredsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NameTransferred_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NameTransferred_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionResolverArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionResolversArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Resolver_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Resolver_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAddrChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAddrChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AddrChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AddrChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMulticoinAddrChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMulticoinAddrChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MulticoinAddrChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MulticoinAddrChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNameChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNameChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NameChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NameChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAbiChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAbiChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AbiChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AbiChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPubkeyChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPubkeyChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PubkeyChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PubkeyChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTextChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTextChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TextChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TextChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContenthashChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContenthashChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ContenthashChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ContenthashChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionInterfaceChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionInterfaceChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InterfaceChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InterfaceChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAuthorisationChangedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAuthorisationChangedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AuthorisationChanged_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AuthorisationChanged_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDomainEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDomainEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DomainEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DomainEvent_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRegistrationEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRegistrationEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RegistrationEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RegistrationEvent_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionResolverEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionResolverEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ResolverEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ResolverEvent_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type TextChanged = ResolverEvent & {
  __typename?: 'TextChanged';
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  key: Scalars['String'];
};

export type TextChanged_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  resolver?: Maybe<Scalars['String']>;
  resolver_not?: Maybe<Scalars['String']>;
  resolver_gt?: Maybe<Scalars['String']>;
  resolver_lt?: Maybe<Scalars['String']>;
  resolver_gte?: Maybe<Scalars['String']>;
  resolver_lte?: Maybe<Scalars['String']>;
  resolver_in?: Maybe<Array<Scalars['String']>>;
  resolver_not_in?: Maybe<Array<Scalars['String']>>;
  resolver_contains?: Maybe<Scalars['String']>;
  resolver_not_contains?: Maybe<Scalars['String']>;
  resolver_starts_with?: Maybe<Scalars['String']>;
  resolver_not_starts_with?: Maybe<Scalars['String']>;
  resolver_ends_with?: Maybe<Scalars['String']>;
  resolver_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
  key?: Maybe<Scalars['String']>;
  key_not?: Maybe<Scalars['String']>;
  key_gt?: Maybe<Scalars['String']>;
  key_lt?: Maybe<Scalars['String']>;
  key_gte?: Maybe<Scalars['String']>;
  key_lte?: Maybe<Scalars['String']>;
  key_in?: Maybe<Array<Scalars['String']>>;
  key_not_in?: Maybe<Array<Scalars['String']>>;
  key_contains?: Maybe<Scalars['String']>;
  key_not_contains?: Maybe<Scalars['String']>;
  key_starts_with?: Maybe<Scalars['String']>;
  key_not_starts_with?: Maybe<Scalars['String']>;
  key_ends_with?: Maybe<Scalars['String']>;
  key_not_ends_with?: Maybe<Scalars['String']>;
};

export enum TextChanged_OrderBy {
  Id = 'id',
  Resolver = 'resolver',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  Key = 'key'
}

export type Transfer = DomainEvent & {
  __typename?: 'Transfer';
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  owner: Account;
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
  domain?: Maybe<Scalars['String']>;
  domain_not?: Maybe<Scalars['String']>;
  domain_gt?: Maybe<Scalars['String']>;
  domain_lt?: Maybe<Scalars['String']>;
  domain_gte?: Maybe<Scalars['String']>;
  domain_lte?: Maybe<Scalars['String']>;
  domain_in?: Maybe<Array<Scalars['String']>>;
  domain_not_in?: Maybe<Array<Scalars['String']>>;
  domain_contains?: Maybe<Scalars['String']>;
  domain_not_contains?: Maybe<Scalars['String']>;
  domain_starts_with?: Maybe<Scalars['String']>;
  domain_not_starts_with?: Maybe<Scalars['String']>;
  domain_ends_with?: Maybe<Scalars['String']>;
  domain_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Int']>;
  blockNumber_not?: Maybe<Scalars['Int']>;
  blockNumber_gt?: Maybe<Scalars['Int']>;
  blockNumber_lt?: Maybe<Scalars['Int']>;
  blockNumber_gte?: Maybe<Scalars['Int']>;
  blockNumber_lte?: Maybe<Scalars['Int']>;
  blockNumber_in?: Maybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  transactionID?: Maybe<Scalars['Bytes']>;
  transactionID_not?: Maybe<Scalars['Bytes']>;
  transactionID_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: Maybe<Scalars['Bytes']>;
  transactionID_not_contains?: Maybe<Scalars['Bytes']>;
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
};

export enum Transfer_OrderBy {
  Id = 'id',
  Domain = 'domain',
  BlockNumber = 'blockNumber',
  TransactionId = 'transactionID',
  Owner = 'owner'
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

export type DomainResolvedPartFragment = (
  { __typename?: 'Domain' }
  & Pick<Domain, 'name' | 'labelName' | 'labelhash'>
  & { resolvedAddress?: Maybe<(
    { __typename?: 'Account' }
    & Pick<Account, 'id'>
  )>, resolver?: Maybe<(
    { __typename?: 'Resolver' }
    & Pick<Resolver, 'id'>
  )> }
);

export type ResolveNamesQueryVariables = Exact<{
  addresses?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type ResolveNamesQuery = (
  { __typename?: 'Query' }
  & { domains: Array<(
    { __typename?: 'Domain' }
    & DomainResolvedPartFragment
  )> }
);
