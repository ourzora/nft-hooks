import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';
import { RequestError } from '../..';
import { NetworkIDs } from '../../constants/networks';
import { THEGRAPH_API_URL_BY_NETWORK } from '../../constants/urls';
import { FetchWithTimeout } from '../../fetcher/FetchWithTimeout';
import { AuctionBidEvent, AuctionLike, MARKET_TYPES, NFTObject } from '../../types/NFTInterface';
import {
  GetAllAuctionsQuery,
  GetAuctionByMediaQuery,
  GetAuctionsByCuratorQuery,
  ReserveAuctionPartialFragment,
} from './zora-graph-types';
import { GraphAuctionInterface } from './GraphAuctionInterface';
import Big from 'big.js';
import {
  GET_ALL_AUCTIONS,
  GET_AUCTION_BY_CURATOR,
  GET_AUCTION_BY_MEDIA,
} from './zora-graph';

function unixTimeNow() {
  return Math.floor(new Date().getTime() / 1000);
}

function priceToPretty(number: string, decimals?: number | null) {
  return new Big(number)
    .div(new Big(10).pow(decimals || 18))
    .toFixed(2)
    .toString();
}


export class GraphAuctionDataSource implements GraphAuctionInterface {
  // auctionInfoLoader fetches auction info for non-zora NFTs
  auctionInfoLoader: DataLoader<string, NFTObject>;
  networkId: NetworkIDs;
  timeout: number;
  endpoint: string;

  constructor(
    networkId: NetworkIDs,
    endpoint: string = THEGRAPH_API_URL_BY_NETWORK[networkId],
    timeout: number = 4
  ) {
    this.timeout = timeout;
    this.auctionInfoLoader = new DataLoader((keys) => this.fetchAuctionNFTInfo(keys), {
      cache: false,
      maxBatchSize: 300,
    });
    this.networkId = networkId;
    this.endpoint = endpoint;
  }

  getClient() {
    const fetchWithTimeout = new FetchWithTimeout(this.timeout);
    return new GraphQLClient(this.endpoint, {
      fetch: fetchWithTimeout.fetch,
    });
  }

  loadAuctionInfo(contractAddress: string, tokenId: string): Promise<NFTObject> {
    return this.auctionInfoLoader.load(`${contractAddress.toLowerCase()}-${tokenId}`);
  }

  static transformNFT(response: ReserveAuctionPartialFragment) {
    const currentObject: NFTObject = { rawData: {}, markets: [] };

    const getStatus = () => {
      if (!response.approved) {
        return 'pending';
      }
      if (
        response.finalizedAtTimestamp &&
        (!response.previousBids || response.previousBids?.length === 0) &&
        !response.currentBid
      ) {
        return 'cancelled';
      }
      if (response.finalizedAtTimestamp) {
        return 'complete';
      }
      if (
        response.expectedEndTimestamp &&
        response.expectedEndTimestamp >= unixTimeNow()
      ) {
        return 'complete';
      }
      if (response.firstBidTime) {
        return 'active';
      }
      return 'unknown';
    };

    function addCurrencyInfo(amount: string) {
      if (response.auctionCurrency.id === '0x0000000000000000000000000000000000000000') {
        return {
          currency: response.auctionCurrency.id,
          name: 'Ethereum',
          symbol: 'ETH',
          decimals: 18,
          amount,
          prettyAmount: priceToPretty(amount, 18),
        };
      }
      return {
        currency: response.auctionCurrency.id,
        name: response.auctionCurrency.name,
        symbol: response.auctionCurrency.symbol,
        decimals: response.auctionCurrency.decimals || undefined,
        amount,
        prettyAmount: priceToPretty(amount, response.auctionCurrency.decimals || 18),
      };
    }

    const getAmount = () => {
      // current bid
      if (response.currentBid?.amount) {
        return addCurrencyInfo(response.currentBid.amount);
      }

      return addCurrencyInfo(response.reservePrice);
    };

    const formatBid = (bid: any): AuctionBidEvent => {
      return {
        creator: bid.bidder.id,
        amount: addCurrencyInfo(bid.amount),
        created: {
          blockNumber: bid.createdAtBlockNumber,
          transactionHash: bid.transactionHash,
          timestamp: bid.createdAtTimestamp,
        },
      };
    };

    const getHighestBid = () => {
      if (response.currentBid) {
        return formatBid(response.currentBid);
      }
      if (response.previousBids && response.previousBids.length) {
        const topBid = response.previousBids[response.previousBids.length - 1];
        return formatBid(topBid);
      }
      return undefined;
    };

    const auction: AuctionLike = {
      status: getStatus(),
      amount: getAmount(),
      raw: response,
      type: MARKET_TYPES.AUCTION,
      createdBy: response.curator.id,
      createdAt: {
        timestamp: response.createdAtTimestamp,
        blockNumber: response.createdAtBlockNumber,
        transactionHash: response.transactionHash,
      },
      finishedAt: response.finalizedAtTimestamp
        ? {
            timestamp: response.finalizedAtTimestamp,
            blockNumber: null,
            transactionHash: null,
          }
        : undefined,
      startedAt: response.firstBidTime,
      // if cancelled record is deleted
      cancelledAt: undefined,
      winner: response.currentBid?.bidder.id,
      endsAt: {
        timestamp: response.expectedEndTimestamp,
        blockNumber: null,
        transactionHash: null,
      },
      duration: response.duration,
      currentBid: getHighestBid(),
      source: 'ZoraReserveV0',
      bids: [...(response.previousBids?.map(formatBid) || [])],
    };
    currentObject.markets = [auction];

    return currentObject;
  }

  fetchAuctionNFTInfo = async (tokenAndAddresses: readonly string[]) => {
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
    return tokenAndAddresses
      .map(
        (tokenAndAddress: string) =>
          response.reserveAuctions.find((auction) => auction.token === tokenAndAddress) ||
          new Error('Missing Record')
      )
      .map((response) =>
        response instanceof Error
          ? response
          : GraphAuctionDataSource.transformNFT(response)
      );
  };

  getAllAuctionsByCurator = async (
    curator: string,
    active: boolean | undefined,
    first: number,
    skip: number
  ) => {
    const auctions = (await this.getClient().request(GET_AUCTION_BY_CURATOR, {
      curator,
      active: active !== undefined ? [active] : [true, false],
      first,
      skip,
    })) as GetAuctionsByCuratorQuery;
    return auctions.reserveAuctions.map(GraphAuctionDataSource.transformNFT);
  };

  /**
   * Fetch function to retrieve Graph data for matching curated auctions
   * This function is not cached
   *
   * @function fetchReserveAuctions
   * @private
   * @param curatorIds list of Zora NFT IDs to fetch from the graph datastore
   * @returns mapped transformed list of curated auction results
   */
  fetchReserveAuctions = async (
    curatorIds: readonly string[],
    isApproved: boolean | null = null,
    first: number = 1000,
    skip: number = 0
  ) => {
    let query = GET_ALL_AUCTIONS;
    if (curatorIds.length) {
      query = GET_AUCTION_BY_CURATOR;
    }
    const response = (await this.getClient().request(query, {
      curators: curatorIds.length ? curatorIds : undefined,
      first: first,
      skip: skip,
      approved: isApproved === null ? [true, false] : [isApproved],
    })) as GetAllAuctionsQuery;
    return response.reserveAuctions.map(GraphAuctionDataSource.transformNFT);
  };
}
