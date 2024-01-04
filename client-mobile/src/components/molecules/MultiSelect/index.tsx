import {
  IMultiSelectProps,
  IRenderItem,
  TMultiSelectItemType,
} from "@client/components/molecules/MultiSelect/@types"
import { calculateUpdatedItems } from "@client/components/molecules/MultiSelect/helpers/calculateUpdatedItems"
import { multiSelectDefaultStyles } from "@client/components/molecules/MultiSelect/styles"
import { MultiSelectItem } from "@client/components/molecules/MultiSelectItem"
import { FlashList } from "@shopify/flash-list"
import { View } from "dripsy"
import { useRef } from "react"
import { LayoutAnimation } from "react-native"

export const MultiSelect: React.FC<IMultiSelectProps> = ({
  disabled,
  estimatedItemSize,
  onChange,
  items,
}) => {
  const { wrapper } = multiSelectDefaultStyles
  const listRef = useRef<FlashList<TMultiSelectItemType> | null>(null)

  return (
    <View sx={wrapper}>
      <FlashList
        ref={listRef}
        // This prop is necessary to uniquely identify the elements in the list.
        keyExtractor={(item: TMultiSelectItemType) => item.id}
        data={items}
        renderItem={({ index, item }: IRenderItem) => (
          <MultiSelectItem
            isFirst={index === 0}
            text={item.text}
            textValues={item.textValues}
            onSelectItem={(updatedItem) => {
              const updatedItems = calculateUpdatedItems(items, updatedItem)
              onChange(updatedItems)

              // This must be called before `LayoutAnimation.configureNext` in order for the animation to run properly.
              listRef.current?.prepareForLayoutAnimationRender()
              // After removing the item, we can start the animation.
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
            }}
            isSelected={item.isSelected}
            quantity={item.quantity}
            id={item.id}
            disabled={disabled}
          />
        )}
        estimatedItemSize={estimatedItemSize}
      />
    </View>
  )
}
