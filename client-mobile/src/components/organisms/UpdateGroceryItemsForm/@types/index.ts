import { Ingredient, ShoppingList, UpdateShoppingListInput } from "@client/api/schema"
import { IAddIngredientFormData } from "@client/components/molecules/AddIngredientForm/@types"
import { TMultiSelectFieldItemType } from "@client/components/molecules/MultiSelectField/@types"

export interface IUpdateGroceryItemsFormData {
  ingredients: TMultiSelectFieldItemType[]
}

export interface IUpdateGroceryItemsFormProps {
  ingredients?: Ingredient[]
  isUpdatingGroceryItems?: boolean
  isAddingIngredient?: boolean
  onUpdateGroceryItems: ({ ingredients }: Pick<UpdateShoppingListInput, "ingredients">) => void
  onAddIngredient: (
    data: IAddIngredientFormData,
    unshiftIngredientInFormIngredients: (ingredient: TMultiSelectFieldItemType) => void,
  ) => Promise<void>
  shoppingList: ShoppingList
}
