import { useState } from 'react';
import { getCurrenciesInUse } from '../fetcher/ExtractResultData';

import { NFTDataType } from '../fetcher/FetchResultTypes';
import { useCallbackFetch } from './useCallbackFetch';

export type useNFTType = {
  loading: boolean;
  currencyLoaded: boolean;
  error?: string;
  data?: NFTDataType;
};

/**
 * Fetches on-chain NFT data and pricing for the given zNFT id
 *
 * @param id id of zNFT to fetch blockchain information for
 * @param loadCurrencyInfo flag to enable loading currency conversion info to convert
 *                         token value to ETH and USD equivalent
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
export function useNFT(id?: string, loadCurrencyInfo: boolean = false): useNFTType {
  const [data, setData] = useState<NFTDataType>();
  const [currencyLoaded, setCurrencyLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  useCallbackFetch(id, async (fetchAgent, id) => {
    try {
      let data = await fetchAgent.loadNFTData(id);
      setData(data);
      if (loadCurrencyInfo && data) {
        setCurrencyLoaded(true);
        const currencyInfos = await fetchAgent.loadCurrencies(getCurrenciesInUse(data));
        setData(await fetchAgent.loadNFTData(id, currencyInfos));
        setCurrencyLoaded(true);
      }
    } catch (err) {
      setError(err.toString());
    }
  });

  return {
    loading: !error && !data,
    currencyLoaded,
    error,
    data,
  };
}
