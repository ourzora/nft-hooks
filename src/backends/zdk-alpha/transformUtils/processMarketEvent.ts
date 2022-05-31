import {
  EventInfoFragment,
  EventType,
  V1MarketEventType,
} from '@zoralabs/zdk-alpha/dist/queries/queries-sdk';
import { extractPrice } from '../utils/extractPrice';
import {
  FIXED_PRICE_EVENT_TYPES,
  FIXED_PRICE_MARKET_SOURCES,
  FIXED_SIDE_TYPES,
  NormalizedEvent,
  TOKEN_TRANSFER_EVENT_CONTEXT_TYPES,
} from '../../../types';
import { dateToISO } from '../utils/dateToISO';

export function processMarketEvent(e: EventInfoFragment): NormalizedEvent | undefined {
  if (
    !(
      e.eventType === EventType.V1MarketEvent &&
      e.properties.__typename === 'V1MarketEvent'
    )
  ) {
    return undefined;
  }

  // FIXME: what to do when unable to map to FIXED_PRICE_EVENT_TYPES?
  let event: FIXED_PRICE_EVENT_TYPES | undefined = undefined;

  switch (e.properties.marketEventType) {
    case V1MarketEventType.V1MarketAskCreated:
      event = FIXED_PRICE_EVENT_TYPES.FIXED_PRICE_CREATED;
      break;

    case V1MarketEventType.V1MarketAskRemoved:
      event = FIXED_PRICE_EVENT_TYPES.FIXED_PRICE_CANCELLED;
      break;

    case V1MarketEventType.V1MarketAskRemoved:
      event = FIXED_PRICE_EVENT_TYPES.FIXED_PRICE_CANCELLED;
      break;
  }

  if (!event) {
    return;
  }

  return {
    // FIXME: address === sender???
    sender: e.properties.address,
    ...extractPrice(e),
    marketAddress: e.properties.collectionAddress,
    event,
    eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT,
    side: FIXED_SIDE_TYPES.ASK,
    blockInfo: {
      timestamp: e.transactionInfo.blockTimestamp,
      blockNumber: e.transactionInfo.blockNumber,
    },
    at: {
      timestamp: dateToISO(e.transactionInfo.blockTimestamp),
      blockNumber: e.transactionInfo.blockNumber,
      transactionHash: e.transactionInfo.transactionHash || undefined,
    },
    raw: {
      source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V1,
      data: e,
    },
  };
}
