import { IFooterMenuProps } from "@client/components/molecules/FooterMenu/@types"
import { bottomMenuDefaultStyles } from "@client/components/molecules/FooterMenu/styles"
import { FooterMenuItem } from "@client/components/molecules/FooterMenuItem"
import { View } from "dripsy"

export const FooterMenu: React.FC<IFooterMenuProps> = ({ items }) => {
  return (
    <View sx={bottomMenuDefaultStyles}>
      {items.map(({ href, iconName, text, isActive }) => (
        <FooterMenuItem
          key={text}
          href={href}
          iconName={iconName}
          text={text}
          isActive={isActive}
        />
      ))}
    </View>
  )
}
