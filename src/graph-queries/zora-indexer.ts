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
    media {
      contentURI
      metadataURI
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

export const BY_OWNER = gql`
  ${BASE_FRAGMENTS}
  query byOwner($address: String, $owner: String) {
    Token(
      where: {
        _and: [
          { address: { _eq: $address } }
          {
            _or: [
              { owner: { _eq: $owner } }
              {
                _and: [
                  { auctions: { tokenOwner: { _eq: $owner } } }
                  { auctions: { _not: { canceledEvent: {} } } }
                ]
              }
            ]
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
  query byId($address: String, $tokenId: Int) {
    Token(where: { address: { _eq: $address }, tokenId: { _eq: $tokenId } }) {
      ...TokenWithAuction
    }
  }
`;

export const BY_IDS = gql`
  ${BASE_FRAGMENTS}
  query byIds($ids: [String!]) {
    Token(where: { id: { _in: $ids } }) {
      ...TokenWithAuction
    }
  }
`;

export const ACTIVE_AUCTIONS_QUERY = gql`
  ${BASE_FRAGMENTS}
  query activeTokens($address: String) {
    Token(
      limit: 250
      where: { address: { _eq: $address }, tokenURI: { _is_null: false } }
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
