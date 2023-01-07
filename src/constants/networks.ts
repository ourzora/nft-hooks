type NetworkNames = 'MAINNET' | 'RINKEBY' | 'GOERLI' | 'POLYGON' | 'MUMBAI' | 'ROPSTEN';
type NetworkIDs = '1' | '3' | '4' | '5' | '137' | '80001';

// Supported networks with Zora contract deployments.
// As more networks are supported by zora more network IDs will be added.
const Networks: Record<NetworkNames, NetworkIDs> = {
  MAINNET: '1',
  ROPSTEN: '3',
  RINKEBY: '4',
  GOERLI: '5',
  POLYGON: '137',
  MUMBAI: '80001',
};

export { Networks };
export type { NetworkIDs };
