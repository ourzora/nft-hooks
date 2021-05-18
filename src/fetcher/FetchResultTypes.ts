import { Maybe } from 'graphql/jsutils/Maybe';

import { TokenShortFragment } from '../graph-queries/uniswap-types';
import {
  AskPriceFragment,
  BidDataPartialFragment,
  NftMediaFragment,
  ReserveAuctionPartialFragment,
} from '../graph-queries/zora-types';
import {
  AuctionInfoData,
  CurrentReserveBid,
  PastReserveBid,
  PerpetualAsk,
  PerpetualBid,
} from './AuctionInfoTypes';

export type MediaContentType =
  | { uri: string; type: 'uri'; mimeType: string }
  | { text: string; type: 'text'; mimeType: string };

export type MetadataResultType = {
  metadata: any;
};

export type AuctionResultType = ReserveAuctionPartialFragment;
export type AuctionsResult = AuctionResultType[];

export type UsernameResponseType = {
  address: string,
  bio?: string,
  name?: string,
  username?: string,
  verified?: boolean,
  website?: string,
};

export type NFTMediaDataType = {
  nft: Omit<NftMediaFragment, 'currentBids' | 'currentAsk'> & {
    creatorBidSharePercentage: number;
  };
  pricing: {
    perpetual: {
      bids: BidDataPartialFragment[];
      ask: Maybe<AskPriceFragment>;
    };
    reserve: Maybe<ReserveAuctionPartialFragment>;
  };
};

type ReserveAuctionBidsWithCurrency = Omit<
  ReserveAuctionPartialFragment,
  'previousBids' | 'currentBid'
> & {
  previousBids: PastReserveBid[];
  currentBid?: CurrentReserveBid;
};

export type NFTAuctionType = {
  auction: AuctionInfoData;
  pricing: {
    perpetual: {
      bids: PerpetualBid[];
      ask: Maybe<PerpetualAsk>;
    };
    reserve: Maybe<ReserveAuctionBidsWithCurrency>;
  };
};

export type NFTDataType = Omit<NFTMediaDataType, 'pricing'> & NFTAuctionType;

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
