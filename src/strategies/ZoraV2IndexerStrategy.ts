import { NFTObject } from '../types/NFTInterface';
import { ZoraIndexerV1DataSource, ZoraIndexerV1Interface } from '../backends';
import { NetworkIDs } from '../constants/networks';
import { NFTQuery } from '../types/NFTQuery';
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
    const response = await this.zoraIndexerDataSource.loadNFT(contract, id);
    if (response instanceof Error) {
      throw response;
    }
    return this.zoraIndexerDataSource.transformNFT(response, {} as any);
  };

  fetchMarket = async (_: string, __: string) => {
    return { rawData: {} };
  };

  queryNFTs = async (query: NFTQuery): Promise<NFTObject[]> => {
    const response = await this.zoraIndexerDataSource.queryNFTs(query);
    if (response instanceof Error) {
      throw response;
    }
    return response.map((object) =>
      this.zoraIndexerDataSource.transformNFT(object, { rawData: {} })
    );
  };
}
