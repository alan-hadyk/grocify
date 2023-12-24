import { IconName } from "@client/components/atoms/Icon/@types"
import { IIconProps } from "@client/icons/@types"
import { ArrowLeftIcon } from "@client/icons/ArrowLeftIcon"
import { BellIcon } from "@client/icons/BellIcon"
import { BurgerIcon } from "@client/icons/Burger"
import { CalendarIcon } from "@client/icons/CalendarIcon"
import { CloseIcon } from "@client/icons/CloseIcon"
import { CopyIcon } from "@client/icons/CopyIcon"
import { ListIcon } from "@client/icons/ListIcon"
import { PlusIcon } from "@client/icons/PlusIcon"
import { RecipeIcon } from "@client/icons/RecipeIcon"
import { RemoveIcon } from "@client/icons/RemoveIcon"
import { ReuseIcon } from "@client/icons/ReuseIcon"
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
  [IconName.ArrowLeft]: {
    Component: ArrowLeftIcon,
    height: 8,
    width: 14,
  },
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
    width: 23,
  },
  [IconName.Recipe]: {
    Component: RecipeIcon,
    height: 33,
    width: 27,
  },
  [IconName.Remove]: {
    Component: RemoveIcon,
    height: 12,
    width: 10,
  },
  [IconName.Reuse]: {
    Component: ReuseIcon,
    height: 10,
    width: 12,
  },
  [IconName.Copy]: {
    Component: CopyIcon,
    height: 12,
    width: 10,
  },
  [IconName.Calendar]: {
    Component: CalendarIcon,
    height: 13,
    width: 14,
  },
  [IconName.Burger]: {
    Component: BurgerIcon,
    height: 64,
    width: 72,
  },
}
