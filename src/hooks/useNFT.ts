import { useContext } from 'react';

import { NFTFetchContext } from '../context/NFTFetchContext';
import { NFTDataType } from '../fetcher/AuctionInfoTypes';
import { useOpenseaNFT } from './useOpenseaNFT';
import { ZORA_MEDIA_CONTRACT_BY_NETWORK } from '../constants/addresses';
import { useZNFT } from './useZNFT';
import { useNFTIndexer } from './useNFTIndexer';

export type useNFTType = {
  currencyLoaded: boolean;
  error?: string;
  data?: NFTDataType;
};

type OptionsType = {
  refreshInterval?: number;
  initialData?: any;
  loadCurrencyInfo?: boolean;
  useBetaIndexer?: boolean;
};

/**
 * Fetches on-chain NFT data and pricing for the given zNFT id
 *
 * @param contractAddress address of the contract, if null and tokenID is passed in, a ZNFT is assumed
 * @param tokenId id of NFT to fetch blockchain information for
 * @param options SWR flags and an option to load currency info
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
export function useNFT(
  contractAddress?: string,
  tokenId?: string,
  options: OptionsType = {}
): useNFTType {
  const fetcher = useContext(NFTFetchContext);

  const resolvedContractAddress = !contractAddress
    ? ZORA_MEDIA_CONTRACT_BY_NETWORK[fetcher.networkId]
    : contractAddress;

  const isZoraContractAddress =
    resolvedContractAddress === ZORA_MEDIA_CONTRACT_BY_NETWORK[fetcher.networkId];

  const openseaNFT = useOpenseaNFT(
    !options.useBetaIndexer && !isZoraContractAddress
      ? resolvedContractAddress
      : undefined,
    !options.useBetaIndexer && !isZoraContractAddress ? tokenId : undefined,
    options
  );

  const betaIndexerNFT = useNFTIndexer(
    options.useBetaIndexer ? resolvedContractAddress : undefined,
    options.useBetaIndexer ? tokenId : undefined,
    options
  );

  const zoraNFT = useZNFT(
    !options.useBetaIndexer && isZoraContractAddress ? tokenId : undefined,
    options
  );

  let data = options.useBetaIndexer
    ? betaIndexerNFT
    : isZoraContractAddress
    ? zoraNFT
    : openseaNFT;

  return {
    currencyLoaded: !!data.currencyLoaded,
    error: data.error,
    data: data.data,
  };
}
