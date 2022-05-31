import { EventInfoFragment } from '@zoralabs/zdk/dist/queries/queries-sdk';

export function extractPrice(e: EventInfoFragment) {
  if (
    e.properties.__typename === 'V1MarketEvent' &&
    (e.properties.properties.__typename === 'V1MarketAskCreatedEventProperties' ||
      e.properties.properties.__typename === 'V1MarketOfferFinalizedEventProperties' ||
      e.properties.properties.__typename === 'V1MarketAskRemovedEventProperties')
  ) {
    const p = e.properties.properties;
    return {
      price: p.price.usdcPrice
        ? {
            symbol: p.price.nativePrice.currency.name,
            amount: p.price.nativePrice.decimal,
            usdcPrice: p.price.usdcPrice,
            nativePrice: p.price.nativePrice,
          }
        : undefined,
    };
  }

  if (
    e.properties.__typename === 'V2AuctionEvent' &&
    (e.properties.properties.__typename === 'V2AuctionBidEventProperties' ||
      e.properties.properties.__typename ===
        'V2AuctionReservePriceUpdatedEventProperties' ||
      e.properties.properties.__typename === 'V2AuctionCreatedEventProperties')
  ) {
    const p = e.properties.properties;
    return {
      price: p.price.usdcPrice
        ? {
            symbol: p.price.nativePrice.currency.name,
            amount: p.price.nativePrice.decimal,
            usdcPrice: p.price.usdcPrice,
            nativePrice: p.price.nativePrice,
          }
        : undefined,
    };
  }

  if (
    e.properties.__typename === 'V3AskEvent' &&
    (e.properties.properties.__typename === 'V3AskCreatedEventProperties' ||
      e.properties.properties.__typename === 'V3AskCanceledEventProperties' ||
      e.properties.properties.__typename === 'V3AskFilledEventProperties' ||
      e.properties.properties.__typename === 'V3AskPriceUpdatedEventProperties')
  ) {
    const p = e.properties.properties.price;

    return {
      price: p.usdcPrice
        ? {
            symbol: p.nativePrice.currency.name,
            amount: p.nativePrice.decimal,
            usdcPrice: p.usdcPrice,
            nativePrice: p.nativePrice,
          }
        : undefined,
    };
  }

  return { price: undefined };
}
