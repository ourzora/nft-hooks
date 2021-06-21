import { gql } from 'graphql-request';

const MEDIA_PARTIALS = gql`
  fragment AskPrice on Ask {
    id
    currency {
      ...CurrencyShort
    }
    amount
    createdAtTimestamp
  }

  fragment NFTMedia on Media {
    id
    creatorBidShare
    owner {
      id
    }
    creator {
      id
    }
    currentAsk {
      ...AskPrice
    }
    createdAtTimestamp
    metadataURI
    metadataHash
    contentURI
    contentHash
  }
`;

const AUCTION_PARTIALS = gql`
  fragment CurrencyShort on Currency {
    id
    name
    symbol
    decimals
  }

  fragment PreviousReserveBid on InactiveReserveAuctionBid {
    id
    bidder {
      id
    }
    transactionHash
    createdAtTimestamp
    amount
    bidType
    bidInactivatedAtTimestamp
    bidInactivatedAtBlockNumber
  }

  fragment CurrentReserveBid on ReserveAuctionBid {
    bidType
    amount
    transactionHash
    createdAtTimestamp
    bidder {
      id
    }
  }

  fragment ReserveAuctionPartial on ReserveAuction {
    id
    tokenId
    tokenContract
    transactionHash
    status
    approved
    reservePrice
    firstBidTime
    createdAtTimestamp
    approvedTimestamp
    curator {
      id
    }
    curatorFeePercentage
    tokenOwner {
      id
    }
    auctionCurrency {
      ...CurrencyShort
    }
    currentBid {
      ...CurrentReserveBid
    }
    previousBids {
      ...PreviousReserveBid
    }
    duration
    expectedEndTimestamp
    finalizedAtTimestamp
  }
`;

export const GET_AUCTION_BY_CURATOR = gql`
  ${AUCTION_PARTIALS}
  ${MEDIA_PARTIALS}

  fragment ReserveAuctionPartialWithMedia on ReserveAuction {
    ...ReserveAuctionPartial
    media {
      ...NFTMedia
    }
  }

  query getAuctionsByCurator(
    $curators: [String!]
    $approved: [Boolean!]
    $first: Int
    $skip: Int
  ) {
    reserveAuctions(
      where: { curator_in: $curators, approved_in: $approved }
      first: $first
      skip: $skip
      orderBy: createdAtTimestamp
      orderDirection: desc
    ) {
      ...ReserveAuctionPartialWithMedia
    }
  }
`;

export const GET_ALL_AUCTIONS = gql`
  ${AUCTION_PARTIALS}

  query getAllAuctions($approved: [Boolean!], $first: Int, $skip: Int) {
    reserveAuctions(where: { approved_in: $approved }, first: $first, skip: $skip) {
      ...ReserveAuctionPartial
    }
  }
`;

export const GET_AUCTION_BY_MEDIA = gql`
  ${AUCTION_PARTIALS}

  query getAuctionByMedia($tokens: [String!]) {
    reserveAuctions(
      first: 1
      where: { token_in: $tokens }
      orderBy: createdAtTimestamp
      orderDirection: desc
    ) {
      ...ReserveAuctionPartial
    }
  }
`;

export const GET_MEDIAS_QUERY = gql`
  ${AUCTION_PARTIALS}
  ${MEDIA_PARTIALS}

  fragment BidDataPartial on Bid {
    id
    bidder {
      id
    }
    createdAtTimestamp
    transactionHash
    amount
    currency {
      ...CurrencyShort
    }
  }

  fragment TransferPartial on Transfer {
    id
    transactionHash
    from {
      id
    }
    to {
      id
    }
    createdAtTimestamp
    createdAtBlockNumber
  }

  fragment NFTMediaFullData on Media {
    ...NFTMedia
    currentBids {
      ...BidDataPartial
    }
    transfers {
      ...TransferPartial
    }
    reserveAuctions(orderBy: createdAtTimestamp, orderDirection: desc, first: 1) {
      ...ReserveAuctionPartial
    }
  }

  query getMediaAndAuctions(
    $id_ids: [ID!]
    $creator_ids: [String!]
    $owner_ids: [String!]
  ) {
    id: medias(
      where: { id_in: $id_ids }
      first: 500
    ) {
      ...NFTMediaFullData
    }
    creator: medias(
      where: { creator_in: $creator_ids }
      first: 500
    ) {
      ...NFTMediaFullData
    }
    owner: medias(
      where: { owner_in: $owner_ids }
      first: 500
    ) {
      ...NFTMediaFullData
    }
  }
`;
