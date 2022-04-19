import { NetworkIDs, NFTObject } from '../';
import { NFTStrategy } from './';
import { ZDKAlphaDataSource } from '../backends';
import { NFTQuery } from '../types/NFTQuery';

export class ZDKAlphaFetchStrategy extends NFTStrategy {
  source: ZDKAlphaDataSource;
  constructor(networkId: NetworkIDs, endpoint?: string) {
    super(networkId);
    this.source = new ZDKAlphaDataSource(networkId, endpoint);
  }
  fetchNFT = async (contract: string, id: string): Promise<NFTObject> => {
    const result = await this.source.loadNFT({ contract, id });
    if (result instanceof Error) {
      throw result;
    }
    return this.source.transformNFT(result, { rawData: {} });
  };

  queryNFTs = async (_: NFTQuery): Promise<NFTObject[]> => {
    throw new Error('Not implemented');
  };
}
