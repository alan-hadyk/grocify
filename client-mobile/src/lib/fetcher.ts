import { graphQLClient } from "@client/clients/graphQLClient"
import { Variables } from "graphql-request"
import { GraphQLClientRequestHeaders } from "graphql-request/build/esm/types"

/**
 * Function used to make requests to the API
 * @param {string} document - GraphQL document.
 * @param {TVariables extends Variables} variables - Variables for the given GraphQL document.
 * @param {GraphQLClientRequestHeaders} options - Request headers.
 * @returns {Promise<TData>} - Promise with the result of a given GraphQL request.
 */
export const fetcher =
  <TData, TVariables extends Variables>(
    document: string,
    variables?: TVariables,
    options?: GraphQLClientRequestHeaders,
  ) =>
  async (): Promise<TData> =>
    graphQLClient.request<TData, Variables>(document, variables, options)
