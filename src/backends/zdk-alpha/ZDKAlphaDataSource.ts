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
} from '@zoralabs/zdk-alpha/dist/src/queries/queries-sdk';
import { MarketType, NFTQuery, SortDirection, SortField } from '../../types/NFTQuery';

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

// function getMarkets(markets: TokenMarketResponseItem['markets']) {
//   markets.map((market) => {
//     const commonInfo: MarketInfoFragment = {
//       raw: market,
//       amount: market.price ? {
//         usdValue: market.price.usdcPrice?.decimal,
//         ethValue: market.price.ethPrice?.decimal,
//         symbol: market.price.
//
//       } : undefined,
//     }
//     if (market.properties.__typename === 'V2Auction') {
//     }
//     if (market.properties.__typename === 'V3Ask') {
//     }
//   }) 
// }
export class ZDKAlphaDataSource implements ZDKAlphaDataInterface {
  zdk: ZDK;

  constructor(chainId: NetworkIDs, endpoint: string) {
    this.zdk = new ZDK(endpoint, Network.Ethereum, getChainFromNetwork(chainId));
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
      query: {
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
      query: marketsQuery,
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
