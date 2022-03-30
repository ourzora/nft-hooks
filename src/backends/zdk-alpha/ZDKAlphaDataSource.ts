import { NetworkIDs, NFTObject } from '../../';
import { TokenMarketResponseItem, ZDKAlphaDataInterface } from './ZDKAlphaDataInterface';
import { ZDK } from '@zoralabs/zdk-alpha/dist/src/index';
import {
  Chain,
  MarketType as ZDKMarketType,
  Network,
  TokenMarketsFilterInput,
  TokenMarketSortKeySortInput,
  TokenMarketsQueryInput,
  SortDirection as ZDKSortDirection,
  TokenMarketSortKey,
  V1Ask,
  V1MarketEntityStatus,
  V1Offer,
  V3AskStatus,
  V2AuctionStatus,
  V3AskPropertiesFragment,
  V2AuctionMarketPropertiesFragment,
  PriceSummaryFragment,
} from '@zoralabs/zdk-alpha/dist/src/queries/queries-sdk';
import { MarketType, NFTQuery, SortDirection, SortField } from '../../types/NFTQuery';
import {
  AUCTION_SOURCE_TYPES,
  FIXED_PRICE_MARKET_SOURCES,
  FIXED_SIDE_TYPES,
  MarketModule,
  MARKET_INFO_STATUSES,
  MARKET_TYPES,
} from '../../types';

function getChainFromNetwork(network: NetworkIDs) {
  switch (network) {
    case '1':
      return Chain.Mainnet;
    // case '3':
    //   return Chain.Ropsten;
    // case '4':
    //   return Chain.Rinkeby;
    default:
      throw new Error('Chain not supported');
  }
}

const resolveSortKey = (sortField: SortField) => {
  if (sortField === SortField.MINTED) {
    return TokenMarketSortKey.Minted;
  }
  if (sortField === SortField.ACTIVE) {
    return TokenMarketSortKey.Transferred;
  }
  if (sortField === SortField.PRICE) {
    throw new Error('not supported');
  }
  if (sortField === SortField.TOKEN_ID) {
    return TokenMarketSortKey.TokenId;
  }
  throw new Error('not supported');
};

