import { ITranslation } from "@client/translations/@types"

export interface IShoppingListItemFooterButtonsProps {
  onAddGroceryButtonClick?: () => void
  onRecipeButtonClick?: () => void
  updateGroceryItemText: keyof ITranslation
}
