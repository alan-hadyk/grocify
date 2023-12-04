/* eslint-disable import/exports-last */
// import { ColorPalette, FontFamily, TColors } from "@client/theme/@types"
import { ColorPalette, TColors } from "@client/theme/@types"
import { createTheme } from "@shopify/restyle"

const spacing = {
  "8": 8,
  "10": 10,
  "12": 12,
  "16": 16,
  "24": 24,
  "40": 40,
  "50%": "50%",
  "80": 80,
  "100%": "100%",
}

const lightThemeColors: TColors = {
  black400: ColorPalette.Black400,
  gray100: ColorPalette.Gray100,
  green400: ColorPalette.Green400,
  red400: ColorPalette.Red400,
  white: ColorPalette.White,
}

/**
 * Default (light) theme
 */
export const theme = createTheme({
  buttonVariants: {
    defaults: {
      borderColor: "gray100",
    },
    footer: {
      backgroundColor: "green400",
    },
    primary: {
      backgroundColor: "green400",
    },
  },
  colors: lightThemeColors,
  iconButtonVariants: {
    defaults: {
      backgroundColor: "green400",
    },
    graySecondary: {
      backgroundColor: "white",
      borderColor: "gray100",
      borderWidth: 1,
    },
    greenPrimary: {
      backgroundColor: "green400",
    },
    greenSecondary: {
      borderColor: "green400",
    },
    redSecondary: {
      borderColor: "red400",
    },
  },

  spacing,
  // textVariants: {
  //   paragraph: {
  //     fontFamily: FontFamily.Inter_500Medium,
  //     fontSize: 16,
  //     lineHeight: 24,
  //   },
  //   title: {
  //     fontFamily: FontFamily.Inter_500Medium,
  //     fontSize: 48,
  //     fontWeight: "bold",
  //     lineHeight: 56,
  //   },
  // },
})

const darkThemeColors: TColors = {
  ...lightThemeColors,
}

/**
 * Dark theme
 */
export const darkTheme: Theme = {
  ...theme,
  colors: darkThemeColors,
}

export type Theme = typeof theme
