import { useContext } from 'react';

import { NFTFetchContext } from '../context/NFTFetchContext';
import { NFTDataType } from '../fetcher/AuctionInfoTypes';
import merge from 'merge-deep';
import useSWR from 'swr';

export type useNFTType = {
  currencyLoaded: boolean;
  error?: any;
  marketError?: any;
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
  const { strategy } = useContext(NFTFetchContext);

  const { data: nftData, error: nftError } = useSWR(
    contractAddress && tokenId ? ['fetchNFTData', contractAddress, tokenId] : null,
    (_, address: string, tokenId: string) => strategy.fetchNFT(address, tokenId),
    options
  );

  const { data: nftMarketData, error: nftMarketError } = useSWR(
    strategy.shouldFetchMarket() && contractAddress && tokenId ? ['fetchNFTMarket', contractAddress, tokenId] : null,
    (_, address: string, tokenId: string) => strategy.fetchMarket(address, tokenId),
    options
  );

  return {
    data: nftData ? merge(nftData, nftMarketData) : undefined,
    currencyLoaded: false,
    error: nftError,
    marketError: nftMarketError,
  };
}
