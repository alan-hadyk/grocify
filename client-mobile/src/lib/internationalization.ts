import "intl-pluralrules"
import { PreferredLang } from "@client/api/schema"
import { EN } from "@client/translations/EN"
import { PL } from "@client/translations/PL"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  EN: {
    translation: EN,
  },
  PL: {
    translation: PL,
  },
}

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  fallbackLng: PreferredLang.Pl,
  interpolation: {
    escapeValue: false, // Not needed for React
  },
  resources,
})

export default i18n
