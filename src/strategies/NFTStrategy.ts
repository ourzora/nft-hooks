import { NetworkIDs } from 'src';
import { NFTObject } from '../types/NFTInterface';
import { NFTQuery } from '../types/NFTQuery';

type FetchInfo = { contract: string; id: string };

export abstract class NFTStrategy {
  public networkId: string;

  constructor(networkId: NetworkIDs) {
    this.networkId = networkId;
  }

  abstract fetchNFT(contract: string, id: string): Promise<NFTObject>;
  abstract queryNFTs(query: NFTQuery): Promise<NFTObject[]>;

  // By default don't query secondary data endpoint.
  hasSecondaryData = (_: FetchInfo) => false;

  async fetchSeconaryData(contract: string, id: string): Promise<NFTObject> {
    return {
      rawData: {},
      nft: {
        contract: { address: contract },
        tokenId: id,
        minted: {},
        metadataURI: null,
        contentURI: null,
      },
    };
  }
}
