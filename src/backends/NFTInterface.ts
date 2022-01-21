import { KNOWN_CONTRACTS } from '../fetcher/FetchResultTypes';
import { ETHAddress } from '../types/standard';

type Nullable<T> = T | null;


type CurrencyValue = {
  usdValue?: string,
  ethValue?: string,
  symbol: string,
  decimals?: number,
  amount: string,
  prettyAmount: string,
};

export type AuctionBidEvent = {
  creator: string,
  amount: CurrencyValue,
  block: {
    timestamp: string,
    txn: string,
    number: string,
  },
};

export type AuctionLike = {
  winner?: string,
  endsAt?: number,
  duration: number,
  startedAt?: number,
  currentBid?: AuctionBidEvent,
  // current bid is duplicated within bids
  bids: AuctionBidEvent[],
  source: 'ZoraReserveV0' | 'OpenseaEnglish',
} & MarketInfo;

type FixedPriceLike = {
  type: 'ask' | 'offer',
  expires: string,
  source: 'ZNFTPerpetual' | 'ZoraAskV1' | 'OpenseaFixed'
} & MarketInfo;

type MarketInfo = {
  raw: any,
  amount: CurrencyValue,
  // pending - inactive pending some event
  // active - can be filled / auction is ongoing
  // completed - auction end fill complete
  // cancelled - user cancels at some point
  status: 'pending' | 'active' | 'complete' | 'cancelled' | 'unknown';
  createdAt: number,
  finishedAt?: number,
  cancelledAt?: number,
}

export type MarketModule = AuctionLike | FixedPriceLike;

export type NFTObject = {
  rawData: {
    [loaderName: string]: any;
  };
  nftError?: {
    error: any;
    description: string;
    component: string;
  };
  media?: {
    thumbnail: Nullable<string>,
    preview: Nullable<string>,
    full: Nullable<string>,
    source: 'opensea' | 'zora' | 'derived',
  },
  nft?: {
    tokenId: string;
    contract: {
      address: string;
      name: Nullable<string>;
      description: Nullable<string>;
      symbol: Nullable<string>;
      knownContract?: KNOWN_CONTRACTS;
    };
    owner: ETHAddress;
    creator?: ETHAddress;
    metadataURI: Nullable<string>;
    // Zora-specific extension but used for our creator contracts
    contentURI: Nullable<string>;
  };
  metadata?: {
    name: Nullable<string>;
    image: Nullable<string>;
    description: Nullable<string>;
    animation_url: Nullable<string>;
    attributes: {
      name: Nullable<string>,
      value: Nullable<string>,
      display: Nullable<string>,
    }[],
    raw?: any;
  };
  markets?: MarketModule[],
};

export interface NFTInterface<T> {
  loadNFT(tokenContract: string, tokenId: string): Promise<T | Error>;
  loadNFTs(tokenContractAndIds: readonly string[]): Promise<(T | Error)[]>;
  canLoadNFT(tokenContract: string, tokenId: string): boolean;
  transformNFT(response: T, currentObject: NFTObject): NFTObject;
}
