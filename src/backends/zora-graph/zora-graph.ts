import { gql } from 'graphql-request';

const AUCTION_PARTIALS = gql`
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
    ownerBidShare
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

  fragment CurrencyShort on Currency {
    id
    name
    symbol
    decimals
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
    token
    createdAtBlockNumber
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

  fragment BidDataPartial on Bid {
    id
    bidder {
      id
    }
    createdAtTimestamp
    createdAtBlockNumber
    transactionHash
    amount
    currency {
      ...CurrencyShort
    }
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
`;

export const GET_AUCTION_BY_CURATOR = gql`
  ${AUCTION_PARTIALS}

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
      media {
        ...NFTMediaFullData
      }
    }
  }
`;

export const GET_AUCTION_BY_MEDIA = gql`
  ${AUCTION_PARTIALS}

  query getAuctionByMedia($tokens: [String!]) {
    reserveAuctions(
      first: 300
      where: { token_in: $tokens }
      orderBy: createdAtTimestamp
      orderDirection: desc
    ) {
      ...ReserveAuctionPartial
      media {
        ...NFTMediaFullData
      }
    }
  }
`;

export const GET_MEDIAS_QUERY = gql`
  ${AUCTION_PARTIALS}

  query getMediaAndAuctions(
    $query: Media_filter!
    $orderBy: Media_orderBy
    $orderDirection: OrderDirection
    $limit: Int
    $offset: Int
  ) {
    medias(
      where: $query
      first: $limit
      skip: $offset
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...NFTMediaFullData
    }
  }
`;
