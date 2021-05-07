import { Maybe } from 'graphql/jsutils/Maybe';
import { TokenShortFragment } from 'src/graph-queries/uniswap-types';
import {
  AskPriceFragment,
  BidDataPartialFragment,
  NftMediaFragment,
  ReserveAuctionPartialFragment,
} from 'src/graph-queries/zora-types';
import { AuctionInfoData, PerpetualAsk, PerpetualBid } from './AuctionInfoTypes';

export type MediaContentType =
  | { uri: string; type: 'uri'; mimeType: string }
  | { text: string; type: 'text'; mimeType: string };

export type MetadataResultType = {
  metadata: any;
  valid: boolean;
};

export type NFTMediaDataType = {
  nft: Omit<NftMediaFragment, 'currentBids' | 'currentAsk'>;
  pricing: {
    perpetual: {
      bids: BidDataPartialFragment[];
      ask: Maybe<AskPriceFragment>;
    };
    reserve: Maybe<ReserveAuctionPartialFragment>;
  };
};

export type NFTDataType = Omit<NFTMediaDataType, 'pricing'> & {
  auction: AuctionInfoData;
  pricing: {
    perpetual: {
      bids: PerpetualBid[];
      ask: Maybe<PerpetualAsk>;
    };
    reserve: Maybe<ReserveAuctionPartialFragment>;
  };
};

export type ZoraUsernameFetchResult = {
  name: string;
  profileImageURL: string;
  username: string;
  verified: string;
};

export type ChainCurrencyType = {
  ethToUsd: string;
  token: TokenShortFragment;
};
