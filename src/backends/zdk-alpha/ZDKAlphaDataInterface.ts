import {
  MarketDetailsFragment,
  MarketInfoFragment,
  TokenDetailsFragment,
  TokenInfoFragment,
} from '@zoralabs/zdk-alpha/dist/src/queries/queries-sdk';
import { NFTInterface } from '../../types/NFTInterface';

import { TokensResponseItem, TokensQuery } from '@zoralabs/zdk-alpha/dist/src/types';

export type FullTokenMarketResponse = {
  markets: MarketInfoFragment & MarketDetailsFragment;
  token: TokenInfoFragment & TokenDetailsFragment;
};
export interface ZDKAlphaDataInterface extends NFTInterface<TokensResponseItem> {}

export { TokensResponseItem, TokensQuery };
