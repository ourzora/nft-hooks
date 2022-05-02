import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';
import { getAddress } from '@ethersproject/address';
import Big from 'big.js';

import { ZERO_ADDRESS, ZORA_MEDIA_CONTRACT_BY_NETWORK } from '../../constants/addresses';
import { NetworkIDs } from '../../constants/networks';
import { ZORA_INDEXER_URL_BY_NETWORK } from '../../constants/urls';
import { FetchWithTimeout } from '../../fetcher/FetchWithTimeout';
import {
  AuctionBidEventPartFragment,
  ByIdsQuery,
  IndexerAuctionPartFragment,
  IndexerTokenWithAuctionFragment,
  String_Comparison_Exp,
  TokenTransferEventInfoFragment,
  Token_Bool_Exp,
  IndexerTokenWithAuctionDetailFragment,
  V3AskPartFragment,
  V3EventPartFragment,
  Token_Order_By,
  Order_By,
} from './zora-indexer-types';
import {
  AuctionBidEvent,
  AuctionLike,
  AUCTION_SOURCE_TYPES,
  FixedPriceLike,
  FIXED_PRICE_MARKET_SOURCES,
  FIXED_SIDE_TYPES,
  MARKET_INFO_STATUSES,
  MARKET_TYPES,
  MEDIA_SOURCES,
  MetadataAttributeType,
  NFTIdentifier,
  NFTObject,
  TokenMarketEvent,
  TokenTransferEvent,
  TOKEN_TRANSFER_EVENT_CONTEXT_TYPES,
  TOKEN_TRANSFER_EVENT_TYPES,
} from '../../types/NFTInterface';
import { ZoraIndexerV1Interface } from './ZoraIndexerV1Interface';
import {
  ACTIVE_AUCTIONS_QUERY,
  BY_IDS as INDEXER_BY_IDS_QUERY,
  BY_OWNER,
} from './zora-indexer';
import { ArgumentsError } from '../../fetcher/ErrorUtils';
import { MarketType, NFTQuery, SortDirection, SortField } from '../../types/NFTQuery';
import { NFT_ID_SEPERATOR } from '../../constants/shared';

function dateToUnix(date?: string) {
  if (!date) {
    return undefined;
  }
  return Math.floor(new Date(date).getTime() / 1000);
}

function getLast<T>(items: T[]) {
  if (items && items.length) {
    return items[items.length - 1];
  }
  return undefined;
}

