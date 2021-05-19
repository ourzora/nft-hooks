import { AuctionType } from "./AuctionInfoTypes";
import { NFTDataType } from "./FetchResultTypes";

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

export function getAuctionState(data: NFTDataType): AuctionStateInfo {
  if (data.auction.current.auctionType === AuctionType.PERPETUAL) {
    if (data.auction.current.reservePrice) {
      return AuctionStateInfo.PERPETUAL_ASK;
    }
    if (!data.auction.highestBid && data.pricing.reserve?.previousBids.length) {
      return AuctionStateInfo.RESERVE_AUCTION_FINISHED;
    }
    if (data.auction.highestBid) {
      return AuctionStateInfo.PERPETUAL_BID;
    }
    return AuctionStateInfo.NO_PRICING;
  }
  if (data.auction.current.auctionType === AuctionType.RESERVE) {
    if (data.auction.current.likelyHasEnded) {
      return AuctionStateInfo.RESERVE_AUCTION_FINISHED;
    }
    if (data.auction.current.reserveMet) {
      if (data.auction.current.endingAt && Math.floor(new Date().getTime()/1000) - 15 * 60 > parseInt(data.auction.current.endingAt, 10)) {
        return AuctionStateInfo.RESERVE_AUCTION_LAST_15;
      }
      return AuctionStateInfo.RESERVE_AUCTION_ACTIVE;
    }
    return AuctionStateInfo.RESERVE_AUCTION_PENDING;
  }

  return AuctionStateInfo.NO_PRICING;
}
