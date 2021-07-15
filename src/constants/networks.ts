type NetworkNames = 'MAINNET' | 'RINKEBY' | 'POLYGON' | 'MUMBAI';
type NetworkIDs = '1' | '4' | '137' | '80001';

// Supported networks with Zora contract deployments.
// As more networks are supported by zora more network IDs will be added.
const Networks: Record<NetworkNames, NetworkIDs> = {
  MAINNET: '1',
  RINKEBY: '4',
  POLYGON: '137',
  MUMBAI: '80001',
};

export { Networks };
export type { NetworkIDs };
