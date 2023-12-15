import { Sx } from "dripsy"
import { MotiProps } from "moti"
import { ReactNode } from "react"
import { LayoutChangeEvent } from "react-native"

type TWithBorderRadius<T> = Omit<T, "borderBottomLeftRadius"> & {
  borderBottomLeftRadius?: number
}

export interface IAnimatedViewProps {
  animate?: TWithBorderRadius<MotiProps["animate"]>
  children: ReactNode | ReactNode[]
  exit?: MotiProps["exit"]
  exitTransition?: MotiProps["exitTransition"]
  from?: TWithBorderRadius<MotiProps["from"]>
  isVisible?: boolean
  onPress?: () => void
  onLayout?: (event: LayoutChangeEvent) => void
  sx?: Sx
  transition?: MotiProps["transition"]
}
