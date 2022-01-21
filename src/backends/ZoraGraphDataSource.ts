import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';
import { ZORA_MEDIA_CONTRACT_BY_NETWORK } from '../constants/addresses';
import { NetworkIDs } from '../constants/networks';
import { THEGRAPH_API_URL_BY_NETWORK } from '../constants/urls';
import { KNOWN_CONTRACTS } from '../fetcher/FetchResultTypes';
import { FetchWithTimeout } from '../fetcher/FetchWithTimeout';
import {
  GET_ALL_AUCTIONS,
  GET_AUCTION_BY_CURATOR,
  GET_MEDIAS_QUERY,
} from '../graph-queries/zora-graph';
import {
  GetAllAuctionsQuery,
  GetAuctionsByCuratorQuery,
  GetMediaAndAuctionsQuery,
  NftMediaFullDataFragment,
} from '../graph-queries/zora-graph-types';
import { ZoraGraphDataInterface } from './ZoraGraphDataInterface';
import { NFTObject } from './NFTInterface';
import { GraphAuctionDataSource } from './GraphAuctionDataSource';

export class GraphDataSource implements ZoraGraphDataInterface {
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
    object.markets = asset.reserveAuctions?.map(
      (auction) => GraphAuctionDataSource.transformNFT(auction).markets
    ).filter((el) => !!el && el.length).map((item) => (item as any)[0])
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
    // TODO: load from CDN
    object.media = {
      full: asset.contentURI,
      thumbnail: null,
      preview: null,
      source: 'zora',
    };
    if (!object.rawData) {
      object.rawData = {};
    }
    object.rawData['zora-graph'] = asset;
    return object;
  }

  loadNFT = async (tokenContract: string, tokenId: string) => {
    if (tokenContract.toLowerCase() != this.mediaContractAddress.toLowerCase()) {
      throw new Error('Not zora media contract');
    }
    return await this.nftGraphDataLoader.load(tokenId);
  }
  async loadNFTs(tokenContractAndId: readonly string[]) {
    return await this.nftGraphDataLoader.loadMany(tokenContractAndId);
  }

  getClient() {
    const fetchWithTimeout = new FetchWithTimeout(this.timeout);
    return new GraphQLClient(THEGRAPH_API_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });
  }

  fetchNFTs = async (mediaIds: readonly string[]) => {
    const response = (await this.getClient().request(GET_MEDIAS_QUERY, {
      id_ids: mediaIds,
      creator_ids: [],
      owner_ids: [],
    })) as GetMediaAndAuctionsQuery;
    return mediaIds.map(
      (key) =>
        response.id.find((media) => media.id === key) || new Error('Missing record')
    );
  };

  getAllAuctionsByCurator = async (
    curator: string,
    active: boolean | undefined = undefined,
    first: number,
    skip: number
  ) => {
    const auctions = (await this.getClient().request(GET_AUCTION_BY_CURATOR, {
      curator,
      active: active !== undefined ? [active] : [true, false],
      first,
      skip,
    })) as GetAuctionsByCuratorQuery;
    return auctions.reserveAuctions.map((auction) => auction.media);
  };

  getAllAuctions = async (
    active: boolean | undefined = undefined,
    first: number,
    skip: number
  ) => {
    const auctions = (await this.getClient().request(GET_ALL_AUCTIONS, {
      active: active !== undefined ? [active] : [true, false],
      first,
      skip,
    })) as GetAllAuctionsQuery;

    return auctions.reserveAuctions.map((auction) => auction.media);
  };
}
