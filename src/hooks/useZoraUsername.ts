import { useContext } from 'react';
import useSWR, { SWRConfiguration } from 'swr';

import { NFTFetchContext } from '../context/NFTFetchContext';

/**
 * useZoraUsername - Load zora username for pretty display
 *
 * @param address string address to fetch zora username of
 * @returns UsernameResponseType
 */
export function useZoraUsername(address?: string, options?: SWRConfiguration<any>) {
  const fetcher = useContext(NFTFetchContext);
  const { error, data } = useSWR(
    address ? ['loadUsername', address.toLowerCase()] : null,
    (_, address: string) => fetcher.loadUsername(address),
    options,
  );

  return { error, username: data };
}
