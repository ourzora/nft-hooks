import { EventInfoFragment } from '@zoralabs/zdk-alpha/dist/queries/queries-sdk';

export function extractPrice(e: EventInfoFragment) {
  if (
    e.properties.__typename === 'V1MarketEvent' &&
    (e.properties.properties.__typename === 'V1MarketAskCreatedEventProperties' ||
      e.properties.properties.__typename === 'V1MarketOfferFinalizedEventProperties' ||
      e.properties.properties.__typename === 'V1MarketAskRemovedEventProperties')
  ) {
    const p = e.properties.properties;
    return p.price.usdcPrice
      ? {
          usd: {
            raw: p.price.usdcPrice.raw,
            value: p.price.usdcPrice.decimal,
          },
          amount: p.price.nativePrice.currency,
          symbol: p.price.nativePrice.currency.name,
        }
      : {};
  }

  if (
    e.properties.__typename === 'V2AuctionEvent' &&
    (e.properties.properties.__typename === 'V2AuctionBidEventProperties' ||
      e.properties.properties.__typename ===
        'V2AuctionReservePriceUpdatedEventProperties' ||
      e.properties.properties.__typename === 'V2AuctionCreatedEventProperties')
  ) {
    const p = e.properties.properties;
    return p.price.usdcPrice
      ? {
          usd: {
            raw: p.price.usdcPrice.raw,
            value: p.price.usdcPrice.decimal,
          },
          amount: p.price.nativePrice.currency,
          symbol: 'USDC',
        }
      : {};
  }

  if (
    e.properties.__typename === 'V3AskEvent' &&
    (e.properties.properties.__typename === 'V3AskCreatedEventProperties' ||
      e.properties.properties.__typename === 'V3AskCanceledEventProperties' ||
      e.properties.properties.__typename === 'V3AskFilledEventProperties' ||
      e.properties.properties.__typename === 'V3AskPriceUpdatedEventProperties')
  ) {
    const p = e.properties.properties;
    return p.price.usdcPrice
      ? {
          usd: {
            raw: p.price.usdcPrice.raw,
            value: p.price.usdcPrice.decimal,
          },
          amount: p.price.nativePrice.currency,
          symbol: 'USDC',
        }
      : {};
  }

  return {};
}
