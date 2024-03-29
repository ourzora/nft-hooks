import {
  EventType,
  EventInfoFragment,
  V2AuctionEventType,
  V3AskEventType,
} from '@zoralabs/zdk/dist/queries/queries-sdk';
import {
  AUCTION_EVENT_TYPES,
  AUCTION_SOURCE_TYPES,
  FIXED_PRICE_EVENT_TYPES,
  FIXED_PRICE_MARKET_SOURCES,
  FIXED_SIDE_TYPES,
  MEDIA_SOURCES,
  NormalizedEvent,
  PriceType,
  TOKEN_TRANSFER_EVENT_CONTEXT_TYPES,
  TOKEN_TRANSFER_EVENT_TYPES,
} from '../../../types';
import { ZERO_ADDRESS } from '../../../constants/addresses';
import { dateToISO } from '../utils/dateToISO';
import { transformMarketEvent } from './transformMarketEvent';
import { extractPrice } from '../utils/extractPrice';

export function transformEvents(events: EventInfoFragment[]): NormalizedEvent[] {
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
      const e = transformMarketEvent(tokenEvent);

      if (e) {
        eventsList.push(e);
      }
    }

    if (
      tokenEvent.eventType === EventType.V2AuctionEvent &&
      tokenEvent.properties.__typename === 'V2AuctionEvent'
    ) {
      let event: AUCTION_EVENT_TYPES | undefined = undefined;
      let amount: { price?: PriceType } = {};
      let sender: string = tokenEvent.properties.address;

      tokenEvent.properties.properties

      switch (tokenEvent.properties.v2AuctionEventType) {
        case V2AuctionEventType.V2AuctionCreated:
          amount = extractPrice(tokenEvent);
          event = AUCTION_EVENT_TYPES.AUCTION_CREATED;
          break;

        case V2AuctionEventType.V2AuctionCanceled:
          event = AUCTION_EVENT_TYPES.AUCTION_CANCELLED;
          break;

        case V2AuctionEventType.V2AuctionBid:
          amount = extractPrice(tokenEvent);
          event = AUCTION_EVENT_TYPES.AUCTION_BID;
          break;
        
        case V2AuctionEventType.V2AuctionReservePriceUpdated:
          amount = extractPrice(tokenEvent);
          event = AUCTION_EVENT_TYPES.AUCTION_UPDATED;
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

      const eventProperties = tokenEvent.properties.properties;
      switch (eventProperties.__typename) {
        case 'V2AuctionApprovalUpdatedEventProperties':
          sender = tokenEvent.properties.collectionAddress
          break;
        case 'V2AuctionBidEventProperties':
          sender = eventProperties.sender;
          amount = extractPrice(tokenEvent)
          break;
        case 'V2AuctionApprovalUpdatedEventProperties':
          if (eventProperties.approved === false) {
            return;
          }
          break;
        case 'V2AuctionCreatedEventProperties':
          sender = eventProperties.tokenOwner;
          amount = extractPrice(tokenEvent);
          break;
        case 'V2AuctionEndedEventProperties':
          sender = eventProperties.winner;
          amount = extractPrice(tokenEvent);
          break;
        case 'V2AuctionReservePriceUpdatedEventProperties':
          sender = tokenEvent.collectionAddress;
          break;
      }

      if (!event) {
        return;
      }

      eventsList.push({
        ...common,
        ...amount,
        event: event,
        sender: sender,
        marketAddress: tokenEvent.properties.address,
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

      event &&
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
