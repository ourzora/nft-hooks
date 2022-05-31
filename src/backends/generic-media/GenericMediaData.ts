import { FetchWithTimeout } from '../../fetcher/FetchWithTimeout';
import { RequestError } from '../../fetcher/RequestError';
import { convertURIToHTTPS } from '../../fetcher/UriUtils';
import { GenericMediaInterface, MediaContentType } from './GenericMediaInterface';

export class GenericMediaData implements GenericMediaInterface {
  timeout: number;
  constructor(timeout: number = 5) {
    this.timeout = timeout;
  }

  /**
   * Fetch method to query metadata from IPFS. Not cached
   *
   * @function fetchIPFSMetadataCached
   * @public
   * @param url Metadata Source
   * @returns IPFS Metadata Fetch
   * @throws RequestError
   */
  fetchMetadata = async (uri: string) => {
    const request = await new FetchWithTimeout(
      this.timeout,
      'application/json'
    ).fetch(convertURIToHTTPS(uri));
    try {
      return await request.json();
    } catch (e: any) {
      throw new RequestError('Cannot read JSON metadata from IPFS', e);
    }
  };

  /**
   * Fetch NFT content or retun URI if content shouild not be fetched
   * @param url NFT Content URL
   * @param contentType string mime type to fetch
   * @returns Promise<MediaContentType> Media content information or URL
   */
  fetchContent = async (url: string, contentType: string): Promise<MediaContentType> => {
    if (contentType.startsWith('text/')) {
      try {
        const response = await new FetchWithTimeout(this.timeout).fetch(
          convertURIToHTTPS(url)
        );
        return {
          text: await response.text(),
          type: 'text',
          mimeType: contentType,
        };
      } catch (e: any) {
        throw new RequestError('Issue fetching IPFS data', e);
      }
    }
    return { uri: url, type: 'uri', mimeType: contentType };
  };

  /**
   * Fetch Content MIME type from content URI
   *
   * @param url IPFS Content URI
   * @returns mime type as a string
   * @throws RequestError
   */
  fetchContentMimeType = async (url: string): Promise<string> => {
    const response = await new FetchWithTimeout(this.timeout).fetch(
      convertURIToHTTPS(url),
      {
        method: 'HEAD',
      }
    );
    const header = response.headers.get('content-type');
    if (!header) {
      throw new RequestError('No content type returned for URI');
    }
    return header;
  };
}
