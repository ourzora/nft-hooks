import { useContext } from 'react';
import useSWR, { SWRConfiguration } from 'swr';

import { NFTFetchContext } from '../context/NFTFetchContext';

/**
 * useENSAddress - Load ens address for pretty display of user addresses
 *
 * @param address string address to fetch zora username of
 * @returns DomainResolvedPartFragment
 */
export function useENSAddress(address?: string, options?: SWRConfiguration<any>) {
  const fetcher = useContext(NFTFetchContext);
  return useSWR<string>(
    address ? ['loadENS', address.toLowerCase()] : null,
    async (_, address: string) => fetcher.loadEnsName(address),
    options
  );
}
