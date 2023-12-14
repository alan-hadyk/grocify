import { ColorPalette } from "@client/theme/@types"
import { StyleProp, ViewStyle } from "react-native"

export interface IIconProps {
  backgroundColor?: ColorPalette
  color: ColorPalette
  height?: number
  width?: number
  style?: StyleProp<ViewStyle>
}
