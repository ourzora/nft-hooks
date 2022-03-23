import { NFTQuery } from '../types/NFTQuery';

export enum KNOWN_CONTRACTS {
  ZORA = 'zora',
}

export enum MARKET_TYPES {
  AUCTION = 'Auction',
  FIXED_PRICE = 'FixedPrice',
  EDITION = 'Edition',
}

type Nullable<T> = T | null;

export type ETHAddress = string;

export type CurrencyValue = {
  usdValue?: string;
  ethValue?: string;
  symbol: string;
  name?: string;
  currency: string;
  decimals?: number;
  amount: string;
  prettyAmount: string;
};

export type TimedAction = {
  timestamp: number;
  blockNumber: Nullable<number>;
  transactionHash: Nullable<string>;
};

export type AuctionBidEvent = {
  creator: string;
  amount: CurrencyValue;
  created: TimedAction;
};

export type EditionPurchaseEvent = {
  buyer: string;
  price?: CurrencyValue;
  purchasedAt: TimedAction;
};

export type AuctionLike = {
  winner?: string;
  endsAt?: TimedAction;
  duration: number;
  startedAt?: TimedAction;
  currentBid?: AuctionBidEvent;
  // current bid is duplicated within bids
  bids: AuctionBidEvent[];
  source: 'ZoraReserveV0' | 'OpenseaEnglish';
  type: MARKET_TYPES.AUCTION;
} & MarketInfo;

export type FixedPriceLike = {
  side: 'ask' | 'offer';
  expires?: number;
  source: 'ZNFTPerpetual' | 'ZoraAskV1' | 'ZoraAskV1Event' | 'OpenseaFixed';
  type: MARKET_TYPES.FIXED_PRICE;
} & MarketInfo;

export type EditionLike = {
  totalSupply: number;
  editionSize: number;
  purchases: EditionPurchaseEvent[];
  source: 'Custom' | 'ZoraEditions';
  type: MARKET_TYPES.EDITION;
} & MarketInfo;

export type MarketInfoStatus =
  | 'pending'
  | 'active'
  | 'complete'
  | 'cancelled'
  | 'unknown'
  | 'invalid';

type MarketInfo = {
  raw: any;
  amount: CurrencyValue;
  // pending - inactive pending some event
  // active - can be filled / auction is ongoing
  // completed - auction end fill complete
  // cancelled - user cancels at some point
  status: MarketInfoStatus;
  createdAt: TimedAction;
  createdBy?: string;
  finishedAt?: TimedAction;
  cancelledAt?: TimedAction;
};

export type MarketModule = AuctionLike | FixedPriceLike | EditionLike;

export type TokenTransferEventType = 'mint' | 'burn' | 'transfer' | 'sale';

export enum EventType {
  TokenTransferEvent,
  TokenMarketEvent,
}

export type TokenTransferEvent = {
  from: ETHAddress;
  to: ETHAddress;
  at: TimedAction;
  type: TokenTransferEventType;
  eventType: EventType.TokenTransferEvent;
};

export type TokenMarketEvent = {
  market: MarketModule;
  at: TimedAction;
  eventType: EventType.TokenMarketEvent;
};

export type TokenEvent = TokenTransferEvent | TokenMarketEvent;

export type MediaObject = {
  uri: string;
  mime?: string;
};

export type MetadataAttributeType = {
  name: Nullable<string>;
  value: Nullable<string>;
  display: Nullable<string>;
};

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
    thumbnail: Nullable<MediaObject>;
    image: Nullable<MediaObject>;
    content: Nullable<MediaObject>;
    source: 'opensea' | 'zora' | 'derived';
  };
  nft?: {
    tokenId: string;
    contract: {
      address: string;
      name: Nullable<string>;
      description: Nullable<string>;
      symbol: Nullable<string>;
      knownContract?: KNOWN_CONTRACTS;
    };
    minted: {
      minter?: string;
      at?: TimedAction;
    };
    owner?: ETHAddress;
    metadataURI: Nullable<string>;
    // Zora-specific extension but exposed for parsed JSON in contracts
    contentURI: Nullable<string>;
  };
  metadata?: {
    name?: Nullable<string>;
    image?: Nullable<string>;
    description?: Nullable<string>;
    animation_url?: Nullable<string>;
    attributes?: MetadataAttributeType[];
    raw?: any;
  };
  markets?: MarketModule[];
  events?: TokenEvent[];
};

export interface NFTInterface<T> {
  loadNFT(tokenContract: string, tokenId: string): Promise<T | Error>;
  loadNFTs(tokenContractAndIds: readonly string[]): Promise<(T | Error)[]>;
  queryNFTs(query: NFTQuery): Promise<T[] | Error>;
  canLoadNFT(tokenContract: string, tokenId: string): boolean;
  transformNFT(response: T, currentObject?: NFTObject): NFTObject;
}
