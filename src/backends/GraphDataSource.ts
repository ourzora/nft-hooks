import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';
import { ZORA_MEDIA_CONTRACT_BY_NETWORK } from '../constants/addresses';
import { NetworkIDs } from '../constants/networks';
import { THEGRAPH_API_URL_BY_NETWORK } from '../constants/urls';
import { KNOWN_CONTRACTS } from '../fetcher/FetchResultTypes';
import { FetchWithTimeout } from '../fetcher/FetchWithTimeout';
import { GET_MEDIAS_QUERY } from '../graph-queries/zora';
import {
  GetMediaAndAuctionsQuery,
  NftMediaFullDataFragment,
} from '../graph-queries/zora-types';
import { GraphDataInterface } from './GraphDataInterface';
import { NFTObject } from './NFTInterface';

export class GraphDataSource implements GraphDataInterface {
  nftGraphDataLoader: DataLoader<string, NftMediaFullDataFragment>;
  networkId: NetworkIDs;
  timeout: number;
  mediaContractAddress: string;

  constructor(
    networkId: NetworkIDs,
    timeout: number = 6,
    mediaContractAddress: string = ZORA_MEDIA_CONTRACT_BY_NETWORK[networkId]
  ) {
    this.nftGraphDataLoader = new DataLoader(this.fetchNFTs);
    this.timeout = timeout;
    this.networkId = networkId;
    this.mediaContractAddress = mediaContractAddress;
  }

  canLoadNFT() {
    return true;
  }

  transformNFT(asset: NftMediaFullDataFragment, object: NFTObject) {
    object.nft = {
      tokenId: asset.id,
      contract: {
        address: this.mediaContractAddress,
        name: 'Zora',
        description: null,
        symbol: 'ZORA',
        knownContract: KNOWN_CONTRACTS.ZORA,
      },
      owner: asset.owner.id,
      creator: asset.creator.id,
      metadataURI: asset.metadataURI,
      contentURI: asset.contentURI,
    };
    object.rawData['zora-graph'] = asset;
    return object;
  }

  async loadNFT(tokenContract: string, tokenId: string) {
    return await this.nftGraphDataLoader.load(`${tokenContract}-${tokenId}`);
  }
  async loadNFTs(tokenContractAndId: readonly string[]) {
    return await this.nftGraphDataLoader.loadMany(tokenContractAndId);
  }

  async fetchNFTs(mediaIds: readonly string[]) {
    const fetchWithTimeout = new FetchWithTimeout(this.timeout);
    const client = new GraphQLClient(THEGRAPH_API_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });
    const response = (await client.request(GET_MEDIAS_QUERY, {
      id_ids: mediaIds,
      creator_ids: [],
      owner_ids: [],
    })) as GetMediaAndAuctionsQuery;
    return mediaIds.map(
      (key) =>
        response.id.find((media) => media.id === key) || new Error('Missing record')
    );
  }
}
