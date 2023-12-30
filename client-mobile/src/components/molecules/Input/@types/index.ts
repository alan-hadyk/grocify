import { IconName } from "@client/components/atoms/Icon/@types"
import { ITranslation } from "@client/translations/@types"
import { Sx } from "dripsy"

export interface IInputProps {
  autoFocus?: boolean
  value: string
  onChangeText: (value: string) => void
  placeholder: keyof ITranslation
  label?: keyof ITranslation
  iconName: IconName
  sx?: Sx
  isRequired?: boolean
  error?: {
    message: keyof ITranslation
    values: Record<string, string>
  }
  info?: string
}

export interface IUseInputState {
  onChangeText: IInputProps["onChangeText"]
}
