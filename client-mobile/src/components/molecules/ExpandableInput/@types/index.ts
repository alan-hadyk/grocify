import { IconName } from "@client/components/atoms/Icon/@types"

export interface IExpandableInputProps {
  iconName?: IconName
  value: string
  onChangeText: (value: string) => void
  placeholder?: string
}

export type IUseExpandableInputStyles = Pick<IExpandableInputProps, "value"> & {
  animatedContainerWidth: number
}
export type IUseExpandableInputState = Pick<IExpandableInputProps, "value"> &
  Pick<IExpandableInputProps, "onChangeText">
