import { Language } from "@client/api/schema"

export const subtitleWithIconDateFormat: Record<Language, string> = {
  [Language.En]: "ddd., MMM. D, YYYY",
  [Language.Pl]: "ddd., D MMM YYYY",
}
