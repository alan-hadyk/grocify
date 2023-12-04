import { IIconProps } from "@client/components/atoms/Icon/@types/Icon"
import { icons } from "@client/components/atoms/Icon/config"
import React, { forwardRef } from "react"
import { View, Pressable } from "react-native"

const _Icon: React.ForwardRefRenderFunction<View, IIconProps> = (
  { name, onPress, svgProps },
  ref,
) => {
  const IconComponent = icons[name]

  /*
    TODO
    Figure out a way to determine the size of the icon.
    Some icons have longer width than height, and some icons
    have longer height than width.
    There should be a way to set the LONGER dimension of the icon,
    via an external prop. Maybe this could be calculated via `ref`?
  */

  const iconProps = {
    ...svgProps,
    color: svgProps.color,
    height: svgProps.height || 20,
    width: svgProps.width || 20,
  }

  return (
    <Pressable onPress={onPress} ref={ref}>
      <IconComponent {...iconProps} />
    </Pressable>
  )
}

export const Icon = forwardRef(_Icon)
