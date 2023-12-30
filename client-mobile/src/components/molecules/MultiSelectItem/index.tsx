import { Icon } from "@client/components/atoms/Icon"
import { IconName } from "@client/components/atoms/Icon/@types"
import { Typography } from "@client/components/atoms/Typography"
import { IMultiSelectItemProps } from "@client/components/molecules/MultiSelectItem/@types"
import { multiSelectItemDefaultStyles } from "@client/components/molecules/MultiSelectItem/styles"
import { ColorPalette } from "@client/theme/@types"
import { Pressable, View } from "dripsy"

export const MultiSelectItem: React.FC<IMultiSelectItemProps> = ({
  itemText,
  isSelected,
  onSelectItem,
  id,
}) => {
  const { checkboxWrapper, wrapper } = multiSelectItemDefaultStyles({ isSelected })

  return (
    <Pressable sx={wrapper} onPress={() => onSelectItem(id)}>
      <View sx={checkboxWrapper}>
        {isSelected && <Icon name={IconName.Check} color={ColorPalette.Black400} size={15} />}
      </View>
      <Typography text={itemText} />
    </Pressable>
  )
}
