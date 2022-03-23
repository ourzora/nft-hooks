import {
  MarketDetailsFragment,
  MarketInfoFragment,
  TokenDetailsFragment,
  TokenInfoFragment,
  TokenMarketsQuery
} from '@zoralabs/zdk-alpha/dist/src/queries/queries-sdk';
import { NFTInterface } from '../../types/NFTInterface';

// TODO: use new type from zdk-alpha
export type TokenMarketResponseItem = TokenMarketsQuery['tokenMarkets']['nodes'][0];

export type FullTokenMarketResponse = {
  markets: MarketInfoFragment & MarketDetailsFragment;
  token: TokenInfoFragment & TokenDetailsFragment;
};
export interface ZDKAlphaDataInterface extends NFTInterface<TokenMarketResponseItem> {}