function getMarkets(markets: TokenMarketResponseItem['markets']) {
  const getReserveAuctionStatus = (status: V2AuctionStatus) => {
    if (status === V2AuctionStatus.Active) {
      return MARKET_INFO_STATUSES.ACTIVE;
    }
    if (status === V2AuctionStatus.Canceled) {
      return MARKET_INFO_STATUSES.CANCELLED;
    }
    if (status === V2AuctionStatus.Completed) {
      return MARKET_INFO_STATUSES.COMPLETE;
    }
    return MARKET_INFO_STATUSES.UNKNOWN;
  };
  const getV1MarketFixedPriceStatus = (status: V1MarketEntityStatus) => {
    if (status === V1MarketEntityStatus.Active) {
      return MARKET_INFO_STATUSES.ACTIVE;
    }
    if (status === V1MarketEntityStatus.Canceled) {
      return MARKET_INFO_STATUSES.CANCELLED;
    }
    if (status === V1MarketEntityStatus.Completed) {
      return MARKET_INFO_STATUSES.COMPLETE;
    }
    return MARKET_INFO_STATUSES.UNKNOWN;
  };
  const getV3AskStatus = (status: V3AskStatus) => {
    if (status === V3AskStatus.Active) {
      return MARKET_INFO_STATUSES.ACTIVE;
    }
    if (status === V3AskStatus.Canceled) {
      return MARKET_INFO_STATUSES.CANCELLED;
    }
    if (status === V3AskStatus.Completed) {
      return MARKET_INFO_STATUSES.COMPLETE;
    }
    return MARKET_INFO_STATUSES.UNKNOWN;
  };

  const marketResponse: MarketModule[] = [];
  markets.forEach((market) => {
    const getStandardMarketData = (
      market: TokenMarketResponseItem['markets'][0],
      amount: PriceSummaryFragment
    ) => ({
      createdAt: {
        timestamp: market.transactionInfo.blockTimestamp,
        blockNumber: market.transactionInfo.blockNumber,
        transactionHash: market.transactionInfo.transactionHash || null,
      },
      amount: {
        usdValue: amount!.usdcPrice?.decimal,
        ethValue: amount!.ethPrice?.raw,
        symbol: amount!.nativePrice.currency.name,
        decimals: amount!.nativePrice.currency.decimals,
        currency: amount!.nativePrice.currency.address,
        amount: amount!.nativePrice.raw,
        // TODO Accept number here?
        prettyAmount: amount!.nativePrice.decimal.toString(),
      },
      raw: market,
    });
    if (market.properties.__typename === 'V1Ask') {
      const properties = market.properties as V1Ask;
      marketResponse.push({
        type: MARKET_TYPES.FIXED_PRICE,
        source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V1,
        side: FIXED_SIDE_TYPES.ASK,
        status: getV1MarketFixedPriceStatus(properties.status),
        ...getStandardMarketData(market, properties.amount),
      });
    }
    if (market.properties.__typename === 'V1Offer') {
      const properties = market.properties as V1Offer;
      marketResponse.push({
        type: MARKET_TYPES.FIXED_PRICE,
        source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V1,
        side: FIXED_SIDE_TYPES.OFFER,
        status: getV1MarketFixedPriceStatus(properties.status),
        ...getStandardMarketData(market, properties.amount),
      });
    }
    if (market.properties.__typename === 'V2Auction') {
      // @ts-ignore
      const properties = market.properties as V2AuctionMarketPropertiesFragment;
      const endTime =
        parseInt(properties.duration, 10) + parseInt(properties.firstBidTime, 10);
      // const expiresAt = properties.estimatedExpirationTime;

      marketResponse.push({
        type: MARKET_TYPES.AUCTION,
        source: AUCTION_SOURCE_TYPES.ZORA_RESERVE_V2,
        status: getReserveAuctionStatus(properties.status),
        // Duration shouldn't be able to overflow
        duration: parseInt(properties.duration, 10),
        startedAt: properties.firstBidTime
          ? {
              timestamp: properties.firstBidTime,
              blockNumber: null,
              transactionHash: null,
            }
          : undefined,
        bids: [],
        endsAt: properties.firstBidTime
          ? {
              timestamp: endTime,
              blockNumber: null,
              transactionHash: null,
            }
          : undefined,
        currentBid:
          properties.highestBidder && properties.highestBidPrice
            ? {
                creator: properties.highestBidder,
                created: {
                  // TODO: get real timestamp here?
                  timestamp: 0,
                  blockNumber: null,
                  transactionHash: null,
                },
                amount: {
                  usdValue: properties.highestBidPrice.usdcPrice?.decimal,
                  ethValue: properties.highestBidPrice.ethPrice?.raw,
                  symbol: properties.highestBidPrice.nativePrice.currency.name,
                  decimals: properties.highestBidPrice.nativePrice.currency.decimals,
                  currency: properties.highestBidPrice.nativePrice.currency.address,
                  amount: properties.highestBidPrice.nativePrice.raw,
                  // TODO Accept number here?
                  prettyAmount: properties.highestBidPrice.nativePrice.decimal.toString(),
                },
              }
            : undefined,
        ...getStandardMarketData(
          market,
          properties.reservePrice || properties.highestBidPrice
        ),
      });
    }
    if (market.properties.__typename === 'V3Ask') {
      // @ts-ignore
      const properties = market.properties as V3AskPropertiesFragment;
      marketResponse.push({
        type: MARKET_TYPES.FIXED_PRICE,
        source: FIXED_PRICE_MARKET_SOURCES.ZORA_ASK_V3,
        side: FIXED_SIDE_TYPES.ASK,
        status: getV3AskStatus(properties.askStatus),
        ...getStandardMarketData(market, properties.askPrice),
      });
    }
  });
  return marketResponse;
}
export class ZDKAlphaDataSource implements ZDKAlphaDataInterface {
  zdk: ZDK;

  constructor(chainId: NetworkIDs, endpoint?: string) {
    this.zdk = new ZDK(endpoint, [
      { network: Network.Ethereum, chain: getChainFromNetwork(chainId) },
    ]);
  }

  canLoadNFT(_: string, __: string) {
    return true;
  }

