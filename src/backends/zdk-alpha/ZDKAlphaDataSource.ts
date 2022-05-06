import { NetworkIDs, NFTObject } from '../../';
import {
  SharedTokenResponse,
  TokenResponseItem,
  ZDKAlphaDataInterface,
} from './ZDKAlphaDataInterface';
import { ZDK } from '@zoralabs/zdk-alpha/dist/src/index';
import {
  Chain,
  MarketType as ZDKMarketType,
  Network,
  SortDirection as ZDKSortDirection,
  V1Ask,
  V1MarketEntityStatus,
  V1Offer,
  V3AskStatus,
  V2AuctionStatus,
  V3AskPropertiesFragment,
  V2AuctionMarketPropertiesFragment,
  PriceSummaryFragment,
  TokenSortKey,
  TokensQueryInput,
  TokensQueryFilter,
  TokenSortInput,
  MarketDetailsFragment,
  MarketInfoFragment,
  EventType,
  EventInfoFragment,
  V1MarketEventType,
  V2AuctionEventType,
} from '@zoralabs/zdk-alpha/dist/src/queries/queries-sdk';
import { MarketType, NFTQuery, SortDirection, SortField } from '../../types/NFTQuery';
import {
  AUCTION_SOURCE_TYPES,
  FIXED_PRICE_MARKET_SOURCES,
  FIXED_SIDE_TYPES,
  MarketModule,
  MARKET_INFO_STATUSES,
  MARKET_TYPES,
  MEDIA_SOURCES,
  NFTIdentifier,
  TokenEvent,
  TokenTransferEvent,
  TOKEN_TRANSFER_EVENT_CONTEXT_TYPES,
  TOKEN_TRANSFER_EVENT_TYPES,
} from '../../types';
import { ZERO_ADDRESS } from 'src/constants/addresses';
import { NotFoundError } from 'src/fetcher/ErrorUtils';

function dateToUnix(date: string) {
  return Math.floor(new Date(date).getTime() / 1000);
}

function getChainFromNetwork(network: NetworkIDs) {
  switch (network) {
    case '1':
      return Chain.Mainnet;
    // case '3':
    //   return Chain.Ropsten;
    // case '4':
    //   return Chain.Rinkeby;
    default:
      throw new Error('Chain not supported');
  }
}

const resolveSortKey = (sortField: SortField) => {
  if (sortField === SortField.MINTED) {
    return TokenSortKey.Minted;
  }
  if (sortField === SortField.ACTIVE) {
    return TokenSortKey.Transferred;
  }
  if (sortField === SortField.ANY_PRICE) {
    throw new Error('not supported');
  }
  if (sortField === SortField.TOKEN_ID) {
    return TokenSortKey.TokenId;
  }
  throw new Error('not supported');
};

// works for v1
function mapMarketEventTypeToStatus(marketEventType: V1MarketEventType) {
  switch (marketEventType) {
    case V1MarketEventType.V1MarketAskCreated:
      return MARKET_INFO_STATUSES.PENDING;

    case V1MarketEventType.V1MarketAskRemoved:
      return MARKET_INFO_STATUSES.CANCELED;

    case V1MarketEventType.V1MarketBidCreated:
      return MARKET_INFO_STATUSES.ACTIVE;

    case V1MarketEventType.V1MarketBidFinalized:
      return MARKET_INFO_STATUSES.COMPLETE;

    // double check below:
    case V1MarketEventType.V1MarketBidRemoved:
      return MARKET_INFO_STATUSES.UNKNOWN;

    case V1MarketEventType.V1MarketBidShareUpdated:
      return MARKET_INFO_STATUSES.UNKNOWN;

    default:
      return MARKET_INFO_STATUSES.INVALID;
  }
}

