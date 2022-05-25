import {
  EventType,
  EventInfoFragment,
  V2AuctionEventType,
  V3AskEventType,
} from '@zoralabs/zdk-alpha/dist/queries/queries-sdk';
import {
  AUCTION_EVENT_TYPES,
  AUCTION_SOURCE_TYPES,
  FIXED_PRICE_EVENT_TYPES,
  FIXED_PRICE_MARKET_SOURCES,
  FIXED_SIDE_TYPES,
  MEDIA_SOURCES,
  NormalizedEvent,
  TOKEN_TRANSFER_EVENT_CONTEXT_TYPES,
  TOKEN_TRANSFER_EVENT_TYPES,
} from '../../../types';
import { ZERO_ADDRESS } from '../../../constants/addresses';
import { dateToISO } from '../utils/dateToISO';
import { processMarketEvent } from './processMarketEvent';

export function processEvents(events: EventInfoFragment[]): NormalizedEvent[] {
  const eventsList: NormalizedEvent[] = [];

  events.forEach((tokenEvent) => {
    const common = {
      at: {
        timestamp: dateToISO(tokenEvent.transactionInfo.blockTimestamp),
        blockNumber: tokenEvent.transactionInfo.blockNumber,
        transactionHash: tokenEvent.transactionInfo.transactionHash || undefined,
      },
    };

    if (
      tokenEvent.eventType === EventType.MintEvent &&
      tokenEvent.properties.__typename === 'MintEvent'
    ) {
      eventsList.push({
        ...common,
        from: ZERO_ADDRESS,
        to: tokenEvent.properties.toAddress,
        type: TOKEN_TRANSFER_EVENT_TYPES.MINT,
        eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_TRANSFER_EVENT,
        raw: {
          source: MEDIA_SOURCES.ZORA,
          data: tokenEvent,
        },
      });
    }

    if (
      tokenEvent.eventType === EventType.TransferEvent &&
      tokenEvent.properties.__typename === 'TransferEvent'
    ) {
      eventsList.push({
        ...common,
        from: tokenEvent.properties.fromAddress,
        to: tokenEvent.properties.toAddress,
        eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_TRANSFER_EVENT,
        type:
          tokenEvent.properties.toAddress === ZERO_ADDRESS
            ? TOKEN_TRANSFER_EVENT_TYPES.BURN
            : TOKEN_TRANSFER_EVENT_TYPES.TRANSFER,
        raw: {
          source: MEDIA_SOURCES.ZORA,
          data: tokenEvent,
        },
      });
    }

    if (
      tokenEvent.eventType === EventType.V1MarketEvent &&
      tokenEvent.properties.__typename === 'V1MarketEvent'
    ) {
      const e = processMarketEvent(tokenEvent);

      if (e) {
        eventsList.push(e);
      }
    }

    if (
      tokenEvent.eventType === EventType.V2AuctionEvent &&
      tokenEvent.properties.__typename === 'V2AuctionEvent'
    ) {
      let event: AUCTION_EVENT_TYPES | undefined = undefined;

      switch (tokenEvent.properties.auctionEventType) {
        case V2AuctionEventType.V2AuctionCreated:
          event = AUCTION_EVENT_TYPES.AUCTION_CREATED;
          break;

        case V2AuctionEventType.V2AuctionCanceled:
          event = AUCTION_EVENT_TYPES.AUCTION_CANCELLED;
          break;

        case V2AuctionEventType.V2AuctionBid:
          event = AUCTION_EVENT_TYPES.AUCTION_BID;
          break;

        case V2AuctionEventType.V2AuctionApprovalUpdated:
          event = AUCTION_EVENT_TYPES.AUCTION_APPROVED;
          break;

        // Not necessarily useful to display
        // case V2AuctionEventType.V2AuctionDurationExtended:
        //   event = AUCTION_EVENT_TYPES.AUCTION_UPDATED;
        //   break;

        // case V2AuctionEventType.V2AuctionReservePriceUpdated:
        //   event = AUCTION_EVENT_TYPES.AUCTION_UPDATED;
        //   break;

        case V2AuctionEventType.V2AuctionEnded:
          event = AUCTION_EVENT_TYPES.AUCTION_ENDED;
          break;
      }

      if (!event) {
        return;
      }

      eventsList.push({
        ...common,
        event: event,
        sender: tokenEvent.properties.address,
        marketAddress: tokenEvent.properties.collectionAddress,
        eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT,
        blockInfo: {
          timestamp: tokenEvent.transactionInfo.blockTimestamp,
          blockNumber: tokenEvent.transactionInfo.blockNumber,
        },
        raw: {
          source: AUCTION_SOURCE_TYPES.ZORA_RESERVE_V2,
          raw: tokenEvent,
        },
      });
    }

    if (
      tokenEvent.eventType === EventType.V3AskEvent &&
      tokenEvent.properties.__typename === 'V3AskEvent'
    ) {
      let event: FIXED_PRICE_EVENT_TYPES | undefined = undefined;
      switch (tokenEvent.properties.v3AskEventType) {
        case V3AskEventType.V3AskCanceled:
          event = FIXED_PRICE_EVENT_TYPES.FIXED_PRICE_CANCELLED;
          break;
        case V3AskEventType.V3AskCreated:
          event = FIXED_PRICE_EVENT_TYPES.FIXED_PRICE_CREATED;
          break;
        case V3AskEventType.V3AskFilled:
          event = FIXED_PRICE_EVENT_TYPES.FIXED_PRICE_FILLED;
          break;
        case V3AskEventType.V3AskPriceUpdated:
          event = FIXED_PRICE_EVENT_TYPES.FIXED_PRICE_UPDATED;
          break;
      }

      const filledAskFields =
        tokenEvent.properties?.properties?.__typename === 'V3AskFilledEventProperties'
          ? {
              buyer: tokenEvent.properties.properties.buyer,
              seller: tokenEvent.properties.properties.seller,
            }
          : {};

      const fixedPriceFields =
        tokenEvent.properties?.properties?.__typename === 'V3AskCreatedEventProperties' ||
        tokenEvent.properties?.properties?.__typename ===
          'V3AskPriceUpdatedEventProperties'
          ? {
              seller: tokenEvent.properties.properties.seller,
            }
          : {};

      eventsList.push({
        ...common,
        ...filledAskFields,
        ...fixedPriceFields,
        sender: tokenEvent.properties.address,
        marketAddress: tokenEvent.properties.collectionAddress,
        blockInfo: {
          timestamp: tokenEvent.transactionInfo.blockTimestamp,
          blockNumber: tokenEvent.transactionInfo.blockNumber,
        },
        event,
        eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT,
        side: FIXED_SIDE_TYPES.ASK,
        raw: {
          source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V3,
          data: tokenEvent,
        },
      });
    }
  });

  return eventsList;
}
