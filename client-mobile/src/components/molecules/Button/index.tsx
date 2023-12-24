import loader from "@client/assets/animations/loader.json"
import { StyledLottieView } from "@client/components/animations/StyledLottieView"
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
  const buttonStyles = {
    ...buttonDefaultStyles,
    ...mapVariantToButtonStyles({ disabled })[variant],
    ...mapSizeToButtonStyles[size],
    ...sx,
  }

  const renderIcon = () =>
    iconName ? (
      <Icon
        name={iconName}
        color={mapButtonVariantToIconStyles({ disabled })[variant]}
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
    <Pressable onPress={onPress} ref={ref} disabled={disabled} sx={buttonStyles}>
      {isLoading ? (
        <StyledLottieView
          source={loader}
          autoPlay
          loop
          sx={{
            height: 20,
            width: 20,
          }}
        />
      ) : (
        <>
          {_iconPlacement === ButtonIconPlacement.Left && renderIcon()}
          <Typography variant={mapButtonSizeTextVariant[size]} text={text} />
          {_iconPlacement === ButtonIconPlacement.Right && renderIcon()}
        </>
      )}
    </Pressable>
  )
}

export const Button = forwardRef(_Button)
