import {
  IAddIngredientFormData,
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
  } = useForm<IAddIngredientFormData>()

  const onSubmit = (data: IAddIngredientFormData) => {
    onAddIngredient(data)
    reset({ name: "", unit: "" })
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
