import { IconName } from "@client/components/atoms/Icon/@types"
import { Sx } from "dripsy"
import { GestureResponderEvent } from "react-native"

export interface IIconButtonProps {
  disabled?: boolean
  iconName: IconName
  isLoading?: boolean
  onPress?: (event: GestureResponderEvent) => void
  size?: IconButtonSize
  sx?: Sx
  variant?: IconButtonVariant
}

export enum IconButtonSize {
  Small,
  Medium,
}

export enum IconButtonVariant {
  GraySecondary,
  GreenPrimary,
  GreenSecondary,
  RedSecondary,
}
