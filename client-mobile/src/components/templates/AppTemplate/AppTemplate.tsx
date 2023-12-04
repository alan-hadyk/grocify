import { IAppTemplateProps } from "@client/components/templates/AppTemplate/@types/AppTemplate"
import { appTemplateStyles } from "@client/components/templates/AppTemplate/styles"
import { SafeAreaView } from "react-native"

export const AppTemplate: React.FC<IAppTemplateProps> = ({ children }) => {
  return <SafeAreaView {...appTemplateStyles}>{children}</SafeAreaView>
}
