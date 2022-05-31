import { gql } from 'graphql-request';

export const GET_TOKEN_VALUES_QUERY = gql`
  fragment TokenShort on Token {
    id
    symbol
    name
    decimals
    derivedETH
  }
  query getTokenPrices($currencyContracts: [ID!]) {
    bundle(id: "1") {
      ethPrice
    }
    tokens(where: { id_in: $currencyContracts }) {
      ...TokenShort
    }
  }
`;
