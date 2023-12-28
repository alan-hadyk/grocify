import { ShoppingListItemFooterButtons } from "@client/components/molecules/ShoppingListItemFooterButtons"
import { useModalContext } from "@client/containers/ShoppingListItemContainer/provider"

export const ShoppingListItemFooter: React.FC = () => {
  const { setIsModalOpen } = useModalContext()

  const handleAddGroceryButtonClick = () => {
    setIsModalOpen(true)
  }
  return <ShoppingListItemFooterButtons onAddGroceryButtonClick={handleAddGroceryButtonClick} />
}
