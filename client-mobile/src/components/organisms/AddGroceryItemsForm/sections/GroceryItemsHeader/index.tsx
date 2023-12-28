import { IconName } from "@client/components/atoms/Icon/@types"
import { IconButton } from "@client/components/molecules/IconButton"
import { IconButtonSize, IconButtonVariant } from "@client/components/molecules/IconButton/@types"
import { Input } from "@client/components/molecules/Input"
import { IGroceryItemsHeaderProps } from "@client/components/organisms/AddGroceryItemsForm/sections/GroceryItemsHeader/@types"
import { groceryItemsHeaderDefaultStyles } from "@client/components/organisms/AddGroceryItemsForm/sections/GroceryItemsHeader/styles"
import { View } from "dripsy"

export const GroceryItemsHeader: React.FC<IGroceryItemsHeaderProps> = ({
  nameValue,
  onSetNameValue,
  unitValue,
  onSetUnitValue,
}) => {
  const { wrapper, nameInput, unitInput, iconButton } = groceryItemsHeaderDefaultStyles

  return (
    <View sx={wrapper}>
      <Input
        value={nameValue}
        onChangeText={onSetNameValue}
        placeholder="e.g., onion"
        label="Name"
        iconName={IconName.Tag}
        sx={nameInput}
      />
      <Input
        value={unitValue}
        onChangeText={onSetUnitValue}
        placeholder="pcs, etc."
        label="Unit shortcut"
        iconName={IconName.Ruler}
        sx={unitInput}
      />
      <IconButton
        iconName={IconName.Plus}
        size={IconButtonSize.Medium}
        variant={IconButtonVariant.GreenPrimary}
        sx={iconButton}
        disabled={nameValue === ""}
      />
    </View>
  )
}
