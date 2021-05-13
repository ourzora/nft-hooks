import { useState } from 'react';

import { MediaContentType } from '../fetcher/FetchResultTypes';
import { useCallbackFetch } from './useCallbackFetch';

export type useNFTContentType = {
  loading: boolean;
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
export function useNFTContent(uri?: string, mimeType?: string): useNFTContentType {
  const [content, setContent] = useState<MediaContentType | undefined>();
  const [error, setError] = useState<string | undefined>();

  useCallbackFetch([uri, mimeType], async (fetchAgent, [uri, mimeType]) => {
    if (!uri) {
      return;
    }
    try {
      if (!mimeType) {
        mimeType = await fetchAgent.fetchContentMimeType(uri);
      }
      setContent(await fetchAgent.fetchContent(uri, mimeType));
    } catch (err) {
      setError(err.toString());
    }
  });

  return {
    loading: !error && !content && !!uri,
    error,
    content,
  };
}
