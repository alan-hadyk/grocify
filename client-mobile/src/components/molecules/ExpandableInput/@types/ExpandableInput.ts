import { Dispatch, SetStateAction } from "react"

export interface IExpandableInputProps {
  value: string
  onChangeText: Dispatch<SetStateAction<string>>
}

export type IUseExpandableInputStyles = {
  isOpen?: boolean
} & Pick<IExpandableInputProps, "value">
