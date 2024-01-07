import { ITranslation } from "@client/translations/@types"
import { useTranslation } from "react-i18next"

export const useErrorTypeState = () => {
  const { t } = useTranslation()
  const mapErrorTypeToErrorMessage: Record<
    string,
    Record<
      string,
      {
        message: keyof ITranslation
        values: Record<string, string>
      }
    >
  > = {
    name: {
      required: {
        message: "errorRequired",
        values: { name: t("Name") },
      },
    },
  }

  return {
    mapErrorTypeToErrorMessage,
  }
}
