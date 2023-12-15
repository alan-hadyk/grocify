import { IconName } from "@client/components/atoms/Icon/@types"
import { ITranslation } from "@client/translations/@types"

export interface IEmptyResultProps {
  iconName: IconName
  children: keyof ITranslation
}
