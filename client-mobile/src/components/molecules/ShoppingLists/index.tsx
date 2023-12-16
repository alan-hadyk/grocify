import { IconName } from "@client/components/atoms/Icon/@types"
import { Typography } from "@client/components/atoms/Typography"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { EmptyResult } from "@client/components/molecules/EmptyResult"
import { IShoppingLists } from "@client/components/molecules/ShoppingLists/@types"
import { shoppingListsDefaultStyles } from "@client/components/molecules/ShoppingLists/styles"
import { View } from "dripsy"
import { useTranslation } from "react-i18next"

export const ShoppingLists: React.FC<IShoppingLists> = ({ children }) => {
  const { t } = useTranslation()

  const { mainWrapper, textWrapper } = shoppingListsDefaultStyles

  return (
    <View sx={mainWrapper}>
      <View sx={textWrapper}>
        <Typography variant={TypographyVariant.Title}>{t("Shopping lists")}</Typography>
        <EmptyResult iconName={IconName.List}>{t("Shopping lists will appear here")}</EmptyResult>
      </View>
      {children}
    </View>
  )
}
