import { mutationKeys } from "@client/api/mutationKeys"
import { queryKeys } from "@client/api/queryKeys"
import { queryClient } from "@client/clients/queryClient"
import { IShoppingList } from "@client/models/@types/shoppingListModel"
import { ShoppingListModel } from "@client/models/shoppingListModel"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"

queryClient.setMutationDefaults(mutationKeys.shoppingLists.create, {
  onSettled: (shoppingList: IShoppingList, error) => {
    if (shoppingList && !error) {
      queryClient.setQueryData(
        queryKeys.shoppingLists.detail(shoppingList.id).queryKey,
        () => shoppingList,
      )
    }
  },
  retry: 3,
})

export const useCreateShoppingList = (options?: UseMutationOptions<IShoppingList, Error, void>) =>
  useMutation<IShoppingList, Error, void>({
    mutationFn: () => ShoppingListModel.create(),
    mutationKey: mutationKeys.shoppingLists.create,
    ...options,
  })
