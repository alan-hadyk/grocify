import { Sx } from "dripsy"
import { MotiProps } from "moti"
import { ReactNode } from "react"

export interface IAnimatedViewProps {
  children: ReactNode | ReactNode[]
  onPress: () => void
  animate?: any
  exitTransition: MotiProps["exitTransition"]
  from?: any
  transition: MotiProps["transition"]
  sx: Sx
}