function getEvents(events: EventInfoFragment[]): TokenEvent[] {
  return events
    .map((tokenEvent) => {
      const common = {
        at: {
          timestamp: dateToUnix(tokenEvent.transactionInfo.blockTimestamp),
          blockNumber: tokenEvent.transactionInfo.blockNumber,
          transactionHash: tokenEvent.transactionInfo.transactionHash || undefined,
        },
      };

      if (
        tokenEvent.eventType === EventType.MintEvent &&
        tokenEvent.properties.__typename === 'MintEvent'
      ) {
        const mint: TokenTransferEvent = {
          ...common,
          from: ZERO_ADDRESS,
          to: tokenEvent.properties.toAddress,
          type: TOKEN_TRANSFER_EVENT_TYPES.MINT,
          eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_TRANSFER_EVENT,
        };
        return mint;
      }
      if (
        tokenEvent.eventType === EventType.TransferEvent &&
        tokenEvent.properties.__typename === 'TransferEvent'
      ) {
        const transfer: TokenTransferEvent = {
          ...common,
          from: tokenEvent.properties.fromAddress,
          to: tokenEvent.properties.toAddress,
          eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_TRANSFER_EVENT,
          type:
            tokenEvent.properties.toAddress === ZERO_ADDRESS
              ? TOKEN_TRANSFER_EVENT_TYPES.BURN
              : TOKEN_TRANSFER_EVENT_TYPES.TRANSFER,
        };
        return transfer;
      }

      if (
        tokenEvent.eventType === EventType.V1MarketEvent &&
        tokenEvent.properties.__typename === 'V1MarketEvent'
      ) {
        return {
          ...common,
          eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT as const,
          market: {
            side: FIXED_SIDE_TYPES.ASK,
            source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V1,
            type: MARKET_TYPES.FIXED_PRICE as const,
            // FIXME below
            expires: undefined,
            // FIXME above
            status: mapMarketEventTypeToStatus(tokenEvent.properties.marketEventType),
            raw: tokenEvent,
            createdAt: {
              timestamp: dateToUnix(tokenEvent.transactionInfo.blockTimestamp),
              blockNumber: tokenEvent.transactionInfo.blockNumber,
              transactionHash: tokenEvent.transactionInfo.transactionHash!,
            },
          },
        };
      }

      if (
        tokenEvent.eventType === EventType.V2AuctionEvent &&
        tokenEvent.properties.__typename === 'V2AuctionEvent'
      ) {
        if (
          tokenEvent.properties.auctionEventType ===
          V2AuctionEventType.V2AuctionApprovalUpdated
        ) {
          return {
            ...common,
            eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT as const,
            market: {
              type: MARKET_TYPES.AUCTION as const,
              source: AUCTION_SOURCE_TYPES.ZORA_RESERVE_V2,
              // FIXME below
              bids: [],
              duration: 0,
              status: MARKET_INFO_STATUSES.UNKNOWN,
              // FIXME above
              raw: tokenEvent,
              createdAt: {
                timestamp: dateToUnix(tokenEvent.transactionInfo.blockTimestamp),
                blockNumber: tokenEvent.transactionInfo.blockNumber,
                transactionHash: tokenEvent.transactionInfo.transactionHash!,
              },
            },
          };
        }

        // return {
        //   market: {
        //     bids:
        //     source: AUCTION_SOURCE_TYPES;
        //     type: MARKET_TYPES.AUCTION;
        //     winner?: string;
        //     endsAt?: TimedAction;
        //     duration: number;
        //     startedAt?: TimedAction;
        //     currentBid?: AuctionBidEvent;
        //     reservePrice?: CurrencyValue;
        //     // current bid is duplicated within bids
        //   },
        // };
      }

      // if (tokenEvent.eventType === EventType.V3AskEvent) {
      // }

      return {} as TokenTransferEvent;
    })
    .filter((item) => item !== undefined);
}

