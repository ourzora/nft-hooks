import { renderHook } from '@testing-library/react-hooks';

import { mockGraphQLQuery } from './setupZoraGQLMock';

import fetchMock, { getLastGraphQuery } from './setupFetchMock';

import { defaultFetchAgent } from '../src/context/NFTFetchContext';
import { useAuctions } from '../src/hooks/useAuctions';

let id = 0;
const getId = () => id++;

describe('useNFT', () => {
  beforeEach(() => {
    fetchMock.reset();
    defaultFetchAgent.fetcher.clearCache();
  });
  const RESERVE_AUCTION_MOCK = {
    tokenId: getId,
    status: 'Active',
    approved: true,
    curatorFeePercentage: 10000,
  };

  it('loads all auctions', async () => {
    const mockOverrides = {
      ReserveAuction: () => ({
        ...RESERVE_AUCTION_MOCK,
      }),
    };

    mockGraphQLQuery(
      'https://api.thegraph.com/subgraphs/name/ourzora/zora-v1',
      mockOverrides
    );

    const { waitFor, result } = renderHook(() => useAuctions());

    await waitFor(() => result.current.loading === false);

    expect(
      getLastGraphQuery('https://api.thegraph.com/subgraphs/name/ourzora/zora-v1')
        .variables
    ).toEqual({
      first: 1000,
      skip: 0,
      approved: [true, false],
    });

    expect(result.current.error).toBeUndefined();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toMatchSnapshot();
  });

  it('loads specific auctions for a given curator', async () => {
    const mockOverrides = {
      ReserveAuction: () => ({
        ...RESERVE_AUCTION_MOCK,
      }),
    };

    mockGraphQLQuery(
      'https://api.thegraph.com/subgraphs/name/ourzora/zora-v1',
      mockOverrides
    );

    const { waitFor, result } = renderHook(() => useAuctions(['0xtestingcurator'], true));

    await waitFor(() => result.current.loading === false);

    expect(
      getLastGraphQuery('https://api.thegraph.com/subgraphs/name/ourzora/zora-v1')
        .variables
    ).toEqual({
      first: 1000,
      skip: 0,
      approved: [true],
      curators: ['0xtestingcurator'],
    });

    expect(result.current.error).toBeUndefined();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toMatchSnapshot();
  });
});
