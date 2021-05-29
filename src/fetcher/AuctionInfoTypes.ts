import {
  AskPriceFragment,
  BidDataPartialFragment,
  CurrencyShortFragment,
  CurrentReserveBidFragment,
  Maybe,
  NftMediaFragment,
  PreviousReserveBidFragment,
  ReserveAuctionPartialFragment,
} from '../graph-queries/zora-types';
import {
  ChainCurrencyType,
  NFTResultType,
  ReserveAuctionBidsWithCurrency,
} from '../fetcher/FetchResultTypes';
import { AuctionStateInfo } from './AuctionState';
import { OpenseaResponse } from './OpenseaUtils';

export type PricingInfo = {
  currency: CurrencyShortFragment;
  amount: string;
  prettyAmount: string;
  computedValue?: PricingInfoValue;
};

export type BidPricingInfo = {
  pricing: PricingInfo;
};

export type PastReserveBid = Omit<PreviousReserveBidFragment, 'amount'> & BidPricingInfo;

export type CurrentReserveBid = Omit<CurrentReserveBidFragment, 'amount'> &
  BidPricingInfo;

export type PerpetualBid = Omit<BidDataPartialFragment, 'currency' | 'amount'> &
  BidPricingInfo;

export type PerpetualAsk = Pick<AskPriceFragment, 'id' | 'createdAtTimestamp'> &
  BidPricingInfo;

export type PricingInfoValue = {
  inUSD: string;
  inETH: string;
};

export enum AuctionType {
  NONE = 'NONE',
  PERPETUAL = 'PERPETUAL',
  RESERVE = 'RESERVE',
}

export type CommonNFTMediaDataType = {
  nft: NFTResultType;
  pricing: {
    perpetual?: {
      bids: BidDataPartialFragment[];
      ask: Maybe<AskPriceFragment>;
    };
    reserve: Maybe<ReserveAuctionPartialFragment>;
  };
};

export type ZNFTMediaDataType = CommonNFTMediaDataType & {
  zoraNFT: Omit<
    NftMediaFragment,
    'currentBids' | 'currentAsk' | 'id' | 'owner' | 'creator' | 'metadataURI'
  > & {
    creatorBidSharePercentage: number;
  };
};

export type OpenseaNFTMediaDataType = CommonNFTMediaDataType & {
  openseaInfo: OpenseaResponse;
};

export type HighestBidType = {
  pricing: PricingInfo;
  placedBy: string;
  placedAt: string;
};

export type PricingInfoData = {
  status: AuctionStateInfo;
  perpetual: {
    bids: PerpetualBid[];
    ask?: PerpetualAsk;
    highestBid?: HighestBidType;
  };
  reserve?: ReserveAuctionBidsWithCurrency & {
    current: {
      highestBid?: HighestBidType;
      likelyHasEnded: boolean;
      reserveMet: boolean;
    };
    reservePrice?: PricingInfo;
    currentBid?: CurrentReserveBid;
    previousBids: PastReserveBid[];
  };
  auctionType: AuctionType;
};

export type NFTDataType = Omit<ZNFTMediaDataType, 'pricing'> & {
  pricing: PricingInfoData;
};

export type OpenseaNFTDataType = Omit<OpenseaNFTMediaDataType, 'pricing'> & {
  pricing: PricingInfoData;
};

export type CurrencyLookupType = { [currencyId: string]: ChainCurrencyType };
