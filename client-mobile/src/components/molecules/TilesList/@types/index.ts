import { IconName } from "@client/components/atoms/Icon/@types"
import { ITranslation } from "@client/translations/@types"
import { ReactNode } from "react"

export interface ITilesList {
  children: ReactNode | ReactNode[]
  emptyResultDescription: keyof ITranslation
  emptyResultIcon: IconName
  title: keyof ITranslation
}
