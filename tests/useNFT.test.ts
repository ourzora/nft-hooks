import { renderHook } from "@testing-library/react-hooks";
import { IMockStore } from "@graphql-tools/mock";

import { mockGraphQLQuery } from "./setupZoraGQLMock";

import fetchMock from "./setupFetchMock";

import { defaultFetchAgent } from "../src/context/NFTFetchContext";
import { useNFT } from "../src";

describe("useNFT", () => {
  beforeEach(() => {
    fetchMock.reset();
    defaultFetchAgent.clearCache();
  });
  const MEDIA_MOCK = {
    id: "2974",
    contentURI: "https://zora.co/content",
    metadataURI: "https://zora.co/content",
    currentBids: [
      {
        amount: "10000",
        bidder: { id: 10 },
      },
    ],
  };

  it("loads an nft currently in an auction", async () => {
    const mockOverrides = {
      Media: () => MEDIA_MOCK,
      ReserveAuction: () => ({
        tokenId: "2974",
        status: "Active",
        reservePrice: "1000000",
      }),
    };

    mockGraphQLQuery(
      "https://api.thegraph.com/subgraphs/name/ourzora/zora-v1",
      mockOverrides
    );

    const { waitFor, result } = renderHook(() => useNFT("2974"));

    await waitFor(() => result.current.loading === false);

    expect(result.current.error).toBeUndefined();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toMatchSnapshot();
  });

  it("correctly loads auction information from uniswap", async () => {
    const mockZoraOverrides = {
      Media: () => MEDIA_MOCK,
      ReserveAuction: () => ({
        tokenId: "2974",
        status: "Active",
        reservePrice: "1000000",
      }),
    };
    const mockUniswapOverrides = {
      Token: () => ({
        id: "0xFACE",
        decimals: 18,
      }),
    };

    mockGraphQLQuery(
      "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
      mockUniswapOverrides,
      {},
      "Uniswap"
    );

    mockGraphQLQuery(
      "https://api.thegraph.com/subgraphs/name/ourzora/zora-v1",
      mockZoraOverrides,
      {},
      "Zora"
    );

    const { waitFor, result } = renderHook(() => useNFT("2974", true));

    await waitFor(() => result.current.loading === false);

    expect(result.current.error).toBeUndefined();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toMatchSnapshot();

    await waitFor(() => result.current.currencyLoaded === true);
    expect(result.current.error).toBeUndefined();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toMatchSnapshot();
  });

  it("loads an NFT not in an auction with bids", async () => {
    const mockOverrides = {
      Media: () => MEDIA_MOCK,
      // make an invalid reserve auction record to not be picked up by the fetch API
      ReserveAuction: () => ({ tokenId: "-1" }),
    };

    mockGraphQLQuery(
      "https://api.thegraph.com/subgraphs/name/ourzora/zora-v1",
      mockOverrides
    );

    const { waitFor, result } = renderHook(() => useNFT("2974"));

    await waitFor(() => result.current.loading === false);

    expect(result.current.error).toBeUndefined();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toMatchSnapshot();
  });

  it("shows an error when an NFT cannot be loaded", async () => {
    fetchMock.post(
      "https://api.thegraph.com/subgraphs/name/ourzora/zora-v1",
      "server failure",
      { response: { status: 500 } }
    );

    const { waitFor, result } = renderHook(() => useNFT("2974"));

    await waitFor(() => result.current.loading === false);

    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toEqual("RequestError: Request Status = 500");
    expect(result.current.loading).toBeFalsy();
  });

  it("loads an NFT with no bids and no auction", async () => {
    const mediaWithNoBids = { ...MEDIA_MOCK, currentBids: [] };
    const mockOverrides = {
      Media: () => mediaWithNoBids,
      // make an invalid reserve auction record to not be picked up by the fetch API
      ReserveAuction: () => ({ tokenId: "-1" }),
    };

    mockGraphQLQuery(
      "https://api.thegraph.com/subgraphs/name/ourzora/zora-v1",
      mockOverrides
    );

    const { waitFor, result } = renderHook(() => useNFT("2974"));

    await waitFor(() => result.current.loading === false);

    expect(result.current.error).toBeUndefined();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toMatchSnapshot();
  });

  it("correctly loads multiple perpetual bid NFTs", async () => {
    function useMultipleNFTHooks() {
      return [useNFT("1"), useNFT("2")];
    }

    mockGraphQLQuery(
      "https://api.thegraph.com/subgraphs/name/ourzora/zora-v1",
      {},
      (store: IMockStore) => {
        return {
          Query: {
            medias: () => {
              // Fix returning ID for each record with multiple records.
              return [store.get("Media", "1"), store.get("Media", "2")];
            },
          },
        };
      }
    );

    const { waitFor, result } = renderHook(() => useMultipleNFTHooks());

    await waitFor(() => result.current[0].loading === false);

    expect(result.current[0].error).toBeUndefined();
    expect(result.current[0].loading).toBeFalsy();
    expect(result.current[0].data).toMatchSnapshot();

    expect(result.current[1].error).toBeUndefined();
    expect(result.current[1].loading).toBeFalsy();
    expect(result.current[1].data).toMatchSnapshot();
  });
  it("caches multiple NFTs being loaded", async () => {
    function useMultipleNFTHooks() {
      return [useNFT("1"), useNFT("2")];
    }

    mockGraphQLQuery(
      "https://api.thegraph.com/subgraphs/name/ourzora/zora-v1",
      {},
      (store: IMockStore) => {
        return {
          Query: {
            medias: () => {
              // Fix returning ID for each record with multiple records.
              return [store.get("Media", "1"), store.get("Media", "2")];
            },
          },
        };
      }
    );

    const { waitFor, result } = renderHook(() => useMultipleNFTHooks());

    await waitFor(() => result.current[0].loading === false);

    expect(result.current[0].error).toBeUndefined();
    expect(result.current[0].loading).toBeFalsy();
    expect(result.current[0].data).toMatchSnapshot();

    expect(result.current[1].error).toBeUndefined();
    expect(result.current[1].loading).toBeFalsy();
    expect(result.current[1].data).toMatchSnapshot();

    const { waitFor: waitFor2, result: result2 } = renderHook(() =>
      useMultipleNFTHooks()
    );

    // If this attempts to make a new HTTP request,
    //  the request will fail since the mock only works once.
    await waitFor2(() => result2.current[0].loading === false);

    expect(result2.current[0].error).toBeUndefined();
    expect(result2.current[0].loading).toBeFalsy();
    expect(result2.current[0].data).toMatchSnapshot();

    expect(result2.current[1].error).toBeUndefined();
    expect(result2.current[1].loading).toBeFalsy();
    expect(result2.current[1].data).toMatchSnapshot();
  });
});
