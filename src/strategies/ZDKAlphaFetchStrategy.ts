import { NetworkIDs, NFTObject } from '../';
import { NFTStrategy } from './';
import { ZDKAlphaDataSource } from '../backends/ZDKAlphaDataSource';

export class ZDKAlphaFetchStrategy extends NFTStrategy {
  source: ZDKAlphaDataSource;
  constructor(networkId: NetworkIDs, endpoint: string) {
    super(networkId);
    this.source = new ZDKAlphaDataSource(networkId, endpoint);
  }
  fetchMarket = async (_: string, __: string): Promise<NFTObject> => {
    return { rawData: {} };
  };
  shouldFetchMarket(): boolean {
    return false;
  }
  fetchNFT = async (contract: string, id: string): Promise<NFTObject> => {
    const result = await this.source.loadNFT(contract, id);
    if (result instanceof Error) {
      throw result;
    }
    return this.source.transformNFT(result, { rawData: {} });
  };
}
