import { ContextOptions } from "@tanstack/react-query"

export const fetcher =
  <TData, TVariables>(
    query: string,
    variables?: TVariables,
    options?: ContextOptions | RequestInit["headers"],
  ) =>
  async (): Promise<TData> => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL

    if (!apiUrl) {
      throw new Error("EXPO_PUBLIC_API_URL is not defined")
    }

    const res = await fetch(apiUrl, {
      body: JSON.stringify({ options, query, variables }),
      method: "POST",
    })

    const json = await res.json()

    if (json.errors) {
      const { message } = json.errors[0]

      throw new Error(message)
    }

    return json.data
  }
