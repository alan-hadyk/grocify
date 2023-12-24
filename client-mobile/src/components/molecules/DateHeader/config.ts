import { PreferredLang } from "@client/api/schema"

export const dateFormat: Record<PreferredLang, string> = {
  [PreferredLang.En]: "dddd, MMM. D, YYYY",
  [PreferredLang.Pl]: "dddd, D. MMM, YYYY",
}
