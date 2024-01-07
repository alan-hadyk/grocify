import { IconName } from "@client/components/atoms/Icon/@types"
import { ITranslation } from "@client/translations/@types"
import { Sx } from "dripsy"

export interface IInputProps {
  autoFocus?: boolean
  value: string
  onChangeText: (value: string) => void
  onBlur?: () => void
  placeholder?: keyof ITranslation
  label?: keyof ITranslation
  iconName?: IconName
  sx?: Sx
  isRequired?: boolean
  error?: {
    message: keyof ITranslation
    values: Record<string, string>
  }
  info?: {
    message: keyof ITranslation
    values: Record<string, string>
  }
  inputType?: "text" | "number"
  disabled?: boolean
}

export interface IUseInputState {
  onChangeText: IInputProps["onChangeText"]
  inputType: IInputProps["inputType"]
}
