import { queryKeys } from "@client/api/queryKeys"
import { Ingredient } from "@client/api/schema"
import { IngredientModel } from "@client/models/ingredientModel"
import { UseQueryOptions, useQuery } from "@tanstack/react-query"

export const useIngredients = (options?: UseQueryOptions<Ingredient[], Error, Ingredient[]>) =>
  useQuery<Ingredient[], Error, Ingredient[]>({
    queryFn: () => IngredientModel.getAll(),
    queryKey: queryKeys.ingredients.list().queryKey,
    ...options,
  })
