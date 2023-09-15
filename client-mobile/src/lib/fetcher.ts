import { graphQLClient } from "@client/clients/graphQLClient"
import { Variables } from "graphql-request"
import { GraphQLClientRequestHeaders } from "graphql-request/build/esm/types"

export const fetcher =
  <TData, TVariables extends Variables>(
    document: string,
    variables?: TVariables,
    options?: GraphQLClientRequestHeaders,
  ) =>
  async (): Promise<TData> =>
    graphQLClient.request<TData, Variables>(document, variables, options)
