export interface IExpandableInputProps {
  value: string
  onChangeText: (value: string) => void
}

export type IUseExpandableInputStyles = Pick<IExpandableInputProps, "value"> & {
  animatedContainerWidth: number
}
export type IUseExpandableInputState = Pick<IExpandableInputProps, "value"> &
  Pick<IExpandableInputProps, "onChangeText">
