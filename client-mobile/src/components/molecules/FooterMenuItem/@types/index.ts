import { IconName } from "@client/components/atoms/Icon/@types"
import { Path } from "@client/routing/paths"
import { ITranslation } from "@client/translations/@types"
import { StyleProp, ViewStyle } from "react-native"

export interface IFooterMenuItemProps {
  href: Path
  iconName: IconName
  isActive?: boolean
  label: keyof ITranslation
  style?: StyleProp<ViewStyle>
}
