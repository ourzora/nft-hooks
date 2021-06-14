import { useContext } from 'react';

import { NFTFetchContext } from '../context/NFTFetchContext';
import { NFTDataType } from '../fetcher/AuctionInfoTypes';
import { useOpenseaNFT } from './useOpenseaNFT';
import { ZORA_MEDIA_CONTRACT_BY_NETWORK } from '../constants/addresses';
import { useZNFT } from './useZNFT';

export type useNFTType = {
  currencyLoaded: boolean;
  error?: string;
  data?: NFTDataType;
};

type OptionsType = {
  refreshInterval?: number;
  initialData?: any;
  loadCurrencyInfo?: boolean;
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

  if (!contractAddress) {
    contractAddress = ZORA_MEDIA_CONTRACT_BY_NETWORK[fetcher.networkId];
  }

  const isZoraContractAddress =
    contractAddress === ZORA_MEDIA_CONTRACT_BY_NETWORK[fetcher.networkId];

  const nonZoraNFT = useOpenseaNFT(
    !isZoraContractAddress ? contractAddress : undefined,
    !isZoraContractAddress ? tokenId : undefined,
    options
  );

  const zoraNFT = useZNFT(isZoraContractAddress ? tokenId : undefined, options);

  let data = isZoraContractAddress ? zoraNFT : nonZoraNFT;

  return {
    currencyLoaded: !!data.currencyLoaded,
    error: data.error,
    data: data.data,
  };
}
