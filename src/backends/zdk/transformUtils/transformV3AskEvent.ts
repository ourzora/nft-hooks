import { V3AskEvent, V3AskEventType } from '@zoralabs/zdk/dist/queries/queries-sdk';
import {
  FIXED_PRICE_EVENT_TYPES,
  FIXED_PRICE_MARKET_SOURCES,
  FIXED_SIDE_TYPES,
  MarketFixedPriceEvent,
} from '../../../types';
import { TransformFunctionParam } from './transformMarketEvent';

export function transformV3AskEvent({
  event,
  at,
  blockInfo,
  price,
  eventType,
}: TransformFunctionParam<V3AskEvent, MarketFixedPriceEvent['eventType']>):
  | MarketFixedPriceEvent
  | undefined {
  let fixedPriceEvent: FIXED_PRICE_EVENT_TYPES | undefined = undefined;

  switch (event.v3AskEventType) {
    case V3AskEventType.V3AskCreated:
      fixedPriceEvent = FIXED_PRICE_EVENT_TYPES.FIXED_PRICE_CREATED;
      break;

    case V3AskEventType.V3AskCanceled:
      fixedPriceEvent = FIXED_PRICE_EVENT_TYPES.FIXED_PRICE_CANCELLED;
      break;

    case V3AskEventType.V3AskPriceUpdated:
      fixedPriceEvent = FIXED_PRICE_EVENT_TYPES.FIXED_PRICE_UPDATED;
      break;

    case V3AskEventType.V3AskFilled:
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
