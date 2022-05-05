import { NFTInterface } from '../../types/NFTInterface';

// todo move and rename to correct response type
import { TokenResponseItem as TokensResponseItem, TokensQuery } from '@zoralabs/zdk-alpha/dist/src/types';
import { TokenQuery } from '@zoralabs/zdk-alpha/dist/src/queries/queries-sdk';

export type TokenResponseItem = NonNullable<TokenQuery['token']>;

export type SharedTokenResponse = TokenResponseItem | TokensResponseItem;

export interface ZDKAlphaDataInterface extends NFTInterface<SharedTokenResponse> {}

export { TokensResponseItem, TokensQuery };
