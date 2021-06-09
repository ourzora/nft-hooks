import { useContext } from 'react';
import useSWR, { SWRConfiguration } from 'swr';

import { NFTFetchContext } from '../context/NFTFetchContext';
import { ReserveAuctionPartialFragment } from '../graph-queries/zora-types';

export type useAuctionHouseType = {
  loading: boolean;
  error?: string;
  data?: ReserveAuctionPartialFragment[];
};

/**
 * Fetches on-chain NFT auction data for the given curator
 *
 * @param curators
 * @param approved
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
export function useAuctions(
  curators: readonly string[] = [],
  approved: boolean | null = null,
  options?: SWRConfiguration<ReserveAuctionPartialFragment[]>
): useAuctionHouseType {
  const fetcher = useContext(NFTFetchContext);
  const queryKey = JSON.stringify({ type: 'useAuctions', curators, approved });
  const { data, error } = useSWR<ReserveAuctionPartialFragment[]>(
    queryKey,
    async (query: string) => {
      const { curators, approved } = JSON.parse(query);
      return await fetcher.fetchReserveAuctions(curators, approved);
    },
    options
  );

  return {
    loading: !error && !data,
    error,
    data,
  };
}
