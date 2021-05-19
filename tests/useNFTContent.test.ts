import { renderHook } from '@testing-library/react-hooks';

import fetchMock from './setupFetchMock';

import { useNFTContent } from '../src';
import { cache } from 'swr';

describe('useNFTContent', () => {
  beforeEach(() => {
    fetchMock.reset();
    cache.clear();
  });

  it('loads text content for NFT from server', async () => {
    fetchMock.get('https://ipfs.io/ipfs/IPFS_SHA_EXAMPLE', 'this is plain text');

    const { waitFor, result } = renderHook(() =>
      useNFTContent('https://ipfs.io/ipfs/IPFS_SHA_EXAMPLE', 'text/plain', {
        dedupingInterval: 0,
      })
    );

    await waitFor(() => !!result.current.content);

    expect(result.current.error).toBeUndefined();
    expect(result.current.content).toEqual({
      type: 'text',
      mimeType: 'text/plain',
      text: 'this is plain text',
    });
  });

  it('has error fetching content', async () => {
    fetchMock.get('https://ipfs.io/ipfs/IPFS_SHA_EXAMPLE2', 'Not Found', {
      response: {
        status: 404,
      },
    });

    const { waitFor, result } = renderHook(() =>
      useNFTContent('https://ipfs.io/ipfs/IPFS_SHA_EXAMPLE2', 'text/plain')
    );

    await waitFor(() => !!result.current.error);

    expect(result.current.error?.toString()).toEqual(
      'RequestError: Issue fetching IPFS data'
    );
    expect(result.current.content).toEqual(undefined);
  });
  it('returns reference URI to user', async () => {
    const { waitFor, result } = renderHook(() =>
      useNFTContent('https://ipfs.io/ipfs/IPFS_SHA_EXAMPLE', 'image/gif')
    );

    await waitFor(() => !!result.current.content);

    expect(result.current.error).toBeUndefined();
    expect(result.current.content).toEqual({
      mimeType: 'image/gif',
      type: 'uri',
      uri: 'https://ipfs.io/ipfs/IPFS_SHA_EXAMPLE',
    });
  });
});
