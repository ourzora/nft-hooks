import { Networks, NetworkIDs } from './constants/networks';
import { useNFT, useNFTType } from './hooks/useNFT';
import { useNFTContent, useNFTContentType } from './hooks/useNFTContent';
import { useENSAddress } from './hooks/useENSAddress';
import { useNFTMetadata, useNFTMetadataType } from './hooks/useNFTMetadata';
import { NFTFetchConfiguration } from './context/NFTFetchContext';
import { MediaFetchAgent } from './fetcher/MediaFetchAgent';
import { useZoraUsername } from './hooks/useZoraUsername';
import { RequestError } from './fetcher/RequestError';
import { CurrencyValue, NFTObject } from './backends/NFTInterface';
import * as Strategies from './strategies';

export {
  // Hooks
  useNFT,
  useNFTContent,
  useNFTMetadata,
  // Wrapped by useNFT, can use the underlying hooks here
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
  // Constants
  Networks,
  // Constant Types
  NetworkIDs,
  // Error type
  RequestError,
};
