import { ColorPalette, FontFamily, TColors } from "@client/theme/@types"
import { makeTheme } from "dripsy"

export const colors: TColors = {
  $black400: ColorPalette.Black400,
  $gray100: ColorPalette.Gray100,
  $green400: ColorPalette.Green400,
  $green500: ColorPalette.Green500,
  $red400: ColorPalette.Red400,
  $white: ColorPalette.White,
}

export const space = {
  $0: 0,
  $1: 1,
  $9: 9,
  $10: 10,
  $16: 16,
  $32: 32,
  $50: 50,
  "12.5%": "12.5%",
}

/**
 * Default (light) theme
 */
export const theme = makeTheme({
  borderWidths: {
    $1: 1,
  },
  colors,
  customFonts: {
    [FontFamily.Nunito_400Regular]: {
      "300": FontFamily.Nunito_300Light,
      "400": FontFamily.Nunito_400Regular,
      "700": FontFamily.Nunito_700Bold,
      default: FontFamily.Nunito_400Regular,
    },
  },
  fontSizes: {
    $14: 14,
  },
  fontWeights: {
    bold: "700",
    light: "300",
    regular: "400",
  },
  fonts: {
    root: FontFamily.Nunito_400Regular,
  },
  radii: space,
  space,
  types: {
    onlyAllowThemeValues: {
      borderStyles: "always",
      borderWidths: "always",
      borders: "always",
      colors: "always",
      fontSizes: "always",
      radii: "always",
      space: "always",
    },
  },
})

export const darkTheme = theme

export type Theme = typeof theme
