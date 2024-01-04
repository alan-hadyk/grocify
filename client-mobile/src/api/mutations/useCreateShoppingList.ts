import { mutationKeys } from "@client/api/mutationKeys"
import { queryKeys } from "@client/api/queryKeys"
import { ShoppingList } from "@client/api/schema"
import { queryClient } from "@client/clients/queryClient"
import { ShoppingListModel } from "@client/models/shoppingListModel"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"

queryClient.setMutationDefaults(mutationKeys.shoppingLists.create, {
  onSettled: (shoppingList: ShoppingList, error) => {
    if (shoppingList && !error) {
      queryClient.setQueryData(
        queryKeys.shoppingLists.detail(shoppingList.id).queryKey,
        () => shoppingList,
      )
    }
  },
  retry: 3,
})

export const useCreateShoppingList = (options?: UseMutationOptions<ShoppingList, Error, void>) =>
  useMutation<ShoppingList, Error, void>({
    mutationFn: () => ShoppingListModel.create(),
    mutationKey: mutationKeys.shoppingLists.create,
    ...options,
  })
