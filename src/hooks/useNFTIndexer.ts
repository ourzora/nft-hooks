import { useContext } from 'react';

import { NFTFetchContext } from '../context/NFTFetchContext';
import { IndexerDataType, NFTDataType } from '../fetcher/AuctionInfoTypes';
import useSWR from 'swr';
import { transformNFTIndexerResponse } from '../fetcher/ZoraIndexerTransformers';

export type useNFTType = {
  currencyLoaded: boolean;
  error?: string;
  data?: NFTDataType;
};

type OptionsType = {
  refreshInterval?: number;
  initialData?: any;
  loadCurrencyInfo?: boolean;
};

/**
 * Fetches on-chain NFT data and pricing for the given zNFT id
 *
 * @param contractAddress address of the contract, if null and tokenID is passed in, a ZNFT is assumed
 * @param tokenId id of NFT to fetch blockchain information for
 * @param options SWR flags and an option to load currency info
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
export function useNFTIndexer(
  contractAddress?: string,
  tokenId?: string,
  options: OptionsType = {}
): useNFTType {
  const fetcher = useContext(NFTFetchContext);
  const { refreshInterval, initialData } = options || {};

  const nftData = useSWR(
    contractAddress && tokenId ? ['loadIndexerNFT', contractAddress, tokenId] : null,
    (_, contractAddress, tokenId) =>
      fetcher.loadZoraNFTIndexerNFTUntransformed(contractAddress, tokenId),
    { dedupingInterval: 0 }
  );
  const auctionData = useSWR(
    contractAddress && tokenId ? ['loadAuctionForNFT', contractAddress, tokenId] : null,
    (_, contractAddress, tokenId) => fetcher.loadAuctionInfo(contractAddress, tokenId),
    { refreshInterval }
  );

  // const currencyData = useSWR(
  //   nftResponseData && loadCurrencyInfo
  //     ? ['loadCurrencies', auctionData.data?.auctionCurrency]
  //     : null,
  //   (_, ...currencies) => fetcher.loadCurrencies(currencies),
  //   {
  //     refreshInterval,
  //     dedupingInterval: 0,
  //   }
  // );

  let data: IndexerDataType | undefined = undefined;
  if (nftData.data !== undefined) {
    data = transformNFTIndexerResponse(nftData.data, auctionData.data);
  } else {
    data = initialData;
  }

  return {
    currencyLoaded: false, //!!currencyData.data,
    error: nftData.error,
    data,
  };
}
