import { ITranslation } from "@client/translations/@types"

export interface IInputLabelProps {
  label: keyof ITranslation
  isRequired?: boolean
}
