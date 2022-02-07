import DataLoader from 'dataloader';
import { NetworkIDs, Networks } from '../constants/networks';
import { FetchWithTimeout } from '../fetcher/FetchWithTimeout';
import {
  EtherActorDataInterface,
  EtherActorServerResponse,
} from './EtherActorDataInterface';
import { NFTObject } from './NFTInterface';

const ENDPOINT_PARTS_BY_NETWORK = {
  [Networks.MAINNET]: 'mainnet',
  [Networks.POLYGON]: 'polygon',
  [Networks.MUMBAI]: 'mumbai',
  [Networks.RINKEBY]: 'rinkeby',
};

export class EtherActorDataSource implements EtherActorDataInterface {
  nftsLoader: DataLoader<string, EtherActorServerResponse | Error>;
  endpoint: string;
  timeout: number;
  constructor(networkId: NetworkIDs, timeout = 10) {
    this.nftsLoader = new DataLoader(this.fetchNFTsEtherActor, {
      maxBatchSize: 1,
    });
    this.endpoint = `https://${ENDPOINT_PARTS_BY_NETWORK[networkId]}.ether.actor/nft/`;
    this.timeout = timeout;
  }
  loadNFT = async (
    tokenContract: string,
    tokenId: string
  ): Promise<EtherActorServerResponse | Error> => {
    return await this.nftsLoader.load(`${tokenContract}:${tokenId}`);
  };
  loadNFTs = async (
    tokenContractAndIds: string[]
  ): Promise<(EtherActorServerResponse | Error)[]> => {
    return await this.nftsLoader.loadMany(tokenContractAndIds);
  };
  canLoadNFT() {
    return true;
  }
  transformNFT(asset: EtherActorServerResponse, object: NFTObject) {
    object.nft = {
      tokenId: asset.tokenId,
      contract: {
        address: asset.contract.address,
        name: asset.contract.name || null,
        symbol: asset.contract.symbol || null,
        description: null,
      },
      owner: asset.owner,
      creator: '',
      metadataURI: asset.tokenURL,
      contentURI: asset.contentURL || null,
      minted: {
        minter: undefined,
      },
    };

    object.metadata = asset.metadata;

    object.media = {
      content: asset.contentURL
        ? {
            uri: asset.contentURL,
            mime: asset.contentURLMimeType,
          }
        : null,
      image: asset.imageURL
        ? {
            uri: asset.imageURL,
            mime: asset.imageURLMimeType,
          }
        : null,
      thumbnail: null,
      source: 'derived',
    };

    // object.media = {
    //   thumbnail: asset.image_thumbnail_url
    //     ? {
    //         uri: asset.image_thumbnail_url,
    //       }
    //     : null,
    //   image:
    //     asset.image_url || asset.animation_url
    //       ? {
    //           uri: asset.animation_url || asset.image_url!,
    //         }
    //       : null,
    //   content: asset.animation_url
    //     ? {
    //         uri: asset.animation_url || asset.image_original_url!,
    //       }
    //     : null,
    //   source: 'opensea',
    // };

    if (!object.rawData) {
      object.rawData = {};
    }

    object.rawData['alchemy'] = asset;

    return object;
  }

  fetchNFTsEtherActor = async (
    nftAddressesAndTokens: readonly string[]
  ): Promise<(Error | EtherActorServerResponse)[]> => {
    const [address, tokenId] = nftAddressesAndTokens[0].split(':');

    const response = await new FetchWithTimeout(this.timeout).fetch(
      `${this.endpoint}${address}/${tokenId}.json`
    );

    if (response.status !== 200) {
      throw new Error('No asset');
    }

    const responseJson = (await response.json()) as EtherActorServerResponse;

    return [responseJson];
  };
}
