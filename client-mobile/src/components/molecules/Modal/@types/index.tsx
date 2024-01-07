import { IconName } from "@client/components/atoms/Icon/@types"
import { ITranslation } from "@client/translations/@types"
import { Sx } from "dripsy"
import { ReactNode } from "react"

export interface IModalProps {
  children: ReactNode | ReactNode[]
  subtitle: keyof ITranslation
  sx?: Sx
  iconName: IconName
  onModalClose: () => void
  isOpen?: boolean
}
