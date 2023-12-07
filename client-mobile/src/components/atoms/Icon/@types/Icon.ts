import { GestureResponderEvent } from "react-native"
import { SvgProps } from "react-native-svg"

export enum IconName {
  Clear,
  Search,
  Bell,
}

export type IIconProps = Required<Pick<SvgProps, "color">> &
  Partial<Omit<SvgProps, "color">> & {
    name: IconName
    onPress?: (event: GestureResponderEvent) => void
    size: number
  }
