import {
  MarketDetailsFragment,
  MarketInfoFragment,
  PriceSummaryFragment,
} from '@zoralabs/zdk-alpha/dist/queries/queries-sdk';
import { ZERO_ADDRESS } from 'src/constants/addresses';
import { dateToISO } from './dateToISO';

// This shows the return type for a market item with both details and info
export type MarketResponseFragmentItem = MarketDetailsFragment & MarketInfoFragment;

export function getStandardMarketData({
  market,
  amount,
}: {
  market: MarketResponseFragmentItem;
  amount: PriceSummaryFragment;
}) {
  return {
    createdAt: {
      timestamp: dateToISO(market.transactionInfo.blockTimestamp),
      blockNumber: market.transactionInfo.blockNumber || undefined,
      transactionHash: market.transactionInfo.transactionHash || undefined,
    },
    amount: {
      usd: amount!.usdcPrice
        ? {
            raw: amount!.usdcPrice.raw,
            value: amount!.usdcPrice?.decimal,
            currency: {
              value: amount!.nativePrice.decimal,
              raw: amount!.nativePrice.raw,
            },
          }
        : undefined,
      eth: amount!.ethPrice
        ? {
            raw: amount!.ethPrice?.raw,
            value: amount!.ethPrice.decimal,
            currency: {
              address: ZERO_ADDRESS,
              decimals: 18,
              name: 'ETH',
            },
          }
        : undefined,
      symbol: amount!.nativePrice.currency.name,
      decimals: amount!.nativePrice.currency.decimals,
      address: amount!.nativePrice.currency.address,
      amount: {
        raw: amount!.nativePrice.raw,
        decimal: amount!.nativePrice.decimal,
        currency: amount!.nativePrice.currency,
        value: amount!.nativePrice.decimal,
        amount: {
          raw: amount!.nativePrice.raw,
          value: amount!.nativePrice.decimal,
        },
      },
    },
    raw: market,
  };
}
