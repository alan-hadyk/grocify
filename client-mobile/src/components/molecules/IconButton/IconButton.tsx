import { Icon } from "@client/components/atoms/Icon/Icon"
import {
  IIconButtonProps,
  IconButtonSize,
} from "@client/components/molecules/IconButton/@types/IconButton"
import {
  iconButtonDefaultStyles,
  iconButtonStylesFunctions,
  mapSizeToIconButtonStyles,
} from "@client/components/molecules/IconButton/styles"
import { Theme } from "@client/theme"
import { createBox, useRestyle } from "@shopify/restyle"
import React from "react"
import { View, Pressable } from "react-native"

const Box = createBox<Theme>()

export const IconButton: React.ForwardRefRenderFunction<View, IIconButtonProps> = ({
  onPress,
  iconName: name,
  size = IconButtonSize.Small,
  ...styleProps
}) => {
  const externalStyles = useRestyle(iconButtonStylesFunctions, styleProps)

  const wrapperStyles = {
    ...iconButtonDefaultStyles.wrapper,
    ...mapSizeToIconButtonStyles[size].wrapper,
    ...externalStyles,
  }

  return (
    <Pressable onPress={onPress}>
      <Box alignItems="center" {...wrapperStyles}>
        <Icon name={name} width={24} />
      </Box>
    </Pressable>
  )
}
