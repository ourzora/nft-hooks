export type NFTQueryInfo = {
  address: string;
  tokenId: string;
};
export type FetchZoraIndexerListCollectionType = {
  collectionAddresses?: string[];
  curatorAddress?: string;
  tokenId?: string;
  onlyAuctions?: boolean,
  approved?: boolean | null,
  limit: number;
  offset: number;
};
export type FetchZoraIndexerItemType = {
  collectionAddress: string;
  tokenId: string;
};
export type FetchZoraIndexerQueryType = {
  curatorIds?: string[];
  creatorIds?: string[];
  ownerIds?: string[];
  limit: number;
  offset: number;
};
