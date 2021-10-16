import { renderHook } from '@testing-library/react-hooks';
import { cache } from 'swr';

import { mockGraphQLQuery } from './setupZoraGQLMock';

import fetchMock from './setupFetchMock';

import { useENSAddress } from '../src';

describe('useENSAddress', () => {
  beforeEach(() => {
    fetchMock.reset();
    cache.clear();
  });
  const ENS_DOMAIN_MOCK = {
    name: 'testens',
    labelName: 'testens.ens',
    resolvedAddress: {
      id: '0xE7dd1252f50B3d845590Da0c5eADd985049a03ce',
    },
  };

  it('loads an ens correctly', async () => {
    const mockOverrides = {
      Domain: () => ENS_DOMAIN_MOCK,
    };

    mockGraphQLQuery(
      'https://api.thegraph.com/subgraphs/name/ensdomains/ens',
      mockOverrides,
      {},
      'ENS'
    );

    const { waitFor, result } = renderHook(() =>
      useENSAddress('0xE7dd1252f50B3d845590Da0c5eADd985049a03ce')
    );

    await waitFor(() => !!result.current.data);

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchInlineSnapshot(`
      Object {
        "labelName": "testens.ens",
        "labelhash": "ByTeSStrInG",
        "name": "testens",
        "resolvedAddress": Object {
          "id": "0xE7dd1252f50B3d845590Da0c5eADd985049a03ce",
        },
        "resolver": Object {
          "id": "2",
        },
      }
    `);
  });

  it('loads an ens batch correctly', async () => {
    const mockOverrides = {
      Domain: () => ENS_DOMAIN_MOCK,
    };

    mockGraphQLQuery(
      'https://api.thegraph.com/subgraphs/name/ensdomains/ens',
      mockOverrides,
      {},
      'ENS'
    );

    const { waitFor, result } = renderHook(() => [
      useENSAddress('0xE7dd1252f50B3d845590Da0c5eADd985049a03ce'),
      useENSAddress('0xA9dd1252f50B3d845590Da0c5eADd985049a03ca'),
    ]);

    await waitFor(() => !!result.current[1].error);

    expect(result.current[0].error).toBeUndefined();
    expect(result.current[0].data).toMatchInlineSnapshot(`
      Object {
        "labelName": "testens.ens",
        "labelhash": "ByTeSStrInG",
        "name": "testens",
        "resolvedAddress": Object {
          "id": "0xE7dd1252f50B3d845590Da0c5eADd985049a03ce",
        },
        "resolver": Object {
          "id": "2",
        },
      }
    `);
    expect(result.current[1].data).toMatchInlineSnapshot(`undefined`);
    expect(result.current[1].error).toMatchInlineSnapshot(`[Error: Not found]`);
  });
});
