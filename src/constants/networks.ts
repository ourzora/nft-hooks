type NetworkNames = 'MAINNET' | 'RINKEBY';
type NetworkIDs = '1' | '4';

// Supported networks with Zora contract deployments.
// As more networks are supported by zora more network IDs will be added.
const Networks: Record<NetworkNames, NetworkIDs> = {
  MAINNET: '1',
  RINKEBY: '4',
};

export { Networks };
export type { NetworkIDs };
