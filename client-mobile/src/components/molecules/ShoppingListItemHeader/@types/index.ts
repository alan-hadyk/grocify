import { IButtonProps } from "@client/components/molecules/Button/@types"
import { IIconButtonProps } from "@client/components/molecules/IconButton/@types"

export interface IShoppingListItemHeaderProps {
  onDelete: IIconButtonProps["onPress"]
  onCollab: IButtonProps["onPress"]
  onReuse: IIconButtonProps["onPress"]
}
