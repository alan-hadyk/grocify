import type { CodegenConfig } from "@graphql-codegen/cli"

/**
 * GraphQL code generator config
 */
const config: CodegenConfig = {
  documents: ["src/api/graphql/**/*.graphql"],
  generates: {
    "./src/api/schema.ts": {
      config: {
        exposeDocument: true,
        exposeFetcher: true,
        exposeMutationKeys: true,
        exposeQueryKeys: true,
        fetcher: {
          func: "@client/lib/fetcher#fetcher",
          isReactHook: false, // optional, defaults to false, controls the function's signature.
        },
        skipTypename: true,
      },
      plugins: [
        {
          add: {
            content: "/* eslint-disable import/exports-last */ /* eslint-disable sort-keys */",
          },
        },
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
    },
  },
  ignoreNoDocuments: true,
  overwrite: true,
  schema: "http://0.0.0.0:3000/graphql",
}

export default config
