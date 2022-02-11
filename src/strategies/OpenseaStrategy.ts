import {
  OpenseaInterface,
  OpenseaDataSource,
  GraphAuctionInterface,
  GraphAuctionDataSource,
} from '../backends';
import { NetworkIDs } from '../constants/networks';
import { NFTStrategy } from './NFTStrategy';

export class OpenseaStrategy extends NFTStrategy {
  openseaBackend: OpenseaInterface;
  auctionBackend: GraphAuctionInterface;
  constructor(networkId: NetworkIDs) {
    super(networkId);
    this.auctionBackend = new GraphAuctionDataSource(networkId);
    this.openseaBackend = new OpenseaDataSource(networkId);
  }

  shouldFetchMarket() {
    return true;
  }

  fetchNFT = async (contract: string, id: string) => {
    const openseaNFT = await this.openseaBackend.loadNFT(contract, id);
    if (openseaNFT instanceof Error) {
      throw openseaNFT;
    }
    return this.openseaBackend.transformNFT(openseaNFT, {} as any);
  };

  fetchMarket = async (contract: string, id: string) => {
    return await this.auctionBackend.loadAuctionInfo(contract, id);
  };
}
