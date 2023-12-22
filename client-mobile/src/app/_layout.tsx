import "react-native-reanimated"
import "react-native-gesture-handler"
import { IAppProps } from "@client/@types/app"
import { AppTemplate } from "@client/components/templates/AppTemplate"
import { FooterContainer } from "@client/containers/FooterContainer"
import { HeaderContainer } from "@client/containers/HeaderContainer"
import { composeFunctions } from "@client/helpers/functions/composeFunctions"
import { withAnimatedSplashScreen } from "@client/hoc/withAnimatedSplashScreen"
import { withClickOutsideProvider } from "@client/hoc/withClickOutsideProvider"
import { withFonts } from "@client/hoc/withFonts"
import { withLocalDbInit } from "@client/hoc/withLocalDbInit"
import { withQueryClientProvider } from "@client/hoc/withQueryClientProvider"
import { withThemeProvider } from "@client/hoc/withThemeProvider"
import { Slot, SplashScreen } from "expo-router"
import { StatusBar } from "expo-status-bar"
import "@client/lib/internationalization"

SplashScreen.preventAutoHideAsync()

const _IndexLayout: React.FC = () => (
  <AppTemplate>
    <HeaderContainer />
    <Slot />
    <FooterContainer />
    <StatusBar style="auto" />
  </AppTemplate>
)

const IndexLayout = composeFunctions<IAppProps>(
  withQueryClientProvider,
  withLocalDbInit,
  withThemeProvider,
  withFonts,
  withAnimatedSplashScreen,
  withClickOutsideProvider,
)(_IndexLayout)

export default IndexLayout
