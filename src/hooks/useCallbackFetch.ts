import { useCallback, useContext, useEffect } from 'react';

import { NFTFetchContext } from '../context/NFTFetchContext';
import type { MediaFetchAgent } from '../fetcher/MediaFetchAgent';

/**
 * Combines callback and fetch react hooks to load data. Similar to SWR
 *
 * @param datapoint data argument to pass into the fetch function
 * @param fetchFn MediaFetchAgent generic fetch agent to pass into fetch function
 */
export function useCallbackFetch<T>(
  datapoint: T,
  fetchFn: (agent: MediaFetchAgent, data: T) => void
) {
  const fetchAgent = useContext(NFTFetchContext);

  const fetch = useCallback(fetchFn, []);
  useEffect(() => {
    if (datapoint) {
      fetch(fetchAgent, datapoint);
    }
  }, [datapoint]);
}
