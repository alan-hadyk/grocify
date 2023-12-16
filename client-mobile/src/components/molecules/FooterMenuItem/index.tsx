import { Icon } from "@client/components/atoms/Icon"
import { SizeType } from "@client/components/atoms/Icon/@types"
import { Typography } from "@client/components/atoms/Typography"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { IFooterMenuItemProps } from "@client/components/molecules/FooterMenuItem/@types"
import { footerMenuItemStyles } from "@client/components/molecules/FooterMenuItem/styles"
import { ColorPalette } from "@client/theme/@types"
import { Pressable } from "dripsy"
import { Link } from "expo-router"

export const FooterMenuItem: React.FC<IFooterMenuItemProps> = ({
  href,
  iconName,
  label,
  isActive = false,
  style,
}) => (
  <Link href={href} asChild style={style}>
    <Pressable sx={footerMenuItemStyles({ isActive }).wrapper}>
      <Icon
        name={iconName}
        color={isActive ? ColorPalette.Black400 : ColorPalette.Gray300}
        size={32}
        sizeType={SizeType.Height}
        backgroundColor={isActive ? ColorPalette.Green400 : ColorPalette.White}
      />
      <Typography
        variant={isActive ? TypographyVariant.FooterMenu : TypographyVariant.FooterMenuInactive}
        sx={footerMenuItemStyles({ isActive }).label}
        text={label}
      />
    </Pressable>
  </Link>
)
