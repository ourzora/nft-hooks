import { NetworkIDs } from "src";
import { NFTObject } from "src/backends/NFTInterface";

export abstract class NFTStrategy {
  networkId: string;
  constructor(networkId: NetworkIDs) {
    this.networkId = networkId;
  };
  abstract shouldFetchMarket(): boolean;
  abstract fetchNFT(contract: string, id: string): Promise<NFTObject>;
  abstract fetchMarket(contract: string, id: string): Promise<NFTObject>;
}