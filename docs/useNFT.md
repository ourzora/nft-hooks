This hook fetches data found on the blockchain from the given zNFT. The only argument for the hook is the NFT id. To fetch data for zNFTs on other networks, use the `NFTFetchConfiguration` wrapper component to set the correct network for loading the NFT data.
The main types are within the result `data.nft` object. This object contains the on-chain NFT data itself. The pricing information can be found in `data.pricing` which corresponds to data on-chain for Zora's perpetual zNFT auctions along with the reserve auction functionality.

```ts
import {useZNFT} from "@zoralabs/nft-hooks";

type NFTDataType = {
  nft: {
    id: string, // ID of zNFT
    contract: {
      address: string;
      knownIdentifier?: "ZORA",
    },
    owner: {id: string}, // Address of owner
    creator?: {id: string}, // Address of creator
    metadataURI: string, // URI of metadata for zNFT
  },

  // Set from zora data backend
  zoraNFT?: {
    metadataHash: string, // sha256 hash for metadata
    contentURI: string, // URI of content described by metadata
    contentHash: string, // sha256 hash of content
  },

  // Set from opensea data backend
  openseaInfo?: {
    token_id: string;
    description: string;
    name: string;
    image_url: string;
    image_thumbnail_url: string;
    image_original_url: string;
    animation_url: string;
    animation_original_url: string;
    external_link: string;
    token_metadata: string;
    asset_contract: {
      address: string;
      created_date: string;
      name: string;
      // should be ERC721
      schema_name: string;
    };
    owner: {
      address: string;
    };
    creator: {
      address: string;
    };
  };
  
  // Common for both types of NFTs.
  // Perpetual market only applies now to zNFTs.
  pricing: {
    perpetual: {
      bids: { // empty array if no bids
        id: string;
        createdAtTimestamp: string;
        bidder: { id: string };
        pricing: PricingInfo;
      }[],
      ask?: {
        id: string,
        createdAtTimestamp: string;
        pricing: PricingInfo;
      };
    },
    reserve?: {
      auctionCurrency: CurrencyInformation;
      id: string;
      endingAt?: string;
      likelyHasEnded: boolean; // If an auction ended but has not been finalized this will be true.
      reservePrice?: PricingInfo;
      tokenId: string;
      status: "Pending" | "Active" | "Canceled" | "Finished";
      firstBidTime: string;
      duration: string;
      expectedEndTimestamp: string;
      createdAtTimestamp: string;
      finalizedAtTimestamp: string;
      currentBid?: {
        createdAtTimestamp: string
        bidType: "Active" | "Refunded" | "Final";
        bidInactivatedAtTimestamp: string
        bidInactivatedAtBlockNumber: number
        pricing: PricingInfo,
      },
      previousBids: {
        createdAtTimestamp: string
        bidType: "Active" | "Refunded" | "Final";
        bidInactivatedAtTimestamp: string
        bidInactivatedAtBlockNumber: number
        pricing: PricingInfo,
      }[],
    },
    highestBid: {
      pricing: PricingInfo;
      placedBy: string;
      placedAt: string;
    };
    // Auction type is none if no perpetual market exists and
    auctionType: "reserve" | "perpetual" | "none";
  };
};

export type PricingInfo = {
  currency: CurrencyInformation;
  amount: string; // Amount as raw bignumber
  prettyAmount: string; // Amount as a normalized BigDecimal value
  computedValue?: PricingInfoValue; // Computed value in USD and ETH (available from Uniswap API call)
};

type CurrencyInformation = {
  id: string, // Blockchain address of currency. If ETH currency, will be 0x0000000000000000000000000000000000000000
  name: string, // Name of currency
  symbol: string, // Symbol of currency
  decimals: number, // Decimals for currency
};


type useZNFT = (id: string) => {
  currencyLoaded: boolean;
  error?: string; // undefined if no error, string if error
  data?: NFTDataType; // undefined in error or loading states
}

// Example with usage:
const {chainNFT, loading} = useZNFT("2");
```

Alternatively, the same information can be fetched using the base MediaFetchAgentfor server-side or non-react use:

```ts
import {MediaFetchAgent, Networks} from "@zoralabs/nft-hooks";

// Be careful making multiple instances of the fetch agent
// Each instance contains a different request cache.
const fetchAgent = new MediaFetchAgent(Networks.MAINNET);

// Get result from the server
const result = await fetchAgent.loadZNFTData("2");
// result type is NFTDataType
```