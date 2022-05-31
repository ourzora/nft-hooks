import {
  MarketType as ZDKMarketType,
  V1MarketEntityStatus,
  V3AskStatus,
  V2AuctionStatus,
} from '@zoralabs/zdk/dist/queries/queries-sdk';
import {
  AUCTION_SOURCE_TYPES,
  FIXED_PRICE_MARKET_SOURCES,
  FIXED_SIDE_TYPES,
  MarketModule,
  MARKET_INFO_STATUSES,
  MARKET_TYPES,
} from '../../../types';
import { dateToISO } from '../utils/dateToISO';
import {
  getStandardMarketData,
  MarketResponseFragmentItem,
} from '../utils/getStandardMarketData';

export function processMarkets(markets: MarketResponseFragmentItem[]) {
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
    if (
      market.marketType === ZDKMarketType.V1Ask &&
      market.properties.__typename === 'V1Ask'
    ) {
      marketResponse.push({
        type: MARKET_TYPES.FIXED_PRICE,
        source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V1,
        side: FIXED_SIDE_TYPES.ASK,
        // TODO(iain): fix naming
        status: getV1MarketFixedPriceStatus(market.properties.v1AskStatus),
        ...getStandardMarketData({ market, amount: market.properties.amount }),
      });
    }
    if (
      market.marketType === ZDKMarketType.V1Offer &&
      market.properties.__typename === 'V1Offer'
    ) {
      marketResponse.push({
        type: MARKET_TYPES.FIXED_PRICE,
        source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V1,
        side: FIXED_SIDE_TYPES.OFFER,
        status: getV1MarketFixedPriceStatus(market.properties.v1OfferStatus),
        ...getStandardMarketData({ market, amount: market.properties.amount }),
      });
    }
    if (
      market.marketType === ZDKMarketType.V2Auction &&
      market.properties.__typename === 'V2Auction'
    ) {
      const expiresAt = market.properties.estimatedExpirationTime;

      marketResponse.push({
        type: MARKET_TYPES.AUCTION,
        source: AUCTION_SOURCE_TYPES.ZORA_RESERVE_V2,
        status: getReserveAuctionStatus(market.properties.v2AuctionStatus),
        auctionId: market.properties.auctionId,
        // Duration shouldn't be able to overflow
        duration: parseInt(market.properties.duration, 10),
        startedAt: market.properties.firstBidTime
          ? {
              timestamp: market.properties.firstBidTime,
            }
          : undefined,
        bids: [],
        endsAt: market.properties.firstBidTime
          ? {
              timestamp: dateToISO(expiresAt),
            }
          : undefined,
        currentBid:
          market.properties.highestBidder && market.properties.highestBidPrice
            ? {
                creator: market.properties.highestBidder,
                created: {
                  timestamp: dateToISO(market.transactionInfo.blockTimestamp),
                },
                amount: {
                  usd: market.properties.highestBidPrice.usdcPrice
                    ? {
                        value: market.properties.highestBidPrice.usdcPrice?.decimal,
                        raw: market.properties.highestBidPrice.usdcPrice?.raw,
                        decimals: 18,
                      }
                    : undefined,
                  eth: market.properties.highestBidPrice.nativePrice
                    ? {
                        value: market.properties.highestBidPrice.nativePrice.decimal,
                        raw: market.properties.highestBidPrice.nativePrice.raw,
                        decimals: 18,
                      }
                    : undefined,
                  amount: {
                    raw: market.properties.highestBidPrice.nativePrice.raw,
                    value: market.properties.highestBidPrice.nativePrice.decimal,
                    decimals:
                      market.properties.highestBidPrice.nativePrice.currency.decimals ||
                      undefined,
                  },
                  symbol: market.properties.highestBidPrice.nativePrice.currency.name,
                  name: market.properties.highestBidPrice.nativePrice.currency.name,
                  address: market.properties.highestBidPrice.nativePrice.currency.address,
                },
              }
            : undefined,
        ...getStandardMarketData({
          market,
          amount: market.properties.reservePrice || market.properties.highestBidPrice,
        }),
      });
    }
    if (
      market.marketType === ZDKMarketType.V3Ask &&
      market.properties.__typename === 'V3Ask'
    ) {
      marketResponse.push({
        type: MARKET_TYPES.FIXED_PRICE,
        source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V3,
        side: FIXED_SIDE_TYPES.ASK,
        status: getV3AskStatus(market.properties.v3AskStatus),
        ...getStandardMarketData({ market, amount: market.properties.askPrice }),
      });
    }
  });
  return marketResponse;
}