const getStandardMarketData = (
  market: MarketResponseFragmentItem,
  amount: PriceSummaryFragment
) => ({
  createdAt: {
    timestamp: dateToUnix(market.transactionInfo.blockTimestamp),
    blockNumber: market.transactionInfo.blockNumber || undefined,
    transactionHash: market.transactionInfo.transactionHash || undefined,
  },
  amount: {
    usd: amount!.usdcPrice
      ? {
          value: amount!.usdcPrice?.decimal,
          raw: amount!.usdcPrice?.raw,
        }
      : undefined,
    eth: amount!.ethPrice
      ? {
          value: amount!.ethPrice?.decimal,
          raw: amount!.ethPrice?.raw,
        }
      : undefined,
    symbol: amount!.nativePrice.currency.name,
    decimals: amount!.nativePrice.currency.decimals,
    address: amount!.nativePrice.currency.address,
    amount: {
      raw: amount!.nativePrice.raw,
      value: amount!.nativePrice.decimal,
    },
  },
  raw: market,
});

// This shows the return type for a market item with both details and info
type MarketResponseFragmentItem = MarketDetailsFragment & MarketInfoFragment;

function getMarkets(markets: MarketResponseFragmentItem[]) {
  const getReserveAuctionStatus = (status: V2AuctionStatus) => {
    if (status === V2AuctionStatus.Active) {
      return MARKET_INFO_STATUSES.ACTIVE;
    }
    if (status === V2AuctionStatus.Canceled) {
      return MARKET_INFO_STATUSES.CANCELED;
    }
    if (status === V2AuctionStatus.Completed) {
      return MARKET_INFO_STATUSES.COMPLETE;
    }
    return MARKET_INFO_STATUSES.UNKNOWN;
  };
  const getV1MarketFixedPriceStatus = (status: V1MarketEntityStatus) => {
    if (status === V1MarketEntityStatus.Active) {
      return MARKET_INFO_STATUSES.ACTIVE;
    }
    if (status === V1MarketEntityStatus.Canceled) {
      return MARKET_INFO_STATUSES.CANCELED;
    }
    if (status === V1MarketEntityStatus.Completed) {
      return MARKET_INFO_STATUSES.COMPLETE;
    }
    return MARKET_INFO_STATUSES.UNKNOWN;
  };
  const getV3AskStatus = (status: V3AskStatus) => {
    if (status === V3AskStatus.Active) {
      return MARKET_INFO_STATUSES.ACTIVE;
    }
    if (status === V3AskStatus.Canceled) {
      return MARKET_INFO_STATUSES.CANCELED;
    }
    if (status === V3AskStatus.Completed) {
      return MARKET_INFO_STATUSES.COMPLETE;
    }
    return MARKET_INFO_STATUSES.UNKNOWN;
  };

  const marketResponse: MarketModule[] = [];
  markets.forEach((market) => {
    if (market.properties.__typename === 'V1Ask') {
      const properties = market.properties as V1Ask;
      marketResponse.push({
        type: MARKET_TYPES.FIXED_PRICE,
        source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V1,
        side: FIXED_SIDE_TYPES.ASK,
        status: getV1MarketFixedPriceStatus(properties.status),
        ...getStandardMarketData(market, properties.amount),
      });
    }
    if (market.properties.__typename === 'V1Offer') {
      const properties = market.properties as V1Offer;
      marketResponse.push({
        type: MARKET_TYPES.FIXED_PRICE,
        source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V1,
        side: FIXED_SIDE_TYPES.OFFER,
        status: getV1MarketFixedPriceStatus(properties.status),
        ...getStandardMarketData(market, properties.amount),
      });
    }
    if (market.properties.__typename === 'V2Auction') {
      const properties = market.properties as V2AuctionMarketPropertiesFragment;
      const endTime =
        parseInt(properties.duration, 10) + parseInt(properties.firstBidTime, 10);
      // const expiresAt = properties.estimatedExpirationTime;

      marketResponse.push({
        type: MARKET_TYPES.AUCTION,
        source: AUCTION_SOURCE_TYPES.ZORA_RESERVE_V2,
        status: getReserveAuctionStatus(properties.status),
        // Duration shouldn't be able to overflow
        duration: parseInt(properties.duration, 10),
        startedAt: properties.firstBidTime
          ? {
              timestamp: properties.firstBidTime,
            }
          : undefined,
        bids: [],
        endsAt: properties.firstBidTime
          ? {
              timestamp: endTime,
            }
          : undefined,
        currentBid:
          properties.highestBidder && properties.highestBidPrice
            ? {
                creator: properties.highestBidder,
                created: {
                  // TODO: get real timestamp here?
                  timestamp: 0,
                },
                amount: {
                  usd: properties.highestBidPrice.usdcPrice
                    ? {
                        value: properties.highestBidPrice.usdcPrice?.decimal,
                        raw: properties.highestBidPrice.usdcPrice?.raw,
                        decimals: 18,
                      }
                    : undefined,
                  eth: properties.highestBidPrice.ethPrice
                    ? {
                        value: properties.highestBidPrice.ethPrice.decimal,
                        raw: properties.highestBidPrice.ethPrice.raw,
                        decimals: 18,
                      }
                    : undefined,
                  amount: {
                    raw: properties.highestBidPrice.nativePrice.raw,
                    value: properties.highestBidPrice.nativePrice.decimal,
                    decimals:
                      properties.highestBidPrice.nativePrice.currency.decimals ||
                      undefined,
                  },
                  // TODO: integrate symbol
                  symbol: properties.highestBidPrice.nativePrice.currency.name,
                  name: properties.highestBidPrice.nativePrice.currency.name,
                  address: properties.highestBidPrice.nativePrice.currency.address,
                },
              }
            : undefined,
        ...getStandardMarketData(
          market,
          properties.reservePrice || properties.highestBidPrice
        ),
      });
    }
    if (market.properties.__typename === 'V3Ask') {
      const properties = market.properties as V3AskPropertiesFragment;
      marketResponse.push({
        type: MARKET_TYPES.FIXED_PRICE,
        source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V3,
        side: FIXED_SIDE_TYPES.ASK,
        status: getV3AskStatus(properties.askStatus),
        ...getStandardMarketData(market, properties.askPrice),
      });
    }
  });
  return marketResponse;
}

