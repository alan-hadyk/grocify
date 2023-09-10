import { createFont, createTamagui } from "@tamagui/core";
import { createAnimations } from "@tamagui/animations-react-native";
import { createMedia } from "@tamagui/react-native-media-driver";
import { createTokens, setupReactNative } from "tamagui";
import { Text, View } from "react-native";

setupReactNative({
  Text,
  View,
});

const animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});

const size = {
  40: 40,
  true: 40,
};

export const tokens = createTokens({
  size,
  space: { ...size },
  radius: { 0: 0, 1: "50%" },
  zIndex: { 0: 0 },
  color: {
    white: "#fff",
    black: "#000",
  },
});

const config = createTamagui({
  animations,
  defaultTheme: "light",
  fonts: {
    heading: createFont({
      family: "Arial",
      size: {
        4: 48,
      },
      lineHeight: {
        4: 32,
      },
    }),
  },
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  }),
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  themes: {
    light: {
      bg: "#f2f2f2",
      color: tokens.color.black,
    },
    dark: {
      bg: "#111",
      color: tokens.color.white,
    },
  },
  tokens,
});

export type AppConfig = typeof config;

declare module "tamagui" {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
