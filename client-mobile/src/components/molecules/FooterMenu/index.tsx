import { IFooterMenuProps } from "@client/components/molecules/FooterMenu/@types"
import { footerMenuDefaultStyles } from "@client/components/molecules/FooterMenu/styles"
import { FooterMenuItem } from "@client/components/molecules/FooterMenuItem"
import { View } from "dripsy"
import { DimensionValue } from "react-native"

export const FooterMenu: React.FC<IFooterMenuProps> = ({ items }) => {
  const flexBasis = 100 / items.length + "%"
  const { menu, wrapper } = footerMenuDefaultStyles

  return (
    <View sx={wrapper}>
      <View sx={menu}>
        {items.map(({ href, iconName, label, isActive }) => (
          <FooterMenuItem
            key={label}
            href={href}
            iconName={iconName}
            label={label}
            isActive={isActive}
            style={{ flexBasis: flexBasis as DimensionValue }}
          />
        ))}
      </View>
    </View>
  )
}
