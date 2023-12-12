import { IAppTemplateProps } from "@client/components/templates/AppTemplate/@types"
import { SafeAreaView, StatusBar } from "react-native"

export const AppTemplate: React.FC<IAppTemplateProps> = ({ children }) => (
  <SafeAreaView
    style={{
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    }}>
    {children}
  </SafeAreaView>
)
