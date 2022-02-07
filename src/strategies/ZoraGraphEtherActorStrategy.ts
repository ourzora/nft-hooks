import { EtherActorDataSource } from '../backends/EtherActorDataSource';
import { GraphAuctionDataSource } from '../backends/GraphAuctionDataSource';
import { CurrencyDataSourceUniswap } from '../backends/CurrencyDataSourceUniswap';
import { NetworkIDs } from '../constants/networks';
import { NFTStrategy } from './NFTStrategy';

export class ZoraGraphEtherActorStrategy extends NFTStrategy {
  currencyFetchBackend: CurrencyDataSourceUniswap;
  graphAuctionData: GraphAuctionDataSource;
  etherActorSource: EtherActorDataSource;
  constructor(networkId: NetworkIDs, timeout: number = 2) {
    super(networkId);
    this.currencyFetchBackend = new CurrencyDataSourceUniswap(networkId);
    this.graphAuctionData = new GraphAuctionDataSource(networkId, timeout);
    this.etherActorSource = new EtherActorDataSource(networkId, timeout);
  }

  shouldFetchMarket() {
    return true;
  }

  fetchNFT = async (contract: string, id: string) => {
    const loadedNft = await this.etherActorSource.loadNFT(contract, id);
    if (loadedNft instanceof Error) {
      throw loadedNft;
    }
    return this.etherActorSource.transformNFT(loadedNft, { rawData: {} });
  };

  fetchMarket = async (contract: string, id: string) => {
    return await this.graphAuctionData.loadAuctionInfo(contract, id);
  };
}
