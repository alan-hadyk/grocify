import { IItemPageTemplateProps } from "@client/components/templates/ItemPageTemplate/@types"
import { itemPageDefaultStyles } from "@client/components/templates/ItemPageTemplate/styles"
import { View } from "dripsy"

export const ItemPageTemplate: React.FC<IItemPageTemplateProps> = ({ children }) => (
  <View sx={itemPageDefaultStyles}>{children}</View>
)
