import Big from 'big.js';
import { Maybe } from 'graphql/jsutils/Maybe';

import type {
  AskPriceFragment,
  BidDataPartialFragment,
  Currency,
  CurrencyShortFragment,
  GetMediaAndAuctionsQuery,
  ReserveAuctionPartialFragment,
} from '../graph-queries/zora-types';
import type { GetTokenPricesQuery } from '../graph-queries/uniswap-types';
import { ChainCurrencyType, KNOWN_CONTRACTS } from './FetchResultTypes';
import { RequestError } from './RequestError';
import {
  AuctionType,
  BidPricingInfo,
  CurrencyLookupType,
  ZNFTMediaDataType,
  PricingInfoData,
} from './AuctionInfoTypes';
import { AuctionStateInfo, getAuctionState } from './AuctionState';
import { ZORA_MEDIA_CONTRACT_BY_NETWORK } from '../constants/addresses';
import { NetworkIDs } from '../constants/networks';

const NULL_ETH_CURRENCY_ID = '0x0000000000000000000000000000000000000000';

export function transformCurrencyEth(currency: CurrencyShortFragment) {
  let updatedCurrency = { ...currency };
  if (currency.id === NULL_ETH_CURRENCY_ID) {
    updatedCurrency.decimals = 18;
    updatedCurrency.name = 'Ethereum';
    updatedCurrency.symbol = 'ETH';
  }
  if (!updatedCurrency.decimals) {
    // Assume default 18 decimals
    updatedCurrency.decimals = 18;
  }
  return updatedCurrency;
}

export function transformMediaForKey(
  result: GetMediaAndAuctionsQuery,
  key: string,
  networkId: NetworkIDs
): ZNFTMediaDataType {
  const media = result.medias.find((media) => media.id === key);
  if (!media) {
    throw new RequestError('No media in response');
  }
  const { reserveAuctions, currentBids, currentAsk, ...nft } = media;

  // Since auctions are sorted by last created, the first auction will be the active auction
  // If the auction is not active it still will be created but will not be added to the current
  // auction information.
  let auctionData =
    reserveAuctions && reserveAuctions.length > 0 ? reserveAuctions[0] : undefined;
  return {
    nft: {
      tokenId: nft.id,
      contract: {
        address: ZORA_MEDIA_CONTRACT_BY_NETWORK[networkId],
        knownContract: KNOWN_CONTRACTS.ZORA,
      },
      owner: nft.owner.id,
      creator: nft.creator.id,
      metadataURI: nft.metadataURI,
    },
    zoraNFT: {
      metadataHash: nft.metadataHash,
      contentURI: nft.contentURI,
      contentHash: nft.contentHash,
      creatorBidShare: nft.creatorBidShare,
      createdAtTimestamp: nft.createdAtTimestamp,
      creatorBidSharePercentage: new Big(nft.creatorBidShare)
        .div(new Big(10).pow(18))
        .toNumber(),
    },
    pricing: {
      perpetual: {
        bids: currentBids || [],
        ask: currentAsk || null,
      },
      reserve: auctionDataToPricing(auctionData),
    },
  };
}

export function auctionDataToPricing(
  auctionData: ReserveAuctionPartialFragment | undefined
) {
  if (!auctionData) {
    return null;
  }
  return {
    ...auctionData,
    auctionCurrency: transformCurrencyEth(auctionData.auctionCurrency),
  };
}

export function transformCurrencyForKey(
  result: GetTokenPricesQuery,
  key: string
): ChainCurrencyType {
  const currency = result.tokens.find((token) => token.id === key);
  // Special case ETH
  if (key === NULL_ETH_CURRENCY_ID) {
    return {
      ethToUsd: result.bundle?.ethPrice,
      token: {
        symbol: 'ETH',
        name: 'Ethereum',
        id: NULL_ETH_CURRENCY_ID,
        decimals: 18,
        derivedETH: 1,
      },
    };
  }
  if (!currency) {
    throw new RequestError('No currency in response');
  }
  return {
    ethToUsd: result.bundle?.ethPrice,
    token: currency,
  };
}

const setCurrencyDecimal = (amount: string, decimals: Maybe<number>) => {
  return new Big(amount)
    .div(new Big(10).pow(parseInt(decimals as any, 10) || 18))
    .toString();
};

