import { IconName } from "@client/components/atoms/Icon/@types"
import { Modal } from "@client/components/molecules/Modal"
import { AddGroceryItemsForm } from "@client/components/organisms/AddGroceryItemsForm"
import { useModalContext } from "@client/containers/ShoppingListItemContainer/provider"

export const AddGroceryItemsModal: React.FC = () => {
  const { isModalOpen, setIsModalOpen } = useModalContext()

  const onModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <Modal
      isOpen={isModalOpen}
      subtitle="Add grocery items"
      iconName={IconName.Close}
      onModalClose={onModalClose}>
      <AddGroceryItemsForm onSubmit={() => {}} />
    </Modal>
  )
}
