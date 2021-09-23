import { gql } from 'graphql-request';

export const RESOLVE_ENS_FROM_ADDRESS_QUERY = gql`
  fragment DomainResolvedPart on Domain {
    name
    labelName
    labelhash
    resolvedAddress {
      id
    }
    resolver {
      id
    }
  }
  query resolveNames($addresses: [String!]) {
    domains(where: { resolvedAddress_in: $addresses }) {
      ...DomainResolvedPart
    }
  }
`;
