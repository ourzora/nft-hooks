import DataLoader from 'dataloader';
import { GraphQLClient } from 'graphql-request';
import { getAddress } from '@ethersproject/address';
import Big from 'big.js';

import { ZERO_ADDRESS, ZORA_MEDIA_CONTRACT_BY_NETWORK } from '../../constants/addresses';
import { NetworkIDs } from '../../constants/networks';
import { ZORA_INDEXER_URL_BY_NETWORK } from '../../constants/urls';
import { FetchWithTimeout } from '../../fetcher/FetchWithTimeout';
import {
  AuctionBidEventPartFragment,
  ByIdsQuery,
  IndexerAuctionPartFragment,
  IndexerTokenWithAuctionFragment,
  String_Comparison_Exp,
  TokenTransferEventInfoFragment,
  Token_Bool_Exp,
  IndexerTokenWithAuctionDetailFragment,
  V3AskPartFragment,
  V3EventPartFragment,
} from './zora-indexer-types';
import {
  AuctionBidEvent,
  AuctionLike,
  EventType,
  FixedPriceLike,
  MarketInfoStatus,
  MARKET_TYPES,
  MetadataAttributeType,
  NFTObject,
  TokenMarketEvent,
  TokenTransferEvent,
  TokenTransferEventType,
} from '../NFTInterface';
import { ZoraIndexerV1Interface } from './ZoraIndexerV1Interface';
import {
  ACTIVE_AUCTIONS_QUERY,
  BY_IDS as INDEXER_BY_IDS_QUERY,
  BY_OWNER,
} from './zora-indexer';
import { ArgumentsError } from '../../fetcher/ErrorUtils';

function dateToUnix(date?: string) {
  if (!date) {
    return undefined;
  }
  return Math.floor(new Date(date).getTime() / 1000);
}

function getLast<T>(items: T[]) {
  if (items && items.length) {
    return items[items.length - 1];
  }
  return undefined;
}

function priceToPretty(number: string, decimals?: number | null) {
  return new Big(number)
    .div(new Big(10).pow(decimals || 18))
    .toFixed(2)
    .toString();
}

function getAttributes(json: any) {
  const result: MetadataAttributeType[] = [];
  if (json.properties) {
    try {
      Object.keys(json.properties).forEach((name: string) => {
        result.push({ name, value: json.properties[name] as string, display: null });
      });
    } catch {}
  }
  if (json.attributes) {
    try {
      json.attributes.forEach((attribute: any) => {
        result.push({
          name: attribute.trait_type,
          value: attribute.value,
          display: attribute.display_type,
        });
      });
    } catch {}
  }
  return result;
}

function timeIsPast(time: string) {
  return new Date(time).getTime() < new Date().getTime();
}

const getAskEventStatus = (askEvent: V3EventPartFragment): MarketInfoStatus => {
  if (askEvent.eventType === 'Ask_v1_AskCreated') {
    return 'active';
  }
  if (askEvent.eventType === 'Ask_v1_AskFilled') {
    return 'complete';
  }
  if (askEvent.eventType === 'Ask_v1_AskCancelled') {
    return 'cancelled';
  }
  if (askEvent.eventType === 'Ask_v1_AskPriceUpdated') {
    return 'active';
  }
  return 'unknown';
};

const getAskStatus = (status: string): MarketInfoStatus => {
  if (status === 'ACTIVE') {
    return 'active';
  }
  if (status === 'FILLED') {
    return 'complete';
  }
  if (status === 'CANCELLED') {
    return 'cancelled';
  }
  return 'unknown';
};

