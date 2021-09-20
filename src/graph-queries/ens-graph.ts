import { gql } from 'graphql-request';

export const RESOLVE_ENS_FROM_ADDRESS_QUERY = gql`
  query resolveNames($names: [String!]) {
    domains(where: { name_in: $names }) {
      id
      name
      labelName
      resolvedAddress {
        id
      }
    }
  }
`;
