import { IconName } from "@client/components/atoms/Icon/@types"
import { IFooterMenuItemProps } from "@client/components/molecules/FooterMenuItem/@types"

export enum Path {
  ShoppingLists = "/",
  Recipes = "/recipes",
  Account = "/account",
}

export const items: IFooterMenuItemProps[] = [
  {
    href: Path.ShoppingLists,
    iconName: IconName.List,
    label: "Shop lists",
  },
  {
    href: Path.Recipes,
    iconName: IconName.Recipe,
    label: "Recipes",
  },
  {
    href: Path.Account,
    iconName: IconName.User,
    label: "Account",
  },
]
