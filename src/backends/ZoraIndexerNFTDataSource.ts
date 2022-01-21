import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';
import { ZORA_MEDIA_CONTRACT_BY_NETWORK } from '../constants/addresses';
import { NetworkIDs } from '../constants/networks';
import { THEGRAPH_API_URL_BY_NETWORK } from '../constants/urls';
import { FetchWithTimeout } from '../fetcher/FetchWithTimeout';
import {
  ByIdsQuery,
  IndexerTokenWithAuctionFragment,
  String_Comparison_Exp,
  Token_Bool_Exp,
} from '../graph-queries/zora-indexer-types';
import { NFTObject } from './NFTInterface';
import { ZoraIndexerNFTDataInterface } from './ZoraIndexerNFTInterface';
import {
  ACTIVE_AUCTIONS_QUERY,
  BY_IDS as INDEXER_BY_IDS_QUERY,
  BY_OWNER,
} from '../graph-queries/zora-indexer';
import { ArgumentsError } from '../fetcher/ErrorUtils';
import { getAddress } from '@ethersproject/address';

export class ZoraIndexerNFTDataSource implements ZoraIndexerNFTDataInterface {
  nftGraphDataLoader: DataLoader<string, IndexerTokenWithAuctionFragment>;
  networkId: NetworkIDs;
  timeout: number;
  mediaContractAddress: string;

  constructor(
    networkId: NetworkIDs,
    timeout: number = 5,
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

  transformNFT(asset: IndexerTokenWithAuctionFragment, object: NFTObject) {
    object.nft = {
      tokenId: asset.tokenId,
      contract: {
        address: asset.tokenContract?.address!,
        name: asset.tokenContract?.name!,
        symbol: asset.tokenContract?.symbol!,
        description: null,
      },
      owner: asset.owner,
      creator: asset.minter!,
      metadataURI: asset.media ? asset.media.metadataURI! : asset.tokenURI!,
      contentURI: asset.media?.contentURI!,
    };
    object.rawData['zora-indexer'] = asset;
    return object;
  }

  async loadNFT(tokenContract: string, tokenId: string) {
    return await this.nftGraphDataLoader.load(`${tokenContract}-${tokenId}`);
  }
  async loadNFTs(tokenContractAndId: readonly string[]) {
    return await this.nftGraphDataLoader.loadMany(tokenContractAndId);
  }

  async fetchNFTs(mediaIds: readonly string[]) {
    const response = (await this.getClient().request(INDEXER_BY_IDS_QUERY, {
      ids: mediaIds,
    })) as ByIdsQuery;
    return mediaIds.map(
      (key) =>
        response.Token.find((media) => media.id === key) || new Error('Missing record')
    );
  }

  async fetchNFTSForQuery(
    collectionAddresses: string[],
    curatorAddress: string,
    approved = null,
    onlyAuctions = false,
    limit = 200,
    offset = 0
  ) {
    if (!collectionAddresses?.length && !curatorAddress) {
      throw new ArgumentsError('Needs to have at least one curator or collector');
    }
    if (!onlyAuctions && approved !== null) {
      throw new ArgumentsError(
        'approved=true or approved=false and onlyAuctions=false cannot be set at the same time for fetchZoraIndexerGroupData'
      );
    }
    let queryStatement: Token_Bool_Exp[] = [];
    if (collectionAddresses) {
      const addresses = collectionAddresses.map((address) => getAddress(address));
      queryStatement.push({ address: { _in: addresses } });
    }
    let approvedStatement = undefined;
    if (approved !== null) {
      approvedStatement = { approved: { _eq: approved } };
    }
    if (curatorAddress) {
      queryStatement.push({
        auctions: { curator: { _eq: curatorAddress }, ...approvedStatement },
      });
    } else if (approvedStatement || onlyAuctions) {
      let auctionsQueryStmt = {};
      if (onlyAuctions) {
        auctionsQueryStmt = { _not: {} };
      }
      queryStatement.push({ auctions: { ...auctionsQueryStmt, ...approvedStatement } });
    }

    const nfts = (
      await this.getClient().request(ACTIVE_AUCTIONS_QUERY, {
        andQuery: queryStatement,
        offset,
        limit,
      })
    ).Token as IndexerTokenWithAuctionFragment[];
    return nfts.map((result) =>
      this.transformNFT(result, {
        rawData: {},
      })
    );
  }

  /**
   * Un-batched fetch function to fetch a group of NFT data from the zora indexer
   *
   * @param collectionAddresses list of addresses for collection
   * @param userAddress address of user
   * @param type type of ids: creator, id (of media), owner
   * @returns
   */
  async fetchUserOwnedNFTs({
    collectionAddresses,
    userAddress,
    offset = 0,
    limit = 250,
  }: {
    collectionAddresses?: string[];
    userAddress: string;
    offset?: number;
    limit?: number;
  }) {
    let addressQueryPart = {} as String_Comparison_Exp;
    if (collectionAddresses?.length) {
      addressQueryPart['_in'] = collectionAddresses.map(getAddress);
    }

    const response = await this.getClient().request(BY_OWNER, {
      addressQueryPart,
      owner: getAddress(userAddress),
      offset,
      limit,
    });
    const tokens = response.Token as IndexerTokenWithAuctionFragment[];
    return tokens.map((result) =>
      this.transformNFT(result, {
        rawData: {},
      })
    );
  }

  getClient() {
    const fetchWithTimeout = new FetchWithTimeout(this.timeout);
    return new GraphQLClient(THEGRAPH_API_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });
  }
}