export function transformNFTZDKAlpha(
  tokenResponse: SharedTokenResponse,
  object?: NFTObject
) {
  if (!object) {
    object = { rawData: {} };
  }
  const { token } = tokenResponse;
  object.nft = {
    tokenId: token.tokenId,
    contract: {
      address: token.collectionAddress,
      name: token.tokenContract?.name || undefined,
      symbol: token.tokenContract?.symbol || undefined,
    },
    minted: {
      address: token.mintInfo?.originatorAddress || undefined,
      at: token.mintInfo
        ? {
            timestamp: dateToUnix(token.mintInfo.mintContext.blockTimestamp),
            blockNumber: token.mintInfo.mintContext.blockNumber,
            transactionHash: token.mintInfo!.mintContext.transactionHash || undefined,
          }
        : undefined,
    },
    owner: token.owner
      ? {
          address: token.owner,
        }
      : undefined,
    metadataURI: token.tokenUrl || null,
    contentURI: token.content?.url || null,
  };

  // Response of token query
  if (tokenResponse.__typename === 'TokenWithFullMarketHistory') {
    object.markets = getMarkets(tokenResponse.markets);
    object.events = getEvents(tokenResponse.events);
  }

  // Response of tokens (plural) query
  if (tokenResponse.__typename === 'TokenWithMarketsSummary') {
    object.markets = getMarkets(tokenResponse.marketsSummary);
  }

  object.metadata = {
    name: token.name || undefined,
    description: token.description || undefined,
    contentUri: token.content?.url || undefined,
    imageUri: token.image?.url || undefined,
    attributes: token.attributes?.map((item) => ({
      name: item.traitType || undefined,
      value: item.value || undefined,
      display: item.displayType || undefined,
    })),
    raw: token.metadata,
  };

  object.media = {
    // TODO(iain): Expose poster information
    thumbnail: token.image?.mediaEncoding
      ? {
          uri: token.image.mediaEncoding.thumbnail,
        }
      : null,
    image: token.image?.url
      ? {
          mime: token.image.mimeType || undefined,
          uri: token.image.url,
        }
      : null,
    content: token.content?.url
      ? {
          mime: token.content.mimeType || undefined,
          uri: token.content.url,
        }
      : null,
    source: MEDIA_SOURCES.ZORA,
  };

  if (!object.rawData) {
    object.rawData = {};
  }
  object.rawData['APIIndexer'] = token;
  return object;
}

