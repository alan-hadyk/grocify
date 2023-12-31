import { IconName } from "@client/components/atoms/Icon/@types"
import { IAddIngredientFormProps } from "@client/components/molecules/AddIngredientForm/@types"
import { useAddIngredientFormState } from "@client/components/molecules/AddIngredientForm/hooks/useAddIngredientFormState"
import { useErrorTypeState } from "@client/components/molecules/AddIngredientForm/hooks/useErrorTypeState"
import { addGroceryItemFormDefaultStyles } from "@client/components/molecules/AddIngredientForm/styles"
import { IconButton } from "@client/components/molecules/IconButton"
import { IconButtonSize, IconButtonVariant } from "@client/components/molecules/IconButton/@types"
import { InputField } from "@client/components/molecules/InputField"
import { View } from "dripsy"

export const AddIngredientForm: React.FC<IAddIngredientFormProps> = ({ onAddIngredient }) => {
  const { control, errors, handleSubmit, hasErrors, nameValue, onSubmit } =
    useAddIngredientFormState({ onAddIngredient })

  const { outerWrapper, nameInput, unitInput, iconButton, wrapper } =
    addGroceryItemFormDefaultStyles({ hasErrors })

  const { mapErrorTypeToErrorMessage } = useErrorTypeState()

  return (
    <View sx={outerWrapper}>
      <View sx={wrapper}>
        <InputField
          control={control}
          error={errors.name?.type && mapErrorTypeToErrorMessage.name[errors.name?.type]}
          name="name"
          label="Name"
          placeholder="e.g., onion"
          isRequired
          iconName={IconName.Tag}
          sx={nameInput}
        />
        <InputField
          control={control}
          // error={errors.unit}
          name="unit"
          label="Unit shortcut"
          placeholder="pcs, etc."
          iconName={IconName.Ruler}
          sx={unitInput}
        />
      </View>
      <IconButton
        iconName={IconName.Plus}
        size={IconButtonSize.Medium}
        variant={IconButtonVariant.GreenPrimary}
        sx={iconButton}
        disabled={!nameValue}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  )
}
