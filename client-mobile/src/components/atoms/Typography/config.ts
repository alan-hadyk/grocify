import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { H1, H2, Text } from "dripsy"

export const variantComponents = {
  [TypographyVariant.Title]: H1,
  [TypographyVariant.Subtitle]: H2,
  [TypographyVariant.Banner]: Text,
  [TypographyVariant.FooterMenu]: Text,
  [TypographyVariant.FooterMenuInactive]: Text,
  [TypographyVariant.InputLabel]: Text,
  [TypographyVariant.ButtonLG]: Text,
  [TypographyVariant.ButtonMD]: Text,
  [TypographyVariant.Link]: Text,
  [TypographyVariant.TabActive]: Text,
  [TypographyVariant.TabInactive]: Text,
  [TypographyVariant.ButtonSM]: Text,
  [TypographyVariant.InputOpen]: Text,
  [TypographyVariant.Text]: Text,
  [TypographyVariant.TextSemibold]: Text,
  [TypographyVariant.DatePickerMonth]: Text,
}
