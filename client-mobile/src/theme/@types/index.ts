export enum FontFamily {
  Nunito_300Light = "Nunito_300Light",
  Nunito_400Regular = "Nunito_400Regular",
  Nunito_700Bold = "Nunito_700Bold",
}

export enum ColorPalette {
  White = "#FFFFFF",
  Gray100 = "#E0E0E0",
  Green400 = "#14E195",
  Green500 = "#10B276",
  Black400 = "#1B2728",
  Red400 = "#F41F1F",
}

export type TColors = Record<
  "$white" | "$gray100" | "$black400" | "$green400" | "$green500" | "$red400",
  ColorPalette
>

export enum Duration {
  Fast = 150,
  Default = 300,
}
