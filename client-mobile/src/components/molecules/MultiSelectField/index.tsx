import { MultiSelect } from "@client/components/molecules/MultiSelect"
import { IMultiSelectFieldProps } from "@client/components/molecules/MultiSelectField/@types"
import { calculateUpdatedItems } from "@client/components/molecules/MultiSelectField/helpers/useMultiselectFieldState"
import { MultiSelectItem } from "@client/components/molecules/MultiSelectItem"
import { View } from "dripsy"
import { Controller, FieldValues } from "react-hook-form"

export const MultiSelectField = <TFieldValues extends FieldValues>({
  rules,
  sx,
  disabled,
  control,
  name,
}: IMultiSelectFieldProps<TFieldValues>) => (
  <View sx={sx}>
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <MultiSelect isSelected={value[0].isSelected}>
          {value.map(({ isSelected, name, id, quantity }) => {
            return (
              <MultiSelectItem
                key={id}
                itemText={name}
                onSelectItem={(updatedItem) => {
                  const updatedItems = calculateUpdatedItems(value, {
                    ...updatedItem,
                  })
                  onChange(updatedItems)
                }}
                isSelected={isSelected}
                quantity={quantity}
                id={id}
                onBlur={() => {}}
                disabled={disabled}
              />
            )
          })}
        </MultiSelect>
      )}
    />
  </View>
)
