import { CurrencyDataSourceUniswap } from '../backends/CurrencyDataSourceUniswap';
import { GraphDataSource } from '../backends/ZoraGraphDataSource';
import { NetworkIDs } from '../constants/networks';
import { NFTStrategy } from './NFTStrategy';

export class ZoraGraphStrategy extends NFTStrategy {
  currencyFetchBackend: CurrencyDataSourceUniswap;
  graphDataSource: GraphDataSource;
  constructor(networkId: NetworkIDs, timeout?: number, mediaContractAddress?: string) {
    super(networkId);
    this.currencyFetchBackend = new CurrencyDataSourceUniswap(networkId);
    this.graphDataSource = new GraphDataSource(networkId, timeout, mediaContractAddress);
  }

  shouldFetchMarket() {
    return false;
  }

  fetchNFT = async (contract: string, id: string) => {
    const response = await this.graphDataSource.loadNFT(contract, id);
    return this.graphDataSource.transformNFT(response, {} as any);
  };

  fetchMarket = async (_: string, __: string) => {
    return { rawData: {} };
  };
}
