import { ZoraGraphDataSource, ZoraGraphDataInterface } from '../backends';
import { NetworkIDs } from '../constants/networks';
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

  shouldFetchMarket() {
    return false;
  }

  fetchNFT = async (contract: string, id: string) => {
    const response = await this.graphDataSource.loadNFT(contract, id);
    if (response instanceof Error) {
      throw response;
    }
    return this.graphDataSource.transformNFT(response, {} as any);
  };

  fetchMarket = async (_: string, __: string) => {
    return { rawData: {} };
  };
}
