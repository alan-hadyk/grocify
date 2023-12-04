import { IAppTemplateProps } from "@client/components/templates/AppTemplate/@types/AppTemplate"
import { SafeAreaView } from "react-native"

export const AppTemplate: React.FC<IAppTemplateProps> = ({ children }) => {
  return <SafeAreaView>{children}</SafeAreaView>
}
