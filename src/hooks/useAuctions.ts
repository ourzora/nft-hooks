import { useState } from 'react';
import { ReserveAuctionPartialFragment } from '../graph-queries/zora-types';

import { useCallbackFetch } from './useCallbackFetch';

export type useAuctionHouseType = {
  loading: boolean;
  error?: string;
  auctions?: ReserveAuctionPartialFragment[];
};

/**
 * Fetches on-chain NFT auction data for the given curator
 *
 * @param id id of zNFT to fetch blockchain information for
 * @param curator
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
export function useAuctions(
  curators: readonly string[] = [],
  approved: boolean | null = null
): useAuctionHouseType {
  const [auctions, setAuctions] = useState<ReserveAuctionPartialFragment[]>();
  const [error, setError] = useState<string | undefined>();

  useCallbackFetch(curators, async (fetchAgent, curators) => {
    try {
      let data = await fetchAgent.fetchReserveAuctions(curators, approved);
      setAuctions(data);
    } catch (err) {
      setError(err.toString());
    }
  });

  return {
    loading: !error && !auctions,
    error,
    auctions,
  };
}