function extractAsk(ask: V3AskPartFragment): FixedPriceLike {
  const created = ask.events.find((e) => e.eventType === 'Ask_v1_AskCreated')!;
  return {
    status: getAskStatus(ask.status),
    amount: {
      amount: ask.askPrice,
      prettyAmount: priceToPretty(ask.askPrice, null),
      currency: ask.askCurrency,
      name: ask.askCurrency === ZERO_ADDRESS ? 'Ether' : 'UNKN',
      symbol: ask.askCurrency === ZERO_ADDRESS ? 'ETH' : 'UNKN',
      decimals: undefined,
      // other info not provided
      // currency.decimals / currency.name / currency.symbol
    },
    side: 'ask',
    type: MARKET_TYPES.FIXED_PRICE,
    cancelledAt: undefined,
    createdAt: {
      timestamp: dateToUnix(created.blockTimestamp)!,
      blockNumber: created.blockNumber,
      transactionHash: created.transactionHash,
    },
    createdBy: ask.seller,
    finishedAt: undefined,
    // finishedAt: completeEvent
    //   ? {
    //       timestamp: dateToUnix(completeEvent.blockTimestamp)!,
    //       blockNumber: completeEvent.blockNumber,
    //       transactionHash: completeEvent.transactionHash,
    //     }
    //   : undefined,
    source: 'ZoraAskV1',
    raw: ask,
  };
}

function extractAskEvents(askEvents: V3EventPartFragment[]): TokenMarketEvent[] {
  return askEvents.map((askEvent) => {
    let status = getAskEventStatus(askEvent);

    // if (indx !== latestAskEvent?.indx) {
    //   // get next event to see if cancelled or filled
    //   for (let i = indx; i < askEvents.length; i++) {
    //     if (askEvents[i].eventType === 'Ask_v1_AskCreated') {
    //       status = 'cancelled';
    //       break;
    //     }
    //     if (askEvents[i].eventType === 'Ask_v1_AskPriceUpdated') {
    //       // invalidate updated price and treat as new ask
    //       status = 'invalid';
    //       break;
    //     }
    //     if (askEvents[i].eventType === 'Ask_v1_AskCancelled') {
    //       canceledEvent = askEvents[i];
    //       status = 'cancelled';
    //       break;
    //     }
    //     if (askEvents[i].eventType === 'Ask_v1_AskFilled') {
    //       completeEvent = askEvents[i];
    //       status = 'complete';
    //       break;
    //     }
    //   }
    // }

    return {
      eventType: EventType.TokenMarketEvent,
      at: {
        blockNumber: askEvent.blockNumber,
        timestamp: askEvent.blockTimestamp,
        transactionHash: askEvent.transactionHash,
      },
      market: {
        status,
        amount: {
          amount: askEvent.details?.askPrice,
          prettyAmount: priceToPretty(askEvent.details?.askPrice, null),
          currency: askEvent.details?.askCurrency,
          name: askEvent.details?.askCurrency === ZERO_ADDRESS ? 'Ether' : 'UNKN',
          symbol: askEvent.details?.askCurrency === ZERO_ADDRESS ? 'ETH' : 'UNKN',
          decimals: undefined,
          // other info not provided
          // currency.decimals / currency.name / currency.symbol
        },
        side: 'ask',
        type: MARKET_TYPES.FIXED_PRICE,
        cancelledAt:
          status === 'cancelled'
            ? {
                timestamp: dateToUnix(askEvent.blockTimestamp)!,
                blockNumber: askEvent.blockNumber,
                transactionHash: askEvent.transactionHash,
              }
            : undefined,
        createdAt: {
          timestamp: dateToUnix(askEvent.blockTimestamp)!,
          blockNumber: askEvent.blockNumber,
          transactionHash: askEvent.transactionHash,
        },
        createdBy:
          status !== 'complete' ? askEvent.details?.seller : askEvent.details?.buyer,
        finishedAt:
          status === 'complete'
            ? {
                timestamp: dateToUnix(askEvent.blockTimestamp)!,
                blockNumber: askEvent.blockNumber,
                transactionHash: askEvent.transactionHash,
              }
            : undefined,
        source: 'ZoraAskV1Event',
        raw: askEvent,
      },
    };
  });
}

