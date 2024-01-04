import { ShoppingList } from "@client/api/schema"
import { createQueryKeyStore } from "@lukemorales/query-key-factory"

export const queryKeys = createQueryKeyStore({
  shoppingLists: {
    detail: (id: ShoppingList["id"]) => ({
      queryKey: [id],
    }),
  },
})
