import { IconName } from "@client/components/atoms/Icon/@types/Icon"
import { ExpandableInput } from "@client/components/molecules/ExpandableInput/ExpandableInput"
import { IHeaderProps } from "@client/components/molecules/Header/@types/Header"
import { headerDefaultStyles } from "@client/components/molecules/Header/styles"
import {
  IconButtonSize,
  IconButtonVariant,
} from "@client/components/molecules/IconButton/@types/IconButton"
import { IconButton } from "@client/components/molecules/IconButton/IconButton"
import { View } from "dripsy"
import { useState } from "react"

export const Header: React.FC<IHeaderProps> = () => {
  const [value, setSearchPhrase] = useState<string>("")

  return (
    <View sx={headerDefaultStyles.wrapper}>
      <ExpandableInput value={value} onChangeText={setSearchPhrase} />
      <IconButton
        iconName={IconName.Bell}
        size={IconButtonSize.Medium}
        variant={IconButtonVariant.GraySecondary}
      />
    </View>
  )
}
