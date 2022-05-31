export type ENSInfo = {
  address: string;
  name: string;
};

export type ENSResultType = {
  [address: string]: ENSInfo;
};

export interface ENSInterface {
  loadEnsFromAddresses(addresses: string[]): Promise<ENSResultType>;
}
