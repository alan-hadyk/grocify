import { IIconProps } from "@client/components/atoms/Icon/@types"
import { icons } from "@client/components/atoms/Icon/config"
import { useIconState } from "@client/components/atoms/Icon/hooks/useIconState"
import React from "react"
import { Pressable } from "react-native"

export const Icon: React.FC<IIconProps> = ({ size, name, onPress, sizeType, ...svgProps }) => {
  const { Component, height, width } = icons[name]

  const { iconDimensions } = useIconState({
    height,
    size,
    sizeType,
    width,
  })

  const iconProps = {
    ...svgProps,
    height: iconDimensions.height,
    width: iconDimensions.width,
  }

  return onPress ? (
    <Pressable onPress={onPress}>
      <Component {...iconProps} />
    </Pressable>
  ) : (
    <Component {...iconProps} />
  )
}
