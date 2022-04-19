import { useContext } from 'react';
import useSWR from 'swr';

import { NFTFetchContext } from '../context/NFTFetchContext';
import { NFTStrategy } from '../strategies/NFTStrategy';
import { NFTObject } from '../types';
import { NFTQuery } from '../types/NFTQuery';

export type useNFTQueryType = {
  data?: NFTObject[];
  error: Error;
};

type OptionsType = {
  refreshInterval?: number;
  initialData?: any;
  loadCurrencyInfo?: boolean;
  useBetaIndexer?: boolean;
};

/**
 * Fetches on-chain NFT data and pricing for a given general NFT Query
 *
 * @param query Query parameter to get list of NFTs for
 * @param options Options for SWR flags
 * @returns useNFTQueryType results including data and error for resulting NFTs
 */
export function useNFTQuery(query: NFTQuery, options: OptionsType = {}): useNFTQueryType {
  const dataContext = useContext(NFTFetchContext);

  const strategy: NFTStrategy = dataContext.strategy;

  // run query
  const { data, error } = useSWR<NFTObject[]>(
    query ? ['queryNFTs', JSON.stringify(query)] : null,
    (_, queryString) => strategy.queryNFTs(JSON.parse(queryString) as NFTQuery),
    options
  );

  return {
    data,
    error,
  };
}
