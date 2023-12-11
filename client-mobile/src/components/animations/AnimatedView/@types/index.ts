import { Sx } from "dripsy"
import { MotiProps } from "moti"
import { ReactNode } from "react"
import { LayoutChangeEvent } from "react-native"

type TWithBorderRadius<T> = Omit<T, "borderBottomLeftRadius"> & {
  borderBottomLeftRadius?: number
}

export interface IAnimatedViewProps {
  children: ReactNode | ReactNode[]
  onPress: () => void
  onLayout?: (event: LayoutChangeEvent) => void
  animate?: TWithBorderRadius<MotiProps["animate"]>
  exitTransition: MotiProps["exitTransition"]
  from?: TWithBorderRadius<MotiProps["from"]>
  transition: MotiProps["transition"]
  sx: Sx
}
