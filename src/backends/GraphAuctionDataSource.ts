import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';
import { RequestError } from 'src';
import { NetworkIDs } from 'src/constants/networks';
import { THEGRAPH_API_URL_BY_NETWORK } from 'src/constants/urls';
import { FetchWithTimeout } from 'src/fetcher/FetchWithTimeout';
import { GET_AUCTION_BY_MEDIA } from 'src/graph-queries/zora';
import { GetAuctionByMediaQuery, ReserveAuctionPartialFragment } from 'src/graph-queries/zora-types';
import { GraphAuctionInterface } from './GraphAuctionInterface';

export class GraphAuctionDataSource implements GraphAuctionInterface {
  // auctionIfnoLoader fetches auction info for non-zora NFTs
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
