import { NetworkIDs, NFTObject } from '..';
import { NFTStrategy } from '.';
import { ZDKDataSource } from '../backends';
import { NFTQuery, NFTQueryResult } from '../types/NFTQuery';
import { ZDKOptions } from 'src/backends/zdk/ZDKDataSource';

export class ZDKFetchStrategy extends NFTStrategy {
  source: ZDKDataSource;
  constructor(networkId: NetworkIDs, options: ZDKOptions = {}) {
    super(networkId);
    this.source = new ZDKDataSource(networkId, options);
  }

  fetchNFT = async (contract: string, id: string): Promise<NFTObject> => {
    const result = await this.source.loadNFT({ contract, id });
    if (result instanceof Error) {
      throw result;
    }
    return this.source.transformNFT(result);
  };

  queryNFTs = async (query: NFTQuery): Promise<NFTQueryResult> => {
    return await this.source.queryNFTs(query);
  };
}
