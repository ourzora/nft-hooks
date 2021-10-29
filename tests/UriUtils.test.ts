import { convertURIToHTTPS } from '../src/fetcher/UriUtils';

describe('UriUtils test', () => {
  it('tests http url passthrough', () => {
    expect(convertURIToHTTPS('https://example.com/test')).toEqual(
      'https://example.com/test'
    );
  });
  it('tests IPFS change', () => {
    expect(convertURIToHTTPS('ipfs://CID')).toEqual(
      'https://zora-prod.mypinata.cloud/ipfs/CID'
    );
  });
});
