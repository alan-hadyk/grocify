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
  iconName: name,
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

  /*
    TODO
    Figure out a way to determine the size of the icon.
    Some icons have longer width than height, and some icons
    have longer height than width. For example:
    For `IconButtonSize.Medium`, icon should have a SIZE of 20.
    If the icon's height is longer than width, then height should be 20,
    if the width is longer - then width should be 20
  */

  return (
    <Pressable onPress={onPress}>
      <View sx={wrapperStyles}>
        <Icon name={name} svgProps={mapVariantToIconButtonStyles[variant].icon} />
      </View>
    </Pressable>
  )
}
