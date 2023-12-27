import { IAppProps } from "@client/@types/app"
import "@client/lib/internationalization"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { NativeModules } from "react-native"

/**
 * Higher-order component that configures translations
 * @param {React.FC<IAppProps>} Component - The component to wrap with this HOC.
 * @returns {React.FC<IAppProps>} - The component wrapped with this HOC.
 */
export const withTranslations = (Component: React.FC<IAppProps>) => (props: IAppProps) => {
  const { i18n } = useTranslation()

  useEffect(() => {
    const locale =
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] ||
      NativeModules.I18nManager.localeIdentifier

    i18n.changeLanguage(locale)
  }, [i18n])

  return <Component {...props} />
}
