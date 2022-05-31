import { NFTObject } from '../../types/NFTInterface';

export interface GraphAuctionInterface {
  loadAuctionInfo(contractAddress: string, tokenId: string): Promise<NFTObject>;
  fetchAuctionNFTInfo(tokenAndAddresses: readonly string[]): Promise<(Error | NFTObject)[]>;
  fetchReserveAuctions(
    curatorIds: readonly string[],
    isApproved: boolean | null,
    first: number,
    skip: number
  ): Promise<(NFTObject | Error)[]>;
  getAllAuctionsByCurator(
    curator: string,
    active: boolean | undefined,
    first: number,
    skip: number
  ): Promise<(NFTObject | Error)[]>;
}