  transformNFT(tokenMarket: TokenMarketResponseItem, object?: NFTObject) {
    if (!object) {
      object = { rawData: {} };
    }
    const { token } = tokenMarket;
    object.nft = {
      tokenId: token.tokenId,
      contract: {
        address: token.collectionAddress,
        name: token.tokenContract?.name || null,
        description: null,
        symbol: token.tokenContract?.symbol || null,
      },
      minted: {
        minter: token.mintInfo?.originatorAddress || undefined,
        at: token.mintInfo
          ? {
              timestamp:
                new Date(token.mintInfo.mintContext.blockTimestamp).getTime() / 1000,
              blockNumber: token.mintInfo.mintContext.blockNumber,
              transactionHash: token.mintInfo!.mintContext.transactionHash || null,
            }
          : undefined,
      },
      owner: token.owner || undefined,
      metadataURI: token.tokenUrl,
      contentURI: token.content?.url || null,
    };
    object.markets = getMarkets(tokenMarket.markets);
    // sales?

    object.metadata = token.metadata as any;
    object.media = {
      image: token.image?.url
        ? {
            mime: token.image.mimeType || undefined,
            uri: token.image.url,
          }
        : null,
      content: token.content?.url
        ? {
            mime: token.content.mimeType || undefined,
            uri: token.content.url,
          }
        : null,
      thumbnail: null,
      source: 'zora',
    };

    if (!object.rawData) {
      object.rawData = {};
    }
    object.rawData['apiindexer'] = token;
    return object;
  }

  loadNFT = async (
    tokenContract: string,
    tokenId: string
  ): Promise<TokenMarketResponseItem | Error> => {
    const response = await this.zdk.tokenMarkets({
      includeFullDetails: true,
      where: {
        tokens: [{ tokenId, address: tokenContract }],
      },
    });
    return response.tokenMarkets.nodes.length > 0
      ? response.tokenMarkets.nodes[0]
      : new Error('No token');
  };

  loadNFTs(
    tokenContractAndIds: readonly string[]
  ): Promise<(TokenMarketResponseItem | Error)[]> {
    return Promise.all(
      tokenContractAndIds.map((tokenContractAndId) => {
        const [tokenContract, tokenId] = tokenContractAndId.split(':');
        return this.loadNFT(tokenContract, tokenId);
      })
    );
  }

  queryNFTs = async (query: NFTQuery) => {
    const marketsQuery: TokenMarketsQueryInput = {};
    const marketsFilter: TokenMarketsFilterInput = {};
    let marketsSort: TokenMarketSortKeySortInput | undefined = undefined;

    marketsQuery.ownerAddresses = query.query.owners;
    marketsQuery.collectionAddresses = query.query.collections;

    if (query.query.activeMarkets) {
      const marketsList: ZDKMarketType[] = [];
      query.query.activeMarkets.forEach((market) => {
        if (market === MarketType.AUCTION) {
          marketsList.push(ZDKMarketType.V2Auction);
        }
        if (market === MarketType.FIXED_PRICE) {
          marketsList.push(ZDKMarketType.V3Ask);
          marketsList.push(ZDKMarketType.V1Ask);
          marketsList.push(ZDKMarketType.V1BidShare);
        }
        if (market === MarketType.ANY_MARKET) {
          marketsList.push(ZDKMarketType.V1Ask);
          marketsList.push(ZDKMarketType.V3Ask);
          marketsList.push(ZDKMarketType.V1BidShare);
          marketsList.push(ZDKMarketType.V2Auction);
          marketsList.push(ZDKMarketType.V1Offer);
        }
      });
      marketsFilter.marketFilters = marketsList.map((marketType) => ({ marketType }));
    }

    if (query.query.minters) {
      throw new Error('Minters filter not supported');
    }

    if (query.sort) {
      if (query.sort.length > 1) {
        throw new Error('Can only sort on one column');
      }
      query.sort.forEach((sortItem) => {
        marketsSort = {
          sortDirection:
            sortItem.direction === SortDirection.DESC
              ? ZDKSortDirection.Desc
              : ZDKSortDirection.Asc,
          sortKey: resolveSortKey(sortItem.field),
        };
      });
    }

    const results = await this.zdk.tokenMarkets({
      where: marketsQuery,
      filter: marketsFilter,
      sort: marketsSort,
      includeFullDetails: true,
      includeSalesHistory: !!query.additional.includeSaleHistory,
    });
    if (results.tokenMarkets.nodes) {
      return results.tokenMarkets.nodes;
    }
    return [];
  };
}
