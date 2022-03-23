import { ZoraGraphDataSource, ZoraGraphDataInterface } from '../backends';
import { NetworkIDs } from '../constants/networks';
import { NFTQuery } from '../types/NFTQuery';
import { NFTObject } from '../types/NFTInterface';
import { NFTStrategy } from './NFTStrategy';

export class ZoraGraphStrategy extends NFTStrategy {
  graphDataSource: ZoraGraphDataInterface;
  constructor(networkId: NetworkIDs, timeout?: number, mediaContractAddress?: string) {
    super(networkId);
    this.graphDataSource = new ZoraGraphDataSource(
      networkId,
      timeout,
      mediaContractAddress
    );
  }

  fetchNFT = async (contract: string, id: string) => {
    const response = await this.graphDataSource.loadNFT(contract, id);
    if (response instanceof Error) {
      throw response;
    }
    return this.graphDataSource.transformNFT(response, {} as any);
  };

  queryNFTs = async (query: NFTQuery): Promise<NFTObject[]> => {
    const response = await this.graphDataSource.queryNFTs(query);
    if (response instanceof Error) {
      throw response;
    }
    return response.map((object) =>
      this.graphDataSource.transformNFT(object, { rawData: {} })
    );
  };
}
