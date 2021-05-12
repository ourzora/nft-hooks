import { Maybe } from 'graphql/jsutils/Maybe';

import { TokenShortFragment } from '../graph-queries/uniswap-types';
import {
  AskPriceFragment,
  BidDataPartialFragment,
  NftMediaFragment,
  ReserveAuctionPartialFragment,
} from '../graph-queries/zora-types';
import { AuctionInfoData, PastReserveBid, PerpetualAsk, PerpetualBid } from './AuctionInfoTypes';

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

type ReserveAuctionBidsWithCurrency = Omit<ReserveAuctionPartialFragment, 'previousBids'> & {
  previousBids: PastReserveBid[],
};

export type NFTDataType = Omit<NFTMediaDataType, 'pricing'> & {
  auction: AuctionInfoData;
  pricing: {
    perpetual: {
      bids: PerpetualBid[];
      ask: Maybe<PerpetualAsk>;
    };
    reserve: Maybe<ReserveAuctionBidsWithCurrency>;
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
