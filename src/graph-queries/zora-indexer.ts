import { gql } from 'graphql-request';

const BASE_FRAGMENTS = gql`
  fragment TokenWithAuction on Token {
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
    auctions(where: { _and: [{ _not: { canceledEvent: {} } }] }) {
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
  }
`;

// Get list of owners in manage modal for contract
export const BY_OWNER = gql`
  ${BASE_FRAGMENTS}
  query byOwner($address: String, $owner: String, $offset: Int, $limit: Int) @cached {
    Token(
      limit: $limit
      offset: $offset
      where: {
        address: { _eq: $address }
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
      ...TokenWithAuction
    }
  }
`;

export const LOOKUP_TOKEN = gql`
  ${BASE_FRAGMENTS}
  query byId($address: String, $tokenId: Int) @cached {
    Token(where: { address: { _eq: $address }, tokenId: { _eq: $tokenId } }) {
      ...TokenWithAuction
    }
  }
`;

export const BY_IDS = gql`
  ${BASE_FRAGMENTS}
  query byIds($ids: [String!]) @cached {
    Token(where: { id: { _in: $ids } }) {
      ...TokenWithAuction
    }
  }
`;

// Get active auctions by address
export const ACTIVE_AUCTIONS_QUERY = gql`
  ${BASE_FRAGMENTS}
  query activeTokens (
    $addresses: [String!]
    $curators: [String!]
    $limit: Int
    $offset: Int
  ) @cached {
    Token(
      limit: $limit
      offset: $offset
      where: {
        _or: [
          { address: { _in: $addresses } }
          { auctions: { curator: { _in: $curators } } }
        ]
        tokenURI: { _is_null: false }
      }
      order_by: [
        { auctions_aggregate: { max: { lastBidAmount: asc_nulls_last } } }
        { auctions_aggregate: { count: desc } }
        { tokenId: asc }
      ]
    ) {
      ...TokenWithAuction
    }
  }
`;
