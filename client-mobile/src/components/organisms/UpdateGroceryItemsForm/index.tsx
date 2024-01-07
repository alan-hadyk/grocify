import { IconName } from "@client/components/atoms/Icon/@types"
import { AddIngredientForm } from "@client/components/molecules/AddIngredientForm"
import { Banner } from "@client/components/molecules/Banner"
import { Button } from "@client/components/molecules/Button"
import { ButtonSize } from "@client/components/molecules/Button/@types"
import { MultiSelectField } from "@client/components/molecules/MultiSelectField"
import { IUpdateGroceryItemsFormProps } from "@client/components/organisms/UpdateGroceryItemsForm/@types"
import { useUpdateGroceryItemsFormState } from "@client/components/organisms/UpdateGroceryItemsForm/hooks/useUpdateGroceryItemsFormState"
import { addGroceryItemsFormDefaultStyles } from "@client/components/organisms/UpdateGroceryItemsForm/styles"
import { ScrollView, View } from "dripsy"

export const UpdateGroceryItemsForm: React.FC<IUpdateGroceryItemsFormProps> = ({
  ingredients,
  isUpdatingGroceryItems,
  isAddingIngredient,
  onUpdateGroceryItems,
  onAddIngredient,
  shoppingList,
}) => {
  const {
    areIngredientsInShoppingList,
    handleSubmit,
    handleUpdateGroceryItems,
    control,
    unshiftIngredientInFormIngredients,
    watchedIngredients,
  } = useUpdateGroceryItemsFormState({
    ingredients,
    onUpdateGroceryItems,
    shoppingList,
  })

  const { button, childrenWrapper, outerWrapper } = addGroceryItemsFormDefaultStyles

  const getButtonText = () => {
    if (isUpdatingGroceryItems) {
      return "Updating grocery items..."
    }

    return areIngredientsInShoppingList ? "Edit grocery items" : "Add grocery items"
  }

  return (
    <View sx={outerWrapper}>
      <ScrollView contentContainerStyle={childrenWrapper}>
        <AddIngredientForm
          isAddingIngredient={isAddingIngredient}
          onAddIngredient={(data) => onAddIngredient(data, unshiftIngredientInFormIngredients)}
        />
        {watchedIngredients.length === 0 && (
          <Banner text="Type a name and unit to add your first grocery item." />
        )}
        <MultiSelectField
          control={control}
          disabled={isAddingIngredient || isUpdatingGroceryItems}
          name="ingredients"
        />
      </ScrollView>

      <Button
        iconName={IconName.Plus}
        text={getButtonText()}
        size={ButtonSize.LargeFixed}
        onPress={handleSubmit(handleUpdateGroceryItems)}
        sx={button}
        isLoading={isUpdatingGroceryItems}
      />
    </View>
  )
}
