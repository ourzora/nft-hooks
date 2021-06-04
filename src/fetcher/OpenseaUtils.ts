import { ReserveAuctionPartialFragment } from 'src/graph-queries/zora-types';
import { CurrencyLookupType, OpenseaNFTDataType } from './AuctionInfoTypes';
import { RequestError } from './RequestError';
import { addAuctionInformation, auctionDataToPricing } from './TransformFetchResults';

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

export const openseaDataToMetadata = (response: OpenseaNFTDataType) => {
  return {
    name: response.openseaInfo.name,
    description: response.openseaInfo.description,
    image: response.openseaInfo.image_url,
    image_thumbnail_url: response.openseaInfo.image_thumbnail_url,
    animation_url: response.openseaInfo.animation_url,
  };
};

export const transformOpenseaResponse = (
  data: OpenseaResponse,
  auctionData?: ReserveAuctionPartialFragment,
  currencyData?: CurrencyLookupType
): OpenseaNFTDataType => {
  return {
    nft: {
      tokenId: data.token_id,
      contract: {
        address: data.asset_contract.address,
      },
      owner: data.owner.address,
      creator: data.creator.address,
      metadataURI: data.token_metadata,
    },
    openseaInfo: data,
    pricing: addAuctionInformation(
      {
        reserve: auctionDataToPricing(auctionData),
      },
      currencyData
    ),
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
