import { IInputProps } from "@client/components/molecules/Input/@types"

export interface ICounterProps {
  value: IInputProps["value"]
  onChange: IInputProps["onChangeText"]
  onBlur: (value: string) => void
  disabled: IInputProps["disabled"]
}
