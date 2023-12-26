import { IItemWrapper } from "@client/components/molecules/ItemWrapper/@types"
import { ItemWrapperDefaultStyles } from "@client/components/molecules/ItemWrapper/styles"
import { View } from "dripsy"

export const ItemWrapper: React.FC<IItemWrapper> = ({ children }) => {
  const { wrapper } = ItemWrapperDefaultStyles

  return <View sx={wrapper}>{children}</View>
}
