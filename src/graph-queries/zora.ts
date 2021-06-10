import { gql } from 'graphql-request';

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
  createdAtTimestamp
  amount
  bidType
  bidInactivatedAtTimestamp
  bidInactivatedAtBlockNumber
}

fragment CurrentReserveBid on ReserveAuctionBid {
  bidType
  amount
  createdAtTimestamp
  bidder {
    id
  }
}

fragment ReserveAuctionPartial on ReserveAuction {
  id
  tokenId
  status
  approved
  reservePrice
  firstBidTime
  createdAtTimestamp
  tokenOwner {
    id
  }
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

`

export const GET_AUCTION_BY_CURATOR = gql`
  ${AUCTION_PARTIALS}

  query getAuctionsByCurator($curators: [String!], $approved: [Boolean!], $first: Int, $skip: Int) {
    reserveAuctions(where:
      {
        curator_in: $curators,
        approved_in: $approved
      }
      first: $first
      skip: $skip
      orderBy: createdAtTimestamp
      orderDirection: desc
    ) {
      ...ReserveAuctionPartial
    }
  }
`;

export const GET_ALL_AUCTIONS = gql`
  ${AUCTION_PARTIALS}

  query getAllAuctions($approved: [Boolean!], $first: Int, $skip: Int) {
    reserveAuctions(
      where: {
        approved_in: $approved
      }
      first: $first
      skip: $skip
    ) {
      ...ReserveAuctionPartial
    }
  }
`;

export const GET_AUCTION_BY_MEDIA = gql`
  ${AUCTION_PARTIALS}

  query getAuctionByMedia($tokenContract: String, $tokenId: BigInt) {
    reserveAuctions(
      first: 1,
      where: {
        tokenContract: $tokenContract
        tokenId: $tokenId
      }
      orderBy: createdAtTimestamp
      orderDirection: desc
    ) {
      ...ReserveAuctionPartial
    }
  }
`;

export const GET_MEDIA_QUERY = gql`
  ${AUCTION_PARTIALS}

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

  fragment BidDataPartial on Bid {
    id
    bidder {
      id
    }
    createdAtTimestamp
    amount
    currency {
      ...CurrencyShort
    }
  }

  query getMediaAndAuctions($ids_id: [ID!]) {
    medias(
      where: { id_in: $ids_id }
      first: 500
    ) {
      ...NFTMedia
      currentBids {
        ...BidDataPartial
      }
      reserveAuctions(
        orderBy: createdAtTimestamp
        orderDirection: desc
        first: 1
      ) {
        ...ReserveAuctionPartial
      }
    }
  }
`;
