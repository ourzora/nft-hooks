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
import { ZoraGraphDataInterface, ZoraGraphDataResponse } from './ZoraGraphDataInterface';
import { NFTObject } from './NFTInterface';
import { GraphAuctionDataSource } from './GraphAuctionDataSource';

export class GraphDataSource implements ZoraGraphDataInterface {
  nftGraphDataLoader: DataLoader<string, ZoraGraphDataResponse>;
  networkId: NetworkIDs;
  timeout: number;
  endpoint: string;
  mediaContractAddress: string;

  constructor(
    networkId: NetworkIDs,
    timeout: number = 6,
    mediaContractAddress: string = ZORA_MEDIA_CONTRACT_BY_NETWORK[networkId],
    endpoint: string = THEGRAPH_API_URL_BY_NETWORK[networkId]
  ) {
    this.endpoint = endpoint;
    this.nftGraphDataLoader = new DataLoader(this.fetchNFTs);
    this.timeout = timeout;
    this.networkId = networkId;
    this.mediaContractAddress = mediaContractAddress;
  }

  canLoadNFT() {
    return true;
  }

  transformNFT(
    { asset, metadata }: { asset: NftMediaFullDataFragment; metadata: any },
    object: NFTObject
  ) {
    object.markets = asset.reserveAuctions
      ?.map((auction) => GraphAuctionDataSource.transformNFT(auction).markets)
      .filter((el) => !!el && el.length)
      .map((item) => (item as any)[0]);
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
      minted: {
        minter: asset.creator.id,
        at: {
          timestamp: asset.createdAtTimestamp,
          blockNumber: null,
          transactionHash: null,
        },
      },
      metadataURI: asset.metadataURI,
      contentURI: asset.contentURI,
    };
    // TODO: load from CDN
    object.media = {
      content: { uri: asset.contentURI, mime: metadata.mimeType },
      thumbnail: null,
      image: null,
      source: 'zora',
    };
    object.metadata = metadata;
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
  };

  async loadNFTs(tokenContractAndId: readonly string[]) {
    return await this.nftGraphDataLoader.loadMany(tokenContractAndId);
  }

  getClient() {
    const fetchWithTimeout = new FetchWithTimeout(this.timeout);
    return new GraphQLClient(this.endpoint, {
      fetch: fetchWithTimeout.fetch,
    });
  }

  fetchMetadata = async (uri: string) => {
    const fetchWithTimeout = new FetchWithTimeout(this.timeout);
    const resp = await fetchWithTimeout.fetch(uri);
    return await resp.json();
  };

  fetchNFTs = async (mediaIds: readonly string[]) => {
    const response = (await this.getClient().request(GET_MEDIAS_QUERY, {
      id_ids: mediaIds,
      creator_ids: [],
      owner_ids: [],
    })) as GetMediaAndAuctionsQuery;
    const metadatas = await Promise.all(
      response.id.map((media) => media.metadataURI).map(this.fetchMetadata)
    );
    const mediaData = response.id.map((_, indx) => ({
      asset: response.id[indx],
      metadata: metadatas[indx],
    }));
    return mediaIds.map(
      (key) =>
        mediaData.find((response) => response.asset.id === key) ||
        new Error('Missing record')
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
