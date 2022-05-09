import { EventInfoFragment } from '@zoralabs/zdk-alpha/dist/src/queries/queries-sdk';
import { NFTQuery } from '../types/NFTQuery';

export const enum KNOWN_CONTRACTS {
  ZORA = 'zora',
}

export const enum MARKET_TYPES {
  AUCTION = 'Auction',
  FIXED_PRICE = 'FixedPrice',
  EDITION = 'Edition',
}

export const enum EDITION_SOURCES {
  CUSTOM = 'Custom',
  ZORA_EDITIONS = 'ZoraEditions',
}

export const enum MARKET_INFO_STATUSES {
  PENDING = 'pending',
  ACTIVE = 'active',
  COMPLETE = 'complete',
  CANCELED = 'canceled',
  UNKNOWN = 'unknown',
  INVALID = 'invalid',
}

export const enum MEDIA_SOURCES {
  OPENSEA = 'opensea',
  ZORA = 'zora',
  DERIVED = 'derived',
  RAW = 'raw',
}

export const enum TOKEN_TRANSFER_EVENT_TYPES {
  MINT = 'mint',
  BURN = 'burn',
  TRANSFER = 'transfer',
  SALE = 'sale',
}

export const enum FIXED_PRICE_MARKET_SOURCES {
  ZNFT_PERPETUAL = 'ZNFTPerpetual',
  ZORA_ASK_V1 = 'ZoraAskV1',
  ZORA_ASK_V1_EVENT = 'ZoraAskV1Event',
  ZORA_ASK_V3 = 'ZoraAskV3',
  OPENSEA_FIXED = 'OpenseaFixed',
}

export const enum TOKEN_TRANSFER_EVENT_CONTEXT_TYPES {
  TOKEN_TRANSFER_EVENT = 'TokenTransferEvent',
  TOKEN_MARKET_EVENT = 'TokenMarketEvent',
}

export const enum AUCTION_SOURCE_TYPES {
  ZORA_RESERVE_V2 = 'ZoraReserveV2',
  OPENSEA_ENGLISH = 'OpenseaEnglish',
}

export const enum FIXED_SIDE_TYPES {
  ASK = 'ask',
  OFFER = 'offer',
}


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
  type: MARKET_TYPES.AUCTION;
  source: AUCTION_SOURCE_TYPES;
  winner?: string;
  endsAt?: TimedAction;
  duration: number;
  startedAt?: TimedAction;
  currentBid?: AuctionBidEvent;
  reservePrice?: CurrencyValue;
  // current bid is duplicated within bids
  bids: readonly AuctionBidEvent[];
} & MarketInfo;

export type FixedPriceLike = {
  type: MARKET_TYPES.FIXED_PRICE;
  source: FIXED_PRICE_MARKET_SOURCES;
  side: FIXED_SIDE_TYPES;
  expires?: number;
} & MarketInfo;

export type EditionLike = {
  type: MARKET_TYPES.EDITION;
  source: EDITION_SOURCES;
  totalSupply: number;
  editionSize: number;
  purchases: readonly EditionPurchaseEvent[];
} & MarketInfo;

export type MarketInfo = {
  raw: any;
  amount?: CurrencyValue;
  // pending - inactive pending some event
  // active - can be filled / auction is ongoing
  // completed - auction end fill complete
  // canceled - user cancels at some point
  status: MARKET_INFO_STATUSES;
  createdAt: TimedAction;
  createdBy?: string;
  finishedAt?: TimedAction;
  canceledAt?: TimedAction;
  marketContract?: ETHAddress;
};

export type MarketModule = AuctionLike | FixedPriceLike | EditionLike;

export enum AUCTION_EVENT_TYPES {
  AUCTION_CREATED = 'AuctionCreated',
  AUCTION_BID = 'AuctionBid',
  AUCTION_ENDED = 'AuctionEnded',
  AUCTION_FINALIZED = 'AuctionFinalized',
  AUCTION_APPROVED = 'AuctionApproved',
  AUCTION_CANCELLED = 'AuctionCancelled',
  AUCTION_UPDATED = 'AuctionUpdated',
}

export enum FIXED_PRICE_EVENT_TYPES {
  FIXED_PRICE_CREATED = 'FixedPriceCreated',
  FIXED_PRICE_FILLED = 'FixedPriceFilled',
  FIXED_PRICE_CANCELLED = 'FixedPriceCancelled',
  FIXED_PRICE_UPDATED = 'FixedPriceUpdated',
}

type SharedMarketEventData = {
  sender: ETHAddress;
  blockInfo: TimedAction;
  marketAddress: ETHAddress;
};

export type TokenTransferEvent = {
  from: ETHAddress;
  to: ETHAddress;
  at: TimedAction;
  type: TOKEN_TRANSFER_EVENT_TYPES;
  eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_TRANSFER_EVENT;
};

type TransferEvent = TokenTransferEvent & {
  raw: {
    source: MEDIA_SOURCES;
    data: any;
  };
};

type MarketAuctionEvent = SharedMarketEventData & {
  event: AUCTION_EVENT_TYPES;
  at: TimedAction;
  amount?: number;
  eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT;
  raw:
    | {
        source: AUCTION_SOURCE_TYPES.ZORA_RESERVE_V2;
        // narrow down
        raw: EventInfoFragment;
      }
    | {
        source: AUCTION_SOURCE_TYPES.OPENSEA_ENGLISH;
        // TODO: probably can be narrowed down
        raw: any;
      };
};

type MarketFixedPriceEvent = SharedMarketEventData & {
  at: TimedAction;
  event: FIXED_PRICE_EVENT_TYPES;
  eventType: TOKEN_TRANSFER_EVENT_CONTEXT_TYPES.TOKEN_MARKET_EVENT;
  side: FIXED_SIDE_TYPES;
  raw:
    | {
        source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V3;
        // TODO: probably can be narrowed down
        data: any;
      }
    | {
        source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V1;
        // TODO: probably can be narrowed down
        data: any;
      }
    | {
        source: FIXED_PRICE_MARKET_SOURCES.ZNFT_PERPETUAL;
        // TODO: probably can be narrowed down
        data: any;
      }
    | {
        source: FIXED_PRICE_MARKET_SOURCES.OPENSEA_FIXED;
        // TODO: probably can be narrowed down
        data: any;
      };
};

export type NormalizedEvent = TransferEvent | MarketFixedPriceEvent | MarketAuctionEvent;

export type MediaObject = {
  uri: string;
  mime?: string;
};

export type MetadataAttributeType = {
  // TODO(iain): Is name optional in this context?
  name?: string;
  value?: string;
  display?: string;
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
    thumbnail?: MediaObject;
    image?: MediaObject;
    content?: MediaObject;
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
    metadataURI?: string;
    // Zora-specific extension but exposed for parsed JSON in contracts
    contentURI?: string;
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
  events?: readonly NormalizedEvent[];
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
