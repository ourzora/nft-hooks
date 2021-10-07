import { useContext } from 'react';
import useSWR, { SWRConfiguration } from 'swr';

import { DomainResolvedPartFragment } from '../graph-queries/ens-graph-types';
import { NFTFetchContext } from '../context/NFTFetchContext';

/**
 * useENSAddress - Load ens address for pretty display of user addresses
 *
 * @param address string address to fetch zora username of
 * @returns DomainResolvedPartFragment
 */
export function useENSAddress(address: string, options?: SWRConfiguration<any>) {
  const fetcher = useContext(NFTFetchContext);
  return useSWR<DomainResolvedPartFragment>(
    address ? ['loadENS', address.toLowerCase()] : null,
    (_, address: string) => fetcher.loadEnsName(address),
    options
  );
}
