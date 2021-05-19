import { useContext } from 'react';
import useSWR from 'swr';

import { NFTFetchContext } from '../context/NFTFetchContext';

/**
 * useZoraUsername - Load zora username for pretty display
 *
 * @param address string address to fetch zora username of
 * @returns UsernameResponseType
 */
export function useZoraUsername(address: string) {
  const fetcher = useContext(NFTFetchContext);
  const { error, data } = useSWR(['loadUsername', address], (_, address: string) =>
    fetcher.loadUsername(address)
  );

  return { error, username: data };
}
