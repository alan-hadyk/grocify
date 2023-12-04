import { IconName } from "@client/components/atoms/Icon/@types/Icon"
import { Theme } from "@client/theme"
import { SpacingProps, VariantProps, ColorProps, LayoutProps, BorderProps } from "@shopify/restyle"
import { GestureResponderEvent } from "react-native"

export type IIconButtonProps = IIconButtonStyleProps & {
  iconName: IconName
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  size?: IconButtonSize
}

export type IIconButtonStyleProps = SpacingProps<Theme> &
  VariantProps<Theme, "iconButtonVariants"> &
  ColorProps<Theme> &
  LayoutProps<Theme>

export enum IconButtonSize {
  Small,
  Medium,
}

export interface IIconButtonDefaultStyles {
  wrapper: LayoutProps<Theme> & BorderProps<Theme>
}
