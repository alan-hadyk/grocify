import { MultiSelect } from "@client/components/molecules/MultiSelect"
import { IMultiSelectFieldProps } from "@client/components/molecules/MultiSelectField/@types"
import { Controller, FieldValues } from "react-hook-form"

export const MultiSelectField = <TFieldValues extends FieldValues>({
  rules,
  disabled,
  control,
  name,
}: IMultiSelectFieldProps<TFieldValues>) => (
  <Controller<TFieldValues>
    control={control}
    name={name}
    rules={rules}
    render={({ field: { onChange, value: items } }) => (
      <MultiSelect disabled={disabled} onChange={onChange} estimatedItemSize={44} items={items} />
    )}
  />
)
