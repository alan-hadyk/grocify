import { createTheme } from "@shopify/restyle"

const colorPalette = {
  black: "#0B0B0B",
  green: "#36D399",
  white: "#F0F2F3",
}

const spacing = {
  "8": 8,
  "16": 16,
  "24": 24,
  "40": 40,
}

enum FontFamily {
  Inter_500Medium = "Inter_500Medium",
}

export const theme = createTheme({
  buttonVariants: {
    defaults: {
      backgroundColor: "buttonBackground",
      color: "buttonText",
      padding: "8",
    },
    primary: {
      backgroundColor: "buttonBackground",
      color: "buttonText",
      padding: "8",
    },
  },
  colors: {
    buttonBackground: colorPalette.black,
    buttonText: colorPalette.white,
    footerBackground: colorPalette.white,
    mainBackground: colorPalette.green,
    mainText: colorPalette.black,
  },
  spacing,
  textVariants: {
    defaults: {
      // We can define a default text variant here.
    },
    header: {
      fontFamily: FontFamily.Inter_500Medium,
      fontSize: 48,
      fontWeight: "bold",
    },
    paragraph: {
      fontFamily: FontFamily.Inter_500Medium,
      fontSize: 16,
      lineHeight: 24,
    },
  },
})

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    buttonBackground: colorPalette.green,
    buttonText: colorPalette.black,
    footerBackground: colorPalette.white,
    mainBackground: colorPalette.black,
    mainText: colorPalette.green,
  },
}

export type Theme = typeof theme
