import { IconName } from "@client/components/atoms/Icon/@types"

export interface IBottomMenuItemProps {
  href: string
  iconName: IconName
  text: string
  isActive: boolean
}
