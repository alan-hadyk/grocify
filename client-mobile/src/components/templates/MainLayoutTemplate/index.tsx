import { IMainLayoutTemplateProps } from "@client/components/templates/MainLayoutTemplate/@types"
import { mainLayoutTemplateDefaultStyles } from "@client/components/templates/MainLayoutTemplate/styles"
import { View } from "dripsy"

export const MainLayoutTemplate: React.FC<IMainLayoutTemplateProps> = ({ children }) => (
  <View sx={mainLayoutTemplateDefaultStyles}>{children}</View>
)
