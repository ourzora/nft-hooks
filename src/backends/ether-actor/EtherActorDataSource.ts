import DataLoader from 'dataloader';
import { NetworkIDs, Networks } from '../../constants/networks';
import { FetchWithTimeout } from '../../fetcher/FetchWithTimeout';
import {
  EtherActorDataInterface,
  EtherActorServerResponse,
} from './EtherActorDataInterface';
import { MEDIA_SOURCES, NFTIdentifier, NFTObject } from '../../types/NFTInterface';
import { NFTQuery } from '../../types/NFTQuery';
import { getAddress } from '@ethersproject/address';
import { NFT_ID_SEPERATOR } from '../../constants/shared';

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
  loadNFT = async ({
    contract,
    id,
  }: NFTIdentifier): Promise<EtherActorServerResponse | Error> => {
    return await this.nftsLoader.load(getAddress(`${contract}${NFT_ID_SEPERATOR}${id}`));
  };
  loadNFTs = async (
    nfts: NFTIdentifier[]
  ): Promise<(EtherActorServerResponse | Error)[]> => {
    return await this.nftsLoader.loadMany(
      nfts.map((nft) => `${getAddress(nft.contract)}${NFT_ID_SEPERATOR}${nft.id}`)
    );
  };
  canLoadNFT() {
    return true;
  }
  transformNFT(asset: EtherActorServerResponse, object?: NFTObject) {
    if (!object) {
      object = { rawData: {} };
    }
    object.nft = {
      tokenId: asset.tokenId,
      contract: {
        address: asset.contract.address,
        name: asset.contract.name || undefined,
        symbol: asset.contract.symbol || undefined,
      },
      owner: {
        address: asset.owner,
      },
      metadataURI: asset.tokenURL,
      contentURI: asset.contentURL || null,
      minted: {},
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
      source: MEDIA_SOURCES.DERIVED,
    };

    object.media = {
      image:
        asset.imageURL || asset.contentURLMimeType?.startsWith('image')
          ? {
              uri: asset.imageURL || asset.contentURL!,
              mime: asset.imageURLMimeType || asset.contentURLMimeType,
            }
          : null,
      content: asset.contentURL
        ? {
            uri: asset.contentURL,
            mime: asset.contentURLMimeType,
          }
        : null,
      thumbnail: null,
      source: MEDIA_SOURCES.DERIVED,
    };

    object.rawData['EtherActor'] = asset;

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

  queryNFTs(_: NFTQuery): Promise<Error | EtherActorServerResponse[]> {
    throw new Error('not impld');
  }
}
