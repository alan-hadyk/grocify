import { IAppTemplateProps } from "@client/components/templates/AppTemplate/@types"
import { SafeAreaView } from "react-native"

export const AppTemplate: React.FC<IAppTemplateProps> = ({ children }) => (
  <SafeAreaView>{children}</SafeAreaView>
)
