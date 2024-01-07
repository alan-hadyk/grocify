import { TMultiSelectFieldItemType } from "@client/components/molecules/MultiSelectField/@types"
import {
  IUpdateGroceryItemsFormData,
  IUpdateGroceryItemsFormProps,
} from "@client/components/organisms/UpdateGroceryItemsForm/@types"
import { ITranslation } from "@client/translations/@types"
import { useFieldArray, useForm } from "react-hook-form"

export const useUpdateGroceryItemsFormState = ({
  ingredients = [],
  shoppingList,
  onUpdateGroceryItems,
}: Pick<IUpdateGroceryItemsFormProps, "ingredients" | "shoppingList" | "onUpdateGroceryItems">) => {
  const { control, handleSubmit, watch, setValue } = useForm<IUpdateGroceryItemsFormData>({
    defaultValues: {
      ingredients: ingredients
        .map((ingredient) => {
          const shoppingListIngredient = shoppingList.ingredients.find(
            ({ id }) => id === ingredient.id,
          )
          const text: keyof ITranslation = ingredient.unit?.name
            ? "ingredientNameWithUnit"
            : "ingredientName"

          return {
            id: ingredient.id,
            isSelected: Boolean(shoppingListIngredient),
            quantity: shoppingListIngredient?.quantity ?? 0,
            text,
            textValues: {
              name: ingredient.name,
              unit: ingredient.unit?.name,
            },
          }
        })
        .sort(({ isSelected }) => (isSelected ? -1 : 1)),
    },
  })

  const { fields } = useFieldArray({
    control,
    name: "ingredients",
  })

  const watchedIngredients = watch("ingredients", fields)

  const unshiftIngredientInFormIngredients = (ingredient: TMultiSelectFieldItemType) => {
    watchedIngredients.unshift(ingredient)

    setValue("ingredients", watchedIngredients)
  }

  const handleUpdateGroceryItems = (data: IUpdateGroceryItemsFormData) => {
    const ingredients = data.ingredients
      .filter((ingredient) => ingredient.isSelected)
      .map((ingredient) => ({
        id: ingredient.id,
        quantity: ingredient.quantity,
      }))

    onUpdateGroceryItems({ ingredients })
  }

  const areIngredientsInShoppingList = shoppingList.ingredients.length > 0

  return {
    areIngredientsInShoppingList,
    control,
    fields,
    handleSubmit,
    handleUpdateGroceryItems,
    setValue,
    unshiftIngredientInFormIngredients,
    watch,
    watchedIngredients,
  }
}
