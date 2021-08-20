export type NFTQueryInfo = {
  address: string;
  tokenId: string;
};
export type FetchZoraIndexerListCollectionType = {
  collectionAddress: string,
  limit: number,
  offset: number,
};
export type FetchZoraIndexerQueryType = {
  curatorIds?: string[],
  creatorIds?: string[],
  ownerIds?: string[],
  limit: number,
  offset: number,
};