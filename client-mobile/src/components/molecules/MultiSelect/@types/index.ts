import { IMultiSelectItemProps } from "@client/components/molecules/MultiSelectItem/@types"

export interface IMultiSelectProps {
  disabled?: IMultiSelectItemProps["disabled"]
  estimatedItemSize: number
  onChange: (items: IMultiSelectProps["items"]) => void
  items: TMultiSelectItemType[]
}

export type TMultiSelectItemType = Pick<
  IMultiSelectItemProps,
  "id" | "isSelected" | "quantity" | "text" | "textValues"
>

export interface IRenderItem {
  index: number
  item: TMultiSelectItemType
}
