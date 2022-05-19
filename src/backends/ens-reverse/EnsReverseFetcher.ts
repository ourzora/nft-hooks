import * as bytes from '@ethersproject/bytes';
import { isAddress } from '@ethersproject/address';

import { FetchWithTimeout } from '../../fetcher/FetchWithTimeout';
import { ENS_REVERSE_LOOKUP_CONTRACT_BY_NETWORK } from '../../constants/addresses';

function parseHexNumber(hex: string) {
  return parseInt(bytes.hexStripZeros(`0x${hex}`), 16);
}

function processReturnData(result: string) {
  let pieces = [];
  for (let i = 2; i < result.length; i += 64) {
    pieces.push(result.substring(i, i + 64));
  }
  const numberEntries = parseHexNumber(pieces[1]);
  const addresses: string[] = [];
  const offsets = [];

  for (let i = 0; i < numberEntries; i++) {
    offsets.push(parseHexNumber(pieces[i + 2]));
  }

  for (let i = 0; i < numberEntries; i++) {
    let pieceId = offsets[i] / 32 + 2;
    let strLen = parseHexNumber(pieces[pieceId]);
    const base = (pieceId + 1) * 64 + 2;
    const strHex = result.substring(base, base + strLen * 2);
    addresses.push(Buffer.from(strHex, 'hex').toString());
  }

  return addresses;
}

export async function reverseResolveEnsAddresses(
  addresses: readonly string[],
  networkId: string,
  endpoint: string,
  timeout: number
) {
  if (!ENS_REVERSE_LOOKUP_CONTRACT_BY_NETWORK[networkId]) {
    throw new Error('Cannot lookup reverse for network');
  }
  const mapping = addresses.reduce((last, at) => {
    if (!isAddress(at)) {
      return last;
    }
    last[at] = at;
    return last;
  }, {} as { [address: string]: string });
  const mappingKeys = Object.keys(mapping);

  const requestData = bytes.hexConcat([
    '0xcbf8b66c',
    bytes.hexConcat(
      ['0x20', bytes.arrayify(mappingKeys.length), ...mappingKeys].map((el) =>
        bytes.zeroPad(el, 32)
      )
    ),
  ]);

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: '1',
      method: 'eth_call',
      params: [
        { to: ENS_REVERSE_LOOKUP_CONTRACT_BY_NETWORK[networkId], data: requestData },
        'latest',
      ],
    }),
  };
  const fetcher = new FetchWithTimeout(timeout, 'application/json');
  const result = await fetcher.fetch(endpoint, requestOptions);
  const json = await result.json();
  const resultAddresses = processReturnData(json.result);
  if (resultAddresses.length !== mappingKeys.length) {
    throw new Error('Wrong address return length');
  }

  return mappingKeys.reduce((last, at, index) => {
    last[at] = resultAddresses[index] || undefined;
    return last;
  }, {} as { [name: string]: string | undefined });
}
