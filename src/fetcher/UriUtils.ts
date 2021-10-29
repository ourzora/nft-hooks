import { ZORA_IPFS_GATEWAY } from "../constants/urls";

export function convertURIToHTTPS(url: string) {
  if (url.startsWith('ipfs://')) {
    return url.replace('ipfs://', ZORA_IPFS_GATEWAY);
  }
  return url;
}