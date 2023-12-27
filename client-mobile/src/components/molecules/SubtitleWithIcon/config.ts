import { PreferredLang } from "@client/api/schema"

export const subtitleWithIconDateFormat: Record<PreferredLang, string> = {
  [PreferredLang.En]: "ddd., MMM. D, YYYY",
  [PreferredLang.Pl]: "ddd., D MMM YYYY",
}
