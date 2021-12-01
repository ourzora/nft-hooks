import { renderHook } from '@testing-library/react-hooks';
import { cache } from 'swr';

import { Networks, NFTFetchConfiguration, useENSAddress} from '../src';

describe('useENSAddress', () => {
  beforeEach(() => {
    console.log('setup');
    // fetchMock.reset();
    cache.clear();
  });

  it('loads an ens correctly on mainnet', async () => {
    const NetworkWrapper = ({ children }: any) => (
      <NFTFetchConfiguration networkId={Networks.RINKEBY}>
        {children}
      </NFTFetchConfiguration>
    );
    const { waitFor, result } = renderHook(
      () => useENSAddress('0x9444390c01Dd5b7249E53FAc31290F7dFF53450D'),
      { wrapper: NetworkWrapper }
    );

    await waitFor(() => !!result.current.data);
    console.log(result.current);
    expect(result.current.error).toEqual(undefined);
    expect(result.current.data).toEqual('isiain.eth');
  });

  it('loads an ens batch correctly', async () => {
    const NetworkWrapper = ({ children }: any) => (
      <NFTFetchConfiguration networkId={Networks.MAINNET}>
        {children}
      </NFTFetchConfiguration>
    );

    const { waitFor, result } = renderHook(
      () => [
        useENSAddress('0xE7dd1252f50B3d845590Da0c5eADd985049a03ce'),
        useENSAddress('0xA9dd1252f50B3d845590Da0c5eADd985049a03ca'),
      ],
      { wrapper: NetworkWrapper }
    );

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
