import { mutationKeys } from "@client/api/mutationKeys"
import { queryKeys } from "@client/api/queryKeys"
import { CreateIngredientInput, Ingredient } from "@client/api/schema"
import { queryClient } from "@client/clients/queryClient"
import { IngredientModel } from "@client/models/ingredientModel"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"

queryClient.setMutationDefaults(mutationKeys.ingredients.create, {
  onSettled: (ingredient: Ingredient, error) => {
    if (ingredient && !error) {
      queryClient.setQueryData(
        queryKeys.ingredients.detail(ingredient.id).queryKey,
        () => ingredient,
      )
    }
  },
  retry: 3,
})

export const useCreateIngredient = (
  options?: UseMutationOptions<Ingredient, Error, CreateIngredientInput>,
) =>
  useMutation<Ingredient, Error, CreateIngredientInput>({
    mutationFn: ({ name, unit }) => IngredientModel.create({ name, unit }),
    mutationKey: mutationKeys.ingredients.create,
    ...options,
  })
