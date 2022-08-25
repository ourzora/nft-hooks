import { TransferEvent as TransferEventFromAPI } from '@zoralabs/zdk/dist/queries/queries-sdk';
import { MEDIA_SOURCES, TOKEN_TRANSFER_EVENT_TYPES, TransferEvent } from '../../../types';
import { TransformFunctionParam } from './transformMarketEvent';

export function transformTransferEvent({
  event,
  at,
  price,
  eventType,
}: TransformFunctionParam<TransferEventFromAPI, TransferEvent['eventType']>):
  | TransferEvent
  | undefined {
  return {
    at,
    ...price,
    eventType,
    type: TOKEN_TRANSFER_EVENT_TYPES.TRANSFER,
    from: event.fromAddress,
    to: event.toAddress,
    raw: {
      source: MEDIA_SOURCES.ZORA, // TODO: double check this
      data: event,
    },
  };
}
