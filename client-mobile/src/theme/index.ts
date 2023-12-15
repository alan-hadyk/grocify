import { ColorPalette, FontFamily, TColors } from "@client/theme/@types"
import { makeTheme } from "dripsy"

export const colors: TColors = {
  $black400: ColorPalette.Black400,
  $blue400: ColorPalette.Blue400,
  $gray100: ColorPalette.Gray100,
  $gray300: ColorPalette.Gray300,
  $gray400: ColorPalette.Gray400,
  $green400: ColorPalette.Green400,
  $green500: ColorPalette.Green500,
  $red400: ColorPalette.Red400,
  $white: ColorPalette.White,
}

export const space = {
  $0: 0,
  $1: 1,
  $4: 4,
  $6: 6,
  $8: 8,
  $9: 9,
  $10: 10,
  $12: 12,
  $16: 16,
  $20: 20,
  $28: 28,
  $32: 32,
  $50: 50,
  $80: 80,
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
      "400": FontFamily.Nunito_400Regular,
      "500": FontFamily.Nunito_500Medium,
      "600": FontFamily.Nunito_600SemiBold,
      "700": FontFamily.Nunito_700Bold,
      default: FontFamily.Nunito_400Regular,
    },
  },
  fontSizes: {
    $12: 12,
    $14: 14,
    $17: 17,
    $20: 20,
    $22: 22,
    $24: 24,
    $34: 34,
  },
  fontWeights: {
    bold: "700",
    medium: "500",
    regular: "400",
    semibold: "600",
  },
  fonts: {
    root: FontFamily.Nunito_400Regular,
  },
  lineHeights: {
    $14: 14,
    $16: 16.8,
    $17: 17,
    $20: 20,
    $23: 23,
    $24: 24,
    $27: 27,
    $28: 28,
    $30: 30,
    $32: 32,
    $34: 34,
    $46: 46,
  },
  radii: space,
  shadows: {
    md: {
      elevation: 6,
      shadowColor: "$black400",
      shadowOffset: {
        height: 2,
        width: 0,
      },
      shadowOpacity: 0.16,
      shadowRadius: 6,
    },
  },
  space,
  types: {
    onlyAllowThemeValues: {
      borderStyles: "always",
      borderWidths: "always",
      borders: "always",
      colors: "always",
      fontSizes: "always",
      fontWeights: "always",
      lineHeights: "always",
      radii: "always",
      space: "always",
    },
  },
})

export const darkTheme = theme

export type Theme = typeof theme
