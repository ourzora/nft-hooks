import { NFTInterface } from '../../types/NFTInterface';

import {
  TokenResponseItem,
  TokensResponseItem,
} from '@zoralabs/zdk-alpha/dist/src/types';

export type SharedTokenResponse = TokenResponseItem | TokensResponseItem;

export interface ZDKAlphaDataInterface extends NFTInterface<SharedTokenResponse> {}
