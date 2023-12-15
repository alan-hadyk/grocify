import { IconName } from "@client/components/atoms/Icon/@types"
import { ExpandableInput } from "@client/components/molecules/ExpandableInput"
import { IHeaderProps } from "@client/components/molecules/Header/@types"
import { headerDefaultStyles } from "@client/components/molecules/Header/styles"
import { IconButton } from "@client/components/molecules/IconButton"
import { IconButtonSize, IconButtonVariant } from "@client/components/molecules/IconButton/@types"
import { View } from "dripsy"

export const Header: React.FC<IHeaderProps> = ({ searchInputValue, onSearchInputValueChange }) => (
  <View sx={headerDefaultStyles.wrapper}>
    <ExpandableInput value={searchInputValue} onChangeText={onSearchInputValueChange} />
    <IconButton
      iconName={IconName.Bell}
      size={IconButtonSize.Medium}
      variant={IconButtonVariant.GraySecondary}
    />
  </View>
)
