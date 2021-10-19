import { useContext } from 'react';
import useSWR from 'swr';

import { NFTFetchContext } from '../context/NFTFetchContext';
import { addAuctionInformation } from '../fetcher/TransformFetchResults';
import { getCurrenciesInUse } from '../fetcher/ExtractResultData';
import { ZNFTDataType, ZNFTMediaDataType } from '../fetcher/AuctionInfoTypes';

export type useZNFTType = {
  currencyLoaded: boolean;
  error?: string;
  data?: ZNFTDataType;
};

type OptionsType = {
  refreshInterval?: number;
  initialData?: any;
  loadCurrencyInfo?: boolean;
};

/**
 * Fetches on-chain NFT data and pricing for the given zNFT id
 * Deprecated: Please use useNFT instead.
 *
 * @param id id of zNFT to fetch blockchain information for
 * @param options SWR flags and an option to load currency info
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
export function useZNFT(id?: string, options: OptionsType = {}): useZNFTType {
  const fetcher = useContext(NFTFetchContext);
  const { loadCurrencyInfo = false, refreshInterval, initialData } = options || {};

  const nftData = useSWR<ZNFTMediaDataType>(
    id ? ['loadZNFTDataUntransformed', id] : null,
    (_, id) => fetcher.loadZNFTDataUntransformed(id),
    { refreshInterval, dedupingInterval: 0 }
  );
  const currencyData = useSWR(
    nftData.data && nftData.data.pricing && loadCurrencyInfo
      ? [
          'loadCurrencies',
          ...getCurrenciesInUse(addAuctionInformation(nftData.data.pricing)),
        ]
      : null,
    (_, ...currencies) => fetcher.loadCurrencies(currencies),
    {
      refreshInterval,
      dedupingInterval: 0,
    }
  );

  let data;
  if (nftData.data !== undefined) {
    data = {
      ...nftData.data,
      pricing: addAuctionInformation(nftData.data.pricing, currencyData.data),
    };
  } else {
    data = initialData;
  }

  return {
    currencyLoaded: !!currencyData.data,
    error: nftData.error,
    data,
  };
}
