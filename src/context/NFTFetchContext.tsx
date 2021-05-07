import React, { createContext, useContext, useMemo } from 'react';
import { Networks, NetworkIDs } from '../constants/networks';
import { MediaFetchAgent } from '../fetcher/MediaFetchAgent';

export type FetchContext = InstanceType<typeof MediaFetchAgent>;

export const defaultFetchAgent = new MediaFetchAgent(Networks.MAINNET);

export const NFTFetchContext = createContext(defaultFetchAgent);

type NFTFetchConfigurationProps = {
  networkId: NetworkIDs;
  children: React.ReactNode;
};

export const NFTFetchConfiguration = ({
  networkId,
  children,
}: NFTFetchConfigurationProps) => {
  const lastFetchContext = useContext(NFTFetchContext);
  const fetchAgent = useMemo(() => {
    if (lastFetchContext.networkId === networkId) {
      return lastFetchContext;
    }
    return new MediaFetchAgent(networkId);
  }, [networkId]);
  return (
    <NFTFetchContext.Provider value={fetchAgent}>{children}</NFTFetchContext.Provider>
  );
};
