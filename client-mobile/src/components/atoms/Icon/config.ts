import Bell from "@client/assets/icons/bell.svg"
import Clear from "@client/assets/icons/clear.svg"
import Search from "@client/assets/icons/search.svg"
import { IconName } from "@client/components/atoms/Icon/@types/Icon"
import { SvgProps } from "react-native-svg"

export const icons: Record<
  IconName,
  {
    Component: React.FC<SvgProps>
    height: number
    width: number
  }
> = {
  [IconName.Clear]: {
    Component: Clear,
    height: 13,
    width: 12,
  },
  [IconName.Search]: {
    Component: Search,
    height: 21,
    width: 20,
  },
  [IconName.Bell]: {
    Component: Bell,
    height: 20,
    width: 21,
  },
}
