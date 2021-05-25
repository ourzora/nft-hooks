import { NFTDataType } from "./AuctionInfoTypes";

export function getCurrenciesInUse(nftData: NFTDataType): string[] {
  const hasActiveReserveAuction = nftData.pricing.reserve?.status === 'Active';
  if (hasActiveReserveAuction) {
    const auctionCurrencyId = nftData.pricing.reserve?.auctionCurrency.id;
    if (auctionCurrencyId) {
      return [auctionCurrencyId];
    }
  }
  if (!hasActiveReserveAuction) {
    const bids = nftData.pricing.perpetual?.bids?.map((bid) => bid.pricing.currency.id) || [];
    const ask = nftData.pricing.perpetual.ask?.pricing.currency.id;
    if (ask) {
      return [...bids, ask];
    }
    return bids;
  }
  return [];
}