export class ZDKAlphaDataSource implements ZDKAlphaDataInterface {
  zdk: ZDK;

  constructor(chainId: NetworkIDs, endpoint?: string) {
    this.zdk = new ZDK(endpoint, [
      { network: Network.Ethereum, chain: getChainFromNetwork(chainId) },
    ]);
  }

  canLoadNFT(_: NFTIdentifier) {
    return true;
  }

  transformNFT(token: TokenResponseItem, object?: NFTObject) {
    return transformNFTZDKAlpha(token, object);
  }

  loadNFT = async ({
    contract,
    id,
  }: NFTIdentifier): Promise<TokenResponseItem | Error> => {
    const response = await this.zdk.token({
      network: { network: Network.Ethereum, chain: Chain.Mainnet },
      includeFullDetails: true,
      token: {
        tokenId: id,
        address: contract,
      },
    });

    if (!response.token) {
      throw new NotFoundError('Cannot find token entity');
    }

    return response.token;
  };

  loadNFTs = async (
    nfts: readonly NFTIdentifier[]
  ): Promise<(Error | SharedTokenResponse)[]> => {
    const tokens = await this.zdk.tokens({
      where: {
        tokens: nfts.map((item) => ({
          address: item.contract,
          tokenId: item.id,
        })),
      },
    });

    return tokens.tokens.nodes;
  };

  queryNFTs = async (query: NFTQuery) => {
    const marketsQuery: TokensQueryInput = {};
    const marketsFilter: TokensQueryFilter = {};
    let marketsSort: TokenSortInput | undefined = undefined;

    marketsQuery.ownerAddresses = query.query.owners;
    marketsQuery.collectionAddresses = query.query.collections;

    if (query.query.activeMarkets) {
      const marketsList: ZDKMarketType[] = [];
      query.query.activeMarkets.forEach((market) => {
        if (market === MarketType.AUCTION) {
          marketsList.push(ZDKMarketType.V2Auction);
        }
        if (market === MarketType.FIXED_PRICE) {
          marketsList.push(ZDKMarketType.V3Ask);
          marketsList.push(ZDKMarketType.V1Ask);
          marketsList.push(ZDKMarketType.V1BidShare);
        }
        if (market === MarketType.ANY_MARKET) {
          marketsList.push(ZDKMarketType.V1Ask);
          marketsList.push(ZDKMarketType.V3Ask);
          marketsList.push(ZDKMarketType.V1BidShare);
          marketsList.push(ZDKMarketType.V2Auction);
          marketsList.push(ZDKMarketType.V1Offer);
        }
      });
      marketsFilter.marketFilters = marketsList.map((marketType) => ({ marketType }));
    }

    if (query.query.minters) {
      throw new Error('Minters filter not supported');
    }

    if (query.sort) {
      if (query.sort.length > 1) {
        throw new Error('Can only sort on one column');
      }
      query.sort.forEach((sortItem) => {
        marketsSort = {
          sortDirection:
            sortItem.direction === SortDirection.DESC
              ? ZDKSortDirection.Desc
              : ZDKSortDirection.Asc,
          sortKey: resolveSortKey(sortItem.field),
        };
      });
    }

    const results = await this.zdk.tokens({
      where: marketsQuery,
      filter: marketsFilter,
      sort: marketsSort,
      includeFullDetails: true,
      includeSalesHistory: !!query.additional.includeSaleHistory,
    });
    if (results.tokens.nodes) {
      return results.tokens.nodes;
    }
    return [];
  };
}
