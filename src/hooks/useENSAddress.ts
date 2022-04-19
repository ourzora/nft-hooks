import { useContext } from 'react';
import { ENSInfo } from 'src/backends/ens-reverse/ENSInterface';
import useSWR, { SWRConfiguration } from 'swr';

import { NFTFetchContext } from '../context/NFTFetchContext';

/**
 * useENSAddress - Load ens address for pretty display of user addresses
 *
 * @param address string address to fetch zora username of
 * @returns DomainResolvedPartFragment
 */
export function useENSAddress(address?: string, options?: SWRConfiguration<any>) {
  const { fetcher } = useContext(NFTFetchContext);
  return useSWR<ENSInfo>(
    address ? ['loadENS', address.toLowerCase()] : null,
    async (_, address: string) => fetcher.loadEnsName(address),
    options
  );
}
