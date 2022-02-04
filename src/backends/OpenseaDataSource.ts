import DataLoader from 'dataloader';
import { NetworkIDs } from '../constants/networks';
import { OPENSEA_API_URL_BY_NETWORK } from '../constants/urls';
import { FetchWithTimeout } from '../fetcher/FetchWithTimeout';
import { NFTObject } from './NFTInterface';
import { OpenseaAsset, OpenseaInterface } from './OpenseaInterface';

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
  loadNFT = async (
    tokenContract: string,
    tokenId: string
  ): Promise<OpenseaAsset | Error> => {
    return await this.nftsLoader.load(`${tokenContract}:${tokenId}`);
  };
  loadNFTs = async (tokenContractAndId: string[]): Promise<(OpenseaAsset | Error)[]> => {
    return await this.nftsLoader.loadMany(tokenContractAndId);
  };
  canLoadNFT() {
    return true;
  }
  transformNFT(asset: OpenseaAsset, object: NFTObject) {
    object.nft = {
      tokenId: asset.id.toString(),
      contract: {
        address: asset.asset_contract.address,
        name: asset.asset_contract.name,
        symbol: asset.asset_contract.symbol,
        description: asset.asset_contract.description,
      },
      owner: asset.owner.address,
      creator: asset.creator.address,
      metadataURI: asset.token_metadata,
      contentURI: asset.animation_original_url || asset.image_original_url,
    };
    object.metadata = {
      name: asset.name,
      description: asset.description,
      animation_url: asset.animation_url,
      image: asset.image_url,
      attributes: asset.traits.map((trait) => ({
        name: trait.trait_type,
        value: trait.value,
        display: trait.display_type,
      })),
    };
    object.media = {
      thumbnail: asset.image_thumbnail_url,
      preview: asset.image_preview_url,
      full: asset.animation_url || asset.image_url,
      source: 'opensea',
    };
    if (!object.rawData) {
      object.rawData = {};
    }
    object.rawData['opensea'] = asset;
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
      `${this.endpoint}assets?${urlParams.join(
        '&'
      )}&order_direction=desc&offset=0&limit=${this.MAX_OPENSEA_SIZE}`
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
}