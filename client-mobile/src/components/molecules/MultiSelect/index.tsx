import { IMultiSelectProps } from "@client/components/molecules/MultiSelect/@types"
import { multiSelectDefaultStyles } from "@client/components/molecules/MultiSelect/styles"
import { MultiSelectItem } from "@client/components/molecules/MultiSelectItem"
import { View } from "dripsy"
import { useEffect, useState } from "react"

export const MultiSelect: React.FC<IMultiSelectProps> = ({ items, onSelectItem }) => {
  const { wrapper } = multiSelectDefaultStyles
  const [sortedItems, setSortedItems] = useState(items)

  useEffect(() => {
    const selectedItems = items.filter((item) => item.isSelected)
    const unselectedItems = items.filter((item) => !item.isSelected)
    setSortedItems([...selectedItems, ...unselectedItems])
  }, [items])

  return (
    <View sx={wrapper}>
      {sortedItems.map(({ text, id, isSelected }) => (
        <MultiSelectItem
          itemText={text}
          key={text}
          onSelectItem={onSelectItem}
          id={id}
          isSelected={isSelected}
        />
      ))}
    </View>
  )
}
