import { IItemWrapperProps } from "@client/components/molecules/ItemWrapper/@types"
import { itemWrapperDefaultStyles } from "@client/components/molecules/ItemWrapper/styles"
import { View } from "dripsy"

export const ItemWrapper: React.FC<IItemWrapperProps> = ({ children }) => {
  const { wrapper } = itemWrapperDefaultStyles

  return <View sx={wrapper}>{children}</View>
}
