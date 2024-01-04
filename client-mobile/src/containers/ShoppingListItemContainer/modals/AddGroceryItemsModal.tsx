import { useShoppingList } from "@client/api/queries/useShoppingList"
import { IconName } from "@client/components/atoms/Icon/@types"
import { Modal } from "@client/components/molecules/Modal"
import { AddGroceryItemsForm } from "@client/components/organisms/AddGroceryItemsForm"
import { useModalContext } from "@client/containers/ShoppingListItemContainer/provider"
import { useLocalSearchParams } from "expo-router"

export const AddGroceryItemsModal: React.FC = () => {
  const { isModalOpen, setIsModalOpen } = useModalContext()
  const { id } = useLocalSearchParams()
  const { data: shoppingList, isLoading } = useShoppingList({ id: id as string | undefined })

  const onModalClose = () => {
    setIsModalOpen(false)
  }

  if (isLoading || !shoppingList) return null

  return (
    <Modal
      isOpen={isModalOpen}
      subtitle="Add grocery items"
      iconName={IconName.Close}
      onModalClose={onModalClose}>
      <AddGroceryItemsForm
        ingredients={[]}
        onAddGroceryItems={() => {}}
        onAddIngredient={(data) => console.log({ data })}
        shoppingList={shoppingList}
      />
    </Modal>
  )
}
