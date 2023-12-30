import { IconName } from "@client/components/atoms/Icon/@types"
import {
  FormData,
  IAddGroceryItemFormProps,
} from "@client/components/molecules/AddGroceryItemForm/@types"
import { useErrorTypeState } from "@client/components/molecules/AddGroceryItemForm/hooks/useErrorTypeState"
import { addGroceryItemFormDefaultStyles } from "@client/components/molecules/AddGroceryItemForm/styles"
import { IconButton } from "@client/components/molecules/IconButton"
import { IconButtonSize, IconButtonVariant } from "@client/components/molecules/IconButton/@types"
import { InputField } from "@client/components/molecules/InputField"
import { View } from "dripsy"
import { useForm } from "react-hook-form"

export const AddGroceryItemForm: React.FC<IAddGroceryItemFormProps> = ({ onAddIngredient }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm<FormData>()

  const onSubmit = (data) => {
    onAddIngredient(data)
    reset({ name: "", unit: "" })
  }

  const nameValue = watch("name")

  const hasErrors = Object.keys(errors).length !== 0

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
        // disabled={!nameValue}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  )
}
