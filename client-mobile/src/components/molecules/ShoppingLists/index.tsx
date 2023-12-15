import { IconName } from "@client/components/atoms/Icon/@types"
import { Typography } from "@client/components/atoms/Typography"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { Button } from "@client/components/molecules/Button"
import { EmptyResult } from "@client/components/molecules/EmptyResult"
import { shoppingListsDefaultStyles } from "@client/components/molecules/ShoppingLists/styles"
import { View } from "dripsy"
import { useTranslation } from "react-i18next"

export const ShoppingLists: React.FC = () => {
  const { t } = useTranslation()

  const { mainWrapper, textWrapper, button } = shoppingListsDefaultStyles

  return (
    <View sx={mainWrapper}>
      <View sx={textWrapper}>
        <Typography variant={TypographyVariant.Title}>Shopping lists</Typography>
        <EmptyResult iconName={IconName.List}>{t("Shopping lists will appear here")}</EmptyResult>
      </View>
      <Button iconName={IconName.Plus} sx={button}>
        Add new shopping list
      </Button>
    </View>
  )
}
