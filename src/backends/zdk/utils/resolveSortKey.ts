import { TokenSortKey } from '@zoralabs/zdk/dist/queries/queries-sdk';
import { SortField } from '../../../types/NFTQuery';

export function resolveSortKey(sortField: SortField) {
  if (sortField === SortField.MINTED) {
    return TokenSortKey.Minted;
  }
  if (sortField === SortField.ACTIVE) {
    return TokenSortKey.Transferred;
  }
  if (sortField === SortField.ANY_PRICE) {
    throw new Error('not supported');
  }
  if (sortField === SortField.TOKEN_ID) {
    return TokenSortKey.TokenId;
  }
  throw new Error('not supported');
}
