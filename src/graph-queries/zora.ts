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

fragment AskPrice on Ask {
  id
  currency {
    ...CurrencyShort
  }
  amount
  createdAtTimestamp
}

fragment ReserveAuctionPartial on ReserveAuction {
  id
  tokenId
  status
  reservePrice
  firstBidTime
  createdAtTimestamp
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

export const GET_AUCTION_QUERY = gql`
  ${AUCTION_PARTIALS}

  query getAuctions($auctionIds: [ID!]) {
    reserveAuctions(where:{
      id_in: $auctionIds
    }) {
      ...ReserveAuctionPartial
    }
  }
`;

export const GET_MEDIA_QUERY = gql`
  ${AUCTION_PARTIALS}
  
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
    medias(where: { id_in: $ids_id }) {
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