function extractAuction(auction: IndexerAuctionPartFragment) {
  const getStatus = () => {
    if (!auction.approved || (auction.approved && !auction.firstBidTime)) {
      return 'pending';
    }
    if (auction.canceledEvent) {
      return 'cancelled';
    }
    if (auction.endedEvent) {
      return 'complete';
    }
    if (auction.expiresAt && timeIsPast(auction.expiresAt)) {
      return 'complete';
    }
    if (auction.firstBidTime) {
      return 'active';
    }
    return 'unknown';
  };

  const addCurrencyInfo = (amount: string) => {
    const currency = auction.currency!;
    return {
      currency: currency.address,
      name: currency.name,
      symbol: currency.symbol,
      decimals: currency.decimals,
      amount,
      prettyAmount: priceToPretty(amount, currency.decimals || 18),
    };
  };

  const getAmount = () => {
    if (auction.lastBidAmount) {
      return addCurrencyInfo(auction.lastBidAmount);
    }
    return addCurrencyInfo(auction.reservePrice!);
  };

  const formatBid = (bid: AuctionBidEventPartFragment): AuctionBidEvent => ({
    creator: bid.sender,
    amount: addCurrencyInfo(bid.value),
    created: {
      timestamp: dateToUnix(bid.blockTimestamp)!,
      blockNumber: bid.blockNumber,
      transactionHash: bid.transactionHash,
    },
  });

  const highestBid = getLast(auction.bidEvents);

  const resultAuction: AuctionLike = {
    status: getStatus(),
    amount: getAmount(),
    raw: auction,
    createdAt: {
      timestamp: dateToUnix(auction.createdEvent!.blockTimestamp)!,
      blockNumber: auction.createdEvent!.blockNumber,
      transactionHash: auction.createdEvent!.transactionHash,
    },
    createdBy: auction.tokenOwner || undefined,
    type: MARKET_TYPES.AUCTION,
    finishedAt: auction.endedEvent
      ? {
          timestamp: dateToUnix(auction.endedEvent.blockTimestamp)!,
          blockNumber: auction.endedEvent.blockNumber,
          transactionHash: auction.endedEvent.transactionHash,
        }
      : undefined,
    startedAt: auction.firstBidTime
      ? {
          timestamp: dateToUnix(auction.firstBidTime)!,
          blockNumber: null,
          transactionHash: null,
        }
      : undefined,
    cancelledAt: auction.canceledEvent
      ? {
          timestamp: dateToUnix(auction.canceledEvent.blockTimestamp)!,
          blockNumber: auction.canceledEvent.blockNumber,
          transactionHash: auction.canceledEvent.transactionHash,
        }
      : undefined,
    endsAt: {
      timestamp: dateToUnix(auction.expiresAt)!,
      blockNumber: auction.endedEvent?.blockNumber ?? null,
      transactionHash: auction.endedEvent?.transactionHash ?? null,
    },
    winner: highestBid?.sender,
    duration: auction.duration ? parseInt(auction.duration) : 0,
    currentBid: highestBid ? formatBid(highestBid) : undefined,
    source: 'ZoraReserveV0',
    bids: [...auction.bidEvents.map((bid) => formatBid(bid))],
  };
  return resultAuction;
}

function getTransferType(transferEvent: TokenTransferEventInfoFragment): TokenTransferEventType {
  if (transferEvent.from === ZERO_ADDRESS) {
    return 'mint';
  }
  if (transferEvent.to === ZERO_ADDRESS) {
    return 'burn';
  }
  return 'transfer';
}

function extractTransferEvents(transferEvents: TokenTransferEventInfoFragment[]): TokenTransferEvent[] {
  return transferEvents.map((transferEvent) => ({
    eventType: EventType.TokenTransferEvent,
    from: transferEvent.from,
    to: transferEvent.to,
    at: {
      timestamp: dateToUnix(transferEvent.blockTimestamp)!,
      blockNumber: transferEvent.blockNumber,
      transactionHash: transferEvent.transactionHash,
    },
    type: getTransferType(transferEvent),
  }));
}

