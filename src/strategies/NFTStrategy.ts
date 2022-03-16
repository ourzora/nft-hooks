import { NetworkIDs } from 'src';
import { NFTObject } from '../types/NFTInterface';
import { NFTQuery } from '../types/NFTQuery';

export abstract class NFTStrategy {
  public networkId: string;
  constructor(networkId: NetworkIDs) {
    this.networkId = networkId;
  }
  abstract fetchNFT(contract: string, id: string): Promise<NFTObject>;
  async fetchMarket(contract: string, id: string): Promise<NFTObject> {
    return {
      rawData: {},
      nft: {
        contract: { address: contract, name: null, description: null, symbol: null },
        tokenId: id,
        minted: {},
        metadataURI: null,
        contentURI: null,
      },
    };
  }

  abstract queryNFTs(query: NFTQuery): Promise<NFTObject[]>;
}
