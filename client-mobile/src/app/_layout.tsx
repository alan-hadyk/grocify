import "react-native-reanimated"
import "react-native-gesture-handler"
import { AppTemplate } from "@client/components/templates/AppTemplate"
import { FooterContainer } from "@client/containers/FooterContainer"
import { HeaderContainer } from "@client/containers/HeaderContainer"
import { composeFunctions } from "@client/helpers/functions/composeFunctions"
import { withClickOutsideProvider } from "@client/hoc/withClickOutsideProvider"
import { withQueryClientProvider } from "@client/hoc/withQueryClientProvider"
import { withThemeProvider } from "@client/hoc/withThemeProvider"
import { useLoadFonts } from "@client/hooks/useLoadFonts"
import { Slot, SplashScreen } from "expo-router"
import { StatusBar } from "expo-status-bar"
import "@client/lib/internationalization"

SplashScreen.preventAutoHideAsync()

const _IndexLayout: React.FC = () => {
  const { fontError, fontsLoaded } = useLoadFonts()

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <AppTemplate>
      <HeaderContainer />
      <Slot />
      <FooterContainer />
      <StatusBar style="auto" />
    </AppTemplate>
  )
}

const IndexLayout = composeFunctions<Record<string, unknown>>(
  withQueryClientProvider,
  withThemeProvider,
  withClickOutsideProvider,
)(_IndexLayout)

export default IndexLayout