export function addAuctionInformation(
  pricing: ZNFTMediaDataType['pricing'],
  currencyInfos: CurrencyLookupType = {}
) {
  const getCurrencyComputedValue = (currencyId: string, bidAmount: string) => {
    const currencyInfo = currencyInfos[currencyId];
    if (!currencyInfo) {
      return;
    }
    const inETH = new Big(currencyInfo.token.derivedETH)
      .mul(
        new Big(bidAmount).div(new Big(10).pow(parseInt(currencyInfo.token.decimals, 10)))
      )
      .toString();
    return {
      inETH,
      inUSD: new Big(inETH).mul(currencyInfo.ethToUsd).toString(),
    };
  };

  const handlePerpetualBid = (bidRaw: BidDataPartialFragment) => {
    const { amount, currency, ...bid } = bidRaw;
    return {
      ...bid,
      pricing: {
        currency,
        amount,
        prettyAmount: setCurrencyDecimal(amount, currency.decimals),
        computedValue: getCurrencyComputedValue(currency.id, amount),
      },
    };
  };

  const getBidPricing = (amount: string): BidPricingInfo => {
    const currency = pricing.reserve?.auctionCurrency as Currency;
    return {
      pricing: {
        currency,
        amount,
        prettyAmount: setCurrencyDecimal(amount, currency?.decimals),
        computedValue: currency
          ? getCurrencyComputedValue(currency.id, amount)
          : undefined,
      },
    };
  };

  const transformAskCurrency = (ask: AskPriceFragment) => {
    const { amount, currency, createdAtTimestamp, id } = ask;
    return {
      createdAtTimestamp,
      id,
      pricing: {
        currency,
        amount,
        prettyAmount: setCurrencyDecimal(amount, currency.decimals),
        computedValue: getCurrencyComputedValue(currency.id, amount),
      },
    };
  };

  const getHighestReserveBid = () => {
    if (pricing.reserve?.currentBid) {
      const { auctionCurrency, currentBid } = pricing.reserve;
      const computedValue = getCurrencyComputedValue(
        auctionCurrency.id,
        currentBid.amount
      );
      return {
        pricing: {
          amount: currentBid.amount,
          prettyAmount: setCurrencyDecimal(currentBid.amount, auctionCurrency.decimals),
          currency: transformCurrencyEth(auctionCurrency),
          computedValue,
        },
        placedBy: currentBid.bidder.id,
        placedAt: currentBid.createdAtTimestamp,
      };
    }
    return;
  };

  const getHighestPerpetualBid = () => {
    const sortedBids = pricing.perpetual?.bids
      ?.map((bid) => ({
        bid,
        computedValue: getCurrencyComputedValue(bid.currency.id, bid.amount),
      }))
      .sort((a, b) => {
        if (a.computedValue && b.computedValue) {
          return new Big(a.computedValue.inETH).sub(b.computedValue.inETH) ? -1 : 1;
        }
        return new Date(a.bid.createdAtTimestamp).getTime() >
          new Date(b.bid.createdAtTimestamp).getTime()
          ? -1
          : 1;
      });
    if (!sortedBids || !sortedBids.length) {
      return;
    }
    return {
      pricing: {
        computedValue: sortedBids[0].computedValue,
        amount: sortedBids[0].bid.amount,
        prettyAmount: setCurrencyDecimal(
          sortedBids[0].bid.amount,
          sortedBids[0].bid.currency.decimals
        ),
        currency: transformCurrencyEth(sortedBids[0].bid.currency),
      },
      placedBy: sortedBids[0].bid.bidder.id,
      placedAt: sortedBids[0].bid.createdAtTimestamp,
    };
  };
  const nftPricingInformation: PricingInfoData = {
    reserve: pricing.reserve
      ? {
          ...pricing.reserve,
          currentBid: (() => {
            if (!pricing.reserve.currentBid) {
              return undefined;
            }
            const { amount, ...bidRaw } = pricing.reserve?.currentBid;
            return {
              ...bidRaw,
              ...getBidPricing(amount),
            };
          })(),
          current: {
            highestBid: getHighestReserveBid(),
            likelyHasEnded:
              parseInt(pricing.reserve?.expectedEndTimestamp, 10) <
              new Date().getTime() / 1000,
            reserveMet:
              pricing.reserve?.firstBidTime && pricing.reserve.firstBidTime !== '0',
          },
          reservePrice: {
            currency: transformCurrencyEth({
              id: pricing.reserve.auctionCurrency.id,
              name: pricing.reserve.auctionCurrency.name,
              symbol: pricing.reserve.auctionCurrency.symbol,
              decimals: pricing.reserve.auctionCurrency.decimals,
            }),
            amount: pricing.reserve.reservePrice,
            prettyAmount: setCurrencyDecimal(
              pricing.reserve.reservePrice,
              pricing.reserve.auctionCurrency.decimals
            ),
            computedValue: getCurrencyComputedValue(
              pricing.reserve.auctionCurrency.id,
              pricing.reserve.reservePrice
            ),
          },
          previousBids:
            pricing.reserve?.previousBids
              ?.map(({ amount, ...previousBid }) => ({
                ...previousBid,
                ...getBidPricing(amount),
              }))
              .sort((bidA, bidB) =>
                bidA.bidInactivatedAtBlockNumber > bidB.bidInactivatedAtBlockNumber
                  ? -1
                  : 1
              ) || [],
        }
      : undefined,
    perpetual: {
      ask: pricing.perpetual?.ask
        ? transformAskCurrency(pricing.perpetual.ask)
        : undefined,
      bids: pricing.perpetual?.bids.map((bid) => handlePerpetualBid(bid)) || [],
      highestBid: getHighestPerpetualBid(),
    },
    auctionType:
      pricing.reserve?.status === 'Active'
        ? AuctionType.RESERVE
        : pricing.perpetual
        ? AuctionType.PERPETUAL
        : AuctionType.NONE,
    status: AuctionStateInfo.LOADING,
  };
  nftPricingInformation.status = getAuctionState(nftPricingInformation);
  return nftPricingInformation;
}
