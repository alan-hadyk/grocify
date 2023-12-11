import { IListPageTemplateProps } from "@client/components/templates/ListPageTemplate/@types"
import { getlistPageTemplateDefaultStyles } from "@client/components/templates/ListPageTemplate/styles"
import { useScreenDimensions } from "@client/hooks/useScreenDimensions"
import { View } from "dripsy"

export const ListPageTemplate: React.FC<IListPageTemplateProps> = ({ children }) => {
  const { screenHeight, screenWidth } = useScreenDimensions()

  return (
    <View sx={getlistPageTemplateDefaultStyles({ screenHeight, screenWidth })}>{children}</View>
  )
}
