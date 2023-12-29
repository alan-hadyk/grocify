import { Typography } from "@client/components/atoms/Typography"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { IconButton } from "@client/components/molecules/IconButton"
import { IconButtonSize, IconButtonVariant } from "@client/components/molecules/IconButton/@types"
import { ISubtitleWithIconProps } from "@client/components/molecules/SubtitleWithIcon/@types"
import { useSubtitleWithIconState } from "@client/components/molecules/SubtitleWithIcon/hooks/useSubtitleWithIconState"
import { subtitleWithIconDefaultStyles } from "@client/components/molecules/SubtitleWithIcon/styles"
import dayjs from "dayjs"
import { View } from "dripsy"

export const SubtitleWithIcon: React.FC<ISubtitleWithIconProps> = ({
  subtitle,
  iconName,
  onIconButtonPress,
  iconButtonDisabled,
  sx,
}) => {
  const { wrapper, subtitle: subtitleStyles } = subtitleWithIconDefaultStyles({ subtitle })

  const { format, translatedDate } = useSubtitleWithIconState({ subtitle })

  const wrapperStyles = {
    ...wrapper,
    ...sx,
  }

  return (
    <View sx={wrapperStyles}>
      <Typography
        text={typeof subtitle === "string" ? subtitle : (translatedDate as dayjs.Dayjs)}
        dateFormat={format}
        variant={TypographyVariant.Subtitle}
        sx={subtitleStyles}
      />
      <IconButton
        iconName={iconName}
        size={IconButtonSize.Medium}
        variant={IconButtonVariant.GreenSecondary}
        disabled={iconButtonDisabled}
        onPress={onIconButtonPress}
      />
    </View>
  )
}
