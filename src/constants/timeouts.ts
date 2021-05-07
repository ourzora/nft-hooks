export type RequestType = 'Zora' | 'Graph' | 'IPFS';
export type TimeoutsLookupType = Record<RequestType, number>;
export const DEFAULT_NETWORK_TIMEOUTS_MS: TimeoutsLookupType = {
  Zora: 2 * 1000,
  Graph: 5 * 1000,
  IPFS: 10 * 1000,
};
