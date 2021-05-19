import {
  AskPriceFragment,
  BidDataPartialFragment,
  CurrencyShortFragment,
  CurrentReserveBidFragment,
  PreviousReserveBidFragment,
} from '../graph-queries/zora-types';
import { ChainCurrencyType } from '../fetcher/FetchResultTypes';
import { AuctionStateInfo } from './AuctionState';

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

export type CurrentReserveBid = Omit<CurrentReserveBidFragment, 'amount'> & BidPricingInfo;

export type PerpetualBid = Omit<BidDataPartialFragment, 'currency' | 'amount'> &
  BidPricingInfo;

export type PerpetualAsk = Pick<AskPriceFragment, 'id' | 'createdAtTimestamp'> &
  BidPricingInfo;

export type PricingInfoValue = {
  inUSD: string;
  inETH: string;
};

export enum AuctionType {
  PERPETUAL = 'PERPETUAL',
  RESERVE = 'RESERVE',
};

export type AuctionInfoData = {
  status: AuctionStateInfo;
  highestBid?: {
    pricing: PricingInfo;
    placedBy: string;
    placedAt: string;
  };
  current: {
    auctionType: AuctionType;
    endingAt?: string;
    likelyHasEnded: boolean;
    reserveMet: boolean;
    reservePrice?: PricingInfo;
  };
};

export type CurrencyLookupType = { [currencyId: string]: ChainCurrencyType };
