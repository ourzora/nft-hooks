import { EtherActorDataSource, GraphAuctionDataSource } from '../backends';
import { NetworkIDs } from '../constants/networks';
import { NFTStrategy } from './NFTStrategy';
import { NFTQuery, NFTQueryResult } from '../types/NFTQuery';

export class ZoraGraphEtherActorStrategy extends NFTStrategy {
  graphAuctionData: GraphAuctionDataSource;
  etherActorSource: EtherActorDataSource;
  constructor(networkId: NetworkIDs, timeout: number = 2) {
    super(networkId);
    this.graphAuctionData = new GraphAuctionDataSource(networkId);
    this.etherActorSource = new EtherActorDataSource(networkId, timeout);
  }

  fetchNFT = async (contract: string, id: string) => {
    const loadedNft = await this.etherActorSource.loadNFT({ contract, id });
    if (loadedNft instanceof Error) {
      throw loadedNft;
    }
    return this.etherActorSource.transformNFT(loadedNft, { rawData: {} });
  };

  hasSecondaryData = () => true;

  fetchMarket = async (contract: string, id: string) => {
    return await this.graphAuctionData.loadAuctionInfo(contract, id);
  };

  queryNFTs = async (_: NFTQuery): Promise<NFTQueryResult> => {
    throw new Error('Not implemented');
  };
}
