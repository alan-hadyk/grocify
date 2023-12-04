import {
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito"
import { SplashScreen } from "expo-router"
import { useEffect } from "react"

/**
 * React Hook used to load fonts.
 * @returns {Error | null} fontError - If there's an error while loading fonts, this will become an instance of `Error`.
 * @returns {boolean} fontsLoaded - Becomes `true` if fonts are loaded.
 */
export const useLoadFonts = () => {
  const [fontsLoaded, fontError] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_700Bold,
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  return {
    fontError,
    fontsLoaded,
  }
}
