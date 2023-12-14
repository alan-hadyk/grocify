import { Icon } from "@client/components/atoms/Icon"
import { SizeType } from "@client/components/atoms/Icon/@types"
import { Typography } from "@client/components/atoms/Typography"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { IFooterMenuItemProps } from "@client/components/molecules/FooterMenuItem/@types"
import {
  footerMenuItemDefaultStyles,
  footerMenuItemStyles,
} from "@client/components/molecules/FooterMenuItem/styles"
import { ColorPalette } from "@client/theme/@types"
import { Pressable, View } from "dripsy"
import { Link } from "expo-router"
import { useTranslation } from "react-i18next"

export const FooterMenuItem: React.FC<IFooterMenuItemProps> = ({
  href,
  iconName,
  text,
  isActive = false,
}) => {
  const { t } = useTranslation()

  return (
    <Link
      href={href}
      asChild
      style={{
        flexBasis: "33.33%",
        height: 80,
      }}>
      <Pressable>
        <View sx={footerMenuItemDefaultStyles}>
          <Icon
            name={iconName}
            color={isActive ? ColorPalette.Black400 : ColorPalette.Gray300}
            size={32}
            sizeType={SizeType.Height}
            backgroundColor={isActive ? ColorPalette.Green400 : ColorPalette.White}
          />
          <Typography
            variant={TypographyVariant.FooterMenu}
            sx={footerMenuItemStyles({ isActive }).text}>
            {t(text)}
          </Typography>
        </View>
      </Pressable>
    </Link>
  )
}
