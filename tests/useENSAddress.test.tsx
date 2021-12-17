import { renderHook } from '@testing-library/react-hooks';
import { cache } from 'swr';

import { Networks, NFTFetchConfiguration, useENSAddress} from '../src';

describe('useENSAddress', () => {
  beforeEach(() => {
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
    expect(result.current.error).toEqual(undefined);
    expect(result.current.data).toEqual('iain.eth');
  });

  it('loads an ens batch correctly', async () => {
    const NetworkWrapper = ({ children }: any) => (
      <NFTFetchConfiguration networkId={Networks.MAINNET}>
        {children}
      </NFTFetchConfiguration>
    );

    const { waitFor, result } = renderHook(
      () => [
        useENSAddress('0x660F6D6c9BCD08b86B50e8e53B537F2B40f243Bd'),
        useENSAddress('0x18C8dF1fb7FB44549F90d1C2BB1DC8b690CD0559'),
        // invalid address
        useENSAddress('0x00000000000749f3Ba62f30374Be55841a8c7146'),
      ],
      { wrapper: NetworkWrapper }
    );

    await waitFor(() => !!result.current[2].error);

    expect(result.current[0].error).toBeUndefined();
    expect(result.current[0].data).toEqual('fwb.eth');
    expect(result.current[1].data).toEqual('isiain.eth');
    expect(result.current[2].data).toEqual(undefined);
    expect(result.current[2].error).toMatchInlineSnapshot(`[Error: Not found]`);
  });
});
