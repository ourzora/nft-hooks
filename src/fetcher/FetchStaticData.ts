import { ZORA_MEDIA_CONTRACT_BY_NETWORK } from '../constants/addresses';
import { MediaFetchAgent } from './MediaFetchAgent';
import { openseaDataToMetadata } from './OpenseaUtils';

type fetchNFTDataType = {
  tokenId: string;
  contractAddress?: string;
  fetchAgent: MediaFetchAgent;
  prepareDataJSON?: boolean;
};

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
