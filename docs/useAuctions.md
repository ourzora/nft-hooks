This hook fetches data found on the blockchain for the given curator in the zora auction house.

This hook takes two arguments:
1. curators: list of curators to query for
2. approved: only return auctions that match the given state: true = approved, false = not approved, undefined = any status

```ts
/**
 * Fetches on-chain NFT auction data for the given curator
 *
 * @param curators
 * @param approved
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */

type useAuctions = {
  curators: string[];
  approved: true | false | undefined;
}

type useAuctionsResponse = {
  loading: boolean;
  error: ResponseError | undefined;
  data: ReserveAuctionPartialFragment[];
}

type ReserveAuctionPartialFragment = {
  /** The auction ID */
  id: Scalars['ID'];
  /** The originating token contract for this auction */
  tokenContract: Scalars['String'];
  /** The token ID for this auction */
  tokenId: Scalars['BigInt'];
  /** Whether or not the auction has been approved by the curator */
  approved: Scalars['Boolean'];
  /** The length of time the auction is intended to run for, after the first bid is made */
  duration: Scalars['BigInt'];
  /**
   * The expected end of auction timestamp, which can change if bids were placed
   * within the last 15 minutes, and is not set until the first bid is placed
   */
  expectedEndTimestamp?: Maybe<Scalars['BigInt']>;
  /** The time the first bid was placed */
  firstBidTime?: Maybe<Scalars['BigInt']>;
  /** The minimum price of the first bid */
  reservePrice: Scalars['BigInt'];
  /** The sale percentage to send to the curator */
  curatorFeePercentage: Scalars['Int'];
  /** The address that should receive the funds once the NFT is sold */
  tokenOwner: {id: address};
  /** The address of the auction's curator */
  curator: {id: address};
  /** The address of the ERC-20 currency to run the auction with, or 0x0 for ETH */
  auctionCurrency: {
    id: string;
    name: string;
    symbol: string;
    decimals: number;
  };
  status: ReserveAuctionStatus;
  /** The current bid on this auction */
  currentBid?: Maybe<ReserveAuctionBid>;
  /** The previous bids on this auction */
  previousBids?: Maybe<Array<InactiveReserveAuctionBid>>;
  /** The timestamp of the block the Transfer was created in */
  createdAtTimestamp: Scalars['BigInt'];
  /** The number of the block the Transfer was created in */
  createdAtBlockNumber: Scalars['BigInt'];
  /** The timestamp at which the auction end function was called */
  finalizedAtTimestamp?: Maybe<Scalars['BigInt']>;
  /** The block number at which the auction end function was called */
  finalizedAtBlockNumber?: Maybe<Scalars['BigInt']>;
```