import { ZoraIndexerV1DataSource, ZoraIndexerV1Interface } from '../backends';
import { NetworkIDs } from '../constants/networks';
import { NFTStrategy } from './NFTStrategy';

export class ZoraV2IndexerStrategy extends NFTStrategy {
  zoraIndexerDataSource: ZoraIndexerV1Interface;
  constructor(networkId: NetworkIDs, timeout?: number, mediaContractAddress?: string) {
    super(networkId);
    this.zoraIndexerDataSource = new ZoraIndexerV1DataSource(
      networkId,
      timeout,
      mediaContractAddress
    );
  }

  shouldFetchMarket() {
    return false;
  }

  fetchNFT = async (contract: string, id: string): Promise<any> => {
    const response = await this.zoraIndexerDataSource.loadNFT(contract, id);
    return this.zoraIndexerDataSource.transformNFT(response, {} as any);
  };

  fetchMarket = async (_: string, __: string) => {
    return { rawData: {} };
  };
}
