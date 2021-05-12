import Big from 'big.js';
import { Maybe } from 'graphql/jsutils/Maybe';

import type {
  AskPriceFragment,
  BidDataPartialFragment,
  Currency,
  CurrencyShortFragment,
  GetMediaAndAuctionsQuery,
  PreviousReserveBidFragment,
} from '../graph-queries/zora-types';
import type { GetTokenPricesQuery } from '../graph-queries/uniswap-types';
import { ChainCurrencyType, NFTDataType, NFTMediaDataType } from './FetchResultTypes';
import { RequestError } from './RequestError';
import { CurrencyLookupType, PastReserveBid } from './AuctionInfoTypes';

function transformCurrencyEth(currency: CurrencyShortFragment) {
  let updatedCurrency = { ...currency };
  if (currency.id === '0x0000000000000000000000000000000000000000') {
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

export function transformMediaForKey(result: GetMediaAndAuctionsQuery, key: string) {
  const media = result.medias.find((media) => media.id === key);
  if (!media) {
    throw new RequestError('No media in response');
  }
  const { currentBids, currentAsk, ...nft } = media;

  // Since auctions are sorted by last created, the first auction will be the active auction
  // If the auction is not active it still will be created but will not be added to the current
  // auction information.
  let auctionData = result.reserveAuctions.find((auction) => auction.tokenId === key);
  return {
    nft,
    pricing: {
      perpetual: {
        bids: currentBids || [],
        ask: currentAsk,
      },
      reserve: auctionData
        ? {
            ...auctionData,
            auctionCurrency: transformCurrencyEth(auctionData.auctionCurrency),
          }
        : undefined,
    },
  };
}

export function transformCurrencyForKey(
  result: GetTokenPricesQuery,
  key: string
): ChainCurrencyType {
  const currency = result.tokens.find((token) => token.id === key);
  if (!currency) {
    throw new RequestError('No currency in response');
  }
  return {
    ethToUsd: result.bundle?.ethPrice,
    token: currency,
  };
}

const setCurrencyDecimal = (amount: string, decimals: Maybe<number>) => {
  return new Big(amount).div(new Big(10).pow(decimals || 18)).toString();
};

export function addAuctionInformation(
  chainNFT: NFTMediaDataType,
  currencyInfos: CurrencyLookupType = {}
): NFTDataType {
  const hasActiveReserveAuction = chainNFT.pricing.reserve?.status === 'Active';
  const getCurrencyComputedValue = (currencyId: string, bidAmount: string) => {
    const currencyInfo = currencyInfos[currencyId];
    if (!currencyInfo) {
      return;
    }
    const inETH = new Big(currencyInfo.token.derivedETH).mul(bidAmount).toString();
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

  const handleReserveBid = ({
    amount,
    ...bidRaw
  }: PreviousReserveBidFragment): PastReserveBid => {
    const currency = chainNFT.pricing.reserve?.auctionCurrency as Currency;
    return {
      ...bidRaw,
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

  const getReservePrice = () => {
    if (hasActiveReserveAuction) {
      const { ask } = chainNFT.pricing.perpetual;
      if (ask) {
        return {
          currency: {
            id: ask.currency.id,
            name: ask.currency.name,
            symbol: ask.currency.symbol,
            decimals: ask.currency.decimals,
          },
          amount: ask.amount,
          prettyAmount: setCurrencyDecimal(ask.amount, ask.currency.decimals),
          computedValue: getCurrencyComputedValue(ask.currency.id, ask.amount),
        };
      }
    }
    const reserve = chainNFT.pricing.reserve;
    if (!reserve || !reserve.reservePrice) {
      return;
    }
    return {
      currency: transformCurrencyEth({
        id: reserve.auctionCurrency.id,
        name: reserve.auctionCurrency.name,
        symbol: reserve.auctionCurrency.symbol,
        decimals: reserve.auctionCurrency.decimals,
      }),
      amount: reserve.reservePrice,
      prettyAmount: setCurrencyDecimal(
        reserve.reservePrice,
        reserve.auctionCurrency.decimals
      ),
      computedValue: getCurrencyComputedValue(
        reserve.auctionCurrency.id,
        reserve.reservePrice
      ),
    };
  };

  const getHighestBid = () => {
    if (!hasActiveReserveAuction) {
      const sortedBids = chainNFT.pricing.perpetual?.bids
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
    }
    if (chainNFT.pricing.reserve?.currentBid) {
      const { auctionCurrency, currentBid } = chainNFT.pricing.reserve;
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
  const highestBid = getHighestBid();
  const likelyHasEnded =
    chainNFT.pricing.reserve?.expectedEndTimestamp > new Date().getTime() / 1000;
  const { pricing, nft } = chainNFT;
  return {
    pricing: {
      reserve: pricing.reserve
        ? {
            ...pricing.reserve,
            previousBids:
              pricing.reserve?.previousBids?.map((previousBid) =>
                handleReserveBid(previousBid)
              ) || [],
          }
        : undefined,
      perpetual: {
        ask: pricing.perpetual.ask
          ? transformAskCurrency(pricing.perpetual.ask)
          : undefined,
        bids: pricing.perpetual.bids.map((bid) => handlePerpetualBid(bid)),
      },
    },
    nft,
    auction: {
      highestBid,
      // Only really useful for a reserve auction, reserveMet could be used to show first
      current: {
        auctionType: hasActiveReserveAuction ? 'reserve' : 'perpetual',
        reservePrice: getReservePrice(),
        likelyHasEnded,
        reserveMet: hasActiveReserveAuction
          ? !chainNFT.pricing.reserve?.firstBidTime
          : false,
        endingAt: hasActiveReserveAuction
          ? chainNFT.pricing.reserve?.expectedEndTimestamp
          : undefined,
      },
    },
  };
}
