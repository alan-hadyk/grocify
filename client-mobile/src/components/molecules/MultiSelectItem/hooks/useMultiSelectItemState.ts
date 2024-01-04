import { IMultiSelectItemProps } from "@client/components/molecules/MultiSelectItem/@types"

export const useMultiSelectItemState = ({
  id,
  isSelected,
  onSelectItem,
  quantity,
}: Pick<IMultiSelectItemProps, "id" | "isSelected" | "onSelectItem" | "quantity">) => {
  const handleMultiSelectItemPress = () => {
    onSelectItem({
      id,
      isSelected: !isSelected,
      quantity,
    })
  }

  const handleQuantityChange = (newQuantity: string) => {
    onSelectItem({
      id,
      isSelected,
      quantity: Number(newQuantity),
    })
  }

  return {
    handleMultiSelectItemPress,
    handleQuantityChange,
  }
}
