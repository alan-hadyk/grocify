import { createTheme } from "@shopify/restyle";

const palette = {
  black: "#0B0B0B",
  white: "#F0F2F3",
};

export const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainText: palette.black,
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

export type Theme = typeof theme;
