import { Icon } from "@client/components/atoms/Icon/Icon"
import {
  IIconButtonProps,
  IconButtonSize,
  IconButtonVariant,
} from "@client/components/molecules/IconButton/@types/IconButton"
import {
  iconButtonDefaultStyles,
  mapSizeToIconButtonStyles,
  mapVariantToIconButtonStyles,
} from "@client/components/molecules/IconButton/styles"
import { Sx, View } from "dripsy"
import React from "react"
import { View as RnView, Pressable } from "react-native"

export const IconButton: React.ForwardRefRenderFunction<RnView, IIconButtonProps> = ({
  onPress,
  iconName,
  size = IconButtonSize.Small,
  sx,
  variant = IconButtonVariant.GreenPrimary,
}) => {
  const wrapperStyles: Sx = {
    ...iconButtonDefaultStyles.wrapper,
    ...mapSizeToIconButtonStyles[size].wrapper,
    ...mapVariantToIconButtonStyles[variant].wrapper,
    ...sx,
  }

  const iconProps = {
    ...mapSizeToIconButtonStyles[size].icon,
    ...mapVariantToIconButtonStyles[variant].icon,
  }

  return (
    <Pressable onPress={onPress}>
      <View sx={wrapperStyles}>
        <Icon name={iconName} {...iconProps} />
      </View>
    </Pressable>
  )
}
