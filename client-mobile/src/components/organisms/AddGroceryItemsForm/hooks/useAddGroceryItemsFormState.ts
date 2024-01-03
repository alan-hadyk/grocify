// import { IMultiSelectProps } from "@client/components/molecules/MultiSelect/@types"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"

export const useAddGroceryItemsFormState = () => {
  const { t } = useTranslation()

  const ingredients = [
    {
      id: "123213235544",
      name: "onion",
      unit: "pcs",
    },
    {
      id: "1232454534",
      name: "tomato",
      unit: "pcs",
    },
    {
      id: "65364645654645645",
      name: "milk",
    },
    {
      id: "6536463235645645",
      name: "honey",
    },
  ]

  const shoppingList = {
    ingredients: [
      {
        id: "123213235544",
        name: "onion",
        quantity: 2,
        unit: "pcs",
      },
    ],
  }

  const { control, handleSubmit } = useForm({
    defaultValues: {
      ingredients: ingredients.map((ingredient) => {
        const shoppingListIngredient = shoppingList.ingredients.find(
          ({ id }) => id === ingredient.id,
        )

        return {
          ...ingredient,
          isSelected: Boolean(shoppingListIngredient),
          name: t("ingredientName", { name: ingredient.name }),
          quantity: shoppingListIngredient?.quantity ?? 1,
          unit: t("ingredientName", { name: ingredient.unit }),
        }
      }),
    },
  })

  return {
    control,
    handleSubmit,
    ingredients,
  }
}
