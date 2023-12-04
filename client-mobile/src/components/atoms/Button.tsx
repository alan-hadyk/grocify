import { Sx, Text } from "dripsy"
import { forwardRef } from "react"
import { GestureResponderEvent, Pressable, View } from "react-native"

type IButtonProps = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  sx?: Sx
  title: string
}

// TODO - Dummy component: remove or refactor
const _Button: React.ForwardRefRenderFunction<View, IButtonProps> = (
  { onPress, title, sx },
  ref,
) => (
  <Pressable onPress={onPress} ref={ref}>
    <Text sx={sx}>{title}</Text>
  </Pressable>
)

export const Button = forwardRef(_Button)
