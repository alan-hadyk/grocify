import { IconName } from "@client/components/atoms/Icon/@types"
import { ITranslation } from "@client/translations/@types"

export interface ITilesList {
  emptyResultDescription: keyof ITranslation
  emptyResultIcon: IconName
  title: keyof ITranslation
}
