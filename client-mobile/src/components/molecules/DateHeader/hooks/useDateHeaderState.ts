import { PreferredLang } from "@client/api/schema"
import { IDateHeader } from "@client/components/molecules/DateHeader/@types"
import { dateFormat } from "@client/components/molecules/DateHeader/config"
import dayjs from "dayjs"
import { useTranslation } from "react-i18next"

export const useDateHeaderState = ({
  date,
}: Pick<IDateHeader, "date">): {
  format: string
  translatedDate: dayjs.Dayjs
} => {
  const { i18n } = useTranslation()

  let dayjsLocale
  let format
  switch (i18n.language) {
    case PreferredLang.Pl:
      dayjsLocale = "pl"
      format = dateFormat[PreferredLang.Pl]
      break
    case PreferredLang.En:
    default:
      dayjsLocale = "en"
      format = dateFormat[PreferredLang.En]
  }

  const translatedDate = dayjs(date).locale(dayjsLocale)

  return {
    format,
    translatedDate,
  }
}
