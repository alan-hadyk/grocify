import { IShoppingList } from "@client/models/@types/shoppingListModel"
import { createQueryKeyStore } from "@lukemorales/query-key-factory"

export const queryKeys = createQueryKeyStore({
  shoppingLists: {
    detail: (id: IShoppingList["id"]) => ({
      queryKey: [id],
    }),
  },
})
