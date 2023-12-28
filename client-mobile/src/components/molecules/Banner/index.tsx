import { Icon } from "@client/components/atoms/Icon"
import { IconName } from "@client/components/atoms/Icon/@types"
import { Typography } from "@client/components/atoms/Typography"
import { BannerVariant, IBannerProps } from "@client/components/molecules/Banner/@types"
import {
  bannerDefaultStyles,
  mapBannerVariantToIconStyles,
  mapVariantToBannerStyles,
} from "@client/components/molecules/Banner/styles"
import { View } from "dripsy"

export const Banner: React.FC<IBannerProps> = ({
  variant = BannerVariant.BlueSecondary,
  sx,
  text,
}) => {
  const { wrapper, text: textStyles } = bannerDefaultStyles
  const bannerStyles = {
    ...wrapper,
    ...mapVariantToBannerStyles[variant],
    ...sx,
  }

  return (
    <View sx={bannerStyles}>
      <Icon name={IconName.Bulb} color={mapBannerVariantToIconStyles[variant]} size={23} />
      <Typography text={text} sx={textStyles} />
    </View>
  )
}
