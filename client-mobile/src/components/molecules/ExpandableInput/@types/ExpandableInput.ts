import { Dispatch, SetStateAction } from "react"

export interface IExpandableInputProps {
  value: string
  onChangeText: Dispatch<SetStateAction<string>>
}

export type IUseExpandableInputStyles = Pick<IExpandableInputProps, "value">
export type IUseExpandableInputState = Pick<IExpandableInputProps, "value"> &
  Pick<IExpandableInputProps, "onChangeText">
