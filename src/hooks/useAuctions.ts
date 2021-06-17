import { useContext } from 'react';
import { ReserveAuctionPartialWithMediaFragment } from 'src/graph-queries/zora-types';
import useSWR, { SWRConfiguration } from 'swr';

import { NFTFetchContext } from '../context/NFTFetchContext';

export type useAuctionHouseType = {
  loading: boolean;
  error?: string;
  data?: ReserveAuctionPartialWithMediaFragment[];
};

/**
 * Fetches on-chain NFT auction data for the given curator
 *
 * @param curators
 * @param approved
 * @returns useNFTType hook results include loading, error, and data (ReserveAuctionPartialFragment).
 */
export function useAuctions(
  curators: readonly string[] = [],
  approved: boolean | null = null,
  options?: SWRConfiguration<ReserveAuctionPartialWithMediaFragment[]>
): useAuctionHouseType {
  const fetcher = useContext(NFTFetchContext);
  const queryKey = JSON.stringify({ type: 'useAuctions', curators, approved });
  const { data, error } = useSWR<ReserveAuctionPartialWithMediaFragment[]>(
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
