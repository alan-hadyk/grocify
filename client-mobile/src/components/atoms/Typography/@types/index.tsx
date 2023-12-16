import { ITranslation } from "@client/translations/@types"
import { Sx } from "dripsy"

export enum TypographyVariant {
  Title,
  Banner,
  FooterMenu,
  FooterMenuInactive,
  InputLabel,
  ButtonLG,
  ButtonMD,
  Link,
  TabActive,
  TabInactive,
  ButtonSM,
  Subtitle,
  Text,
  TextSemibold,
  DatePickerMonth,
}

export interface ITypographyProps {
  sx?: Sx
  variant?: TypographyVariant
  children: keyof ITranslation
}
