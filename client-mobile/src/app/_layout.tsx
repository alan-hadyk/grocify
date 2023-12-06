import "react-native-reanimated"
import "react-native-gesture-handler"
import { AppTemplate } from "@client/components/templates/AppTemplate/AppTemplate"
import { FooterContainer } from "@client/containers/Footer/FooterContainer"
import { HeaderContainer } from "@client/containers/Header/HeaderContainer"
import { composeFunctions } from "@client/helpers/functions/composeFunctions"
import { withQueryClientProvider } from "@client/hoc/withQueryClientProvider"
import { withThemeProvider } from "@client/hoc/withThemeProvider"
import { useLoadFonts } from "@client/hooks/useLoadFonts"
import { Slot, SplashScreen } from "expo-router"
import { StatusBar } from "expo-status-bar"
import "@client/lib/internationalization"
import { ClickOutsideProvider } from "react-native-click-outside"

SplashScreen.preventAutoHideAsync()

const _IndexLayout: React.FC = () => {
  const { fontError, fontsLoaded } = useLoadFonts()

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <ClickOutsideProvider>
      <AppTemplate>
        <HeaderContainer />
        <Slot />
        <FooterContainer />
        <StatusBar style="auto" />
      </AppTemplate>
    </ClickOutsideProvider>
  )
}

const IndexLayout = composeFunctions<Record<string, unknown>>(
  withQueryClientProvider,
  withThemeProvider,
)(_IndexLayout)

export default IndexLayout
