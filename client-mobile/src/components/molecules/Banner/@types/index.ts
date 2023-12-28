import { ITranslation } from "@client/translations/@types"
import { Sx } from "dripsy"

export enum BannerVariant {
  YellowPrimary,
  BlueSecondary,
}

export interface IBannerProps {
  variant?: BannerVariant
  sx?: Sx
  text: keyof ITranslation
}
