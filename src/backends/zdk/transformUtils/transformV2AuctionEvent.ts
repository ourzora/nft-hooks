import { V2AuctionEvent } from '@zoralabs/zdk/dist/queries/queries-sdk';
import {
  AUCTION_EVENT_TYPES,
  AUCTION_SOURCE_TYPES,
  MarketAuctionEvent,
  TOKEN_TRANSFER_EVENT_CONTEXT_TYPES,
} from '../../../types';
import { TransformFunctionParam } from './transformMarketEvent';

export function transformV2AuctionEvent({
  event,
  at,
  blockInfo,
  raw,
}: TransformFunctionParam<V2AuctionEvent, MarketAuctionEvent['eventType']>):
  | MarketAuctionEvent
  | undefined {
  if (event.properties.__typename === 'V2AuctionBidEventProperties') {
    return {
      at,
      blockInfo,
      event: AUCTION_EVENT_TYPES.AUCTION_BID,
      eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT,
      sender: event.properties.sender,
      marketAddress: event.collectionAddress,
      amount: parseInt(event.properties.value),
      raw: {
        source: AUCTION_SOURCE_TYPES.ZORA_RESERVE_V2,
        raw,
      },
    };
  }

  if (event.properties.__typename === 'V2AuctionCanceledEventProperties') {
    return {
      at,
      blockInfo,
      event: AUCTION_EVENT_TYPES.AUCTION_CANCELLED,
      eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT,
      sender: event.properties.tokenOwner,
      marketAddress: event.collectionAddress,
      raw: {
        source: AUCTION_SOURCE_TYPES.ZORA_RESERVE_V2,
        raw,
      },
    };
  }

  if (event.properties.__typename === 'V2AuctionCreatedEventProperties') {
    return {
      at,
      blockInfo,
      event: AUCTION_EVENT_TYPES.AUCTION_CREATED,
      sender: event.properties.tokenOwner,
      marketAddress: event.collectionAddress,
      eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT,
      raw: {
        source: AUCTION_SOURCE_TYPES.ZORA_RESERVE_V2,
        raw,
      },
    };
  }

  if (event.properties.__typename === 'V2AuctionEndedEventProperties') {
    return {
      at,
      blockInfo,
      winner: event.properties.winner,
      event: AUCTION_EVENT_TYPES.AUCTION_ENDED,
      sender: event.properties.tokenOwner,
      marketAddress: event.collectionAddress,
      eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT,
      raw: {
        source: AUCTION_SOURCE_TYPES.ZORA_RESERVE_V2,
        raw,
      },
    };
  }

  return undefined;
}
