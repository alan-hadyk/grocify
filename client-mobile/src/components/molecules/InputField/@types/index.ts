import { IIconProps } from "@client/components/atoms/Icon/@types"
import { IInputProps } from "@client/components/molecules/Input/@types"
import { ITranslation } from "@client/translations/@types"
import { Sx } from "dripsy"
import { UseControllerProps, FieldValues } from "react-hook-form"

export interface IInputFieldProps<TFieldValues extends FieldValues> {
  control: UseControllerProps<TFieldValues>["control"]
  name: UseControllerProps<TFieldValues>["name"]
  error?: {
    message: keyof ITranslation
    values: Record<string, string>
  }
  label?: IInputProps["label"]
  placeholder?: IInputProps["placeholder"]
  isRequired?: IInputProps["isRequired"]
  iconName?: IInputProps["iconName"]
  sx?: Sx
  inputType?: IInputProps["inputType"]
  disabled?: IIconProps["disabled"]
  onInputFieldBlur?: () => void
}
