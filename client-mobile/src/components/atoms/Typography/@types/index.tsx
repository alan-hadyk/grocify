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
  InputOpen,
  Text,
  TextSemibold,
  DatePickerMonth,
}

export interface ITypographyProps {
  sx?: Sx
  variant?: TypographyVariant
  children: React.ReactNode | React.ReactNode[]
}
