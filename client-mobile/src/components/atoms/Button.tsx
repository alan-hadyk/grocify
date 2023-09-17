import { Theme } from "@client/theme"
import {
  useRestyle,
  composeRestyleFunctions,
  createVariant,
  VariantProps,
  SpacingProps,
  spacing,
  ColorProps,
  color,
  LayoutProps,
  layout,
} from "@shopify/restyle"
import { forwardRef } from "react"
import { GestureResponderEvent, Pressable, Text, View } from "react-native"

type IRestyleProps = SpacingProps<Theme> &
  VariantProps<Theme, "buttonVariants"> &
  ColorProps<Theme> &
  LayoutProps<Theme>

const variant = createVariant<Theme, "buttonVariants">({
  themeKey: "buttonVariants",
})

const restyleFunctions = composeRestyleFunctions<Theme, IRestyleProps>([
  spacing,
  variant,
  color,
  layout,
])

type IButtonProps = IRestyleProps & {
  onClick?: () => void
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  title: string
}

// TODO - Dummy component: remove or refactor
const _Button: React.ForwardRefRenderFunction<View, IButtonProps> = (
  { onClick, onPress, title, ...rest },
  ref,
) => {
  const props = useRestyle(restyleFunctions, rest)

  return (
    <Pressable onPress={onPress} {...props} ref={ref}>
      <Text {...props}>{title}</Text>
    </Pressable>
  )
}

export const Button = forwardRef(_Button)
