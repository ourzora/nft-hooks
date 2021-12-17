import Big from 'big.js';
import { ReserveAuctionPartialFragment } from '../graph-queries/zora-graph-types';
import { IndexerTokenWithAuctionFragment } from '../graph-queries/zora-indexer-types';
import { CurrencyLookupType, IndexerDataType } from './AuctionInfoTypes';
import { addAuctionInformation, auctionDataToPricing } from './TransformFetchResults';

export function transformNFTIndexerResponse(
  data: IndexerTokenWithAuctionFragment,
  auction?: ReserveAuctionPartialFragment,
  currency?: CurrencyLookupType
): IndexerDataType {
  return {
    nft: {
      tokenId: data.tokenId.toString(),
      contract: {
        address: data.address,
        name: data.tokenContract?.name?.toString(),
        symbol: data.tokenContract?.symbol?.toString(),
      },
      owner: data.owner,
      creator: data.minter || undefined,
      metadataURI: data.tokenURI || '',
    },
    zoraNFT: data.media
      ? {
          // TODO(iain): make properly optional
          createdAtTimestamp: data.mintTransferEvent?.blockTimestamp || 0,
          // TODO(iain): make properly optional
          contentURI: data.media.contentURI || '',
          contentHash: data.media.contentHash,
          // TODO(iain): make properly optional
          metadataURI: data.media.metadataURI || '',
          metadataHash: data.media.metadataHash,
          ownerBidShare: data.media.ownerBidShare,
          ownerBidSharePercentage: data.media.ownerBidShare
            ? new Big(data.media.ownerBidShare).div(new Big(10).pow(18)).toNumber()
            : 0,
          creatorBidShare: data.media.creatorBidShare,
          creatorBidSharePercentage: data.media.creatorBidShare
            ? new Big(data.media.creatorBidShare).div(new Big(10).pow(18)).toNumber()
            : 0,
        }
      : undefined,
    zoraIndexerResponse: data,
    pricing: addAuctionInformation(
      {
        reserve: auctionDataToPricing(auction),
      },
      currency
    ),
  };
}