function extractMarketData(response: IndexerTokenWithAuctionFragment, _: NFTObject) {
  return [
    ...response.auctions.map((auction) => extractAuction(auction)),
    ...(response.v3Ask ? [extractAsk(response.v3Ask)] : []),
  ];
}

export class ZoraIndexerV1DataSource implements ZoraIndexerV1Interface {
  nftGraphDataLoader: DataLoader<string, IndexerTokenWithAuctionFragment>;
  networkId: NetworkIDs;
  timeout: number;
  endpoint: string;
  mediaContractAddress: string;

  constructor(
    networkId: NetworkIDs,
    timeout: number = 5,
    mediaContractAddress: string = ZORA_MEDIA_CONTRACT_BY_NETWORK[networkId],
    endpoint: string = ZORA_INDEXER_URL_BY_NETWORK[networkId]
  ) {
    this.nftGraphDataLoader = new DataLoader(this.fetchNFTs);
    this.timeout = timeout;
    this.endpoint = endpoint;
    this.networkId = networkId;
    this.mediaContractAddress = mediaContractAddress;
  }

  canLoadNFT() {
    return true;
  }

  transformNFT(asset: IndexerTokenWithAuctionFragment, object: NFTObject) {
    object.nft = {
      tokenId: asset.tokenId,
      contract: {
        address: asset.tokenContract?.address!,
        name: asset.tokenContract?.name!,
        symbol: asset.tokenContract?.symbol!,
        description: null,
      },
      minted: {
        at: {
          blockNumber: asset.mintTransferEvent?.blockNumber || null,
          // TODO(iain): fix normalization to handle missing date information
          timestamp: asset.mintTransferEvent
            ? dateToUnix(asset.mintTransferEvent?.blockTimestamp)!
            : 0,
          transactionHash: asset.mintTransferEvent?.transactionHash || null,
        },
        minter: asset.minter || undefined,
      },
      owner: asset.owner,
      metadataURI: asset.media ? asset.media.metadataURI! : asset.tokenURI!,
      contentURI: asset.media?.contentURI!,
    };
    const metadata_json = asset.metadata?.json || {};
    object.metadata = {
      name: metadata_json.name,
      description: metadata_json.description,
      animation_url: metadata_json.animation_url,
      image: metadata_json.image,
      attributes: getAttributes(metadata_json),
      raw: asset.metadata?.json,
    };
    if (!object.rawData) {
      object.rawData = {};
    }
    object.markets = extractMarketData(asset, object);
    object.events = [];
    // extract auction events?
    if ('v3Events' in asset) {
      const assetFull: IndexerTokenWithAuctionDetailFragment = asset;
      object.events = [...extractAskEvents(assetFull.v3Events), ...extractTransferEvents(assetFull.transferEvents)];
    }
    if (!object.rawData) {
      object.rawData = {};
    }
    object.rawData['zora-indexer'] = asset;
    return object;
  }

  loadNFT = async (tokenContract: string, tokenId: string) => {
    return await this.nftGraphDataLoader.load(`${tokenContract}-${tokenId}`);
  };
  loadNFTs = async (tokenContractAndId: readonly string[]) => {
    return await this.nftGraphDataLoader.loadMany(tokenContractAndId);
  };

  fetchNFTs = async (mediaIds: readonly string[]) => {
    const response = (await this.getClient().request(INDEXER_BY_IDS_QUERY, {
      ids: mediaIds,
    })) as ByIdsQuery;
    return mediaIds.map(
      (key) =>
        response.Token.find((media) => media.id === key) || new Error('Missing record')
    );
  };

