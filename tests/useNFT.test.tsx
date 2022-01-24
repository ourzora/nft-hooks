import { renderHook } from '@testing-library/react-hooks';
import { Networks, NFTFetchConfiguration, useNFT } from '../src';
import { OpenseaStrategy } from '../src/strategies/OpenseaStrategy';
import { ZoraGraphStrategy } from '../src/strategies/ZoraGraphStrategy';

describe('useNFT', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('test opensea media load', async () => {
    const openseaStrategy = new OpenseaStrategy(Networks.RINKEBY);

    const NetworkWrapper = ({ children }: any) => (
      <NFTFetchConfiguration networkId={Networks.RINKEBY} strategy={openseaStrategy}>
        {children}
      </NFTFetchConfiguration>
    );

    const { waitFor, result } = renderHook(
      () => useNFT('0x123555e20379ef0d8583d4c856f12abd2d808ab2', '1'),
      { wrapper: NetworkWrapper }
    );

    await waitFor(() => !!result.current.data, { timeout: 4000 });

    console.log(result.current);

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();
  });
  it('test zora graph media load', async () => {
    const openseaStrategy = new OpenseaStrategy(Networks.RINKEBY);

    const NetworkWrapper = ({ children }: any) => (
      <NFTFetchConfiguration networkId={Networks.RINKEBY} strategy={openseaStrategy}>
        {children}
      </NFTFetchConfiguration>
    );

    const { waitFor, result } = renderHook(
      () => useNFT('0x123555e20379ef0d8583d4c856f12abd2d808ab2', '1'),
      { wrapper: NetworkWrapper }
    );

    await waitFor(() => !!result.current.data, { timeout: 4000 });

    console.log(result.current);

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();
  });
  it('test zora indexer media load', async () => {
    const openseaStrategy = new ZoraGraphStrategy(Networks.MAINNET);

    const NetworkWrapper = ({ children }: any) => (
      <NFTFetchConfiguration networkId={Networks.RINKEBY} strategy={openseaStrategy}>
        {children}
      </NFTFetchConfiguration>
    );

    const { waitFor, result } = renderHook(
      () => useNFT('0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7', '7504'),
      { wrapper: NetworkWrapper }
    );

    await waitFor(
      () => {
        console.log(result.current);
        return !!result.current.data;
      },
      { timeout: 4000 }
    );

    console.log(result.current);

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();
  });
  it('test zora indexer buy now load', async () => {
    const openseaStrategy = new ZoraGraphStrategy(Networks.MAINNET);

    const NetworkWrapper = ({ children }: any) => (
      <NFTFetchConfiguration networkId={Networks.RINKEBY} strategy={openseaStrategy}>
        {children}
      </NFTFetchConfiguration>
    );

    const { waitFor, result } = renderHook(
      () => useNFT('0xCa21d4228cDCc68D4e23807E5e370C07577Dd152', '54382'),
      { wrapper: NetworkWrapper }
    );

    await waitFor(
      () => {
        console.log(result.current);
        return !!result.current.data;
      },
      { timeout: 4000 }
    );

    console.log(result.current);

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();
  });
});
