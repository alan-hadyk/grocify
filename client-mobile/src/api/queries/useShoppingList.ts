import { queryKeys } from "@client/api/queryKeys"
import { ShoppingList } from "@client/api/schema"
import { ShoppingListModel } from "@client/models/shoppingListModel"
import { UseQueryOptions, useQuery } from "@tanstack/react-query"

export const useShoppingList = (
  { id }: Partial<Pick<ShoppingList, "id">>,
  options?: UseQueryOptions<ShoppingList, Error, ShoppingList>,
) =>
  useQuery<ShoppingList, Error, ShoppingList>({
    enabled: Boolean(id),
    queryFn: id ? () => ShoppingListModel.get({ id }) : undefined,
    queryKey: id ? queryKeys.shoppingLists.detail(id).queryKey : [],
    ...options,
  })
