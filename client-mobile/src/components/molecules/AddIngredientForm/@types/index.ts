export type AddIngredientFormData = {
  name: string
  unit: string
}

export interface IAddIngredientFormProps {
  onAddIngredient: (data: any) => void
}

export type IUseAddIngredientFormState = Pick<IAddIngredientFormProps, "onAddIngredient">
