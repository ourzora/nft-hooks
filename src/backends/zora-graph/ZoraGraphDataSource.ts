import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';
import { ZORA_MEDIA_CONTRACT_BY_NETWORK } from '../../constants/addresses';
import { NetworkIDs } from '../../constants/networks';
import { THEGRAPH_API_URL_BY_NETWORK } from '../../constants/urls';
import { FetchWithTimeout } from '../../fetcher/FetchWithTimeout';
import { GET_MEDIAS_QUERY } from './zora-graph';
import { GetMediaAndAuctionsQuery, NftMediaFullDataFragment } from './zora-graph-types';
import {
  FetchGroupTypes,
  ZoraGraphDataInterface,
  ZoraGraphDataResponse,
} from './ZoraGraphDataInterface';
import { KNOWN_CONTRACTS, NFTObject } from '../NFTInterface';
import { GraphAuctionDataSource } from './GraphAuctionDataSource';
import { GenericMediaData } from '../generic-media/GenericMediaData';
import { GenericMediaInterface } from '../generic-media/GenericMediaInterface';

export class ZoraGraphDataSource implements ZoraGraphDataInterface {
  nftGraphDataLoader: DataLoader<string, ZoraGraphDataResponse>;
  networkId: NetworkIDs;
  timeout: number;
  endpoint: string;
  mediaContractAddress: string;
  genericMetadataFetcher: GenericMediaInterface;

  constructor(
    networkId: NetworkIDs,
    timeout: number = 6,
    endpoint: string = THEGRAPH_API_URL_BY_NETWORK[networkId],
    genericMetadataFetcher: GenericMediaInterface = new GenericMediaData(6),
    mediaContractAddress: string = ZORA_MEDIA_CONTRACT_BY_NETWORK[networkId]
  ) {
    this.endpoint = endpoint;
    this.nftGraphDataLoader = new DataLoader(this.fetchNFTs);
    this.timeout = timeout;
    this.networkId = networkId;
    this.mediaContractAddress = mediaContractAddress;
    this.genericMetadataFetcher = genericMetadataFetcher;
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

  fetchNFTs = async (mediaIds: readonly string[]) => {
    const response = (await this.getClient().request(GET_MEDIAS_QUERY, {
      id_ids: mediaIds,
      creator_ids: [],
      owner_ids: [],
    })) as GetMediaAndAuctionsQuery;
    const metadatas = await Promise.all(
      response.id
        .map((media) => media.metadataURI)
        .map(this.genericMetadataFetcher.fetchMetadata)
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

  /**
   * Un-batched fetch function to fetch a group of ZNFT data
   *
   * @param ids list of ids to query
   * @param type type of ids: creator, id (of media), owner
   * @returns
   */
  async fetchZNFTGroup(
    ids: string[],
    type: FetchGroupTypes,
    fetchMetadata: boolean = true
  ) {
    const getQuery = () => {
      let base: Record<string, string[]> = {
        id_ids: [],
        creator_ids: [],
        owner_ids: [],
      };
      const idsNormalized = ids.map((id) => id.toLowerCase());
      switch (type) {
        case 'id':
          base.id_ids = idsNormalized;
          break;
        case 'creator':
          base.creator_ids = idsNormalized;
          break;
        case 'owner':
          base.owner_ids = idsNormalized;
          break;
      }
      return base;
    };

    const response = (await this.getClient().request(
      GET_MEDIAS_QUERY,
      getQuery()
    )) as GetMediaAndAuctionsQuery;
    const medias = [...response.creator, ...response.owner, ...response.id];

    const metadatas = fetchMetadata
      ? await Promise.all(
          medias
            .map((media) => media.metadataURI)
            .map(this.genericMetadataFetcher.fetchMetadata)
        )
      : medias.map(() => {});

    return response.id
      .map((_, indx) => ({
        asset: response.id[indx],
        metadata: metadatas[indx],
      }))
      .map((media) => this.transformNFT(media, { rawData: {} }));
  }
}
