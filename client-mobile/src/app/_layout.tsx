import "react-native-reanimated"
import "react-native-gesture-handler"
import "dayjs/locale/en"
import "dayjs/locale/pl"
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
import { withTranslations } from "@client/hoc/withTranslations"
import { Path } from "@client/routing/paths"
import { SplashScreen, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

SplashScreen.preventAutoHideAsync()

const _IndexLayout: React.FC = () => (
  <AppTemplate>
    <HeaderContainer />
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Path.ShoppingList.replace("/shopping-lists", "shopping-lists")}
        // options={{
        //   animation: "slide_from_bottom",
        //   presentation: "modal",
        // }}
      />
    </Stack>
    <FooterContainer />
    <StatusBar style="auto" />
  </AppTemplate>
)

const IndexLayout = composeFunctions<IAppProps>(
  withQueryClientProvider,
  withLocalDbInit,
  withTranslations,
  withThemeProvider,
  withFonts,
  withAnimatedSplashScreen,
  withClickOutsideProvider,
)(_IndexLayout)

export default IndexLayout
