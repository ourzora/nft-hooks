import { NFTInterface } from '../NFTInterface';
import type { TokenFullFragment } from "@zoralabs/zdk-alpha/dist/src/queries/fragments";

export interface ZDKAlphaDataInterface
  extends NFTInterface<TokenFullFragment> {}
