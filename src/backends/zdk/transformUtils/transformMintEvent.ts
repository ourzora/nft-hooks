import { MintEvent } from '@zoralabs/zdk/dist/queries/queries-sdk';
import { ZERO_ADDRESS } from '../../../constants/addresses';
import {
  MEDIA_SOURCES,
  TokenTransferEvent,
  TOKEN_TRANSFER_EVENT_TYPES,
  TransferEvent,
} from '../../../types';
import { TransformFunctionParam } from './transformMarketEvent';

export function transformMintEvent({
  event,
  at,
  price,
  eventType,
}: TransformFunctionParam<MintEvent, TokenTransferEvent['eventType']>):
  | TransferEvent
  | undefined {
  return {
    at,
    ...price,
    eventType,
    type: TOKEN_TRANSFER_EVENT_TYPES.MINT,
    from: ZERO_ADDRESS,
    to: event.toAddress,
    raw: {
      source: MEDIA_SOURCES.ZORA,
      data: event,
    },
  };
}
