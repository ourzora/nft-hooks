import { NFTQuery } from '../types/NFTQuery';

export enum KNOWN_CONTRACTS {
  ZORA = 'zora',
}

export enum MARKET_TYPES {
  AUCTION = 'Auction',
  FIXED_PRICE = 'FixedPrice',
  EDITION = 'Edition',
}

export enum EDITION_SOURCES {
  CUSTOM = 'Custom',
  ZORA_EDITIONS = 'ZoraEditions',
}

export enum MARKET_INFO_STATUSES {
  PENDING = 'pending',
  ACTIVE = 'active',
  COMPLETE = 'complete',
  CANCELED = 'canceled',
  UNKNOWN = 'unknown',
  INVALID = 'invalid',
}

export enum MEDIA_SOURCES {
  OPENSEA = 'opensea',
  ZORA = 'zora',
  DERIVED = 'derived',
  RAW = 'raw',
}

export enum TOKEN_TRANSFER_EVENT_TYPES {
  MINT = 'mint',
  BURN = 'burn',
  TRANSFER = 'transfer',
  SALE = 'sale',
}

export enum FIXED_PRICE_MARKET_SOURCES {
  ZNFT_PERPETUAL = 'ZNFTPerpetual',
  ZORA_ASK_V1 = 'ZoraAskV1',
  ZORA_ASK_V1_EVENT = 'ZoraAskV1Event',
  ZORA_ASK_V3 = 'ZoraAskV3',
  OPENSEA_FIXED = 'OpenseaFixed',
}

export enum TOKEN_TRANSFER_EVENT_CONTEXT_TYPES {
  TOKEN_TRANSFER_EVENT = 'TokenTransferEvent',
  TOKEN_MARKET_EVENT = 'TokenMarketEvent',
}

export enum AUCTION_SOURCE_TYPES {
  ZORA_RESERVE_V2 = 'ZoraReserveV2',
  OPENSEA_ENGLISH = 'OpenseaEnglish',
}

export enum FIXED_SIDE_TYPES {
  ASK = 'ask',
  OFFER = 'offer',
}

type Nullable<T> = T | null;

export type ETHAddress = string;

export type CurrencyAmount = {
  raw: string;
  value: number;
  decimals?: number;
};

export type CurrencyValue = {
  eth?: CurrencyAmount;
  usd?: CurrencyAmount;
  amount: CurrencyAmount;
  symbol: string;
  name?: string;
  address: ETHAddress;
};

export type TimedAction = {
  timestamp: number;
  blockNumber?: number;
  transactionHash?: string;
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
  reservePrice?: CurrencyValue;
  // current bid is duplicated within bids
  bids: readonly AuctionBidEvent[];
  source: AUCTION_SOURCE_TYPES;
  type: MARKET_TYPES.AUCTION;
} & MarketInfo;

export type FixedPriceLike = {
  side: FIXED_SIDE_TYPES;
  expires?: number;
  source: FIXED_PRICE_MARKET_SOURCES;
  type: MARKET_TYPES.FIXED_PRICE;
} & MarketInfo;

export type EditionLike = {
  totalSupply: number;
  editionSize: number;
  purchases: readonly EditionPurchaseEvent[];
  source: EDITION_SOURCES;
  type: MARKET_TYPES.EDITION;
} & MarketInfo;

export type MarketInfo = {
  raw: any;
  amount: CurrencyValue;
  // pending - inactive pending some event
  // active - can be filled / auction is ongoing
  // completed - auction end fill complete
  // canceled - user cancels at some point
  status: MARKET_INFO_STATUSES;
  createdAt: TimedAction;
  createdBy?: string;
  finishedAt?: TimedAction;
  canceledAt?: TimedAction;
};

export type MarketModule = AuctionLike | FixedPriceLike | EditionLike;

export type TokenTransferEvent = {
  from: ETHAddress;
  to: ETHAddress;
  at: TimedAction;
  type: TOKEN_TRANSFER_EVENT_TYPES;
  eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_TRANSFER_EVENT;
};

export type TokenMarketEvent = {
  market: MarketModule;
  at: TimedAction;
  eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT;
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
    source: MEDIA_SOURCES;
  };
  nft?: {
    tokenId: string;
    contract: {
      address: ETHAddress;
      name?: string;
      description?: string;
      symbol?: string;
      imageUri?: string;
      knownContract?: KNOWN_CONTRACTS;
    };
    minted: {
      address?: ETHAddress;
      at?: TimedAction;
    };
    owner?: {
      address: ETHAddress;
    };
    metadataURI: Nullable<string>;
    // Zora-specific extension but exposed for parsed JSON in contracts
    contentURI: Nullable<string>;
  };
  metadata?: {
    name?: string;
    description?: string;
    contentUri?: string;
    imageUri?: string;
    attributes?: readonly MetadataAttributeType[];
    // Raw uri or metadata retrieved from the server without normalisation
    raw?: any;
    // This is context parsing
    context?: any;
  };
  markets?: readonly MarketModule[];
  events?: readonly TokenEvent[];
};

export type NFTIdentifier = {
  contract: string;
  id: string;
};

export interface NFTInterface<T> {
  loadNFT(nft: NFTIdentifier): Promise<T | Error>;
  loadNFTs(nfts: readonly NFTIdentifier[]): Promise<(T | Error)[]>;
  queryNFTs(query: NFTQuery): Promise<T[] | Error>;
  canLoadNFT(nft: NFTIdentifier): boolean;
  transformNFT(response: T, currentObject?: NFTObject): NFTObject;
}
