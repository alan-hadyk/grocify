import { Language } from "@client/api/schema"
import { ISubtitleWithIconProps } from "@client/components/molecules/SubtitleWithIcon/@types"
import { subtitleWithIconDateFormat } from "@client/components/molecules/SubtitleWithIcon/config"
import { mapLanguageToLocale } from "@client/lib/internationalization"
import dayjs from "dayjs"
import { useTranslation } from "react-i18next"

export const useSubtitleWithIconState = ({
  subtitle,
}: Pick<ISubtitleWithIconProps, "subtitle">): {
  format: string
  translatedDate: dayjs.Dayjs | undefined
} => {
  const { i18n } = useTranslation()

  let dayjsLocale: string
  let format: string

  switch (i18n.language) {
    case mapLanguageToLocale[Language.Pl]:
      dayjsLocale = "pl"
      format = subtitleWithIconDateFormat[Language.Pl]
      break
    case mapLanguageToLocale[Language.En]:
    default:
      dayjsLocale = "en"
      format = subtitleWithIconDateFormat[Language.En]
  }

  const translatedDate = typeof subtitle !== "string" ? subtitle.locale(dayjsLocale) : undefined

  return {
    format,
    translatedDate,
  }
}
