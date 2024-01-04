import { Ingredient, ShoppingList } from "@client/api/schema"
import { TMultiSelectFieldItemType } from "@client/components/molecules/MultiSelectField/@types"

export interface IAddGroceryItemsFormData {
  ingredients: TMultiSelectFieldItemType[]
}

export interface IAddGroceryItemsFormProps {
  ingredients: Ingredient[]
  onAddGroceryItems: () => void
  onAddIngredient: (data: any) => void
  shoppingList: ShoppingList
}
