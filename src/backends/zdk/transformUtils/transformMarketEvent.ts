import {
  EventInfoFragment,
  MintEvent,
  TransferEvent,
  V1MarketEvent,
  V2AuctionEvent,
  V3AskEvent,
} from '@zoralabs/zdk/dist/queries/queries-sdk';
import { extractPrice } from '../utils/extractPrice';
import { NormalizedEvent, TOKEN_TRANSFER_EVENT_CONTEXT_TYPES } from '../../../types';
import { dateToISO } from '../utils/dateToISO';
import { transformV2AuctionEvent } from './transformV2AuctionEvent';
import { transformV1MarketEvent } from './transformV1MarketEvent';
import { transformTransferEvent } from './transformTransferEvent';
import { transformMintEvent } from './transformMintEvent';
import { transformV3AskEvent } from './transformV3AskEvent';

export type TransformFunctionParam<E, T> = {
  event: E;
  at: {
    timestamp: string;
    blockNumber: number;
    transactionHash: string | undefined;
  };
  blockInfo: {
    timestamp: any;
    blockNumber: number;
  };
  price: ReturnType<typeof extractPrice>;
  raw?: any;
  eventType: T;
};

export function transformMarketEvent(e: EventInfoFragment): NormalizedEvent | undefined {
  const at = {
    timestamp: dateToISO(e.transactionInfo.blockTimestamp),
    blockNumber: e.transactionInfo.blockNumber,
    transactionHash: e.transactionInfo.transactionHash || undefined,
  };
  const blockInfo = {
    timestamp: e.transactionInfo.blockTimestamp,
    blockNumber: e.transactionInfo.blockNumber,
  };
  const price = extractPrice(e);

  let eventType = TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT;

  switch (e.properties.__typename) {
    case 'MintEvent':
      eventType = TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_TRANSFER_EVENT as const;
      return transformMintEvent({
        event: e.properties as MintEvent,
        at,
        blockInfo,
        price,
        eventType,
      });

    case 'TransferEvent':
      eventType = TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_TRANSFER_EVENT;
      return transformTransferEvent({
        event: e.properties as TransferEvent,
        at,
        blockInfo,
        price,
        raw: e,
        eventType,
      });

    case 'V1MarketEvent':
      eventType = TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT as const;
      return transformV1MarketEvent({
        event: e.properties as V1MarketEvent,
        at,
        blockInfo,
        price,
        eventType,
      });

    case 'V2AuctionEvent':
      eventType = TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT as const;
      return transformV2AuctionEvent({
        event: e.properties as V2AuctionEvent,
        at,
        blockInfo,
        price,
        raw: e,
        eventType,
      });

    case 'V3AskEvent':
      eventType = TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT as const;
      return transformV3AskEvent({
        event: e.properties as V3AskEvent,
        at,
        blockInfo,
        price,
        raw: e,
        eventType,
      });

    case 'ApprovalEvent':
    case 'Sale':
    default:
      return undefined;
  }
}
