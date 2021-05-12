import { useState } from 'react';
import { getCurrenciesInUse } from '../fetcher/ExtractResultData';

import { NFTDataType } from '../fetcher/FetchResultTypes';
import { useCallbackFetch } from './useCallbackFetch';

export type useAuctionHouseType = {
  loading: boolean;
  error?: string;
  data?: NFTDataType;
};

/**
 * Fetches on-chain NFT auction data for the given curator
 *
 * @param id id of zNFT to fetch blockchain information for
 * @param curator 
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
export function useAuctionHouse(curator: string): useAuctionHouseType {
  const [data, setData] = useState<NFTDataType>();
  const [error, setError] = useState<string | undefined>();

  useCallbackFetch(curator, async (fetchAgent, curator) => {
    try {
      let data = await fetchAgent.loadAuctionByCurator(curator);
      setData(data);
    } catch (err) {
      setError(err.toString());
    }
  });

  return {
    loading: !error && !data,
    error,
    data,
  };
}
