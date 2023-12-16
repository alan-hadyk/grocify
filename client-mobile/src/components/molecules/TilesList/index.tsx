import { Typography } from "@client/components/atoms/Typography"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { EmptyResult } from "@client/components/molecules/EmptyResult"
import { ITilesList } from "@client/components/molecules/TilesList/@types"
import { tilesListDefaultStyles } from "@client/components/molecules/TilesList/styles"
import { View } from "dripsy"

export const TilesList: React.FC<ITilesList> = ({
  children,
  emptyResultDescription,
  emptyResultIcon,
  title,
}) => {
  const { mainWrapper, textWrapper } = tilesListDefaultStyles

  return (
    <View sx={mainWrapper}>
      <View sx={textWrapper}>
        <Typography variant={TypographyVariant.Title} text={title} />
        <EmptyResult iconName={emptyResultIcon} description={emptyResultDescription} />
      </View>
      {children}
    </View>
  )
}
