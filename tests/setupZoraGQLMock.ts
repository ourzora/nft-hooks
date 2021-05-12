import { makeExecutableSchema } from "@graphql-tools/schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { graphql } from "graphql";

// @ts-ignore
import zoraSchema from "../graph-schemas/zora.graphql";
// @ts-ignore
import uniswapSchema from "../graph-schemas/uniswap.graphql";

import fetchMock from "./setupFetchMock";

let currentID = 0;

export type SchemaName = "Zora" | "Uniswap";

const Schemas: Record<SchemaName, any> = {
  Zora: zoraSchema,
  Uniswap: uniswapSchema,
};

async function makeQuery(
  mockOverrides: any,
  requestBody: string,
  resolverOverrides: any,
  schema: SchemaName = "Zora"
) {
  const mocks = {
    BigInt: () => "12974",
    BigDecimal: () => "13874.2323",
    Bytes: () => "ByTeSStrInG",
    // Randomly chosen by mock
    //  breaks consistent testing
    ReserveAuctionBidType: () => "Final",
    ID: () => (currentID++).toString(),
    Currency: () => ({
      name: "Wrapped Ether",
      symbol: "WETH",
      decimals: 18,
      id: "0xFACE",
    }),
    ...mockOverrides,
  };

  const schemaExec = makeExecutableSchema({
    typeDefs: Schemas[schema],
    resolvers: resolverOverrides,
  });
  const schemaWithMocks = addMocksToSchema({
    schema: schemaExec,
    mocks,
    resolvers: resolverOverrides,
  });
  return await graphql(schemaWithMocks, JSON.parse(requestBody).query);
}

export function mockGraphQLQuery(
  url: string,
  mockOverrides: any,
  resolverOverrides: any = () => {},
  schemaName?: SchemaName
) {
  fetchMock.once(
    url,
    async (_: string, req: { body: string }) =>
      await makeQuery(mockOverrides, req.body, resolverOverrides, schemaName)
  );
}
