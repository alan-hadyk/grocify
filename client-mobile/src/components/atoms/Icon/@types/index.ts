import { GestureResponderEvent } from "react-native"
import { SvgProps } from "react-native-svg"

export enum IconName {
  Account,
  Clear,
  Search,
  Bell,
  List,
  Plus,
  Recipes,
}

export type IIconProps = Partial<Omit<SvgProps, "color" | "height" | "width">> & {
  color: SvgProps["color"]
  name: IconName
  onPress?: (event: GestureResponderEvent) => void
  size: number
}

export interface IIconState {
  size: number
  height: number
  width: number
}
