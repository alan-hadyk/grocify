export enum FontFamily {
  Nunito_400Regular = "Nunito_400Regular",
  Nunito_500Medium = "Nunito_500Medium",
  Nunito_600SemiBold = "Nunito_600SemiBold",
  Nunito_700Bold = "Nunito_700Bold",
}

export enum ColorPalette {
  White = "#FFFFFF",
  Gray100 = "#E0E0E0",
  Gray300 = "#BDBDBD",
  Gray400 = "#999999",
  Green400 = "#14E195",
  Green500 = "#10B276",
  Black400 = "#1B2728",
  Blue400 = "#146DE1",
  Red400 = "#F41F1F",
  Yellow300 = "#FFE663",
}

export type TColors = Record<
  | "$white"
  | "$gray100"
  | "$gray300"
  | "$gray400"
  | "$black400"
  | "$blue400"
  | "$green400"
  | "$green500"
  | "$red400"
  | "$yellow300",
  ColorPalette
>

export enum Duration {
  Fast = 150,
  Default = 300,
  Slow = 600,
  VerySlow = 2000,
}
