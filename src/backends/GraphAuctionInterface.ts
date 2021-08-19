import { ReserveAuctionPartialFragment } from 'src/graph-queries/zora-types';
import { NFTObject } from './NFTInterface';

export interface GraphAuctionInterface {
  loadAuctionInfo(
    contractAddress: string,
    tokenId: string
  ): Promise<ReserveAuctionPartialFragment>;
  transformNFT(response: ReserveAuctionPartialFragment, currentObject: NFTObject): NFTObject;
}
