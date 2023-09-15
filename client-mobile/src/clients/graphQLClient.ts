import { GraphQLClient } from "graphql-request"

const apiUrl = process.env.EXPO_PUBLIC_API_URL

if (!apiUrl) {
  throw new Error("EXPO_PUBLIC_API_URL is not defined")
}

export const graphQLClient = new GraphQLClient(apiUrl, {
  credentials: "include",
})
