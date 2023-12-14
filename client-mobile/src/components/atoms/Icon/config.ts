import { IconName } from "@client/components/atoms/Icon/@types"
import { IIconProps } from "@client/icons/@types"
import { BellIcon } from "@client/icons/BellIcon"
import { CloseIcon } from "@client/icons/CloseIcon"
import { ListIcon } from "@client/icons/ListIcon"
import { PlusIcon } from "@client/icons/PlusIcon"
import { RecipeIcon } from "@client/icons/RecipeIcon"
import { SearchIcon } from "@client/icons/SearchIcon"
import { UserIcon } from "@client/icons/UserIcon"

export const icons: Record<
  IconName,
  {
    Component: React.FC<IIconProps>
    height: number
    width: number
  }
> = {
  [IconName.User]: {
    Component: UserIcon,
    height: 33,
    width: 37,
  },
  [IconName.Close]: {
    Component: CloseIcon,
    height: 13,
    width: 12,
  },
  [IconName.Search]: {
    Component: SearchIcon,
    height: 21,
    width: 20,
  },
  [IconName.Bell]: {
    Component: BellIcon,
    height: 20,
    width: 21,
  },
  [IconName.List]: {
    Component: ListIcon,
    height: 33,
    width: 27,
  },
  [IconName.Plus]: {
    Component: PlusIcon,
    height: 20,
    width: 22,
  },
  [IconName.Recipes]: {
    Component: RecipeIcon,
    height: 33,
    width: 27,
  },
}
