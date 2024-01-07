import { IconName } from "@client/components/atoms/Icon/@types"
import { Modal } from "@client/components/molecules/Modal"
import { UpdateGroceryItemsForm } from "@client/components/organisms/UpdateGroceryItemsForm"
import { useUpdateGroceryItemsModalState } from "@client/containers/ShoppingListItemContainer/modals/UpdateGroceryItemsModal/hooks/useUpdateGroceryItemsModalState"

export const UpdateGroceryItemsModal: React.FC = () => {
  const {
    addIngredient,
    areIngredientsInShoppingList,
    ingredients,
    isCreatingIngredient,
    isCreatingUnit,
    isLoadingIngredients,
    isLoadingShoppingList,
    isLoadingUnits,
    isModalOpen,
    isUpdatingShoppingList,
    onModalClose,
    shoppingList,
    updateGroceryItems,
  } = useUpdateGroceryItemsModalState()

  if (isLoadingShoppingList || isLoadingIngredients || isLoadingUnits || !shoppingList) return null

  return (
    <Modal
      isOpen={isModalOpen}
      subtitle={areIngredientsInShoppingList ? "Edit grocery items" : "Add grocery items"}
      iconName={IconName.Close}
      onModalClose={onModalClose}>
      <UpdateGroceryItemsForm
        ingredients={ingredients}
        onUpdateGroceryItems={updateGroceryItems}
        onAddIngredient={addIngredient}
        shoppingList={shoppingList}
        isUpdatingGroceryItems={isUpdatingShoppingList}
        isAddingIngredient={isCreatingIngredient || isCreatingUnit}
      />
    </Modal>
  )
}
