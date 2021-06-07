import { renderHook } from '@testing-library/react-hooks';
import { Networks, useNFT, useZNFT } from '../src';
import { ZORA_MEDIA_CONTRACT_BY_NETWORK } from '../src/constants/addresses';
import { useOpenseaNFT } from '../src/hooks/useOpenseaNFT';

jest.mock('../src/hooks/useOpenseaNFT');
jest.mock('../src/hooks/useZNFT');

describe('useNFT', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('fetches opensea NFT', () => {
    renderHook(() => useNFT('0x00000000120040', '23'));
    expect(useOpenseaNFT).toHaveBeenLastCalledWith('0x00000000120040', '23', {});
    expect(useOpenseaNFT).toHaveBeenCalledTimes(1);
    expect(useZNFT).toHaveBeenLastCalledWith(undefined, {});
    expect(useOpenseaNFT).toHaveBeenCalledTimes(1);
  });
  it('fetches zora NFT', () => {
    renderHook(() => useNFT(undefined, '23'));
    expect(useZNFT).toHaveBeenCalledWith('23', {});
    expect(useZNFT).toHaveBeenCalledTimes(1);
    expect(useOpenseaNFT).toHaveBeenCalledWith(undefined, undefined, {});
    expect(useOpenseaNFT).toHaveBeenCalledTimes(1);
  });
  it('fetches zora NFT by address', () => {
    renderHook(() => useNFT(ZORA_MEDIA_CONTRACT_BY_NETWORK[Networks.MAINNET], '23'));
    expect(useZNFT).toHaveBeenCalledWith("23", {});
    expect(useOpenseaNFT).toHaveBeenCalledWith(undefined, undefined, {});
    expect(useZNFT).toHaveBeenCalledTimes(1);
    expect(useOpenseaNFT).toHaveBeenCalledTimes(1);
  });
});
