import {
  CurrentReserveBid,
  HighestBidType,
  PerpetualAsk,
  PerpetualBid,
  PricingInfo,
} from 'src/fetcher/AuctionInfoTypes';
import { AuctionStateInfo } from 'src/fetcher/AuctionState';
import { KNOWN_CONTRACTS } from '../fetcher/FetchResultTypes';
import { ETHAddress } from '../types/standard';

type Nullable<T> = T | null;

export type NFTObject = {
  rawData: {
    [loaderName: string]: any;
  };
  nftError?: {
    error: any;
    description: string;
    component: string;
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
    raw?: any;
  };
  market?: {
    status: AuctionStateInfo;
    perpetual: {
      bids: PerpetualBid[];
      ask?: PerpetualAsk;
      highestBid?: HighestBidType;
    };
    reserve?: {
      current: {
        highestBid?: HighestBidType;
        likelyHasEnded: boolean;
        reserveMet: boolean;
        reservePrice?: PricingInfo;
        bids?: CurrentReserveBid[];
      };
    };
  };
};

export interface NFTInterface<T> {
  loadNFT(tokenContract: string, tokenId: string): Promise<T | Error>;
  loadNFTs(tokenContractAndIds: readonly string[]): Promise<(T | Error)[]>;
  canLoadNFT(tokenContract: string, tokenId: string): boolean;
  transformNFT(response: T, currentObject: NFTObject): NFTObject;
}
