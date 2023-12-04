import Bell from "@client/assets/icons/bell.svg"
import Clear from "@client/assets/icons/clear.svg"
import Search from "@client/assets/icons/search.svg"
import { IconName } from "@client/components/atoms/Icon/@types/Icon"
import { SvgProps } from "react-native-svg"

export const icons: Record<IconName, React.FC<SvgProps>> = {
  [IconName.Clear]: Clear,
  [IconName.Search]: Search,
  [IconName.Bell]: Bell,
}
