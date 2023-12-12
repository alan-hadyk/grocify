import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { Sx } from "dripsy"

export const typographyDefaultStyles: Sx = {
  margin: "$0",
  marginHorizontal: "$0",
  marginVertical: "$0",
  padding: "$0",
}

export const mapVariantToTypographyStyles: Record<TypographyVariant, Sx> = {
  [TypographyVariant.Title]: {
    fontSize: "$34",
    fontWeight: "bold",
    lineHeight: "$46",
  },
  [TypographyVariant.Subtitle]: {
    fontSize: "$24",
    fontWeight: "medium",
    lineHeight: "$34",
  },
  [TypographyVariant.Banner]: {
    fontSize: "$20",
    fontWeight: "regular",
    lineHeight: "$27",
  },
  [TypographyVariant.FooterMenu]: {
    fontSize: "$14",
    fontWeight: "semibold",
    lineHeight: "$16",
  },
  [TypographyVariant.FooterMenuInactive]: {
    fontSize: "$14",
    fontWeight: "regular",
    lineHeight: "$16",
  },
  [TypographyVariant.InputLabel]: {
    fontSize: "$14",
    fontWeight: "regular",
    lineHeight: "$14",
  },
  [TypographyVariant.ButtonLG]: {
    fontSize: "$17",
    fontWeight: "medium",
    lineHeight: "$23",
  },
  [TypographyVariant.ButtonMD]: {
    fontSize: "$14",
    fontWeight: "medium",
    lineHeight: "$14",
  },
  [TypographyVariant.Link]: {
    fontSize: "$14",
    fontWeight: "medium",
    lineHeight: "$20",
  },
  [TypographyVariant.TabActive]: {
    fontSize: "$22",
    fontWeight: "bold",
    lineHeight: "$30",
  },
  [TypographyVariant.TabInactive]: {
    fontSize: "$22",
    fontWeight: "regular",
    lineHeight: "$30",
  },
  [TypographyVariant.ButtonSM]: {
    fontSize: "$12",
    fontWeight: "medium",
    lineHeight: "$24",
  },
  [TypographyVariant.InputOpen]: {
    fontSize: "$12",
    fontWeight: "regular",
    lineHeight: "$32",
  },
  [TypographyVariant.Text]: {
    fontSize: "$14",
    fontWeight: "regular",
    lineHeight: "$20",
  },
  [TypographyVariant.TextSemibold]: {
    fontSize: "$14",
    fontWeight: "semibold",
    lineHeight: "$20",
  },
  [TypographyVariant.DatePickerMonth]: {
    fontSize: "$22",
    fontWeight: "medium",
    lineHeight: "$28",
  },
}
