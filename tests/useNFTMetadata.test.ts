import { renderHook } from '@testing-library/react-hooks';

import fetchMock from './setupFetchMock';

import { useNFTMetadata } from '../src';
import { defaultFetchAgent } from '../src/context/NFTFetchContext';

describe('useNFTContent', () => {
  afterEach(() => {
    defaultFetchAgent.clearCache();
    fetchMock.reset();
  });

  it('loads text content for NFT from server', async () => {
    fetchMock.get('https://ipfs.io/ipfs/IPFS_SHA_EXAMPLE2', {
      name: 'test',
      description: 'test',
      mimeType: 'text/plain',
      version: 'zora-20210101',
    });

    const { waitFor, result } = renderHook(() =>
      useNFTMetadata('https://ipfs.io/ipfs/IPFS_SHA_EXAMPLE2')
    );

    await waitFor(() => result.current.loading === false);

    expect(result.current.error).toBeUndefined();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.metadata).toEqual({
      description: 'test',
      mimeType: 'text/plain',
      version: 'zora-20210101',
      name: 'test',
    });
  });

  it('returns error when metadata does not exist', async () => {
    fetchMock.get('https://ipfs.io/ipfs/IPFS_SHA_EXAMPLE3', 'Not Found', {
      response: { status: 404 },
    });

    const { waitFor, result } = renderHook(() =>
      useNFTMetadata('https://ipfs.io/ipfs/IPFS_SHA_EXAMPLE3')
    );

    await waitFor(() => result.current.loading === false);

    expect(result.current.error?.toString()).toEqual('RequestError: Request Status = 404');
    expect(result.current.loading).toBeFalsy();
    expect(result.current.metadata).toBeUndefined();
  });
  it('throws exception for invalid json', async () => {
    fetchMock.get('https://ipfs.io/ipfs/IPFS_SHA_EXAMPLE4', 'INVALID JSON', {
      response: { headers: { 'content-type': 'application/json' } },
    });

    const { waitFor, result } = renderHook(() =>
      useNFTMetadata('https://ipfs.io/ipfs/IPFS_SHA_EXAMPLE4')
    );

    await waitFor(() => result.current.loading === false);

    expect(result.current.error?.toString()).toEqual(
      'RequestError: Cannot read JSON metadata from IPFS'
    );
    expect(result.current.loading).toBeFalsy();
    expect(result.current.metadata).toBeUndefined();
  });
});
