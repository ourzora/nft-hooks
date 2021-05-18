import { useContext } from 'react';
import useSWR from 'swr';

import { NFTFetchContext } from '../context/NFTFetchContext';

export type useNFTMetadataType = {
  loading: boolean;
  error?: Error;
  metadata: any;
};

/**
 * Fetches NFT Metadata from IPFS.
 * This hook is cached, it can be called
 *  multiple times with no issue on one page.
 *
 * @param uri URI of metadata to fetch
 * @returns @type useNFTMetadataType
 */
export function useNFTMetadata(uri?: string, initialData?: any): useNFTMetadataType {
  const fetcher = useContext(NFTFetchContext);
  const { error, data } = useSWR(
    uri ? ['loadMetadata', uri] : null,
    (_, uri) => fetcher.fetchIPFSMetadata(uri),
    { initialData }
  );

  return {
    loading: !error && !data,
    error,
    metadata: data,
  };
}
