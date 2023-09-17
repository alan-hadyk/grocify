/* eslint-disable import/exports-last */
import { ColorPalette, FontFamily, TColors } from "@client/theme/@types"
import { createTheme } from "@shopify/restyle"

const spacing = {
  "8": 8,
  "16": 16,
  "24": 24,
  "40": 40,
  "50%": "50%",
  "80": 80,
  "100%": "100%",
}

const lightThemeColors: TColors = {
  buttonBackground: ColorPalette.Black,
  buttonFooterActiveText: ColorPalette.Green,
  buttonFooterBackground: ColorPalette.White,
  buttonFooterDefaultText: ColorPalette.Black,
  buttonText: ColorPalette.White,
  footerBackground: ColorPalette.White,
  mainBackground: ColorPalette.Green,
  mainText: ColorPalette.Black,
}

export const theme = createTheme({
  buttonVariants: {
    defaults: {
      backgroundColor: "buttonBackground",
      color: "buttonText",
      padding: "8",
    },
    footer: {
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      backgroundColor: "buttonFooterBackground",
      color: "buttonFooterDefaultText",
      fontSize: 20,
      height: "100%",
      textAlign: "center",
      width: "100%",
    },
    primary: {
      backgroundColor: "buttonBackground",
      color: "buttonText",
      padding: "8",
    },
  },
  colors: lightThemeColors,
  spacing,
  textVariants: {
    paragraph: {
      fontFamily: FontFamily.Inter_500Medium,
      fontSize: 16,
      lineHeight: 24,
    },
    title: {
      fontFamily: FontFamily.Inter_500Medium,
      fontSize: 48,
      fontWeight: "bold",
    },
  },
})

const darkThemeColors: TColors = {
  ...lightThemeColors,
  buttonBackground: ColorPalette.Green,
  buttonText: ColorPalette.Black,
  footerBackground: ColorPalette.White,
  mainBackground: ColorPalette.Black,
  mainText: ColorPalette.Green,
}

export const darkTheme: Theme = {
  ...theme,
  colors: darkThemeColors,
}

export type Theme = typeof theme
