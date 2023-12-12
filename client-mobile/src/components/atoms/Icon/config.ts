import Account from "@client/assets/icons/account.svg"
import Bell from "@client/assets/icons/bell.svg"
import Clear from "@client/assets/icons/clear.svg"
import List from "@client/assets/icons/list.svg"
import Plus from "@client/assets/icons/plus.svg"
import Recipes from "@client/assets/icons/recipes.svg"
import Search from "@client/assets/icons/search.svg"
import { IconName } from "@client/components/atoms/Icon/@types"
import { SvgProps } from "react-native-svg"

export const icons: Record<
  IconName,
  {
    Component: React.FC<SvgProps>
    height: number
    width: number
  }
> = {
  [IconName.Account]: {
    Component: Account,
    height: 32,
    width: 26,
  },
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
  [IconName.List]: {
    Component: List,
    height: 64,
    width: 52,
  },
  [IconName.Plus]: {
    Component: Plus,
    height: 20,
    width: 22,
  },
  [IconName.Recipes]: {
    Component: Recipes,
    height: 32,
    width: 35,
  },
}
