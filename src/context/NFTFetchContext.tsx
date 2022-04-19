import React, { useMemo } from 'react';
import { MediaFetchAgent } from '../fetcher/MediaFetchAgent';
import { NFTStrategy } from '../strategies/NFTStrategy';
import { NetworkIDs, Networks } from '../constants/networks';
import { ZoraV2IndexerStrategy } from '../strategies';

export type FetchContext = { strategy: typeof NFTStrategy };

const fetcher = new MediaFetchAgent(Networks.MAINNET);

export const defaultFetchAgent: { strategy: any; fetcher: any } = {
  strategy: null,
  fetcher,
};

export const NFTFetchContext = React.createContext<{
  strategy: NFTStrategy | ZoraV2IndexerStrategy;
  fetcher: MediaFetchAgent;
}>(defaultFetchAgent);

type NFTFetchConfigurationProps = {
  strategy?: NFTStrategy;
  networkId: NetworkIDs;
  // TODO(iain): fix children type
  children: React.ReactNode;
};

export const NFTFetchConfiguration = ({
  strategy: userStrategy,
  children,
  networkId,
}: NFTFetchConfigurationProps) => {
  const strategy = useMemo(() => {
    if (userStrategy) {
      return userStrategy;
    }
    return new ZoraV2IndexerStrategy(networkId);
  }, [userStrategy]);
  const fetcher = useMemo(() => {
    return new MediaFetchAgent(networkId);
  }, [networkId]);
  return (
    <NFTFetchContext.Provider value={{ strategy, fetcher }}>
      {children}
    </NFTFetchContext.Provider>
  );
};
