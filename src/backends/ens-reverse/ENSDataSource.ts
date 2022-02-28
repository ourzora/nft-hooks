import DataLoader from 'dataloader';
import { NetworkIDs } from '../../constants/networks';
import { RPC_URL_BY_NETWORK } from '../../constants/urls';
import { reverseResolveEnsAddresses } from './EnsReverseFetcher';
import { ENSInterface, ENSInfo, ENSResultType } from './ENSInterface';

export class ENSDataSource implements ENSInterface {
  ensLoader: DataLoader<string, ENSInfo>;
  networkId: string;
  endpoint: string;
  timeout: number;
  constructor(
    networkId: NetworkIDs,
    timeout = 2,
    rpcUrl: string | undefined = undefined
  ) {
    if (!rpcUrl) {
      rpcUrl = RPC_URL_BY_NETWORK[networkId];
    }
    this.networkId = networkId;
    this.endpoint = rpcUrl;
    this.ensLoader = new DataLoader(this.fetchEnsNames);
    this.timeout = timeout;
  }

  fetchEnsNames = async (addresses: readonly string[]) => {
    const results = await reverseResolveEnsAddresses(
      addresses,
      this.networkId,
      this.endpoint,
      this.timeout
    );
    return addresses.map((address) =>
      address in results
        ? { name: (results as any)[address], address: address }
        : Error('Cannot find')
    );
  };

  loadEnsFromAddresses = async (addresses: string[]): Promise<ENSResultType> => {
    const results = await this.ensLoader.loadMany(addresses);
    return results.reduce((last: ENSResultType, result) => {
      if (!(result instanceof Error)) {
        last[result.address] = result;
      }
      return last;
    }, {});
  };
}
