import { ColorPalette } from "@client/theme/@types"
import { GestureResponderEvent } from "react-native"
import { SvgProps } from "react-native-svg"

export enum IconName {
  User,
  Close,
  Search,
  Bell,
  List,
  Plus,
  Recipe,
  ArrowLeft,
  Remove,
  Copy,
  Reuse,
  Calendar,
  Burger,
}

export enum SizeType {
  Height,
  Width,
  Auto,
}

export type IIconProps = Partial<Omit<SvgProps, "color" | "height" | "width">> & {
  color: ColorPalette
  backgroundColor?: ColorPalette
  name: IconName
  onPress?: (event: GestureResponderEvent) => void
  size: number
  sizeType?: SizeType
}

export interface IIconState {
  size: number
  height: number
  width: number
  sizeType?: SizeType
}
