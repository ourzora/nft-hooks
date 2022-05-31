import { Chain } from '@zoralabs/zdk-alpha/dist/queries/queries-sdk';
import { NetworkIDs } from '../../../constants/networks';

export function getChainFromNetwork(network: NetworkIDs) {
  switch (network) {
    case '1':
      return Chain.Mainnet;
    // case '3':
    //   return Chain.Ropsten;
    // case '4':
    //   return Chain.Rinkeby;
    default:
      throw new Error('Chain not supported');
  }
}
