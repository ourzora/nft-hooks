import { useState } from 'react';

import { UsernameResponseType } from '../fetcher/FetchResultTypes';
import { useCallbackFetch } from './useCallbackFetch';

/**
 * useZoraUsername - Load zora username for pretty display
 *  
 * @param address string address to fetch zora username of
 * @returns UsernameResponseType
 */
export function useZoraUsername(address: string) {
  const [error, setError] = useState<string | undefined>();
  const [username, setUsername] = useState<UsernameResponseType | undefined>();

  useCallbackFetch(address, async (fetch, address) => {
    try {
      setUsername(await fetch.loadUsername(address));
    } catch (err) {
      setUsername({ address });
      setError(err.toString());
    }
  });

  return { error, username };
}
