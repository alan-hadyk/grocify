import loader from "@client/assets/animations/loader.json"
import { StyledLottieView } from "@client/components/animations/StyledLottieView"
import { Icon } from "@client/components/atoms/Icon"
import {
  IIconButtonProps,
  IconButtonSize,
  IconButtonVariant,
} from "@client/components/molecules/IconButton/@types"
import {
  iconButtonDefaultStyles,
  mapSizeToIconButtonStyles,
  mapVariantToIconButtonStyles,
} from "@client/components/molecules/IconButton/styles"
import { Sx, View } from "dripsy"
import { View as RnView, Pressable } from "react-native"

export const IconButton: React.ForwardRefRenderFunction<RnView, IIconButtonProps> = ({
  disabled = false,
  onPress,
  iconName,
  isLoading = false,
  size = IconButtonSize.Small,
  sx,
  variant = IconButtonVariant.GreenPrimary,
}) => {
  const { loader: loaderStyles, wrapper } = iconButtonDefaultStyles
  const wrapperStyles: Sx = {
    ...wrapper,
    ...mapSizeToIconButtonStyles[size].wrapper,
    ...mapVariantToIconButtonStyles({ disabled })[variant].wrapper,
    ...sx,
  }

  const iconProps = {
    ...mapSizeToIconButtonStyles[size].icon,
    ...mapVariantToIconButtonStyles({ disabled })[variant].icon,
  }

  const renderLoader = () => <StyledLottieView source={loader} autoPlay loop sx={loaderStyles} />

  return (
    <Pressable onPress={onPress}>
      <View sx={wrapperStyles}>
        {isLoading ? renderLoader() : <Icon name={iconName} {...iconProps} />}
      </View>
    </Pressable>
  )
}
