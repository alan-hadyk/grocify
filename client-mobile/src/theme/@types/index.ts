export enum FontFamily {
  Inter_500Medium = "Inter_500Medium",
}

export enum ColorPalette {
  Black = "#0B0B0B",
  Green = "#36D399",
  White = "#FFF",
}

export type TColors = Record<
  | "buttonBackground"
  | "buttonFooterActiveText"
  | "buttonFooterBackground"
  | "buttonFooterDefaultText"
  | "buttonText"
  | "footerBackground"
  | "mainBackground"
  | "mainText",
  ColorPalette
>
