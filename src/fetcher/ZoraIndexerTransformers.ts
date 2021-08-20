import { ReserveAuctionPartialFragment } from '../graph-queries/zora-graph-types';
import { TokenWithAuctionFragment } from '../graph-queries/zora-indexer-types';
import { IndexerDataType } from './AuctionInfoTypes';
import { addAuctionInformation, auctionDataToPricing } from './TransformFetchResults';

export function transformNFTIndexerResponse(
  data: TokenWithAuctionFragment,
  auction?: ReserveAuctionPartialFragment
): IndexerDataType {
  return {
    nft: {
      tokenId: data.tokenId.toString(),
      contract: {
        address: data.address,
      },
      owner: data.owner,
      creator: data.minter || undefined,
      metadataURI: data.tokenURI || '',
    },
    zoraIndexerResponse: data,
    pricing: addAuctionInformation({
      reserve: auctionDataToPricing(auction),
    }),
  };
}
