import { gql } from 'graphql-request';

const MEDIA_FRAGMENTS = gql`
  fragment IndexerTokenPart on Token {
    id
    tokenId
    owner
    address
    tokenContract {
      name
      symbol
      address
      supportsMetadata
    }
    tokenURI
    minter
    metadata {
      json
    }
    mintTransferEvent {
      transactionHash
      blockTimestamp
      blockNumber
    }
    media {
      contentURI
      contentHash
      metadataHash
      metadataURI
      ownerBidShare
      creatorBidShare
    }
  }
  fragment IndexerAuctionPart on Auction {
    winner
    lastBidAmount
    duration
    tokenId
    auctionId
    tokenContract
    reservePrice
    firstBidTime
    expiresAt
    tokenOwner
    curator
    curatorFee
    curatorFeePercentage
    canceledEvent {
      id
    }
    endedEvent {
      id
    }
    bidEvents {
      id
      value
      sender
      transactionHash
    }
  }
  fragment IndexerAuctionWithToken on Auction {
    ...IndexerAuctionPart
    token {
      ...IndexerTokenPart
    }
  }
`;

const BASE_FRAGMENTS = gql`
  ${MEDIA_FRAGMENTS}
  fragment IndexerTokenWithAuction on Token {
    ...IndexerTokenPart
    auctions(where: { _and: [{ _not: { canceledEvent: {} } }] }) {
      ...IndexerAuctionPart
    }
  }
`;

// Get list of nfts owned by user from contracts
export const BY_OWNER = gql`
  ${BASE_FRAGMENTS}
  query byOwner(
    $addressQueryPart: String_comparison_exp!
    $owner: String
    $offset: Int
    $limit: Int
  ) @cached {
    Token(
      limit: $limit
      offset: $offset
      where: {
        address: $addressQueryPart
        _or: [
          { owner: { _eq: $owner } }
          {
            auctions: {
              _and: [
                { _not: { endedEvent: {} } }
                { _not: { canceledEvent: {} } }
                { tokenOwner: { _eq: $owner } }
              ]
            }
          }
        ]
      }
    ) {
      ...IndexerTokenWithAuction
    }
  }
`;

export const BY_IDS = gql`
  ${BASE_FRAGMENTS}
  query byIds($ids: [String!]) @cached {
    Token(where: { id: { _in: $ids } }) {
      ...IndexerTokenWithAuction
    }
  }
`;

export const ACTIVE_AUCTIONS_QUERY = gql`
  ${BASE_FRAGMENTS}
  query activeAuctionsQuery($andQuery: [Token_bool_exp!], $limit: Int, $offset: Int)
  @cached {
    Token(
      where: { _and: $andQuery }
      order_by: [
        { auctions_aggregate: { max: { lastBidAmount: asc_nulls_last } } }
        { auctions_aggregate: { count: desc } }
        { mintTransferEvent: { blockNumber: desc } }
      ]
      limit: $limit
      offset: $offset
    ) {
      ...IndexerTokenWithAuction
    }
  }
`;

export const TOKENS_WITHOUT_AUCTIONS = gql`
  ${MEDIA_FRAGMENTS}
  query tokensWithoutAuctions($addresses: [String!], $limit: Int, $offset: Int) @cached {
    Token(
      where: {
        address: { _in: $addresses }
        _not: { auctions: {} }
        owner: { _neq: "0x0000000000000000000000000000000000000000" }
      }
      limit: $limit
      offset: $offset
    ) {
      ...IndexerTokenPart
    }
  }
`;
