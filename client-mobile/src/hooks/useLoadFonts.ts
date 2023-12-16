import { FontFamily } from "@client/theme/@types"
import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito"

/**
 * React Hook used to load fonts.
 * @returns {Error | null} fontError - If there's an error while loading fonts, this will become an instance of `Error`.
 * @returns {boolean} fontsLoaded - Becomes `true` if fonts are loaded.
 */
export const useLoadFonts = () => {
  const [fontsLoaded, fontError] = useFonts({
    [FontFamily.Nunito_400Regular]: Nunito_400Regular,
    [FontFamily.Nunito_500Medium]: Nunito_500Medium,
    [FontFamily.Nunito_600SemiBold]: Nunito_600SemiBold,
    [FontFamily.Nunito_700Bold]: Nunito_700Bold,
  })

  return {
    fontError,
    fontsLoaded,
  }
}
