import {
  MarketDetailsFragment,
  MarketInfoFragment,
  TokenDetailsFragment,
  TokenInfoFragment,
} from '@zoralabs/zdk-alpha/dist/src/queries/queries-sdk';
import { NFTInterface } from '../NFTInterface';

export type FullTokenMarketResponse = {
  markets: MarketInfoFragment & MarketDetailsFragment;
  token: TokenInfoFragment & TokenDetailsFragment;
};
export interface ZDKAlphaDataInterface extends NFTInterface<FullTokenMarketResponse> {}
