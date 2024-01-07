import { useShoppingList } from "@client/api/queries/useShoppingList"
import { ShoppingListItemFooterButtons } from "@client/components/molecules/ShoppingListItemFooterButtons"
import { useModalContext } from "@client/containers/ShoppingListItemContainer/provider"
import { useLocalSearchParams } from "expo-router"

export const ShoppingListItemFooter: React.FC = () => {
  const { setIsModalOpen } = useModalContext()

  const handleAddGroceryButtonClick = () => {
    setIsModalOpen(true)
  }

  const { id: shoppingListId } = useLocalSearchParams()

  const { data: shoppingList } = useShoppingList({
    id: shoppingListId as string | undefined,
  })

  const areIngredientsInShoppingList =
    Array.isArray(shoppingList?.ingredients) && shoppingList.ingredients.length > 0

  return (
    <ShoppingListItemFooterButtons
      onAddGroceryButtonClick={handleAddGroceryButtonClick}
      updateGroceryItemText={
        areIngredientsInShoppingList ? "Edit grocery items" : "Add grocery items"
      }
    />
  )
}
