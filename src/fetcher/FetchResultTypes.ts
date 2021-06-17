import { TokenShortFragment } from '../graph-queries/uniswap-types';
import {
  ReserveAuctionPartialFragment,
} from '../graph-queries/zora-types';
import {
  CurrentReserveBid,
  PastReserveBid,
} from './AuctionInfoTypes';

export type MediaContentType =
  | { uri: string; type: 'uri'; mimeType: string }
  | { text: string; type: 'text'; mimeType: string };

export type FetchGroupTypes = 'id' | 'creator' | 'owner';

type MetadataIsh = {
  mimeType: string;
  name: string;
  description: string;

  // Only used for non-zora NFTs
  animation_url?: string;
  image?: string;
};

export type MetadataResultType = {
  metadata: MetadataIsh;
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

export enum KNOWN_CONTRACTS {
  ZORA = 'zora',
};

type ETHAddress = string;

export type NFTResultType = {
  tokenId: string,
  contract: {
    address: string;
    knownContract?: KNOWN_CONTRACTS;
  },
  owner: ETHAddress;
  creator?: ETHAddress;
  metadataURI: string;
};

export type GenericNFTResponseType = {
  metadata: MetadataIsh
}

export type ZoraMedia = {
  metadataHash: string;
  contentURI: string;
  contentHash?: string;
  creatorSharePercentage: number;
  creatorBidShare: string;
  createdAtTimestamp: string;
};

export type ReserveAuctionBidsWithCurrency = Omit<
  ReserveAuctionPartialFragment,
  'previousBids' | 'currentBid' | 'reservePrice'
> & {
  previousBids: PastReserveBid[];
  currentBid?: CurrentReserveBid;
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
