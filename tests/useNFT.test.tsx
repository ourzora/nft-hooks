import { renderHook } from '@testing-library/react-hooks';
import { Networks, NFTFetchConfiguration, useNFT } from '../src';
import { ZDKFetchStrategy } from '../src/strategies';
import { OpenseaStrategy } from '../src/strategies/OpenseaStrategy';
import { ZoraGraphStrategy } from '../src/strategies/ZoraGraphStrategy';
import { ZoraV2IndexerStrategy } from '../src/strategies/ZoraV2IndexerStrategy';

const NETWORK_TIMEOUT_MS = 6000;

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

    await waitFor(() => !!result.current.data, { timeout: NETWORK_TIMEOUT_MS });

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();
  });
  it('test zora graph media load', async () => {
    const openseaStrategy = new ZoraGraphStrategy(Networks.RINKEBY);

    const NetworkWrapper = ({ children }: any) => (
      <NFTFetchConfiguration networkId={Networks.RINKEBY} strategy={openseaStrategy}>
        {children}
      </NFTFetchConfiguration>
    );

    const { waitFor, result } = renderHook(
      () => useNFT('0x123555e20379ef0d8583d4c856f12abd2d808ab2', '1'),
      { wrapper: NetworkWrapper }
    );

    await waitFor(() => !!result.current.data, { timeout: NETWORK_TIMEOUT_MS });

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();
  });

  xit('test zora indexer media load', async () => {
    const zoraV2Strategy = new ZoraV2IndexerStrategy(Networks.MAINNET);

    const NetworkWrapper = ({ children }: any) => (
      <NFTFetchConfiguration networkId={Networks.RINKEBY} strategy={zoraV2Strategy}>
        {children}
      </NFTFetchConfiguration>
    );

    const { waitFor, result } = renderHook(
      () => useNFT('0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7', '7504'),
      { wrapper: NetworkWrapper }
    );

    await waitFor(
      () => {
        return !!result.current.data;
      },
      { timeout: NETWORK_TIMEOUT_MS }
    );

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();
  }, 14_000);

  // removing for now - fix dt issues
  xit('test zora indexer buy now load', async () => {
    const openseaStrategy = new ZoraV2IndexerStrategy(Networks.MAINNET);

    const NetworkWrapper = ({ children }: any) => (
      <NFTFetchConfiguration networkId={Networks.RINKEBY} strategy={openseaStrategy}>
        {children}
      </NFTFetchConfiguration>
    );

    const { waitFor, result } = renderHook(
      () => useNFT('0xCa21d4228cDCc68D4e23807E5e370C07577Dd152', '54382'),
      { wrapper: NetworkWrapper }
    );

    await waitFor(() => {
      return !!result.current.data;
    });

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();
  });
  fit('test zora indexer v3 load', async () => {
    const zdkStrategy = new ZDKFetchStrategy(Networks.MAINNET);

    const NetworkWrapper = ({ children }: any) => (
      <NFTFetchConfiguration networkId={Networks.GOERLI} strategy={zdkStrategy}>
        {children}
      </NFTFetchConfiguration>
    );

    const { waitFor, result } = renderHook(
      () => useNFT('0xd8e6b954f7d3F42570D3B0adB516f2868729eC4D', '1598'),
      { wrapper: NetworkWrapper }
    );

    await waitFor(() => {
      return !!result.current.data;
    });

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toMatchSnapshot();
  });
});
