import { queryKeys } from "@client/api/queryKeys"
import { IShoppingList } from "@client/models/@types/shoppingListModel"
import { ShoppingListModel } from "@client/models/shoppingListModel"
import { UseQueryOptions, useQuery } from "@tanstack/react-query"

export const useShoppingList = (
  { id }: Partial<Pick<IShoppingList, "id">>,
  options?: UseQueryOptions<IShoppingList, Error, IShoppingList>,
) =>
  useQuery<IShoppingList, Error, IShoppingList>({
    enabled: Boolean(id),
    queryFn: id ? () => ShoppingListModel.get({ id }) : undefined,
    queryKey: id ? queryKeys.shoppingLists.detail(id).queryKey : [],
    ...options,
  })