  fetchNFTSForQuery = async (
    collectionAddresses: string[],
    curatorAddress: string,
    approved = null,
    onlyAuctions = false,
    limit = 200,
    offset = 0
  ) => {
    if (!collectionAddresses?.length && !curatorAddress) {
      throw new ArgumentsError('Needs to have at least one curator or collector');
    }
    if (!onlyAuctions && approved !== null) {
      throw new ArgumentsError(
        'approved=true or approved=false and onlyAuctions=false cannot be set at the same time for fetchZoraIndexerGroupData'
      );
    }
    let queryStatement: Token_Bool_Exp[] = [];
    if (collectionAddresses) {
      const addresses = collectionAddresses.map((address) => getAddress(address));
      queryStatement.push({ address: { _in: addresses } });
    }
    let approvedStatement = undefined;
    if (approved !== null) {
      approvedStatement = { approved: { _eq: approved } };
    }
    if (curatorAddress) {
      queryStatement.push({
        auctions: { curator: { _eq: curatorAddress }, ...approvedStatement },
      });
    } else if (approvedStatement || onlyAuctions) {
      let auctionsQueryStmt = {};
      if (onlyAuctions) {
        auctionsQueryStmt = { _not: {} };
      }
      queryStatement.push({ auctions: { ...auctionsQueryStmt, ...approvedStatement } });
    }

    const nfts = (
      await this.getClient().request(ACTIVE_AUCTIONS_QUERY, {
        andQuery: queryStatement,
        offset,
        limit,
      })
    ).Token as IndexerTokenWithAuctionFragment[];
    return nfts.map((result) =>
      this.transformNFT(result, {
        rawData: {},
      })
    );
  };

  /**
   * Un-batched fetch function to fetch a group of NFT data from the zora indexer
   *
   * @param collectionAddresses list of addresses for collection
   * @param userAddress address of user
   * @param type type of ids: creator, id (of media), owner
   * @returns
   */
  async fetchZoraIndexerUserOwnedNFTs({
    collectionAddresses,
    userAddress,
    offset = 0,
    limit = 250,
  }: {
    collectionAddresses?: string[];
    userAddress: string;
    offset?: number;
    limit?: number;
  }) {
    const fetchWithTimeout = new FetchWithTimeout(this.timeout);
    const client = new GraphQLClient(ZORA_INDEXER_URL_BY_NETWORK[this.networkId], {
      fetch: fetchWithTimeout.fetch,
    });

    let addressQueryPart = {} as String_Comparison_Exp;
    if (collectionAddresses?.length) {
      addressQueryPart['_in'] = collectionAddresses.map(getAddress);
    }

    const response = await client.request(BY_OWNER, {
      addressQueryPart,
      owner: getAddress(userAddress),
      offset,
      limit,
    });
    const tokens = response.Token as IndexerTokenWithAuctionFragment[];
    return tokens.map((token) => this.transformNFT(token, { rawData: {} }));
  }

  /**
   * Un-batched fetch function to fetch a group of NFT data from the zora indexer
   *
   * @param collectionAddresses list of addresses for collection
   * @param userAddress address of user
   * @param type type of ids: creator, id (of media), owner
   * @returns
   */
  fetchUserOwnedNFTs = async ({
    collectionAddresses,
    userAddress,
    offset = 0,
    limit = 250,
  }: {
    collectionAddresses?: string[];
    userAddress: string;
    offset?: number;
    limit?: number;
  }) => {
    let addressQueryPart = {} as String_Comparison_Exp;
    if (collectionAddresses?.length) {
      addressQueryPart['_in'] = collectionAddresses.map(getAddress);
    }

    const response = await this.getClient().request(BY_OWNER, {
      addressQueryPart,
      owner: getAddress(userAddress),
      offset,
      limit,
    });
    const tokens = response.Token as IndexerTokenWithAuctionFragment[];
    return tokens.map((result) =>
      this.transformNFT(result, {
        rawData: {},
      })
    );
  };

  getClient() {
    const fetchWithTimeout = new FetchWithTimeout(this.timeout);
    return new GraphQLClient(this.endpoint, {
      fetch: fetchWithTimeout.fetch,
    });
  }
}
