import { NetworkIDs, NFTObject } from '..';
import { NFTStrategy } from '.';
import { ZDKDataSource } from '../backends';
import { NFTQuery } from '../types/NFTQuery';

export class ZDKFetchStrategy extends NFTStrategy {
  source: ZDKDataSource;
  constructor(networkId: NetworkIDs, endpoint?: string) {
    super(networkId);
    this.source = new ZDKDataSource(networkId, endpoint);
  }
  fetchNFT = async (contract: string, id: string): Promise<NFTObject> => {
    const result = await this.source.loadNFT({ contract, id });
    if (result instanceof Error) {
      throw result;
    }
    return this.source.transformNFT(result, { rawData: {} });
  };

  queryNFTs = async (query: NFTQuery): Promise<NFTObject[]> => {
    const nfts = await this.source.queryNFTs(query);
    return nfts.map((nft) => this.source.transformNFT(nft));
  };
}
