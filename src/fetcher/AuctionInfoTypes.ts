import {
  AskPriceFragment,
  BidDataPartialFragment,
  CurrencyShortFragment,
} from '../graph-queries/zora-types';
import { ChainCurrencyType } from '../fetcher/FetchResultTypes';

export type PricingInfo = {
  currency: CurrencyShortFragment;
  amount: string;
  prettyAmount: string;
  computedValue?: PricingInfoValue;
};

export type PerpetualBid = Omit<BidDataPartialFragment, 'currency' | 'amount'> & {
  pricing: PricingInfo;
};

export type PerpetualAsk = Pick<AskPriceFragment, 'id' | 'createdAtTimestamp'> & {
  pricing: PricingInfo;
};

export type PricingInfoValue = {
  inUSD: string;
  inETH: string;
};

export type AuctionInfoData = {
  highestBid?: {
    pricing: PricingInfo;
    placedBy: string;
    placedAt: string;
  };
  current: {
    auctionType: 'reserve' | 'perpetual';
    endingAt?: string;
    likelyHasEnded: boolean;
    reserveMet: boolean;
    reservePrice?: PricingInfo;
  };
};

export type CurrencyLookupType = { [currencyId: string]: ChainCurrencyType };
