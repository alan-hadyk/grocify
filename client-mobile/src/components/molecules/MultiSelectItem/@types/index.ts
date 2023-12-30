import { ITranslation } from "@client/translations/@types"

export interface IMultiSelectItemProps {
  itemText: keyof ITranslation
  isSelected: boolean
  onSelectItem: (id: string) => void
  id: string
}
