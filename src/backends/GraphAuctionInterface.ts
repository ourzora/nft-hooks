import { ReserveAuctionPartialFragment } from 'src/graph-queries/zora-types';

export interface GraphAuctionInterface {
  loadAuctionInfo(
    contractAddress: string,
    tokenId: string
  ): Promise<ReserveAuctionPartialFragment>;
}
