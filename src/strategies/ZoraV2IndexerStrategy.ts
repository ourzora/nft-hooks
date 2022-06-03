import { ZoraIndexerV1DataSource, ZoraIndexerV1Interface } from '../backends';
import { NetworkIDs } from '../constants/networks';
import { NFTQuery, NFTQueryResult } from '../types/NFTQuery';
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

  fetchNFT = async (contract: string, id: string): Promise<any> => {
    const response = await this.zoraIndexerDataSource.loadNFT({ contract, id });
    if (response instanceof Error) {
      throw response;
    }
    return this.zoraIndexerDataSource.transformNFT(response);
  };

  queryNFTs = async (query: NFTQuery): Promise<NFTQueryResult> => {
    return await this.zoraIndexerDataSource.queryNFTs(query);
  };
}
