import { gql } from 'graphql-request';

export const GET_MEDIA_QUERY = gql`
  fragment CurrencyShort on Currency {
    id
    name
    symbol
    decimals
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
    owner {
      id
    }
    creator {
      id
    }
    currentAsk {
      ...AskPrice
    }
    metadataURI
    metadataHash
    contentURI
    contentHash
  }

  fragment ReserveAuctionPartial on ReserveAuction {
    id
    tokenId
    status
    reservePrice
    firstBidTime
    createdAtTimestamp
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

  query getMediaAndAuctions($ids_id: [ID!], $ids_bigint: [BigInt!]) {
    medias(where: { id_in: $ids_id }) {
      ...NFTMedia
      currentBids {
        ...BidDataPartial
      }
    }
    reserveAuctions(
      where: { tokenId_in: $ids_bigint }
      orderBy: createdAtTimestamp
      orderDirection: desc
    ) {
      ...ReserveAuctionPartial
    }
  }
`;
