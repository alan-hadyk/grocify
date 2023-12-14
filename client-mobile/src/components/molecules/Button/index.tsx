import { Icon } from "@client/components/atoms/Icon"
import { SizeType } from "@client/components/atoms/Icon/@types"
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
    buttonText,
    isDisabled = false,
    iconName,
    onPress,
    size = ButtonSize.LargeFlexible,
    variant = ButtonVariant.GreenPrimary,
    iconPlacement = ButtonIconPlacement.Right,
    sx,
  },
  ref,
) => {
  const buttonStyles = {
    ...buttonDefaultStyles,
    ...mapVariantToButtonStyles({ isDisabled })[variant],
    ...mapSizeToButtonStyles[size],
    ...sx,
  }

  const renderIcon = () =>
    iconName ? (
      <Icon
        name={iconName}
        color={mapButtonVariantToIconStyles({ isDisabled })[variant]}
        size={mapSizeToButtonIconStyles[size]}
        sizeType={
          [ButtonSize.LargeFlexible, ButtonSize.LargeFixed].includes(size)
            ? SizeType.Height
            : SizeType.Auto
        }
      />
    ) : null

  const _iconPlacement =
    size === ButtonSize.LargeRectangular ? ButtonIconPlacement.Left : iconPlacement

  return (
    <Pressable onPress={onPress} ref={ref} disabled={isDisabled} sx={buttonStyles}>
      {_iconPlacement === ButtonIconPlacement.Left && renderIcon()}
      <Typography variant={mapButtonSizeTextVariant[size]}>{buttonText}</Typography>
      {_iconPlacement === ButtonIconPlacement.Right && renderIcon()}
    </Pressable>
  )
}

export const Button = forwardRef(_Button)
