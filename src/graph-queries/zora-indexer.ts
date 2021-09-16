import { gql } from 'graphql-request';

const MEDIA_FRAGMENTS = gql`
  fragment IndexerTokenPart on Token {
    id
    tokenId
    owner
    address
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
  query byOwner($addresses: [String!], $owner: String, $offset: Int, $limit: Int) @cached {
    Token(
      limit: $limit
      offset: $offset
      where: {
        address: { _in: $addresses }
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
  ${MEDIA_FRAGMENTS}
  query activeAuctionsQuery($addresses: [String!], $curators: [String!], $approved_exp: Boolean_comparison_exp, $limit: Int, $offset: Int) @cached {
    Auction(
      where: {
        _and: [{
          _or: [
              { token: { address: {_in: $addresses } } }
              { curator: { _in: $curators } }
            ],
          },
          {approved: $approved_exp}
        ]
      }
      limit: $limit
      offset: $offset
      order_by: { auctionId: desc, tokenId: desc, tokenContract: desc }
      distinct_on: [auctionId, tokenContract, tokenId]
    ) {
      ...IndexerAuctionWithToken
    }
  }
`;

export const TOKENS_WITHOUT_AUCTIONS = gql`
  ${MEDIA_FRAGMENTS}
  query tokensWithoutAuctions($addresses: [String!], $limit: Int, $offset: Int) @cached {
    Token(
      where: { address: { _in: $addresses}, _not: { auctions: {}}}
      limit: $limit
      offset: $offset
    ) {
      ...IndexerTokenPart
    }
  }
`;
