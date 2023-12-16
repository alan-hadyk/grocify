import { IFooterMenuProps } from "@client/components/molecules/FooterMenu/@types"
import { footerMenuDefaultStyles } from "@client/components/molecules/FooterMenu/styles"
import { FooterMenuItem } from "@client/components/molecules/FooterMenuItem"
import { View } from "dripsy"
import { useTranslation } from "react-i18next"
import { DimensionValue } from "react-native"

export const FooterMenu: React.FC<IFooterMenuProps> = ({ items }) => {
  const { t } = useTranslation()
  const flexBasis = 100 / items.length + "%"

  return (
    <View sx={footerMenuDefaultStyles}>
      {items.map(({ href, iconName, label, isActive }) => (
        <FooterMenuItem
          key={label}
          href={href}
          iconName={iconName}
          label={t(label)}
          isActive={isActive}
          style={{ flexBasis: flexBasis as DimensionValue }}
        />
      ))}
    </View>
  )
}
