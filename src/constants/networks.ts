type NetworkNames = 'MAINNET' | 'RINKEBY';
type NetworkIDs = '1' | '2';

const Networks: Record<NetworkNames, NetworkIDs> = {
  MAINNET: '1',
  RINKEBY: '2',
};

export { Networks };
export type { NetworkIDs };
