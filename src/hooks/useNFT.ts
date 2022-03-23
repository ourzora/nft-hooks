import { useContext } from 'react';

import { NFTFetchContext } from '../context/NFTFetchContext';
import { merge } from 'merge-anything';
import useSWR from 'swr';
import { NFTStrategy } from '../strategies/NFTStrategy';
import { NFTObject } from '../types/NFTInterface';

export type useNFTType = {
  currencyLoaded: boolean;
  error?: any;
  marketError?: any;
  data?: NFTObject;
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
  options: OptionsType = {},
  marketOptions: OptionsType = {}
): useNFTType {
  const dataContext = useContext(NFTFetchContext);

  const strategy: NFTStrategy = dataContext.strategy;

  // Fetch media data
  const { data: nftData, error: nftError } = useSWR(
    contractAddress && tokenId ? ['fetchNFTData', contractAddress, tokenId] : null,
    (_, address: string, tokenId: string) => strategy.fetchNFT(address, tokenId),
    options
  );

  // Fetch market data (if needed)
  const { data: nftMarketData, error: nftMarketError } = useSWR(
    contractAddress && tokenId
      ? ['fetchNFTMarket', contractAddress, tokenId]
      : null,
    (_, address: string, tokenId: string) => strategy.fetchSeconaryData(address, tokenId),
    marketOptions
  );

  return {
    data:
      nftData || nftMarketData ? merge(nftData || {}, nftMarketData || {}) : undefined,
    currencyLoaded: false,
    error: nftError,
    marketError: nftMarketError,
  };
}
