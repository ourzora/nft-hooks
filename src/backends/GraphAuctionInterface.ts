import { NFTObject } from './NFTInterface';

export interface GraphAuctionInterface {
  loadAuctionInfo(
    contractAddress: string,
    tokenId: string
  ): Promise<NFTObject>;
}
