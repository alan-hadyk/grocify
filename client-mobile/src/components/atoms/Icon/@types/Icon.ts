import { Theme } from "@client/theme"
import { SpacingProps, ColorProps, LayoutProps } from "@shopify/restyle"
import { GestureResponderEvent } from "react-native"

export enum IconName {
  Clear,
  Search,
  Bell,
}

export type IIconProps = IIconStyleProps & {
  name: IconName
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export type IIconStyleProps = SpacingProps<Theme> & ColorProps<Theme> & LayoutProps<Theme>
