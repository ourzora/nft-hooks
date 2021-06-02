import { RequestError } from "./RequestError";

export type OpenseaResponse = {
  token_id: string;
  description: string;
  name: string;
  image_url: string;
  image_thumbnail_url: string;
  image_original_url: string;
  animation_url: string;
  animation_original_url: string;
  external_link: string;
  token_metadata: string;
  asset_contract: {
    address: string;
    created_date: string;
    name: string;
    // should be ERC721
    schema_name: string;
  };
  owner: {
    address: string;
  };
  creator: {
    address: string;
  };
};

export const transformGenericNFTForKey = (response: OpenseaResponse[], key: string) => {
  const [contractAddress, tokenId] = key.split(':');

  const matchedResponse = response.find(
    (response) =>
      response.token_id === tokenId && response.asset_contract.address === contractAddress
  );

  if (!matchedResponse) {
    throw new RequestError('Cannot find NFT in response');
  }

  return matchedResponse;
};
