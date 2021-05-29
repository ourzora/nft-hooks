import { renderHook } from '@testing-library/react-hooks';
import { cache } from 'swr';

import OpenseaCryptopunk from './mock-responses/openseaCryptopunk.json';
import { mockGraphQLQuery } from './setupZoraGQLMock';

import fetchMock from './setupFetchMock';

import { useNFT } from '../src';

describe('useZNFT', () => {
  beforeEach(() => {
    fetchMock.reset();
    cache.clear();
  });
  const RESERVE_AUCTION_MOCK = {
    tokenId: 2974,
    status: 'Active',
    curatorFeePercentage: 100,
    approved: true,
  };

  it('loads an nft currently in an auction', async () => {
    const mockOverrides = {
      ReserveAuction: () => RESERVE_AUCTION_MOCK,
    };

    mockGraphQLQuery(
      'https://api.thegraph.com/subgraphs/name/ourzora/zora-v1',
      mockOverrides
    );

    fetchMock.once(
      'https://api.opensea.io/api/v1/assets?token_ids=5683&asset_contract_addresses=0xb7f7f6c52f2e2fdb1963eab30438024864c313f6&order_direction=desc&offset=0&limit=100',
      OpenseaCryptopunk
    );

    const { waitFor, result } = renderHook(() =>
      useNFT('0xb7f7f6c52f2e2fdb1963eab30438024864c313f6', '5683')
    );

    await waitFor(() => !!result.current.data);

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();
  });

  it('correctly loads auction information from uniswap', async () => {
    const mockZoraOverrides = {
      ReserveAuction: () => ({
        ...RESERVE_AUCTION_MOCK,
        tokenId: '5683',
        tokenContract: '0xb7f7f6c52f2e2fdb1963eab30438024864c313f6',
      }),
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

    fetchMock.once(
      'https://api.opensea.io/api/v1/assets?token_ids=5683&asset_contract_addresses=0xb7f7f6c52f2e2fdb1963eab30438024864c313f6&order_direction=desc&offset=0&limit=100',
      OpenseaCryptopunk
    );

    const { waitFor, result } = renderHook(() =>
      useNFT('0xb7f7f6c52f2e2fdb1963eab30438024864c313f6', '5683', {
        loadCurrencyInfo: true,
      })
    );

    await waitFor(() => {
      // console.log(result.current);
      return result.current.currencyLoaded;
    });

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();
  });
});
