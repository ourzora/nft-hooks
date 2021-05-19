import { useContext } from 'react';
import useSWR from 'swr';

import { NFTFetchContext } from '../context/NFTFetchContext';
import { addAuctionInformation } from '../fetcher/TransformFetchResults';
import { getCurrenciesInUse } from '../fetcher/ExtractResultData';
import { NFTDataType } from '../fetcher/FetchResultTypes';

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
 * @param id id of zNFT to fetch blockchain information for
 * @param options SWR flags and an option to load currency info
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
export function useNFT(id?: string, options: OptionsType = {}): useNFTType {
  const fetcher = useContext(NFTFetchContext);
  const { loadCurrencyInfo = false, refreshInterval, initialData } = options || {};

  const nftData = useSWR(
    id ? ['loadNFTDataUntransformed', id] : null,
    (_, id) => fetcher.loadNFTDataUntransformed(id),
    { refreshInterval, dedupingInterval: 0, initialData }
  );
  const currencyData = useSWR(
    nftData.data && loadCurrencyInfo
      ? ['loadCurrencies', ...getCurrenciesInUse(addAuctionInformation(nftData.data))]
      : null,
    (_, ...currencies) => fetcher.loadCurrencies(currencies),
    {
      refreshInterval,
      dedupingInterval: 0,
    }
  );

  let data;
  if (nftData.data !== undefined) {
    data = addAuctionInformation(nftData.data, currencyData.data);
  }

  return {
    currencyLoaded: !!currencyData.data,
    error: nftData.error,
    data,
  };
}
