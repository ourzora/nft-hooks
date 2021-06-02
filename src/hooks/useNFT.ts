import { useContext } from 'react';
import useSWR from 'swr';

import { NFTFetchContext } from '../context/NFTFetchContext';
import {
  addAuctionInformation,
  auctionDataToPricing,
} from '../fetcher/TransformFetchResults';
import { OpenseaNFTDataType } from '../fetcher/AuctionInfoTypes';
import { OpenseaResponse } from 'src/fetcher/OpenseaUtils';

// TODO: iain move to common folder
export type useNFTType = {
  currencyLoaded: boolean;
  error?: string;
  data?: OpenseaNFTDataType;
};

type OptionsType = {
  refreshInterval?: number;
  initialData?: any;
  loadCurrencyInfo?: boolean;
};

/**
 * Fetches on-chain NFT data and pricing for the given zNFT id
 *
 * @param contractAddress address of the contract
 * @param tokenId id of NFT to fetch blockchain information for
 * @param options SWR flags and an option to load currency info
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
export function useNFT(
  contractAddress?: string,
  tokenId?: string,
  options: OptionsType = {}
): useNFTType {
  const fetcher = useContext(NFTFetchContext);
  const { loadCurrencyInfo = false, refreshInterval, initialData } = options || {};

  const nftData = useSWR<OpenseaResponse>(
    contractAddress && tokenId ? ['loadGenericNFT', contractAddress, tokenId] : null,
    (_, contractAddress, tokenId) => fetcher.loadNFTData(contractAddress, tokenId),
    { dedupingInterval: 0, initialData }
  );
  const auctionData = useSWR(
    contractAddress && tokenId ? ['loadAuctionForNFT', contractAddress, tokenId] : null,
    (_, contractAddress, tokenId) => fetcher.loadAuctionInfo(contractAddress, tokenId)
  );

  const nftResponseData = nftData.data as any;
  const currencyData = useSWR(
    nftResponseData && loadCurrencyInfo
      ? ['loadCurrencies', auctionData.data?.auctionCurrency]
      : null,
    (_, ...currencies) => fetcher.loadCurrencies(currencies),
    {
      refreshInterval,
      dedupingInterval: 0,
    }
  );

  let data: OpenseaNFTDataType | undefined = undefined;
  if (nftData.data !== undefined) {
    data = {
      nft: {
        tokenId: nftData.data.token_id,
        contract: {
          address: nftData.data.asset_contract.address,
        },
        owner: nftData.data.owner.address,
        creator: nftData.data.creator.address,
        metadataURI: nftData.data.token_metadata,
      },
      openseaInfo: nftData.data,
      pricing: addAuctionInformation(
        {
          reserve: auctionDataToPricing(auctionData.data),
        },
        currencyData.data
      ),
    };
  }

  return {
    currencyLoaded: !!currencyData.data,
    error: nftData.error,
    data,
  };
}
