import { IMultiSelectItemProps } from "@client/components/molecules/MultiSelectItem/@types"
import { UseControllerProps, FieldValues } from "react-hook-form"

export interface IMultiSelectFieldProps<TFieldValues extends FieldValues> {
  control: UseControllerProps<TFieldValues>["control"]
  rules?: UseControllerProps<TFieldValues>["rules"]
  name: UseControllerProps<TFieldValues>["name"]
  disabled?: boolean
}

export type TMultiSelectFieldItemType = Pick<
  IMultiSelectItemProps,
  "id" | "isSelected" | "quantity" | "text" | "textValues"
>
