import DataLoader from 'dataloader';
import { NFTQuery } from '../../types/NFTQuery';
import { NetworkIDs } from '../../constants/networks';
import { OPENSEA_API_URL_BY_NETWORK } from '../../constants/urls';
import { FetchWithTimeout } from '../../fetcher/FetchWithTimeout';
import { MEDIA_SOURCES, NFTIdentifier, NFTObject } from '../../types/NFTInterface';
import { OpenseaAsset, OpenseaInterface } from './OpenseaInterface';
import { NFT_ID_SEPERATOR } from '../../constants/shared';
import { getAddress } from '@ethersproject/address';

type OpenseaDataResponse = {
  assets: OpenseaAsset[];
};

export class OpenseaDataSource implements OpenseaInterface {
  nftsLoader: DataLoader<string, OpenseaAsset | Error>;
  endpoint: string;
  timeout: number;
  MAX_OPENSEA_SIZE = 50;
  constructor(networkId: NetworkIDs, timeout = 10) {
    this.nftsLoader = new DataLoader(this.fetchNFTsOpensea, {
      maxBatchSize: this.MAX_OPENSEA_SIZE,
      batchScheduleFn: (cb: any) => setTimeout(cb, 1300),
    });
    this.endpoint = OPENSEA_API_URL_BY_NETWORK[networkId];
    this.timeout = timeout;
  }
  loadNFT = async ({ contract, id }: NFTIdentifier): Promise<OpenseaAsset | Error> => {
    return await this.nftsLoader.load(getAddress(`${contract}${NFT_ID_SEPERATOR}${id}`));
  };
  loadNFTs = async (
    nfts: readonly NFTIdentifier[]
  ): Promise<(OpenseaAsset | Error)[]> => {
    return await this.nftsLoader.loadMany(
      nfts.map((nft) => getAddress(`${nft.contract}${NFT_ID_SEPERATOR}${nft.id}`))
    );
  };
  canLoadNFT() {
    return true;
  }
  transformNFT(asset: OpenseaAsset, object?: NFTObject) {
    if (!object) {
      object = { rawData: {} };
    }
    object.nft = {
      tokenId: asset.token_id.toString(),
      contract: {
        address: asset.asset_contract.address,
        name: asset.asset_contract.name || undefined,
        symbol: asset.asset_contract.symbol || undefined,
        description: asset.asset_contract.description || undefined,
        imageUri: asset.asset_contract.image_url || undefined,
      },
      owner: {
        address: asset.owner.address,
      },
      metadataURI: asset.token_metadata,
      contentURI: asset.animation_original_url || asset.image_original_url,
      minted: {
        address: asset.creator.address,
      },
    };
    object.metadata = {
      name: asset.name || undefined,
      description: asset.description || undefined,
      contentUri: asset.animation_url || undefined,
      imageUri: asset.image_url || undefined,
      attributes: asset.traits.map((trait) => ({
        name: trait.trait_type,
        value: trait.value,
        display: trait.display_type,
      })),
    };
    object.media = {
      thumbnail: asset.image_thumbnail_url
        ? {
            uri: asset.image_thumbnail_url,
          }
        : null,
      image:
        asset.image_url || asset.animation_url
          ? {
              uri: asset.animation_url || asset.image_url!,
            }
          : null,
      content: asset.animation_url
        ? {
            uri: asset.animation_url || asset.image_original_url!,
          }
        : null,
      source: MEDIA_SOURCES.OPENSEA,
    };
    if (!object.rawData) {
      object.rawData = {};
    }
    object.rawData['OpenSea'] = asset;
    return object;
  }

  fetchNFTsOpensea = async (
    nftAddressesAndTokens: readonly string[]
  ): Promise<(Error | OpenseaAsset)[]> => {
    const urlParams: string[] = [];
    const nftTuples = nftAddressesAndTokens.map((address) =>
      address.toLowerCase().split(':')
    );
    nftTuples.forEach(([address, tokenId]) => {
      urlParams.push(`token_ids=${tokenId}&asset_contract_addresses=${address}`);
    });
    const response = await new FetchWithTimeout(this.timeout).fetch(
      `${this.endpoint}assets?${urlParams.join('&')}&order_direction=desc&limit=${
        this.MAX_OPENSEA_SIZE
      }`,
      { headers: { 'X-API-KEY': '2f6f419a083c46de9d83ce3dbe7db601' } }
    );
    const responseJson = (await response.json()) as OpenseaDataResponse;

    return nftTuples.map(
      ([address, tokenId]: any) =>
        responseJson.assets.find(
          (asset) =>
            asset.token_id === tokenId &&
            asset.asset_contract.address.toLowerCase() === address
        ) || new Error('No asset')
    );
  };

  queryNFTs(_: NFTQuery): Promise<Error | OpenseaAsset[]> {
    throw new Error('not implemented');
  }
}
