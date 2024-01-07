import { CreateIngredientInput } from "@client/api/schema"

export type IAddIngredientFormData = Pick<CreateIngredientInput, "name" | "unit">

export interface IAddIngredientFormProps {
  isAddingIngredient?: boolean
  onAddIngredient: (data: IAddIngredientFormData) => void
}

export type IUseAddIngredientFormState = Pick<IAddIngredientFormProps, "onAddIngredient">
