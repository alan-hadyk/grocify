import { IListPageTemplateProps } from "@client/components/templates/ListPageTemplate/@types"
import {
  getlistPageTemplateDefaultStyles,
  listPageDefaultStyles,
} from "@client/components/templates/ListPageTemplate/styles"
import { useScreenDimensions } from "@client/hooks/useScreenDimensions"
import { ScrollView } from "dripsy"

export const ListPageTemplate: React.FC<IListPageTemplateProps> = ({ children }) => {
  const { screenWidth } = useScreenDimensions()

  return (
    <ScrollView
      contentContainerStyle={listPageDefaultStyles.childrenWrapper}
      sx={getlistPageTemplateDefaultStyles({ screenWidth })}>
      {children}
    </ScrollView>
  )
}
