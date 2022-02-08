import { AuctionType, PricingInfoData } from './AuctionInfoTypes';

/** @deprecated deprecated */
export enum AuctionStateInfo {
  LOADING = 'LOADING',
  NO_PRICING = 'NO_PRICING',
  PERPETUAL_BID = 'PERPETUAL_BID',
  PERPETUAL_ASK = 'PERPETUAL_ASK',
  RESERVE_AUCTION_PENDING = 'RESERVE_AUCTION_PENDING',
  RESERVE_AUCTION_ACTIVE = 'RESERVE_AUCTION_ACTIVE',
  RESERVE_AUCTION_LAST_15 = 'RESERVE_AUCTION_LAST_15',
  RESERVE_AUCTION_ENDED = 'RESERVE_AUCTION_ENDED',
  RESERVE_AUCTION_FINISHED = 'RESERVE_AUCTION_FINISHED',
}

export function getAuctionState(pricing: PricingInfoData): AuctionStateInfo {
  if (pricing.auctionType === AuctionType.PERPETUAL) {
    if (pricing.perpetual.ask) {
      return AuctionStateInfo.PERPETUAL_ASK;
    }
    if (!pricing.perpetual.highestBid && pricing.reserve?.previousBids.length) {
      return AuctionStateInfo.RESERVE_AUCTION_FINISHED;
    }
    if (pricing.perpetual.highestBid) {
      return AuctionStateInfo.PERPETUAL_BID;
    }
    return AuctionStateInfo.NO_PRICING;
  }
  if (pricing.auctionType === AuctionType.RESERVE && pricing.reserve) {
    if (pricing.reserve.current.likelyHasEnded) {
      return AuctionStateInfo.RESERVE_AUCTION_FINISHED;
    }
    if (pricing.reserve.current.reserveMet) {
      if (
        pricing.reserve.expectedEndTimestamp &&
        Math.floor(new Date().getTime() / 1000) - 15 * 60 >
          parseInt(pricing.reserve.expectedEndTimestamp, 10)
      ) {
        return AuctionStateInfo.RESERVE_AUCTION_LAST_15;
      }
      return AuctionStateInfo.RESERVE_AUCTION_ACTIVE;
    }
    return AuctionStateInfo.RESERVE_AUCTION_PENDING;
  }

  return AuctionStateInfo.NO_PRICING;
}
