import { IconName } from "@client/components/atoms/Icon/@types"
import { Typography } from "@client/components/atoms/Typography"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { IDateHeader } from "@client/components/molecules/DateHeader/@types"
import { useDateHeaderState } from "@client/components/molecules/DateHeader/hooks/useDateHeaderState"
import { dateHeaderDefaultStyles } from "@client/components/molecules/DateHeader/styles"
import { IconButton } from "@client/components/molecules/IconButton"
import { IconButtonSize, IconButtonVariant } from "@client/components/molecules/IconButton/@types"
import { View } from "dripsy"

export const DateHeader: React.FC<IDateHeader> = ({ date }) => {
  const { wrapper, subtitle } = dateHeaderDefaultStyles

  const { format, translatedDate } = useDateHeaderState({ date })

  return (
    <View sx={wrapper}>
      <Typography
        text={translatedDate}
        dateFormat={format}
        variant={TypographyVariant.Subtitle}
        sx={subtitle}
      />
      <IconButton
        iconName={IconName.Calendar}
        size={IconButtonSize.Medium}
        variant={IconButtonVariant.GreenSecondary}
        disabled
      />
    </View>
  )
}
