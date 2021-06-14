import { NFTDataType } from "./AuctionInfoTypes";

export function getCurrenciesInUse(nftPricing: NFTDataType['pricing']): string[] {
  const hasReserve = nftPricing.reserve;
  if (hasReserve) {
    const auctionCurrencyId = nftPricing.reserve?.auctionCurrency.id;
    if (auctionCurrencyId) {
      return [auctionCurrencyId];
    }
  }
  const bids = nftPricing.perpetual?.bids?.map((bid) => bid.pricing.currency.id) || [];
  const ask = nftPricing.perpetual.ask?.pricing.currency.id;
  if (ask) {
    return [...bids, ask];
  }
  return bids;
}
