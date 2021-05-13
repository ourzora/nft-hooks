import { useState } from 'react';

import { RequestError } from '../fetcher/RequestError';
import { useCallbackFetch } from './useCallbackFetch';

export type useNFTMetadataType = {
  loading: boolean;
  error: string | undefined;
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
export function useNFTMetadata(
  uri?: string,
  { allowInvalid } = { allowInvalid: false }
): useNFTMetadataType {
  const [metadata, setMetadata] = useState<any>();
  const [error, setError] = useState<string | undefined>();

  useCallbackFetch(uri, async (fetchAgent, uri) => {
    try {
      const { metadata, valid } = await fetchAgent.loadMetadata(uri);
      if (!allowInvalid && !valid) {
        throw new RequestError('Metadata Invalid: Metadata could not be validated.');
      }
      setMetadata(metadata);
    } catch (err) {
      setError(err.toString());
    }
  });

  return {
    loading: !error && !metadata,
    error,
    metadata,
  };
}
