import { IconName } from "@client/components/atoms/Icon/@types"
import { ITranslation } from "@client/translations/@types"
import { Sx } from "dripsy"
import { GestureResponderEvent } from "react-native"

export enum ButtonVariant {
  GreenPrimary,
  GreenSecondary,
  RedPrimary,
  RedSecondary,
  BlueSecondary,
  BlackSecondary,
}

export enum ButtonIconPlacement {
  Right,
  Left,
}

export enum ButtonSize {
  LargeFlexible,
  LargeFixed,
  LargeRectangular,
  SmallFlexible,
  SmallFixed,
}

export interface IButtonProps {
  text: keyof ITranslation
  disabled?: boolean
  iconName?: IconName
  onPress?: (event: GestureResponderEvent) => void
  iconPlacement?: ButtonIconPlacement
  size?: ButtonSize
  variant?: ButtonVariant
  sx?: Sx
  isLoading?: boolean
}
