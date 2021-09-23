import { useContext } from 'react';
import useSWR, { SWRConfiguration } from 'swr';

import { DomainResolvedPartFragment } from '../graph-queries/ens-graph-types';
import { NFTFetchContext } from '../context/NFTFetchContext';

/**
 * useZoraUsername - Load zora username or ens for pretty display of user addresses
 * 
 * @param address string address to fetch zora username of
 * @returns UsernameResponseType
 */
export function useZoraUsername(address: string, options?: SWRConfiguration<any>) {
  const fetcher = useContext(NFTFetchContext);
  const { error: ensError, data: ensData } = useSWR<DomainResolvedPartFragment>(
    address ? ['loadENS', address] : null,
    (_, address: string) => fetcher.loadEnsName(address),
    options
  );
  const { error, data } = useSWR(
    address && ensError ? ['loadUsername', address] : null,
    (_, address: string) => fetcher.loadUsername(address),
    options
  );

  return { error, ensError, username: data, ensData };
}
