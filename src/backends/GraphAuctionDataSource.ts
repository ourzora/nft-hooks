import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';
import { RequestError } from 'src';
import { NetworkIDs } from 'src/constants/networks';
import { THEGRAPH_API_URL_BY_NETWORK } from 'src/constants/urls';
import { FetchWithTimeout } from 'src/fetcher/FetchWithTimeout';
import { GET_AUCTION_BY_MEDIA } from 'src/graph-queries/zora';
import {
  GetAuctionByMediaQuery,
  ReserveAuctionPartialFragment,
} from 'src/graph-queries/zora-types';
import { GraphAuctionInterface } from './GraphAuctionInterface';
import { NFTObject } from './NFTInterface';

export class GraphAuctionDataSource implements GraphAuctionInterface {
  // auctionInfoLoader fetches auction info for non-zora NFTs
  auctionInfoLoader: DataLoader<string, ReserveAuctionPartialFragment>;
  networkId: NetworkIDs;
  timeout: number;

  constructor(networkId: NetworkIDs, timeout: number = 4) {
    this.timeout = timeout;
    this.auctionInfoLoader = new DataLoader((keys) => this.fetchAuctionNFTInfo(keys), {
      cache: false,
      maxBatchSize: 300,
    });
    this.networkId = networkId;
  }

  loadAuctionInfo(
    contractAddress: string,
    tokenId: string
  ): Promise<ReserveAuctionPartialFragment> {
    return this.auctionInfoLoader.load(`${contractAddress.toLowerCase()}:${tokenId}`);
  }

  transformNFT(response: ReserveAuctionPartialFragment, currentObject: NFTObject) {
    const getHighestBid = () => {
      if (response.currentBid) {
        return {
          pricing: response.auctionCurrency,
          placedBy: response.currentBid.bidder.id,
          placedAt: response.currentBid.createdAtTimestamp,
        };
      }
      if (response.previousBids) {
        const topBid = response.previousBids[response.previousBids.length - 1];
        return {
          pricing: {
            currency: response.auctionCurrency,
            amount: topBid.amount,
            prettyAmount: topBid.amount,
          },
          placedBy: topBid.bidder.id,
          placedAt: topBid.createdAtTimestamp,
        };
      }
      return undefined;
    };
    currentObject.market = {
      reserve: {
        current: {
          highestBid: getHighestBid(),
          likelyHasEnded:
            response.expectedEndTimestamp >= Math.floor(new Date().getTime() / 1000),
          reserveMet: !!(response.previousBids?.length || response.currentBid),
          reservePrice: {
            amount: response.reservePrice,
            prettyAmount: response.reservePrice,
            currency: response.auctionCurrency,
          },
          bids: [
            ...(response.currentBid ? [response.currentBid] : []),
            ...(response.previousBids ? response.previousBids : []),
          ],
        },
      },
    };
    return currentObject;
  }

  async fetchAuctionNFTInfo(tokenAndAddresses: readonly string[]) {
    const fetchWithTimeout = new FetchWithTimeout(this.timeout);
    const client = new GraphQLClient(THEGRAPH_API_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });
    const response = (await client.request(GET_AUCTION_BY_MEDIA, {
      tokens: tokenAndAddresses.map((tokenAndAddress: string) =>
        tokenAndAddress.toLowerCase()
      ),
    })) as GetAuctionByMediaQuery;
    if (!response.reserveAuctions) {
      throw new RequestError('Missing auction in reponse');
    }
    return tokenAndAddresses.map(
      (tokenAndAddress: string) =>
        response.reserveAuctions.find((auction) => auction.token === tokenAndAddress) ||
        new Error('Missing Record')
    );
  }
}
