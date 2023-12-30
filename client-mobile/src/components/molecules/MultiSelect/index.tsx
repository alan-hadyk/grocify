import { IMultiSelectProps } from "@client/components/molecules/MultiSelect/@types"
import { multiSelectDefaultStyles } from "@client/components/molecules/MultiSelect/styles"
import { MultiSelectItem } from "@client/components/molecules/MultiSelectItem"
import { View } from "dripsy"

export const MultiSelect: React.FC<IMultiSelectProps> = ({ items, onSelectItem }) => {
  const { wrapper } = multiSelectDefaultStyles

  return (
    <View sx={wrapper}>
      {items.map(({ text, isSelected, id }) => (
        <MultiSelectItem
          itemText={text}
          isSelected={isSelected}
          key={text}
          onSelectItem={onSelectItem}
          id={id}
        />
      ))}
    </View>
  )
}
