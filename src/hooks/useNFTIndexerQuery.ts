import { useContext } from 'react';
import useSWR, { SWRConfiguration } from 'swr';

import { NFTFetchContext } from '../context/NFTFetchContext';
import { TokenWithAuctionFragment } from '../graph-queries/zora-indexer-types';

export type useNFTType = {
  error?: string;
  results?: TokenWithAuctionFragment[];
};

type OptionsType = SWRConfiguration;

type QueryType = {
  collectionAddress?: string;
  curatorAddress?: string;
  approved?: boolean;
  owner?: string;
  offset?: number;
  limit?: number;
};

/**
 * Fetches on-chain NFT data and pricing for the given zNFT id
 *
 * @param contractAddress address of the contract, if null and tokenID is passed in, a ZNFT is assumed
 * @param curatorAddress address of the curator
 * @param approved optional, if set to true or false only approved or non-approved auctions will be shown
 * @param tokenId id of NFT to fetch blockchain information for
 * @param options SWR flags and an option to load currency info
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
export function useNFTIndexerQuery(
  { collectionAddress, curatorAddress, approved, owner, limit, offset }: QueryType,
  options: OptionsType = {}
): useNFTType {
  const fetcher = useContext(NFTFetchContext);

  const nftListData = useSWR(
    !options.initialData && (collectionAddress || curatorAddress)
      ? [
          'useNFTIndexerGroup',
          curatorAddress,
          collectionAddress,
          approved,
          owner,
          limit,
          offset,
        ]
      : null,
    (_, curatorAddress, collectionAddress, approved, owner, limit, offset) => {
      if (owner) {
        return fetcher.fetchZoraIndexerUserOwnedNFTs({
          collectionAddress,
          userAddress: owner,
          limit,
          offset,
        });
      }
      return fetcher.fetchZoraIndexerGroupData({
        collectionAddress,
        curatorAddress,
        approved,
        limit,
        offset,
      });
    },
    options
  );

  return {
    error: nftListData.error,
    results: nftListData.data,
  };
}
