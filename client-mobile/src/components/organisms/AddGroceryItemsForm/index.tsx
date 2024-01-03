import { IconName } from "@client/components/atoms/Icon/@types"
import { AddIngredientForm } from "@client/components/molecules/AddIngredientForm"
import { Banner } from "@client/components/molecules/Banner"
import { Button } from "@client/components/molecules/Button"
import { ButtonSize } from "@client/components/molecules/Button/@types"
import { MultiSelectField } from "@client/components/molecules/MultiSelectField"
import { IAddGroceryItemsFormProps } from "@client/components/organisms/AddGroceryItemsForm/@types"
import { useAddGroceryItemsFormState } from "@client/components/organisms/AddGroceryItemsForm/hooks/useAddGroceryItemsFormState"
import { addGroceryItemsFormDefaultStyles } from "@client/components/organisms/AddGroceryItemsForm/styles"
import { View } from "dripsy"

export const AddGroceryItemsForm: React.FC<IAddGroceryItemsFormProps> = ({
  onAddGroceryItems,
  onAddIngredient,
}) => {
  const { handleSubmit, control } = useAddGroceryItemsFormState()
  const { button, outerWrapper, wrapper } = addGroceryItemsFormDefaultStyles

  return (
    <View sx={outerWrapper}>
      <View sx={wrapper}>
        <AddIngredientForm onAddIngredient={onAddIngredient} />
        <Banner text="Type a name and unit to add your first grocery item." />
        <MultiSelectField control={control} disabled={false} name="ingredients" />
      </View>

      <Button
        iconName={IconName.Plus}
        text="Add grocery items"
        size={ButtonSize.LargeFixed}
        disabled
        onPress={handleSubmit(onAddGroceryItems)}
        sx={button}
      />
    </View>
  )
}
