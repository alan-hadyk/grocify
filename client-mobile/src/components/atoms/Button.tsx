import { Theme } from "@client/theme"
import {
  useRestyle,
  composeRestyleFunctions,
  createVariant,
  VariantProps,
  SpacingProps,
  spacing,
} from "@shopify/restyle"
import { GestureResponderEvent, Pressable, Text } from "react-native"

type IRestyleProps = SpacingProps<Theme> & VariantProps<Theme, "buttonVariants">

const variant = createVariant<Theme, "buttonVariants">({
  themeKey: "buttonVariants",
})

const restyleFunctions = composeRestyleFunctions<Theme, IRestyleProps>([spacing, variant])

type IButtonProps = IRestyleProps & {
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  title: string
}

// TODO - Dummy component: remove
export const Button: React.FC<IButtonProps> = ({ onPress, title, ...rest }) => {
  const props = useRestyle(restyleFunctions, rest)

  return (
    <Pressable onPress={onPress} {...props}>
      <Text {...props}>{title}</Text>
    </Pressable>
  )
}
