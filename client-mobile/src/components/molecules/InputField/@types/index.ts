import { IIconProps } from "@client/components/atoms/Icon/@types"
import { IInputProps } from "@client/components/molecules/Input/@types"
import { ITranslation } from "@client/translations/@types"
import { Sx } from "dripsy"

export interface IInputFieldProps {
  control: any
  error?: {
    message: keyof ITranslation
    values: Record<string, string>
  }
  name: string
  label?: IInputProps["label"]
  placeholder?: IInputProps["placeholder"]
  isRequired?: IInputProps["isRequired"]
  iconName?: IInputProps["iconName"]
  sx?: Sx
  inputType?: IInputProps["inputType"]
  disabled?: IIconProps["disabled"]
}
