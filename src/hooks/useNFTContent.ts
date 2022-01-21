import { useContext } from 'react';
import useSWR, { SWRConfiguration } from 'swr';

import { MediaContentType } from '../fetcher/FetchResultTypes';
import { NFTFetchContext } from '../context/NFTFetchContext';

export type useNFTContentType = {
  error?: string;
  content?: MediaContentType;
};

/**
 * Hook to fetch NFT content from uri and mimetype
 * Fetches text mime types and returns uris for non-text media
 * that should be embedded
 *
 * @param uri URI of content to load or return URI for
 * @param mimeType MIME type expected for content
 * @returns useNFTContentType
 */
export function useNFTContent(
  uri?: string,
  mimeType?: string,
  options?: SWRConfiguration<MediaContentType>
): useNFTContentType {
  const { fetcher } = useContext(NFTFetchContext);
  const mimeTypeFetched = useSWR(
    uri && !mimeType ? ['fetchContentMimeType', uri] : null,
    (_, uri) => fetcher.fetchContentMimeType(uri)
  );
  const mimeTypeResult = mimeType || mimeTypeFetched.data;
  const content = useSWR(
    uri && mimeTypeResult ? ['fetchContent', uri, mimeTypeResult] : null,
    (_, uri, mimeTypeResult) => fetcher.fetchContent(uri, mimeTypeResult),
    options
  );

  const error = mimeTypeFetched.error || content.error;
  return {
    error,
    content: content.data,
  };
}
