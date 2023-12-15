import { IconName } from "@client/components/atoms/Icon/@types"
import { Path } from "@client/containers/FooterContainer/config"
import { ITranslation } from "@client/translations/@types"
import { StyleProps } from "react-native-reanimated"

export interface IFooterMenuItemProps {
  href: Path
  iconName: IconName
  isActive?: boolean
  label: keyof ITranslation
  style?: StyleProps
}
