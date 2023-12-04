import { IIconProps } from "@client/components/atoms/Icon/@types/Icon"
import { icons } from "@client/components/atoms/Icon/config"
import { iconStylesFunctions } from "@client/components/atoms/Icon/styles"
import { useRestyle } from "@shopify/restyle"
import React, { forwardRef } from "react"
import { View, Pressable } from "react-native"

const _Icon: React.ForwardRefRenderFunction<View, IIconProps> = (
  { name, onPress, ...styleProps },
  ref,
) => {
  const styles = useRestyle(iconStylesFunctions, styleProps)
  const IconComponent = icons[name]

  const iconStyles = {
    ...styles,
    fill: styles.color,
    height: typeof styles.height === "number" ? styles.height : 20,
    width: typeof styles.width === "number" ? styles.width : 20,
  }

  console.log("iconStyles", iconStyles)

  return (
    <Pressable onPress={onPress} ref={ref}>
      <IconComponent {...iconStyles} />
    </Pressable>
  )
}

export const Icon = forwardRef(_Icon)
