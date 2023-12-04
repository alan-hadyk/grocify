import { GestureResponderEvent } from "react-native"
import { SvgProps } from "react-native-svg"

export enum IconName {
  Clear,
  Search,
  Bell,
}

export interface IIconProps {
  name: IconName
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  svgProps: Required<Pick<SvgProps, "color">> & Partial<Omit<SvgProps, "color">>
}
