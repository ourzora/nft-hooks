import { useContext } from 'react';
import useSWR, { SWRConfiguration } from 'swr';

import { NFTFetchContext } from '../context/NFTFetchContext';
import { onErrorRetry } from '../fetcher/ErrorUtils';
import { IndexerTokenWithAuctionFragment } from '../graph-queries/zora-indexer-types';

export type useNFTType = {
  error?: string;
  results?: IndexerTokenWithAuctionFragment[];
};

type OptionsType = SWRConfiguration;

type QueryType = {
  collectionAddresses: string[];
  curatorAddress?: string;
  approved?: boolean;
  onlyAuctions?: boolean;
  owner?: string;
  offset?: number;
  limit?: number;
};

/**
 * Fetches on-chain NFT data and pricing for the given zNFT id
 *
 * @param contractAddresses address of the contract, if null and tokenID is passed in, a ZNFT is assumed
 * @param tokenId id of NFT to fetch blockchain information for
 * @param approved Auction status approved fetch boolean true = only approved, false = only not approved, null/undefined = any
 * @param options SWR flags and an option to load currency info
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
export function useNFTIndexerQuery(
  {
    collectionAddresses,
    curatorAddress,
    onlyAuctions,
    approved,
    owner,
    limit,
    offset,
  }: QueryType,
  options: OptionsType = {}
): useNFTType {
  options.onErrorRetry = onErrorRetry;
  const { fetcher } = useContext(NFTFetchContext);

  if (owner && curatorAddress) {
    throw new Error('Owner and curator address cannot be specified at the same time');
  }

  const nftListData = useSWR(
    !options.initialData && collectionAddresses
      ? [
          'useNFTIndexerGroup',
          owner,
          onlyAuctions,
          approved,
          curatorAddress,
          limit,
          offset,
          ...collectionAddresses,
        ]
      : null,
    (
      _,
      owner,
      onlyAuctions,
      approved,
      curatorAddress,
      limit,
      offset,
      ...collectionAddresses
    ) => {
      if (owner) {
        return fetcher.fetchZoraIndexerUserOwnedNFTs({
          collectionAddresses,
          userAddress: owner,
          limit,
          offset,
        });
      }
      return fetcher.fetchZoraIndexerGroupData({
        collectionAddresses: collectionAddresses,
        curatorAddress: curatorAddress,
        approved,
        onlyAuctions,
        limit: limit || 200,
        offset: offset || 0,
      });
    },
    options
  );

  return {
    error: nftListData.error,
    results: nftListData.data,
  };
}
