import loader from "@client/assets/animations/loader.json"
import { StyledLottieView } from "@client/components/animations/StyledLottieView"
import { Icon } from "@client/components/atoms/Icon"
import { IconSizeType } from "@client/components/atoms/Icon/@types"
import { Typography } from "@client/components/atoms/Typography"
import {
  ButtonIconPlacement,
  ButtonSize,
  ButtonVariant,
  IButtonProps,
} from "@client/components/molecules/Button/@types"
import {
  buttonDefaultStyles,
  mapButtonSizeTextVariant,
  mapButtonVariantToIconStyles,
  mapSizeToButtonIconStyles,
  mapSizeToButtonStyles,
  mapVariantToButtonStyles,
} from "@client/components/molecules/Button/styles"
import { Pressable } from "dripsy"
import { forwardRef } from "react"
import { View as RnView } from "react-native"

const _Button: React.ForwardRefRenderFunction<RnView, IButtonProps> = (
  {
    text,
    disabled = false,
    iconName,
    onPress,
    size = ButtonSize.LargeFlexible,
    variant = ButtonVariant.GreenPrimary,
    iconPlacement = ButtonIconPlacement.Right,
    sx,
    isLoading = false,
  },
  ref,
) => {
  const { loader: loaderStyles, wrapper } = buttonDefaultStyles
  const buttonStyles = {
    ...wrapper,
    ...mapVariantToButtonStyles({ disabled: disabled || isLoading })[variant],
    ...mapSizeToButtonStyles[size],
    ...sx,
  }

  const renderIcon = () =>
    iconName ? (
      <Icon
        name={iconName}
        color={mapButtonVariantToIconStyles({ disabled: disabled || isLoading })[variant]}
        size={mapSizeToButtonIconStyles[size]}
        sizeType={
          [ButtonSize.LargeFlexible, ButtonSize.LargeFixed].includes(size)
            ? IconSizeType.Height
            : IconSizeType.Auto
        }
      />
    ) : null

  const renderLoader = () => <StyledLottieView source={loader} autoPlay loop sx={loaderStyles} />

  const _iconPlacement =
    size === ButtonSize.LargeRectangular ? ButtonIconPlacement.Left : iconPlacement

  return (
    <Pressable onPress={onPress} ref={ref} disabled={disabled || isLoading} sx={buttonStyles}>
      {_iconPlacement === ButtonIconPlacement.Left && (isLoading ? renderLoader() : renderIcon())}
      <Typography variant={mapButtonSizeTextVariant[size]} text={text} />
      {_iconPlacement === ButtonIconPlacement.Right && (isLoading ? renderLoader() : renderIcon())}
    </Pressable>
  )
}

export const Button = forwardRef(_Button)
