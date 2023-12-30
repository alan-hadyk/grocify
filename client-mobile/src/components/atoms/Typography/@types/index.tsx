import { ITranslation } from "@client/translations/@types"
import dayjs from "dayjs"
import { Sx } from "dripsy"

export enum TypographyVariant {
  Title,
  Banner,
  FooterMenu,
  FooterMenuInactive,
  InputLabel,
  InputMessage,
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

export enum TypographyType {
  Default,
  Error,
  Info,
}

export type ITypographyProps = {
  sx?: Sx
  variant?: TypographyVariant
  type?: TypographyType
} & (
  | {
      dateFormat: string
      text: dayjs.Dayjs
      textValues?: undefined
    }
  | {
      dateFormat?: string
      text: keyof ITranslation
      textValues?: Record<string, string>
    }
)
