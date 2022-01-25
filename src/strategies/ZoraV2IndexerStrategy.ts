import { ZoraIndexerNFTDataSource } from '../backends/ZoraIndexerNFTDataSource';
import { CurrencyDataSourceUniswap } from '../backends/CurrencyDataSourceUniswap';
import { NetworkIDs } from '../constants/networks';
import { NFTStrategy } from './NFTStrategy';

export class ZoraV2IndexerStrategy extends NFTStrategy {
  currencyFetchBackend: CurrencyDataSourceUniswap;
  zoraIndexerDataSource: ZoraIndexerNFTDataSource;
  constructor(networkId: NetworkIDs, timeout?: number, mediaContractAddress?: string) {
    super(networkId);
    this.currencyFetchBackend = new CurrencyDataSourceUniswap(networkId);
    this.zoraIndexerDataSource = new ZoraIndexerNFTDataSource(networkId, timeout, mediaContractAddress);
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
