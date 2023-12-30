import "intl-pluralrules"
import { Language } from "@client/api/schema"
import { EN } from "@client/translations/EN"
import { PL } from "@client/translations/PL"
import i18n, { ResourceLanguage } from "i18next"
import { initReactI18next } from "react-i18next"

// eslint-disable-next-line import/exports-last
export const mapLanguageToLocale: Record<Language, string> = {
  [Language.En]: "en-US",
  [Language.Pl]: "pl_PL",
}

const resources: Record<string, ResourceLanguage> = {
  [mapLanguageToLocale[Language.En]]: {
    translation: EN,
  },
  [mapLanguageToLocale[Language.Pl]]: {
    translation: PL,
  },
}

/**
 * Init translations with `react-i18next`
 */
// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  fallbackLng: mapLanguageToLocale[Language.En],
  interpolation: {
    escapeValue: false, // Not needed for React
  },
  resources,
})

export default i18n
