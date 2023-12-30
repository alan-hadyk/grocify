import { IMultiSelectItemProps } from "@client/components/molecules/MultiSelectItem/@types"

type Item = {
  text: IMultiSelectItemProps["itemText"]
  isSelected: IMultiSelectItemProps["isSelected"]
  id: string
}

export interface IMultiSelectProps {
  items: Item[]
  onSelectItem: IMultiSelectItemProps["onSelectItem"]
}
