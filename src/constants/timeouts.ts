export type RequestType = 'Zora' | 'Graph' | 'IPFS' | 'OpenSea';
export type TimeoutsLookupType = Record<RequestType, number>;
export const DEFAULT_NETWORK_TIMEOUTS_MS: TimeoutsLookupType = {
  Zora: 2 * 1000,
  Graph: 5 * 1000,
  IPFS: 10 * 1000,
  OpenSea: 8 * 1000,
};
