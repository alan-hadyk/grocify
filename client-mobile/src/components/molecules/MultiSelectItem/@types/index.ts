import { ITranslation } from "@client/translations/@types"

interface Item {
  id: string
  quantity: number
  isSelected: boolean
}

export interface IMultiSelectItemProps {
  itemText: keyof ITranslation
  isSelected: boolean
  onSelectItem: (item: Item) => void
  id: string
  quantity: number
  onBlur: (id: string, quantity: number) => void
  disabled?: boolean
}
