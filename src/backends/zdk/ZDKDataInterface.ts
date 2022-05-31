import { NFTInterface } from '../../types/NFTInterface';

import { TokenResponseItem, TokensResponseList } from '@zoralabs/zdk/dist/types';

type TokensResponseItem = TokensResponseList[0];
export type SharedTokenResponse = TokenResponseItem | TokensResponseItem;

export interface ZDKDataInterface extends NFTInterface<SharedTokenResponse> {}
