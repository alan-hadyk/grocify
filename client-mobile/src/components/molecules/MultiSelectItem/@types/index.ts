import { ITypographyProps } from "@client/components/atoms/Typography/@types"
import { ITranslation } from "@client/translations/@types"

export interface IMultiSelectItemProps {
  disabled?: boolean
  id: string
  isFirst?: boolean
  isSelected?: boolean
  text: keyof ITranslation
  textValues?: ITypographyProps["textValues"]
  onSelectItem: (item: Pick<IMultiSelectItemProps, "id" | "isSelected" | "quantity">) => void
  quantity: number
}
