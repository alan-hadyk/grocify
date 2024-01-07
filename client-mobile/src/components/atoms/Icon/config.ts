import { IconName } from "@client/components/atoms/Icon/@types"
import { IIconProps } from "@client/icons/@types"
import { ArrowLeftIcon } from "@client/icons/ArrowLeftIcon"
import { BellIcon } from "@client/icons/BellIcon"
import { BulbIcon } from "@client/icons/BulbIcon"
import { BurgerIcon } from "@client/icons/BurgerIcon"
import { CalendarIcon } from "@client/icons/CalendarIcon"
import { CheckIcon } from "@client/icons/CheckIcon"
import { CloseIcon } from "@client/icons/CloseIcon"
import { CopyIcon } from "@client/icons/CopyIcon"
import { DecreaseIcon } from "@client/icons/DecreaseIcon"
import { IncreaseIcon } from "@client/icons/IncreaseIcon"
import { ListIcon } from "@client/icons/ListIcon"
import { PlusIcon } from "@client/icons/PlusIcon"
import { RecipeIcon } from "@client/icons/RecipeIcon"
import { RemoveIcon } from "@client/icons/RemoveIcon"
import { ReuseIcon } from "@client/icons/ReuseIcon"
import { RulerIcon } from "@client/icons/RulerIcon"
import { SearchIcon } from "@client/icons/SearchIcon"
import { TagIcon } from "@client/icons/TagIcon"
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
    width: 15,
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
    width: 11,
  },
  [IconName.Reuse]: {
    Component: ReuseIcon,
    height: 12,
    width: 13,
  },
  [IconName.Copy]: {
    Component: CopyIcon,
    height: 12,
    width: 12,
  },
  [IconName.Calendar]: {
    Component: CalendarIcon,
    height: 14,
    width: 15,
  },
  [IconName.Burger]: {
    Component: BurgerIcon,
    height: 64,
    width: 74,
  },
  [IconName.Tag]: {
    Component: TagIcon,
    height: 21,
    width: 20,
  },
  [IconName.Ruler]: {
    Component: RulerIcon,
    height: 21,
    width: 20,
  },
  [IconName.Bulb]: {
    Component: BulbIcon,
    height: 24,
    width: 17,
  },
  [IconName.Check]: {
    Component: CheckIcon,
    height: 10,
    width: 15,
  },
  [IconName.Increase]: {
    Component: IncreaseIcon,
    height: 20,
    width: 20,
  },
  [IconName.Decrease]: {
    Component: DecreaseIcon,
    height: 4,
    width: 20,
  },
}
