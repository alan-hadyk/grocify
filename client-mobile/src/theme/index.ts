import { createTheme } from "@shopify/restyle";

const colorPalette = {
  black: "#0B0B0B",
  green: "#36D399",
  white: "#F0F2F3",
};

export const theme = createTheme({
  colors: {
    mainBackground: colorPalette.green,
    mainText: colorPalette.black,
  },
  spacing: {
    "8": 8,
    "16": 16,
    "24": 24,
    "40": 40,
  },
  textVariants: {
    header: {
      fontWeight: "bold",
      fontSize: 48,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: colorPalette.black,
    mainText: colorPalette.green,
  },
};

export type Theme = typeof theme;