function priceToPretty(number: string, decimals?: number | null) {
  return new Big(number).div(new Big(10).pow(decimals || 18)).toNumber();
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

const getAskEventStatus = (askEvent: V3EventPartFragment): MARKET_INFO_STATUSES => {
  if (askEvent.eventType === 'Ask_v1_AskCreated') {
    return MARKET_INFO_STATUSES.ACTIVE;
  }
  if (askEvent.eventType === 'Ask_v1_AskFilled') {
    return MARKET_INFO_STATUSES.COMPLETE;
  }
  if (askEvent.eventType === 'Ask_v1_AskCancelled') {
    return MARKET_INFO_STATUSES.CANCELED;
  }
  if (askEvent.eventType === 'Ask_v1_AskPriceUpdated') {
    return MARKET_INFO_STATUSES.ACTIVE;
  }
  return MARKET_INFO_STATUSES.UNKNOWN;
};

const getAskStatus = (status: string): MARKET_INFO_STATUSES => {
  if (status === 'ACTIVE') {
    return MARKET_INFO_STATUSES.ACTIVE;
  }
  if (status === 'FILLED') {
    return MARKET_INFO_STATUSES.COMPLETE;
  }
  if (status === 'CANCELLED') {
    return MARKET_INFO_STATUSES.CANCELED;
  }
  return MARKET_INFO_STATUSES.UNKNOWN;
};

function extractAsk(ask: V3AskPartFragment): FixedPriceLike {
  const created = ask.events.find((e) => e.eventType === 'Ask_v1_AskCreated')!;
  return {
    status: getAskStatus(ask.status),
    amount: {
      amount: {
        raw: ask.askPrice,
        value: priceToPretty(ask.askPrice),
        decimals: undefined,
      },
      address: ask.askCurrency,
      name: ask.askCurrency === ZERO_ADDRESS ? 'Ether' : 'UNKN',
      symbol: ask.askCurrency === ZERO_ADDRESS ? 'ETH' : 'UNKN',
      // other info not provided
      // currency.decimals / currency.name / currency.symbol
    },
    side: FIXED_SIDE_TYPES.ASK,
    type: MARKET_TYPES.FIXED_PRICE,
    canceledAt: undefined,
    createdAt: {
      timestamp: dateToUnix(created.blockTimestamp)!,
      blockNumber: created.blockNumber,
      transactionHash: created.transactionHash,
    },
    createdBy: ask.seller,
    finishedAt: undefined,
    // finishedAt: completeEvent
    //   ? {
    //       timestamp: dateToUnix(completeEvent.blockTimestamp)!,
    //       blockNumber: completeEvent.blockNumber,
    //       transactionHash: completeEvent.transactionHash,
    //     }
    //   : undefined,
    source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V3,
    raw: ask,
  };
}

function extractAskEvents(askEvents: V3EventPartFragment[]): TokenMarketEvent[] {
  return askEvents.map((askEvent) => {
    let status = getAskEventStatus(askEvent);

    // if (indx !== latestAskEvent?.indx) {
    //   // get next event to see if cancelled or filled
    //   for (let i = indx; i < askEvents.length; i++) {
    //     if (askEvents[i].eventType === 'Ask_v1_AskCreated') {
    //       status = 'cancelled';
    //       break;
    //     }
    //     if (askEvents[i].eventType === 'Ask_v1_AskPriceUpdated') {
    //       // invalidate updated price and treat as new ask
    //       status = 'invalid';
    //       break;
    //     }
    //     if (askEvents[i].eventType === 'Ask_v1_AskCancelled') {
    //       canceledEvent = askEvents[i];
    //       status = 'cancelled';
    //       break;
    //     }
    //     if (askEvents[i].eventType === 'Ask_v1_AskFilled') {
    //       completeEvent = askEvents[i];
    //       status = 'complete';
    //       break;
    //     }
    //   }
    // }

    return {
      eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT,
      at: {
        blockNumber: askEvent.blockNumber,
        timestamp: askEvent.blockTimestamp,
        transactionHash: askEvent.transactionHash,
      },
      market: {
        status,
        amount: {
          amount: {
            raw: askEvent.details?.askPrice,
            value: priceToPretty(askEvent.details.askPrice, null),
          },
          address: askEvent.details?.askCurrency,
          name: askEvent.details?.askCurrency === ZERO_ADDRESS ? 'Ether' : 'UNKN',
          symbol: askEvent.details?.askCurrency === ZERO_ADDRESS ? 'ETH' : 'UNKN',
          decimals: undefined,
          // other info not provided
          // currency.decimals / currency.name / currency.symbol
        },
        side: FIXED_SIDE_TYPES.ASK,
        type: MARKET_TYPES.FIXED_PRICE,
        cancelledAt:
          status === MARKET_INFO_STATUSES.CANCELED
            ? {
                timestamp: dateToUnix(askEvent.blockTimestamp)!,
                blockNumber: askEvent.blockNumber,
                transactionHash: askEvent.transactionHash,
              }
            : undefined,
        createdAt: {
          timestamp: dateToUnix(askEvent.blockTimestamp)!,
          blockNumber: askEvent.blockNumber,
          transactionHash: askEvent.transactionHash,
        },
        createdBy:
          status !== MARKET_INFO_STATUSES.COMPLETE
            ? askEvent.details?.seller
            : askEvent.details?.buyer,
        finishedAt:
          status === MARKET_INFO_STATUSES.COMPLETE
            ? {
                timestamp: dateToUnix(askEvent.blockTimestamp)!,
                blockNumber: askEvent.blockNumber,
                transactionHash: askEvent.transactionHash,
              }
            : undefined,
        source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V1_EVENT,
        raw: askEvent,
      },
    };
  });
}

function extractAuction(auction: IndexerAuctionPartFragment) {
  const getStatus = () => {
    if (auction.canceledEvent) {
      return MARKET_INFO_STATUSES.CANCELED;
    }
    if (!auction.approved || (auction.approved && !auction.firstBidTime)) {
      return MARKET_INFO_STATUSES.PENDING;
    }
    if (auction.endedEvent) {
      return MARKET_INFO_STATUSES.COMPLETE;
    }
    if (auction.expiresAt && timeIsPast(auction.expiresAt)) {
      return MARKET_INFO_STATUSES.COMPLETE;
    }
    if (auction.firstBidTime) {
      return MARKET_INFO_STATUSES.ACTIVE;
    }
    return MARKET_INFO_STATUSES.UNKNOWN;
  };

  const addCurrencyInfo = (amount: string) => {
    const currency = auction.currency!;
    return {
      address: currency.address,
      name: currency.name,
      symbol: currency.symbol,
      decimals: currency.decimals,
      amount: {
        raw: amount,
        value: priceToPretty(amount, currency.decimals || 18),
      },
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

  const highestBid = getLast(auction.bidEvents);

  const resultAuction: AuctionLike = {
    status: getStatus(),
    amount: getAmount(),
    raw: auction,
    createdAt: {
      timestamp: dateToUnix(auction.createdEvent!.blockTimestamp)!,
      blockNumber: auction.createdEvent!.blockNumber,
      transactionHash: auction.createdEvent!.transactionHash,
    },
    createdBy: auction.tokenOwner || undefined,
    type: MARKET_TYPES.AUCTION,
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
        }
      : undefined,
    canceledAt: auction.canceledEvent
      ? {
          timestamp: dateToUnix(auction.canceledEvent.blockTimestamp)!,
          blockNumber: auction.canceledEvent.blockNumber,
          transactionHash: auction.canceledEvent.transactionHash,
        }
      : undefined,
    endsAt: {
      timestamp: dateToUnix(auction.expiresAt)!,
      blockNumber: auction.endedEvent?.blockNumber,
      transactionHash: auction.endedEvent?.transactionHash,
    },
    winner: highestBid?.sender,
    duration: auction.duration ? parseInt(auction.duration) : 0,
    currentBid: highestBid ? formatBid(highestBid) : undefined,
    source: AUCTION_SOURCE_TYPES.ZORA_RESERVE_V2,
    bids: [...auction.bidEvents.map((bid) => formatBid(bid))],
  };
  return resultAuction;
}

function getTransferType(
  transferEvent: TokenTransferEventInfoFragment
): TOKEN_TRANSFER_EVENT_TYPES {
  if (transferEvent.from === ZERO_ADDRESS) {
    return TOKEN_TRANSFER_EVENT_TYPES.MINT;
  }
  if (transferEvent.to === ZERO_ADDRESS) {
    return TOKEN_TRANSFER_EVENT_TYPES.BURN;
  }
  return TOKEN_TRANSFER_EVENT_TYPES.TRANSFER;
}

function extractTransferEvents(
  transferEvents: TokenTransferEventInfoFragment[]
): TokenTransferEvent[] {
  return transferEvents.map((transferEvent) => ({
    eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_TRANSFER_EVENT,
    from: transferEvent.from,
    to: transferEvent.to,
    at: {
      timestamp: dateToUnix(transferEvent.blockTimestamp)!,
      blockNumber: transferEvent.blockNumber,
      transactionHash: transferEvent.transactionHash,
    },
    type: getTransferType(transferEvent),
  }));
}

function extractMarketData(response: IndexerTokenWithAuctionFragment, _: NFTObject) {
  return [
    ...response.auctions.map((auction) => extractAuction(auction)),
    ...(response.v3Ask ? [extractAsk(response.v3Ask)] : []),
  ];
}

export function transformNFTZoraIndexerV1DataSource(
  asset: IndexerTokenWithAuctionFragment,
  object?: NFTObject
) {
  if (!object) {
    object = { rawData: {} };
  }
  object.nft = {
    tokenId: asset.tokenId,
    contract: {
      address: asset.tokenContract?.address!,
      name: asset.tokenContract?.name || undefined,
      symbol: asset.tokenContract?.symbol || undefined,
    },
    minted: {
      at: {
        blockNumber: asset.mintTransferEvent?.blockNumber,
        // TODO(iain): fix normalization to handle missing date information
        timestamp: asset.mintTransferEvent
          ? dateToUnix(asset.mintTransferEvent?.blockTimestamp)!
          : 0,
        transactionHash: asset.mintTransferEvent?.transactionHash,
      },
      address: asset.minter || undefined,
    },
    owner: {
      address: asset.owner,
    },
    metadataURI: asset.media ? asset.media.metadataURI! : asset.tokenURI!,
    contentURI: asset.media?.contentURI!,
  };
  const metadata_json = asset.metadata?.json || {};
  object.metadata = {
    name: metadata_json.name,
    description: metadata_json.description,
    contentUri: metadata_json.animation_url,
    imageUri: metadata_json.image,
    attributes: getAttributes(metadata_json),
    raw: asset.metadata?.json,
  };
  object.media = {
    content: asset.media?.contentURI
      ? {
          uri: asset.media?.contentURI,
        }
      : null,
    thumbnail: null,
    image: null,
    source: MEDIA_SOURCES.ZORA,
  };
  if (!object.rawData) {
    object.rawData = {};
  }
  object.markets = extractMarketData(asset, object);
  object.events = [];
  // extract auction events?
  if ('v3Events' in asset) {
    const assetFull: IndexerTokenWithAuctionDetailFragment = asset;
    object.events = [
      ...extractAskEvents(assetFull.v3Events),
      ...extractTransferEvents(assetFull.transferEvents),
    ];
  }
  if (!object.rawData) {
    object.rawData = {};
  }
  object.rawData['ZoraIndexer'] = asset;
  return object;
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

  transformNFT(asset: IndexerTokenWithAuctionFragment, object?: NFTObject) {
    return transformNFTZoraIndexerV1DataSource(asset, object);
  }

  loadNFT = async ({ contract, id }: NFTIdentifier) => {
    return await this.nftGraphDataLoader.load(
      `${getAddress(contract)}${NFT_ID_SEPERATOR}${id}`
    );
  };

  loadNFTs = async (nfts: readonly NFTIdentifier[]) => {
    return await this.nftGraphDataLoader.loadMany(
      nfts.map((nft) => `${getAddress(nft.contract)}${NFT_ID_SEPERATOR}${nft.id}`)
    );
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

  queryNFTs = async ({ query, sort, pagination, additional }: NFTQuery) => {
    // sanity check
    if (!query.collections && !query.minters && !query.owners) {
      throw new ArgumentsError('One of Collection / Minter / Owner is required');
    }
    // query filter
    let queryStatement: Token_Bool_Exp[] = [];
    if (query.collections) {
      queryStatement.push({ address: { _in: query.collections.map(getAddress) } });
    }
    if (query.minters) {
      queryStatement.push({ minter: { _in: query.minters } });
    }
    if (query.owners) {
      queryStatement.push({ owner: { _in: query.owners } });
    }

    // markets filter
    if (query.activeMarkets) {
      const marketHas = (market: MarketType) => query.activeMarkets!.includes(market);

      if (marketHas(MarketType.AUCTION) || marketHas(MarketType.ANY_MARKET)) {
        if (additional?.isApproved) {
          queryStatement.push({
            currentAuction: { approved: { _eq: additional.isApproved } },
          });
        } else {
          queryStatement.push({ _not: { currentAuction: {} } });
        }
      }
      if (marketHas(MarketType.FIXED_PRICE) || marketHas(MarketType.ANY_MARKET)) {
        queryStatement.push({ _not: { v3Ask: {} } });
      }
    }

    // sorting
    let orderByStatement: Token_Order_By[] = [
      // set default
      {
        mintTransferEvent: { blockNumber: Order_By.Desc },
      },
    ];

    if (sort) {
      const nestedSorts = sort.map((sortItem) => {
        const orderBy =
          sortItem.direction === SortDirection.ASC
            ? Order_By.AscNullsLast
            : Order_By.DescNullsLast;
        if (sortItem.field === SortField.ACTIVE) {
          return [{}];
        }
        if (sortItem.field === SortField.MINTED) {
          return [{ mintTransferEvent: { blockNumber: orderBy } }];
        }
        if (sortItem.field === SortField.FIXED_PRICE) {
          return [{ v3Ask: { askPrice: orderBy } }];
        }
        if (sortItem.field === SortField.AUCTION_PRICE) {
          return [{ currentAuction: { reservePrice: orderBy } }];
        }
        if (sortItem.field === SortField.ANY_PRICE) {
          return [
            { currentAuction: { reservePrice: orderBy } },
            { v3Ask: { askPrice: orderBy } },
          ];
        }
        if (sortItem.field === SortField.TOKEN_ID) {
          return [{ tokenId: orderBy }];
        }
        return [];
      });
      orderByStatement = nestedSorts.reduce(
        (lastSort, value) => [...lastSort, ...value],
        []
      );
    }

    let offset = 0;
    let limit = 100;
    if (pagination?.offset) {
      offset = pagination.offset;
    }
    if (pagination?.limit) {
      limit = pagination.limit;
    }

    const result = await this.getClient().request(ACTIVE_AUCTIONS_QUERY, {
      andQuery: queryStatement,
      orderBy: orderByStatement,
      offset,
      limit,
    });
    const tokens = result.Token as IndexerTokenWithAuctionFragment[];
    return tokens;
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
    return tokens.map((token) => this.transformNFT(token, { rawData: {} }));
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
