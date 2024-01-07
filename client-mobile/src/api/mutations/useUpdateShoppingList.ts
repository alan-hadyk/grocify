import { mutationKeys } from "@client/api/mutationKeys"
import { queryKeys } from "@client/api/queryKeys"
import { ShoppingList, UpdateShoppingListInput } from "@client/api/schema"
import { queryClient } from "@client/clients/queryClient"
import { ShoppingListModel } from "@client/models/shoppingListModel"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"

queryClient.setMutationDefaults(mutationKeys.shoppingLists.update, {
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

export const useUpdateShoppingList = (
  options?: UseMutationOptions<
    ShoppingList,
    Error,
    UpdateShoppingListInput & Pick<ShoppingList, "id">
  >,
) =>
  useMutation<ShoppingList, Error, UpdateShoppingListInput & Pick<ShoppingList, "id">>({
    mutationFn: ({ id, ...input }) => ShoppingListModel.update({ id }, input),
    mutationKey: mutationKeys.shoppingLists.update,
    ...options,
  })
