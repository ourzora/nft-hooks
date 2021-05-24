This hook fetches data found on the blockchain from the given zNFT. The only argument for the hook is the NFT id. To fetch data for zNFTs on other networks, use the `NFTFetchConfiguration` wrapper component to set the correct network for loading the NFT data.
The main types are within the result `data.nft` object. This object contains the on-chain NFT data itself. The pricing information can be found in `data.pricing` which corresponds to data on-chain for Zora's perpetual zNFT auctions along with the reserve auction functionality.

```ts
import {useNFT} from "@zoralabs/nft-hooks";

type NFTDataType = {
  nft: {
    id: string, // ID of zNFT
    contractAddress: string, // Address of contract
    owner: {id: string}, // Address of owner
    creator?: {id: string}, // Address of creator
    metadataURI: string, // URI of metadata for zNFT
    // If supported
    metadataHash?: string, // sha256 hash for metadata
    // If supported
    contentURI?: string, // URI of content described by metadata
    contentHash?: string, // sha256 hash of content
  },
  
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
  };

  // Current/ongoing auction information synthesized from pricing data
  auction: {
    highestBid: {
      pricing: PricingInfo;
      placedBy: string;
      placedAt: string;
    };
    // Auction type is none if no perpetual market exists and
    // no reserve auctions exist.
    auctionType: "reserve" | "perpetual" | "none";
    endingAt?: string;
    likelyHasEnded: boolean; // If an auction ended but has not been finalized this will be true.
    reserveMet: boolean; 
    reservePrice?: PricingInfo;
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


type useNFT = (id: string) => {
  loading: boolean;
  error?: string; // undefined if no error, string if error
  chainNFT?: NFTDataType; // undefined in error or loading states
}

// Example with usage:
const {chainNFT, loading} = useNFT("2");
```

Alternatively, the same information can be fetched using the base MediaFetchAgentfor server-side or non-react use:

```ts
import {MediaFetchAgent, Networks} from "@zoralabs/nft-hooks";

// Be careful making multiple instances of the fetch agent
// Each instance contains a different request cache.
const fetchAgent = new MediaFetchAgent(Networks.MAINNET);

// Get result from the server
const result = await fetchAgent.loadNFTData("2");
// result type is NFTDataType
```