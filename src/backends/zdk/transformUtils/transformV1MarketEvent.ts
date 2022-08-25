import { V1MarketEvent, V1MarketEventType } from '@zoralabs/zdk/dist/queries/queries-sdk';
import {
  FIXED_PRICE_EVENT_TYPES,
  FIXED_PRICE_MARKET_SOURCES,
  FIXED_SIDE_TYPES,
  MarketFixedPriceEvent,
} from '../../../types';
import { TransformFunctionParam } from './transformMarketEvent';

export function transformV1MarketEvent({
  event,
  at,
  blockInfo,
  price,
  eventType,
}: TransformFunctionParam<V1MarketEvent, MarketFixedPriceEvent['eventType']>):
  | MarketFixedPriceEvent
  | undefined {
  let fixedPriceEvent: FIXED_PRICE_EVENT_TYPES | undefined = undefined;

  switch (event.v1MarketEventType) {
    case V1MarketEventType.V1MarketAskCreated:
      fixedPriceEvent = FIXED_PRICE_EVENT_TYPES.FIXED_PRICE_CREATED;
      break;

    case V1MarketEventType.V1MarketAskRemoved:
      fixedPriceEvent = FIXED_PRICE_EVENT_TYPES.FIXED_PRICE_CANCELLED;
      break;

    case V1MarketEventType.V1MarketBidShareUpdated:
      fixedPriceEvent = FIXED_PRICE_EVENT_TYPES.FIXED_PRICE_UPDATED;
      break;

    case V1MarketEventType.V1MarketBidFinalized:
      fixedPriceEvent = FIXED_PRICE_EVENT_TYPES.FIXED_PRICE_FILLED;
      break;
  }

  if (fixedPriceEvent) {
    return {
      at,
      ...price,
      blockInfo,
      eventType,
      sender: event.address,
      marketAddress: event.collectionAddress,
      event: fixedPriceEvent,
      side: FIXED_SIDE_TYPES.ASK,
      raw: {
        source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V1,
        data: event,
      },
    };
  }
  return undefined;
}
