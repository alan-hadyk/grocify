import { useAsyncEffect } from "@client/hooks/useAsyncEffect"
import { ShoppingListModel } from "@client/models/shoppingListModel"
import { useState } from "react"

export const useLocalDbInit = () => {
  const [isDbInitialized, setIsDbInitialized] = useState<boolean>(false)
  const [dbInitError, setDbInitError] = useState<Error | null>(null)

  useAsyncEffect(
    async () => {
      try {
        await ShoppingListModel.initSchema()
        setIsDbInitialized(true)
      } catch (error) {
        setDbInitError(error as Error)
      }
    },
    async () => {},
    [],
  )

  return {
    dbInitError,
    isDbInitialized,
  }
}
