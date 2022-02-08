import { Networks, NetworkIDs } from './constants/networks';
import { useNFT, useNFTType } from './hooks/useNFT';
import { useNFTContent, useNFTContentType } from './hooks/useNFTContent';
import { useENSAddress } from './hooks/useENSAddress';
import { useNFTMetadata, useNFTMetadataType } from './hooks/useNFTMetadata';
import { NFTFetchConfiguration } from './context/NFTFetchContext';
import { MediaFetchAgent } from './fetcher/MediaFetchAgent';
import { ChainCurrencyType, AuctionResultType } from './fetcher/FetchResultTypes';
import { useAuctions } from './hooks/useAuctions';
import { useZoraUsername } from './hooks/useZoraUsername';
import { AuctionType, NFTDataType, PricingInfo } from './fetcher/AuctionInfoTypes';
import { AuctionStateInfo } from './fetcher/AuctionState';
import * as DataTransformers from './fetcher/DataTransformers';
import * as FetchStaticData from './fetcher/FetchStaticData';
import { RequestError } from './fetcher/RequestError';
import { useZNFTGroup } from './hooks/useZNFTGroup';
import { useNFTIndexer } from './hooks/useNFTIndexer';
import { useNFTIndexerQuery } from './hooks/useNFTIndexerQuery';
import { CurrencyValue, NFTObject } from './backends/NFTInterface';
import * as Strategies from './strategies';

export {
  // Hooks
  useAuctions,
  useNFT,
  useNFTContent,
  useNFTMetadata,
  // Wrapped by useNFT, can use the underlying hooks here
  useZNFTGroup,

  // these hooks have been deprecated
  useNFTIndexer,
  useNFTIndexerQuery,

  useZoraUsername,
  useENSAddress,

  // Media hook types
  useNFTContentType,
  useNFTMetadataType,
  useNFTType,

  // New types
  NFTObject,
  Strategies,
  CurrencyValue,

  // Configuration
  NFTFetchConfiguration,
  // Fetch Agent underlying helper
  MediaFetchAgent,

  // Deprecated Types
  AuctionResultType,
  AuctionType,
  AuctionStateInfo,
  NFTDataType,
  ChainCurrencyType,
  PricingInfo,
  // Deprecated: Data Transfomers
  DataTransformers,
  // Deprecated: Static server-side data fetching utilities
  FetchStaticData,

  // Constants
  Networks,
  // Constant Types
  NetworkIDs,
  // Error type
  RequestError,
};
