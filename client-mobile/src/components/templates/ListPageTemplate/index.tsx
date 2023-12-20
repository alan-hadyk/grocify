import { IListPageTemplateProps } from "@client/components/templates/ListPageTemplate/@types"
import { listPageDefaultStyles } from "@client/components/templates/ListPageTemplate/styles"
import { ScrollView } from "dripsy"

export const ListPageTemplate: React.FC<IListPageTemplateProps> = ({ children }) => {
  const { childrenWrapper, mainWrapper } = listPageDefaultStyles

  return (
    <ScrollView contentContainerStyle={childrenWrapper} sx={mainWrapper}>
      {children}
    </ScrollView>
  )
}
