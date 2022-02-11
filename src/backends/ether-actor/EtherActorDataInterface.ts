import { NFTInterface } from '../NFTInterface';

export type EtherActorServerResponse = {
  contract: {
    address: string;
    name?: string;
    symbol?: string;
  };
  tokenId: string;
  tokenAddress: string;
  tokenURI: string;
  tokenType: 'ERC721' | 'ERC1155';
  tokenURL: string;
  tokenURLMimeType: string;
  name: string;
  description: string;
  contentURL?: string;
  contentURLMimeType?: string;
  imageURL?: string;
  imageURLMimeType?: string;
  owner: string;
  metadata: any;
};

export interface EtherActorDataInterface extends NFTInterface<EtherActorServerResponse> {}
