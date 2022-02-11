import { ZORA_IPFS_GATEWAY, DEFAULT_ARWEAVE_GATEWAY } from '../constants/urls';

export function convertURIToHTTPS(url: string) {
  if (url.startsWith('ipfs://')) {
    return url.replace('ipfs://', ZORA_IPFS_GATEWAY);
  }
  if (url.startsWith('ar://')) {
    return url.replace('ar://', DEFAULT_ARWEAVE_GATEWAY);
  }
  return url;
}
