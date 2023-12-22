import { IShoppingList } from "@client/models/@types/shoppingListModel"
import { ShoppingListModel } from "@client/models/shoppingListModel"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"

export const useCreateShoppingList = (options?: UseMutationOptions<IShoppingList, Error, void>) =>
  useMutation<IShoppingList, Error, void>({
    mutationFn: () => ShoppingListModel.create(),
    ...options,
  })
