import { FooterContainer } from "@client/containers/footer/Footer"
import { composeFunctions } from "@client/helpers/functions/composeFunctions"
import { withQueryClientProvider } from "@client/hoc/withQueryClientProvider"
import { withThemeProvider } from "@client/hoc/withThemeProvider"
import { useLoadFonts } from "@client/hooks/useLoadFonts"
import { Theme } from "@client/theme"
import { createBox } from "@shopify/restyle"
import { Slot, SplashScreen } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Dimensions } from "react-native"
import "@client/lib/internationalization"

SplashScreen.preventAutoHideAsync()

// TODO - Remove dummy component
const Box = createBox<Theme>()

const _IndexLayout: React.FC = () => {
  // TODO - Remove dummy code
  const screenHeight = Dimensions.get("window").height
  const screenWidth = Dimensions.get("window").width

  const { fontError, fontsLoaded } = useLoadFonts()

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <Box flexWrap="nowrap" height={screenHeight} width={screenWidth}>
      <Slot />
      <FooterContainer />
      <StatusBar style="auto" />
    </Box>
  )
}

const IndexLayout = composeFunctions<Record<string, unknown>>(
  withQueryClientProvider,
  withThemeProvider,
)(_IndexLayout)

export default IndexLayout
