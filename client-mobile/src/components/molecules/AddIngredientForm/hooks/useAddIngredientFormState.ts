import {
  AddIngredientFormData,
  IUseAddIngredientFormState,
} from "@client/components/molecules/AddIngredientForm/@types"
import { useForm } from "react-hook-form"

export const useAddIngredientFormState = ({ onAddIngredient }: IUseAddIngredientFormState) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm<AddIngredientFormData>()

  const onSubmit = async (data: any) => {
    try {
      await onAddIngredient(data)
      reset({ name: "", unit: "" })
    } catch {}
  }

  const nameValue = watch("name")

  const hasErrors = Object.keys(errors).length !== 0

  return {
    control,
    errors,
    handleSubmit,
    hasErrors,
    nameValue,
    onSubmit,
  }
}
