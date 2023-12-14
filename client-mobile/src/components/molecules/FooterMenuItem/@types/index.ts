import { IconName } from "@client/components/atoms/Icon/@types"

export interface IFooterMenuItemProps {
  href: string
  iconName: IconName
  isActive?: boolean
  text: string
}
