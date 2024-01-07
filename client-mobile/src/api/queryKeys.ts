import { Ingredient, ShoppingList, Unit } from "@client/api/schema"
import { createQueryKeyStore } from "@lukemorales/query-key-factory"

export const queryKeys = createQueryKeyStore({
  ingredients: {
    detail: (id: Ingredient["id"]) => ({
      queryKey: [id],
    }),
    list: () => ({
      queryKey: ["list"],
    }),
  },
  shoppingLists: {
    detail: (id: ShoppingList["id"]) => ({
      queryKey: [id],
    }),
  },
  units: {
    detail: (id: Unit["id"]) => ({
      queryKey: [id],
    }),
    list: () => ({
      queryKey: ["list"],
    }),
  },
})
