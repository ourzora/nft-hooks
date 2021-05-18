import { renderHook } from '@testing-library/react-hooks';

import fetchMock from './setupFetchMock';

import { useZoraUsername } from '../src';
import { defaultFetchAgent } from '../src/context/NFTFetchContext';

describe('useZoraUsername', () => {
  afterEach(() => {
    defaultFetchAgent.clearCache();
    fetchMock.reset();
  });

  it('loads zora username information from server', async () => {
    fetchMock.post('https://zora.co/api/users', [
      {
        address: '0xab5801a7d398351b8be11c439e05c5b3259aec9b',
        username: 'vitalik',
        verified: true,
        website: null,
      },
      {
        address: '0xignore',
        username: 'ignore',
        verified: false,
        website: null,
      },
    ]);

    const { waitFor, result } = renderHook(() =>
      useZoraUsername('0xab5801a7d398351b8be11c439e05c5b3259aec9b')
    );

    await waitFor(() => result.current.username !== undefined);

    expect(result.current.error).toBeUndefined();
    expect(result.current.username).toEqual({
      address: '0xab5801a7d398351b8be11c439e05c5b3259aec9b',
      username: 'vitalik',
      verified: true,
      website: null,
    });
  });

  it('returns error when the webrequest fails', async () => {
    fetchMock.post('https://zora.co/api/users', 'Bad request', {
      response: { status: 402 },
    });

    const { waitFor, result } = renderHook(() => useZoraUsername('0xeee'));

    await waitFor(() => result.current.error !== undefined);

    expect(result.current.error).toEqual('RequestError: Request Status = 402');
    expect(result.current.username).toEqual({ address: '0xeee' });
  });

  it('batches multiple usernames', async () => {
    const useUsernamesMultiple = (a: string, b: string) => {
      const { username: usernamea, error: errorb } = useZoraUsername(a);
      const { username: usernameb, error: errora } = useZoraUsername(b);
      return { usernamea, usernameb, errora, errorb };
    };
    fetchMock.post('https://zora.co/api/users', [
      {
        address: '0xab5801a7d398351b8be11c439e05c5b3259aec9b',
        username: 'vitalik',
        verified: true,
        website: null,
      },
      {
        address: '0xeee',
        username: 'ignore',
        verified: false,
        website: null,
      },
    ]);

    const { waitFor, result } = renderHook(() =>
      useUsernamesMultiple('0xab5801a7d398351b8be11c439e05c5b3259aec9b', '0xeee')
    );

    await waitFor(() => !!result.current.usernamea);

    expect(result.current.errora).toBeUndefined();
    expect(result.current.errorb).toBeUndefined();
    expect(result.current.usernamea).toEqual({
      address: '0xab5801a7d398351b8be11c439e05c5b3259aec9b',
      username: 'vitalik',
      verified: true,
      website: null,
    });
    expect(result.current.usernameb).toEqual({
      address: '0xeee',
      username: 'ignore',
      verified: false,
      website: null,
    });
  });
  it('fails with invalid json', async () => {
    fetchMock.post('https://zora.co/api/users', 'INVALID JSON', {
      response: { headers: { 'content-type': 'application/json' } },
    });

    const { waitFor, result } = renderHook(() => useZoraUsername('0xeee'));

    await waitFor(() => !!result.current.error);

    expect(result.current.error).toEqual('FetchError: invalid json response body at https://zora.co/api/users reason: Unexpected end of JSON input');
    expect(result.current.username).toEqual({ address: '0xeee' });
  });
});
