import React, { useMemo } from 'react';
import { MediaFetchAgent } from '../fetcher/MediaFetchAgent';
import { NFTStrategy } from '../strategies/NFTStrategy';
import { ZoraGraphStrategy } from '../strategies/ZoraGraphStrategy';
import { NetworkIDs, Networks } from '../constants/networks';
import { ZoraGraphEtherActorStrategy } from '../strategies/ZoraGraphEtherActorStrategy';

export type FetchContext = { strategy: typeof NFTStrategy };

const fetcher = new MediaFetchAgent(Networks.MAINNET);

export const defaultFetchAgent: { strategy: any; fetcher: any } = {
  strategy: new ZoraGraphStrategy(Networks.MAINNET) as NFTStrategy,
  fetcher,
};

export const NFTFetchContext = React.createContext(defaultFetchAgent);

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
    return new ZoraGraphEtherActorStrategy(Networks.MAINNET);
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
