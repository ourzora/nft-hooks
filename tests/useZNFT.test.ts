import { renderHook } from '@testing-library/react-hooks';
import { IMockStore } from '@graphql-tools/mock';
import { cache } from 'swr';

import { mockGraphQLQuery } from './setupZoraGQLMock';

import fetchMock from './setupFetchMock';

import { useZNFT } from '../src';

describe('useZNFT', () => {
  beforeEach(() => {
    fetchMock.reset();
    cache.clear();
  });
  const MEDIA_MOCK = {
    id: '2974',
    contentURI: 'https://zora.co/content',
    metadataURI: 'https://zora.co/content',
    currentBids: [
      {
        amount: '10000',
        bidder: { id: 10 },
      },
    ],
  };
  const RESERVE_AUCTION_MOCK = {
    tokenId: 2974,
    status: 'Active',
    curatorFeePercentage: 100,
    approved: true,
  };

  it('loads an nft currently in an auction', async () => {
    const mockOverrides = {
      Media: () => MEDIA_MOCK,
      ReserveAuction: () => RESERVE_AUCTION_MOCK,
    };

    mockGraphQLQuery(
      'https://api.thegraph.com/subgraphs/name/ourzora/zora-v1',
      mockOverrides
    );

    const { waitFor, result } = renderHook(() => useZNFT('2974'));

    await waitFor(() => !!result.current.data);

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();
  });

  it('correctly loads auction information from uniswap', async () => {
    const mockZoraOverrides = {
      Media: () => MEDIA_MOCK,
      ReserveAuction: () => RESERVE_AUCTION_MOCK,
    };
    const mockUniswapOverrides = {
      Token: () => ({
        id: '0xFACE',
        decimals: 18,
      }),
    };

    mockGraphQLQuery(
      'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
      mockUniswapOverrides,
      {},
      'Uniswap'
    );

    mockGraphQLQuery(
      'https://api.thegraph.com/subgraphs/name/ourzora/zora-v1',
      mockZoraOverrides,
      {},
      'Zora'
    );

    const { waitFor, result } = renderHook(() =>
      useZNFT('2974', { loadCurrencyInfo: true })
    );

    await waitFor(() => !!result.current.data);

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();

    await waitFor(() => result.current.currencyLoaded === true);
    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();
  });

  it('loads an NFT not in an auction with bids', async () => {
    const mockOverrides = {
      Media: () => MEDIA_MOCK,
      // make an invalid reserve auction record to not be picked up by the fetch API
      ReserveAuction: () => ({ ...RESERVE_AUCTION_MOCK, tokenId: '-1' }),
    };

    mockGraphQLQuery(
      'https://api.thegraph.com/subgraphs/name/ourzora/zora-v1',
      mockOverrides
    );

    const { waitFor, result } = renderHook(() => useZNFT('2974'));

    await waitFor(() => !!result.current.data);

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();
  });

  it('shows an error when an NFT cannot be loaded', async () => {
    fetchMock.post(
      'https://api.thegraph.com/subgraphs/name/ourzora/zora-v1',
      'server failure',
      { response: { status: 500 } }
    );

    const { waitFor, result } = renderHook(() => useZNFT('2972'));

    await waitFor(() => !!result.current.error);

    expect(result.current.data).toBeUndefined();
    expect(result.current.error?.toString()).toEqual(
      'RequestError: Request Status = 500'
    );
  });

  it('loads an NFT with no bids and no auction', async () => {
    const mediaWithNoBids = { ...MEDIA_MOCK, currentBids: [] };
    const mockOverrides = {
      Media: () => mediaWithNoBids,
      // make an invalid reserve auction record to not be picked up by the fetch API
      ReserveAuction: () => ({ ...RESERVE_AUCTION_MOCK, tokenId: '-1' }),
    };

    mockGraphQLQuery(
      'https://api.thegraph.com/subgraphs/name/ourzora/zora-v1',
      mockOverrides
    );

    const { waitFor, result } = renderHook(() => useZNFT('2974'));

    await waitFor(() => !!result.current.data);

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();
  });

  it('correctly loads multiple perpetual bid NFTs', async () => {
    function useMultipleNFTHooks() {
      return [useZNFT('1'), useZNFT('2')];
    }

    mockGraphQLQuery(
      'https://api.thegraph.com/subgraphs/name/ourzora/zora-v1',
      {},
      (store: IMockStore) => {
        return {
          Query: {
            medias: () => {
              // Fix returning ID for each record with multiple records.
              return [store.get('Media', '1'), store.get('Media', '2')];
            },
          },
        };
      }
    );

    const { waitFor, result } = renderHook(() => useMultipleNFTHooks());

    await waitFor(() => !!result.current[0].data);

    expect(result.current[0].error).toBeUndefined();
    expect(result.current[0].data).toMatchSnapshot();

    expect(result.current[1].error).toBeUndefined();
    expect(result.current[1].data).toMatchSnapshot();
  });
  it('caches multiple NFTs being loaded', async () => {
    function useMultipleNFTHooks() {
      return [useZNFT('1'), useZNFT('2')];
    }

    mockGraphQLQuery(
      'https://api.thegraph.com/subgraphs/name/ourzora/zora-v1',
      {},
      (store: IMockStore) => {
        return {
          Query: {
            medias: () => {
              // Fix returning ID for each record with multiple records.
              return [store.get('Media', '1'), store.get('Media', '2')];
            },
          },
        };
      }
    );

    const { waitFor, result } = renderHook(() => useMultipleNFTHooks());

    await waitFor(() => !!result.current[0].data);

    expect(result.current[0].error).toBeUndefined();
    expect(result.current[0].data).toMatchSnapshot();

    expect(result.current[1].error).toBeUndefined();
    expect(result.current[1].data).toMatchSnapshot();

    const { waitFor: waitFor2, result: result2 } = renderHook(() =>
      useMultipleNFTHooks()
    );

    // If this attempts to make a new HTTP request,
    //  the request will fail since the mock only works once.
    await waitFor2(() => !!result2.current[0].data);

    expect(result2.current[0].error).toBeUndefined();
    expect(result2.current[0].data).toMatchSnapshot();

    expect(result2.current[1].error).toBeUndefined();
    expect(result2.current[1].data).toMatchSnapshot();
  });
});
