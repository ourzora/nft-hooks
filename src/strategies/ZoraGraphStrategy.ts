import { ZoraGraphDataSource, ZoraGraphDataInterface } from '../backends';
import { NetworkIDs } from '../constants/networks';
import { NFTQuery, NFTQueryResult } from '../types/NFTQuery';
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
    const response = await this.graphDataSource.loadNFT({ contract, id });
    if (response instanceof Error) {
      throw response;
    }
    return this.graphDataSource.transformNFT(response);
  };

  queryNFTs = async (query: NFTQuery): Promise<NFTQueryResult> => {
    return await this.graphDataSource.queryNFTs(query);
  };
}
