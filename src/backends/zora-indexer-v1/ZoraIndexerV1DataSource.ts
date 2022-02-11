import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';
import { getAddress } from '@ethersproject/address';
import Big from 'big.js';

import { ZORA_MEDIA_CONTRACT_BY_NETWORK } from '../../constants/addresses';
import { NetworkIDs } from '../../constants/networks';
import { ZORA_INDEXER_URL_BY_NETWORK } from '../../constants/urls';
import { FetchWithTimeout } from '../../fetcher/FetchWithTimeout';
import {
  AuctionBidEventPartFragment,
  ByIdsQuery,
  IndexerAuctionPartFragment,
  IndexerTokenWithAuctionFragment,
  String_Comparison_Exp,
  Token_Bool_Exp,
  V3AskPartFragment,
} from './zora-indexer-types';
import {
  AuctionBidEvent,
  AuctionLike,
  FixedPriceLike,
  MetadataAttributeType,
  NFTObject,
} from '../NFTInterface';
import { ZoraIndexerV1Interface } from './ZoraIndexerV1Interface';
import {
  ACTIVE_AUCTIONS_QUERY,
  BY_IDS as INDEXER_BY_IDS_QUERY,
  BY_OWNER,
} from './zora-indexer';
import { ArgumentsError } from '../../fetcher/ErrorUtils';

function dateToUnix(date?: string) {
  if (!date) {
    return undefined;
  }
  return Math.floor(new Date(date).getTime() / 1000);
}

function priceToPretty(number: string, decimals?: number | null) {
  return new Big(number)
    .div(new Big(10).pow(decimals || 18))
    .toFixed(2)
    .toString();
}

function getAttributes(json: any) {
  const result: MetadataAttributeType[] = [];
  if (json.properties) {
    try {
      Object.keys(json.properties).forEach((name: string) => {
        result.push({ name, value: json.properties[name] as string, display: null });
      });
    } catch {}
  }
  if (json.attributes) {
    try {
      json.attributes.forEach((attribute: any) => {
        result.push({
          name: attribute.trait_type,
          value: attribute.value,
          display: attribute.display_type,
        });
      });
    } catch {}
  }
  return result;
}

function timeIsPast(time: string) {
  return new Date(time).getTime() < new Date().getTime();
}

function extractAsk(ask: V3AskPartFragment): FixedPriceLike {
  const getStatus = () => {
    if (ask.status === 'FILLED') {
      return 'complete';
    }
    if (ask.status === 'PENDING') {
      return 'active';
    }
    if (ask.status === 'CANCELLED') {
      return 'active';
    }
    return 'unknown';
  };
  // if the asker is not the current owner, then we remove the ask?

  const createdEvent = ask.events.find(
    (event) => event.eventType === 'Ask_v1_AskCreated'
  )!;
  const filledEvent = ask.events.find((event) => event.eventType === 'Ask_v1_AskFilled');
  const cancelledEvent = ask.events.find(
    (event) => event.eventType === 'Ask_v1_Cancelled'
  );

  return {
    status: getStatus(),
    amount: {
      amount: ask.askPrice,
      prettyAmount: priceToPretty(ask.askPrice, null),
      currency: ask.askCurrency,
      name: 'UNKN',
      symbol: 'UNKN',
      decimals: undefined,
      // other info not provided
      // currency.decimals / currency.name / currency.symbol
    },
    side: 'ask',
    type: 'FixedPrice',
    cancelledAt: cancelledEvent
      ? {
          timestamp: dateToUnix(cancelledEvent.blockTimestamp)!,
          blockNumber: cancelledEvent.blockNumber,
          transactionHash: cancelledEvent.transactionHash,
        }
      : undefined,
    createdAt: {
      timestamp: dateToUnix(createdEvent.blockTimestamp)!,
      blockNumber: createdEvent.blockNumber,
      transactionHash: createdEvent.transactionHash,
    },
    finishedAt: filledEvent
      ? {
          timestamp: dateToUnix(filledEvent.blockTimestamp)!,
          blockNumber: filledEvent.blockNumber,
          transactionHash: filledEvent.transactionHash,
        }
      : undefined,
    source: 'ZoraAskV1',
    raw: ask,
  };
}

