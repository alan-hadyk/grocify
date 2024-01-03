import { Icon } from "@client/components/atoms/Icon"
import { IconName } from "@client/components/atoms/Icon/@types"
import { Typography } from "@client/components/atoms/Typography"
import { Counter } from "@client/components/molecules/Counter"
import { IMultiSelectItemProps } from "@client/components/molecules/MultiSelectItem/@types"
import { multiSelectItemDefaultStyles } from "@client/components/molecules/MultiSelectItem/styles"
import { ColorPalette } from "@client/theme/@types"
import { Pressable, View } from "dripsy"

export const MultiSelectItem: React.FC<IMultiSelectItemProps> = ({
  itemText,
  isSelected,
  onSelectItem,
  id,
  quantity,
  onBlur,
  disabled,
}) => {
  const { checkboxWrapper, wrapper, unitWrapper } = multiSelectItemDefaultStyles({ isSelected })
  const handleMultiSelectItemPress = () => {
    onSelectItem({
      id,
      isSelected: !isSelected,
      quantity,
    })
  }

  return (
    <Pressable sx={wrapper} onPress={handleMultiSelectItemPress}>
      <View sx={unitWrapper}>
        <View sx={checkboxWrapper}>
          {isSelected && <Icon name={IconName.Check} color={ColorPalette.Black400} size={15} />}
        </View>
        <Typography text={itemText} />
      </View>
      {isSelected && (
        <Counter
          value={String(quantity)}
          onChange={(quantity) =>
            onSelectItem({
              id,
              isSelected,
              quantity: Number(quantity),
            })
          }
          onBlur={(quantity) => onBlur(id, Number(quantity))}
          disabled={disabled}
        />
      )}
    </Pressable>
  )
}
