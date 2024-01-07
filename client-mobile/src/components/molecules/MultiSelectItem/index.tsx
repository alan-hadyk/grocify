import { Icon } from "@client/components/atoms/Icon"
import { IconName } from "@client/components/atoms/Icon/@types"
import { Typography } from "@client/components/atoms/Typography"
import { Counter } from "@client/components/molecules/Counter"
import { IMultiSelectItemProps } from "@client/components/molecules/MultiSelectItem/@types"
import { useMultiSelectItemState } from "@client/components/molecules/MultiSelectItem/hooks/useMultiSelectItemState"
import { multiSelectItemDefaultStyles } from "@client/components/molecules/MultiSelectItem/styles"
import { ColorPalette } from "@client/theme/@types"
import { Pressable, View } from "dripsy"

export const MultiSelectItem: React.FC<IMultiSelectItemProps> = ({
  disabled,
  id,
  isFirst = false,
  isSelected = false,
  onSelectItem,
  quantity,
  text,
  textValues,
}) => {
  const { checkboxWrapper, wrapper, unitWrapper } = multiSelectItemDefaultStyles({
    isFirst,
    isSelected,
  })

  const { handleMultiSelectItemPress, handleQuantityChange } = useMultiSelectItemState({
    id,
    isSelected,
    onSelectItem,
    quantity,
  })

  return (
    <Pressable sx={wrapper} onPress={disabled ? undefined : handleMultiSelectItemPress}>
      <View sx={unitWrapper}>
        <View sx={checkboxWrapper}>
          {isSelected && <Icon name={IconName.Check} color={ColorPalette.Black400} size={15} />}
        </View>
        <Typography text={text} textValues={textValues} />
      </View>
      {isSelected && (
        <Counter
          value={String(quantity)}
          onChange={handleQuantityChange}
          onBlur={handleQuantityChange}
          disabled={disabled}
        />
      )}
    </Pressable>
  )
}
