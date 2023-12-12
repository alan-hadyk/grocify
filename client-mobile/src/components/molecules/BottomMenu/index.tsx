import { IBottomMenuProps } from "@client/components/molecules/BottomMenu/@types"
import { bottomMenuItems } from "@client/components/molecules/BottomMenu/config"
import { bottomMenuDefaultStyles } from "@client/components/molecules/BottomMenu/styles"
import { BottomMenuItem } from "@client/components/molecules/BottomMenuItem"
import { View } from "dripsy"

export const BottomMenu: React.FC<IBottomMenuProps> = () => {
  return (
    <View sx={bottomMenuDefaultStyles}>
      {bottomMenuItems.map(({ href, iconName, text }) => (
        <BottomMenuItem key={text} href={href} iconName={iconName} text={text} isActive={false} />
      ))}
    </View>
  )
}
