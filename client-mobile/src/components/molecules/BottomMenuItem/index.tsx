import { Icon } from "@client/components/atoms/Icon"
import { Typography } from "@client/components/atoms/Typography"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { IBottomMenuItemProps } from "@client/components/molecules/BottomMenuItem/@types"
import {
  bottomMenuItemDefaultStyles,
  bottomMenuItemStyles,
} from "@client/components/molecules/BottomMenuItem/styles"
import { ColorPalette } from "@client/theme/@types"
import { Pressable, View } from "dripsy"
import { Link } from "expo-router"
import { useTranslation } from "react-i18next"

export const BottomMenuItem: React.FC<IBottomMenuItemProps> = ({
  href,
  iconName,
  text,
  isActive,
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
        <View sx={bottomMenuItemDefaultStyles}>
          <Icon name={iconName} color={ColorPalette.Green400} size={32} />
          <Typography variant={TypographyVariant.FooterMenu} sx={bottomMenuItemStyles.text}>
            {t(text)}
          </Typography>
        </View>
      </Pressable>
    </Link>
  )
}
