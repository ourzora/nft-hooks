import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';
import { ZORA_MEDIA_CONTRACT_BY_NETWORK } from '../../constants/addresses';
import { NetworkIDs } from '../../constants/networks';
import { THEGRAPH_API_URL_BY_NETWORK } from '../../constants/urls';
import { FetchWithTimeout } from '../../fetcher/FetchWithTimeout';
import { GET_MEDIAS_QUERY } from './zora-graph';
import {
  GetMediaAndAuctionsQuery,
  Media_Filter,
  Media_OrderBy,
  NftMediaFullDataFragment,
  OrderDirection,
} from './zora-graph-types';
import {
  FetchGroupTypes,
  ZoraGraphDataInterface,
  ZoraGraphDataResponse,
} from './ZoraGraphDataInterface';
import {
  KNOWN_CONTRACTS,
  MEDIA_SOURCES,
  NFTIdentifier,
  NFTObject,
} from '../../types/NFTInterface';
import { GraphAuctionDataSource } from './GraphAuctionDataSource';
import { GenericMediaData } from '../generic-media/GenericMediaData';
import { GenericMediaInterface } from '../generic-media/GenericMediaInterface';
import { NFTQuery, SortDirection, SortField } from '../../types/NFTQuery';
import { getAddress } from '@ethersproject/address';
import { NFT_ID_SEPERATOR } from 'src/constants/shared';

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
    object?: NFTObject
  ) {
    if (!object) {
      object = { rawData: {} };
    }
    object.markets = asset.reserveAuctions
      ?.map((auction) => GraphAuctionDataSource.transformNFT(auction).markets)
      .filter((el) => !!el && el.length)
      .map((item) => (item as any)[0]);
    object.nft = {
      tokenId: asset.id,
      contract: {
        address: this.mediaContractAddress,
        name: 'Zora',
        symbol: 'ZORA',
        knownContract: KNOWN_CONTRACTS.ZORA,
      },
      owner: {
        address: asset.owner.id,
      },
      minted: {
        address: asset.creator.id,
        at: {
          timestamp: asset.createdAtTimestamp,
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
      source: MEDIA_SOURCES.DERIVED,
    };
    object.metadata = metadata;
    object.rawData['ZoraGraph'] = asset;
    return object;
  }

  loadNFT = async ({ contract, id }: { contract: string; id: string }) => {
    if (contract.toLowerCase() != this.mediaContractAddress.toLowerCase()) {
      throw new Error('Not zora media contract');
    }
    return await this.nftGraphDataLoader.load(id);
  };

  async loadNFTs(nfts: readonly NFTIdentifier[]) {
    return await this.nftGraphDataLoader.loadMany(
      nfts.map(({ contract, id }) => getAddress(`${contract}${NFT_ID_SEPERATOR}${id}`))
    );
  }

  getClient() {
    const fetchWithTimeout = new FetchWithTimeout(this.timeout);
    return new GraphQLClient(this.endpoint, {
      fetch: fetchWithTimeout.fetch,
    });
  }

  fetchNFTs = async (mediaIds: readonly string[]) => {
    const response = (await this.getClient().request(GET_MEDIAS_QUERY, {
      query: { ids_in: mediaIds },
    })) as GetMediaAndAuctionsQuery;
    const metadatas = await Promise.all(
      response.medias
        .map((media) => media.metadataURI)
        .map(this.genericMetadataFetcher.fetchMetadata)
    );
    const mediaData = response.medias.map((_, indx) => ({
      asset: response.medias[indx],
      metadata: metadatas[indx],
    }));
    return mediaIds.map(
      (key) =>
        mediaData.find((response) => response.asset.id === key) ||
        new Error('Missing record')
    );
  };

  queryNFTs = async ({ query, sort, pagination, additional }: NFTQuery) => {
    const userQuery: Media_Filter = {};
    if (query.minters) {
      userQuery.creator_in = query.minters;
    }
    if (query.owners) {
      userQuery.owner_in = query.owners;
    }
    if (sort?.length && sort.length > 1) {
      throw new Error('Sort for multiple keys not implemented currently');
    }
    let sortKey;
    if (sort?.length === 1) {
      const sortItem = sort[0];

      if (sortItem.field === SortField.ACTIVE) {
        sortKey = Media_OrderBy.Transfers;
      }
      if (sortItem.field === SortField.MINTED) {
        sortKey = Media_OrderBy.CreatedAtBlockNumber;
      }
      if (sortItem.field === SortField.AUCTION_PRICE) {
        sortKey = Media_OrderBy.CurrentBids;
      }
      if (sortItem.field === SortField.FIXED_PRICE) {
        sortKey = Media_OrderBy.CurrentAsk;
      }
      if (sortItem.field === SortField.TOKEN_ID) {
        sortKey = Media_OrderBy.Id;
      }
    }

    let sortDirection;
    if (sortKey && sort?.length === 1) {
      sortDirection =
        sort[0].direction === SortDirection.DESC
          ? OrderDirection.Desc
          : OrderDirection.Asc;
    }

    let offset = 0;
    let limit = 100;
    if (pagination?.offset) {
      offset = pagination?.offset;
    }
    if (pagination?.limit) {
      limit = pagination?.limit;
    }

    const response = (await this.getClient().request(GET_MEDIAS_QUERY, {
      query: userQuery,
      orderBy: sortKey,
      orderDirection: sortDirection,
      limit,
      offset,
    })) as GetMediaAndAuctionsQuery;

    const { medias } = response;

    const metadatas = !additional?.skipMetadata
      ? await Promise.all(
          medias
            .map((item) => item.metadataURI)
            .map(this.genericMetadataFetcher.fetchMetadata)
        )
      : medias.map(() => {});

    return medias.map((_, indx) => ({
      asset: response.medias[indx],
      metadata: metadatas[indx],
    }));
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

    const { medias } = response;

    const metadatas = fetchMetadata
      ? await Promise.all(
          medias
            .map((item) => item.metadataURI)
            .map(this.genericMetadataFetcher.fetchMetadata)
        )
      : medias.map(() => {});

    return medias
      .map((_, indx) => ({
        asset: response.medias[indx],
        metadata: metadatas[indx],
      }))
      .map((media) => this.transformNFT(media, { rawData: {} }));
  }
}
