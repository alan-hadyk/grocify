import { IIconProps } from "@client/components/atoms/Icon/@types/Icon"
import { icons } from "@client/components/atoms/Icon/config"
import React, { useLayoutEffect, useState } from "react"
import { Pressable } from "react-native"

export const Icon: React.FC<IIconProps> = ({ size, name, onPress, ...svgProps }) => {
  const { Component, height, width } = icons[name]
  const [iconWidth, setIconWidth] = useState<number>(0)
  const [iconHeight, setIconHeight] = useState<number>(0)

  useLayoutEffect(() => {
    const _iconHeight = (height * size) / width
    const _iconWidth = (width * size) / height

    if (height > 0 && width > 0) {
      if (width > height) {
        setIconWidth(size)
        setIconHeight(_iconHeight)
      }

      if (height > width) {
        setIconWidth(_iconWidth)
        setIconHeight(size)
      }
    }
  }, [height, width])

  return (
    <Pressable onPress={onPress}>
      <Component {...svgProps} width={iconWidth} height={iconHeight} />
    </Pressable>
  )
}