function extractAuction(auction: IndexerAuctionPartFragment) {
  const getStatus = () => {
    if (!auction.approved) {
      return 'pending';
    }
    if (auction.endedEvent) {
      return 'complete';
    }
    if (auction.expiresAt && timeIsPast(auction.expiresAt)) {
      return 'complete';
    }
    if (auction.firstBidTime) {
      return 'active';
    }
    return 'unknown';
  };

  const addCurrencyInfo = (amount: string) => {
    const currency = auction.currency!;
    return {
      currency: currency.address,
      name: currency.name,
      symbol: currency.symbol,
      decimals: currency.decimals,
      amount,
      prettyAmount: priceToPretty(amount, currency.decimals || 18),
    };
  };

  const getAmount = () => {
    if (auction.lastBidAmount) {
      return addCurrencyInfo(auction.lastBidAmount);
    }
    return addCurrencyInfo(auction.reservePrice!);
  };

  const formatBid = (bid: AuctionBidEventPartFragment): AuctionBidEvent => ({
    creator: bid.sender,
    amount: addCurrencyInfo(bid.value),
    created: {
      timestamp: dateToUnix(bid.blockTimestamp)!,
      blockNumber: bid.blockNumber,
      transactionHash: bid.transactionHash,
    },
  });

  const getHighestBid = () => {
    return auction.bidEvents[auction.bidEvents.length - 1];
  };

  const resultAuction: AuctionLike = {
    status: getStatus(),
    amount: getAmount(),
    raw: auction,
    createdAt: {
      timestamp: dateToUnix(auction.createdEvent!.blockTimestamp)!,
      blockNumber: auction.createdEvent!.blockNumber,
      transactionHash: auction.createdEvent!.transactionHash,
    },
    type: 'Auction',
    finishedAt: auction.endedEvent
      ? {
          timestamp: dateToUnix(auction.endedEvent.blockTimestamp)!,
          blockNumber: auction.endedEvent.blockNumber,
          transactionHash: auction.endedEvent.transactionHash,
        }
      : undefined,
    startedAt: auction.firstBidTime
      ? {
          timestamp: dateToUnix(auction.firstBidTime)!,
          blockNumber: null,
          transactionHash: null,
        }
      : undefined,
    cancelledAt: auction.canceledEvent
      ? {
          timestamp: dateToUnix(auction.canceledEvent.blockTimestamp)!,
          // TODO(iain): add in missing info
          blockNumber: null,
          // TODO(iain): add in missing info
          transactionHash: null,
        }
      : undefined,
    endsAt: {
      timestamp: dateToUnix(auction.expiresAt)!,
      blockNumber: auction.endedEvent?.blockNumber ?? null,
      transactionHash: auction.endedEvent?.transactionHash ?? null,
    },
    winner: getHighestBid().sender,
    duration: dateToUnix(auction.duration!)!,
    currentBid: formatBid(getHighestBid()),
    source: 'ZoraReserveV0',
    bids: [...auction.bidEvents.map((bid) => formatBid(bid))],
  };
  return resultAuction;
}

function extractMarketData(response: IndexerTokenWithAuctionFragment, _: NFTObject) {
  return [
    ...response.auctions.map((auction) => extractAuction(auction)),
    ...(response.v3Ask ? [extractAsk(response.v3Ask)] : []),
  ];
}

export class ZoraIndexerV1DataSource implements ZoraIndexerV1Interface {
  nftGraphDataLoader: DataLoader<string, IndexerTokenWithAuctionFragment>;
  networkId: NetworkIDs;
  timeout: number;
  endpoint: string;
  mediaContractAddress: string;

