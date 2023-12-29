import { IconName } from "@client/components/atoms/Icon/@types"
import { ITranslation } from "@client/translations/@types"
import dayjs from "dayjs"
import { Sx } from "dripsy"

export interface ISubtitleWithIconProps {
  subtitle: dayjs.Dayjs | keyof ITranslation
  iconName: IconName
  onIconButtonPress: () => void
  iconButtonDisabled?: boolean
  sx?: Sx
}
