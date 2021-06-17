import { useContext } from 'react';
import useSWR from 'swr';

import { NFTFetchContext } from '../context/NFTFetchContext';
import { addAuctionInformation } from '../fetcher/TransformFetchResults';
import { getCurrenciesInUse } from '../fetcher/ExtractResultData';
import { ZNFTDataType } from '../fetcher/AuctionInfoTypes';
import { FetchGroupTypes } from '../fetcher/FetchResultTypes';

export type useZNFTType = {
  currencyLoaded: boolean;
  error?: string;
  medias?: ZNFTDataType[];
};

type OptionsType = {
  refreshInterval?: number;
  initialData?: any;
  loadCurrencyInfo?: boolean;
};

/**
 * Fetches on-chain NFT data and pricing for the given zNFT id
 *
 * @param id id of zNFT to fetch blockchain information for
 * @param options SWR flags and an option to load currency info
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
export function useZNFTGroup(
  ids?: string[],
  type: FetchGroupTypes = 'creator',
  options: OptionsType = {}
): useZNFTType {
  const fetcher = useContext(NFTFetchContext);
  const { loadCurrencyInfo = false, refreshInterval, initialData } = options || {};

  const nftData = useSWR(
    ids ? ['fetchZNFTGroupData', type, ...ids] : null,
    (_, type, ...ids) => fetcher.fetchZNFTGroupData(ids, type),
    { refreshInterval, dedupingInterval: 0 }
  );
  const currencyData = useSWR(
    nftData.data && nftData.data.length > 0 && loadCurrencyInfo
      ? [
          'loadCurrencies',
          ...nftData.data
            .map((item) => getCurrenciesInUse(addAuctionInformation(item.pricing)))
            .reduce((last, item) => last.concat(item), []),
        ]
      : null,
    (_, ...currencies) => fetcher.loadCurrencies(currencies),
    {
      refreshInterval,
      dedupingInterval: 0,
    }
  );

  let medias;
  if (nftData.data !== undefined) {
    medias = nftData.data.map((media) => ({
      ...media,
      pricing: addAuctionInformation(media.pricing, currencyData.data),
    }));
  } else {
    medias = initialData;
  }

  return {
    currencyLoaded: !!currencyData.data,
    error: nftData.error,
    medias,
  };
}
