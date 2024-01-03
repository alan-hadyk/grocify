import { IMultiSelectProps } from "@client/components/molecules/MultiSelect/@types"
import { multiSelectDefaultStyles } from "@client/components/molecules/MultiSelect/styles"
import { View } from "dripsy"

export const MultiSelect: React.FC<IMultiSelectProps> = ({ children, isSelected }) => {
  const { wrapper } = multiSelectDefaultStyles({ isSelected })

  return <View sx={wrapper}>{children}</View>
}
