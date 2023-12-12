import { IIconProps } from "@client/components/atoms/Icon/@types"
import { icons } from "@client/components/atoms/Icon/config"
import { useIconState } from "@client/components/atoms/Icon/hooks/useIconState"
import React from "react"
import { Pressable } from "react-native"

export const Icon: React.FC<IIconProps> = ({ size, name, onPress, ...svgProps }) => {
  const { Component, height, width } = icons[name]

  const { iconDimensions } = useIconState({
    height,
    size,
    width,
  })

  return onPress ? (
    <Pressable onPress={onPress}>
      <Component {...svgProps} width={iconDimensions.width} height={iconDimensions.height} />
    </Pressable>
  ) : (
    <Component {...svgProps} width={iconDimensions.width} height={iconDimensions.height} />
  )
}
