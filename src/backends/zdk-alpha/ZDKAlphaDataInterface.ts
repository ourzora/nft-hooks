import { NFTInterface } from '../../types/NFTInterface';

import { TokenResponseItem, TokensResponseList } from '@zoralabs/zdk-alpha/dist/types';

type TokensResponseItem = TokensResponseList[0];
export type SharedTokenResponse = TokenResponseItem | TokensResponseItem;

export interface ZDKAlphaDataInterface extends NFTInterface<SharedTokenResponse> {}
