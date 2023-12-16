import { Icon } from "@client/components/atoms/Icon"
import { Typography } from "@client/components/atoms/Typography"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { IEmptyResultProps } from "@client/components/molecules/EmptyResult/@types"
import { emptyResultDefaultStyles } from "@client/components/molecules/EmptyResult/styles"
import { ColorPalette } from "@client/theme/@types"
import { View } from "dripsy"

export const EmptyResult: React.FC<IEmptyResultProps> = ({ iconName, description }) => (
  <View sx={emptyResultDefaultStyles.wrapper}>
    <Icon name={iconName} color={ColorPalette.Gray300} size={64} />
    <Typography
      variant={TypographyVariant.Banner}
      sx={emptyResultDefaultStyles.text}
      text={description}
    />
  </View>
)