  constructor(
    networkId: NetworkIDs,
    timeout: number = 5,
    mediaContractAddress: string = ZORA_MEDIA_CONTRACT_BY_NETWORK[networkId],
    endpoint: string = ZORA_INDEXER_URL_BY_NETWORK[networkId]
  ) {
    this.nftGraphDataLoader = new DataLoader(this.fetchNFTs);
    this.timeout = timeout;
    this.endpoint = endpoint;
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
      minted: {
        at: {
          blockNumber: asset.mintTransferEvent?.blockNumber || null,
          // TODO(iain): fix normalization to handle missing date information
          timestamp: asset.mintTransferEvent
            ? dateToUnix(asset.mintTransferEvent?.blockTimestamp)!
            : 0,
          transactionHash: asset.mintTransferEvent?.transactionHash || null,
        },
        minter: asset.minter || undefined,
      },
      owner: asset.owner,
      metadataURI: asset.media ? asset.media.metadataURI! : asset.tokenURI!,
      contentURI: asset.media?.contentURI!,
    };
    const metadata_json = asset.metadata?.json || {};
    object.metadata = {
      name: metadata_json.name,
      description: metadata_json.description,
      animation_url: metadata_json.animation_url,
      image: metadata_json.image,
      attributes: getAttributes(metadata_json),
      raw: asset.metadata?.json,
    };
    if (!object.rawData) {
      object.rawData = {};
    }
    object.markets = extractMarketData(asset, object);
    if (!object.rawData) {
      object.rawData = {};
    }
    object.rawData['zora-indexer'] = asset;
    return object;
  }

  loadNFT = async (tokenContract: string, tokenId: string) => {
    return await this.nftGraphDataLoader.load(`${tokenContract}-${tokenId}`);
  };
  loadNFTs = async (tokenContractAndId: readonly string[]) => {
    return await this.nftGraphDataLoader.loadMany(tokenContractAndId);
  };

  fetchNFTs = async (mediaIds: readonly string[]) => {
    const response = (await this.getClient().request(INDEXER_BY_IDS_QUERY, {
      ids: mediaIds,
    })) as ByIdsQuery;
    return mediaIds.map(
      (key) =>
        response.Token.find((media) => media.id === key) || new Error('Missing record')
    );
  };

  fetchNFTSForQuery = async (
    collectionAddresses: string[],
    curatorAddress: string,
    approved = null,
    onlyAuctions = false,
    limit = 200,
    offset = 0
  ) => {
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
  };


  /**
   * Un-batched fetch function to fetch a group of NFT data from the zora indexer
   *
   * @param collectionAddresses list of addresses for collection
   * @param userAddress address of user
   * @param type type of ids: creator, id (of media), owner
   * @returns
   */
  async fetchZoraIndexerUserOwnedNFTs({
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
    const fetchWithTimeout = new FetchWithTimeout(this.timeout);
    const client = new GraphQLClient(ZORA_INDEXER_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });

    let addressQueryPart = {} as String_Comparison_Exp;
    if (collectionAddresses?.length) {
      addressQueryPart['_in'] = collectionAddresses.map(getAddress);
    }

    const response = await client.request(BY_OWNER, {
      addressQueryPart,
      owner: getAddress(userAddress),
      offset,
      limit,
    });
    const tokens = response.Token as IndexerTokenWithAuctionFragment[];
    return tokens.map((token) => this.transformNFT(token, {rawData: {}}));
  }

  /**
   * Un-batched fetch function to fetch a group of NFT data from the zora indexer
   *
   * @param collectionAddresses list of addresses for collection
   * @param userAddress address of user
   * @param type type of ids: creator, id (of media), owner
   * @returns
   */
  fetchUserOwnedNFTs = async ({
    collectionAddresses,
    userAddress,
    offset = 0,
    limit = 250,
  }: {
    collectionAddresses?: string[];
    userAddress: string;
    offset?: number;
    limit?: number;
  }) => {
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
  };

  getClient() {
    const fetchWithTimeout = new FetchWithTimeout(this.timeout);
    return new GraphQLClient(this.endpoint, {
      fetch: fetchWithTimeout.fetch,
    });
  }
}
