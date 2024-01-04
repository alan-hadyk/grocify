import { Ingredient, Unit } from "@client/api/schema"
import {
  IAddGroceryItemsFormData,
  IAddGroceryItemsFormProps,
} from "@client/components/organisms/AddGroceryItemsForm/@types"
import { useForm } from "react-hook-form"

export const useAddGroceryItemsFormState = ({
  // ingredients,
  shoppingList,
}: Pick<IAddGroceryItemsFormProps, "ingredients" | "shoppingList">) => {
  // Mock data
  const createdAt = new Date().toISOString()

  const unitPcs: Unit = {
    createdAt,
    id: "90238902388902390823",
    name: "pcs",
  }

  const ingredients: Ingredient[] = [
    {
      createdAt,
      id: "123213235544",
      name: "onion",
      unit: unitPcs,
    },
    {
      createdAt,
      id: "34343463242345",
      name: "tomato",
      unit: unitPcs,
    },
    {
      createdAt,
      id: "65364645654645645",
      name: "milk",
    },
    {
      createdAt,
      id: "6536463235645645",
      name: "honey",
    },
    {
      createdAt,
      id: "653646323345645645",
      name: "almonds",
    },
    {
      createdAt,
      id: "343434554",
      name: "chicken",
    },
    {
      createdAt,
      id: "3434778678679",
      name: "cucumber",
    },
    {
      createdAt,
      id: "342234234234",
      name: "potatoes",
    },
    {
      createdAt,
      id: "7748354623",
      name: "fish",
    },
    {
      createdAt,
      id: "454552472457",
      name: "soy sauce",
    },
  ]

  const { control, handleSubmit, watch } = useForm<IAddGroceryItemsFormData>({
    defaultValues: {
      ingredients: ingredients.map((ingredient) => {
        const shoppingListIngredient = shoppingList.ingredients.find(
          ({ id }) => id === ingredient.id,
        )

        return {
          id: ingredient.id,
          isSelected: Boolean(shoppingListIngredient),
          quantity: shoppingListIngredient?.quantity ?? 0,
          text: ingredient.unit?.name ? "unitWithName" : "ingredientName",
          textValues: {
            name: ingredient.name,
            unit: ingredient.unit?.name,
          },
        }
      }),
    },
  })

  return {
    control,
    handleSubmit,
    watch,
  }
}
