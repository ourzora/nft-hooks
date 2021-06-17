import { ZORA_MEDIA_CONTRACT_BY_NETWORK } from '../constants/addresses';
import { FetchGroupTypes } from './FetchResultTypes';
import { MediaFetchAgent } from './MediaFetchAgent';
import { openseaDataToMetadata } from './OpenseaUtils';
import { addAuctionInformation } from './TransformFetchResults';

/**
 * This removes undefined values to sanitize
 * data objects to work with nextJS server-side
 * page props.
 *
 * @param json Object to sanitize for JSON fields
 * @returns JSON-safe object
 */
export function prepareJson<T>(json: T): T {
  return JSON.parse(JSON.stringify(json));
}


type fetchNFTDataType = {
  tokenId: string;
  contractAddress?: string;
  fetchAgent: MediaFetchAgent;
  prepareDataJSON?: boolean;
};

/**
 * Async function to fetch auction information and metadata for any
 * NFT or zNFT. Mirrors behavior of useNFT hook but for server-side rendering.
 * Fetches all metadata and auction information server-side. Will be re-validated client-side.
 * Can pass return value directly into `initialData` for useNFT hook.
 *
 * @param tokenId: Token ID to fetch
 * @param contractAddress: Contract address to fetch token from
 * @param fetchAgent: MediaFetchAgent instance
 * @param prepareDataJSON: Sanitizes undefined fields to allow data to work with next.js
 * @returns object with nft and metadata fields, any issues throw an RequestError
 */
export const fetchNFTData = async ({
  tokenId,
  contractAddress,
  fetchAgent,
  prepareDataJSON = true,
}: fetchNFTDataType) => {
  if (
    contractAddress &&
    contractAddress !== ZORA_MEDIA_CONTRACT_BY_NETWORK[fetchAgent.networkId]
  ) {
    const auctionData = await fetchAgent.loadAuctionInfo(contractAddress, tokenId);
    const nft = await fetchAgent.loadNFTData(contractAddress, tokenId, auctionData);
    const metadata = openseaDataToMetadata(nft);
    const response = {
      nft,
      metadata,
    };
    if (prepareDataJSON) {
      return prepareJson(response);
    }
    return response;
  } else {
    const nft = await fetchAgent.loadZNFTData(tokenId);
    const metadata = await fetchAgent.fetchIPFSMetadata(nft.nft.metadataURI);
    const response = {
      nft,
      metadata,
    };
    if (prepareDataJSON) {
      return prepareJson(response);
    }
    return response;
  }
};

type fetchZNFTGroupDataType = {
  ids: string[];
  type: FetchGroupTypes;
  fetchAgent: MediaFetchAgent;
  prepareDataJSON?: boolean;
};

/**
 * Server-side initial data hook for zNFTGroup data hook
 * 
 * @param ids list of ids (addresses for creator or owner, znft id for NFT)
 * @param type type of 'id' or 'creator' or 'owner' to determine what type of data to fetch
 * @returns NFTDataType
 */
export const fetchZNFTGroupData = async ({
  ids,
  type,
  fetchAgent,
  prepareDataJSON = true,
}: fetchZNFTGroupDataType) => {
  const nftGroup = await fetchAgent.fetchZNFTGroupData(ids, type);
  const response = nftGroup.map((media) => ({
    ...media,
    pricing: addAuctionInformation(media.pricing),
  }));
  if (prepareDataJSON) {
    return prepareJson(response);
  }
  return response;
};
