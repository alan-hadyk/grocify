import { IconName } from "@client/components/atoms/Icon/@types"
import { Typography } from "@client/components/atoms/Typography"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { Button } from "@client/components/molecules/Button"
import { EmptyResult } from "@client/components/molecules/EmptyResult"
import { shippingListContainerDefaultStyles } from "@client/containers/ShoppingListContainer/styles"
import { View } from "dripsy"
import { useTranslation } from "react-i18next"

export const ShoppingListContainer: React.FC = () => {
  const { t } = useTranslation()

  const { mainWrapper, textWrapper, button } = shippingListContainerDefaultStyles

  return (
    <View sx={mainWrapper}>
      <View sx={textWrapper}>
        <Typography variant={TypographyVariant.Title}>{t("Shopping lists")}</Typography>
        <EmptyResult iconName={IconName.List} text="Shopping lists will appear here" />
      </View>
      <Button buttonText={t("Add new shopping list")} iconName={IconName.Plus} sx={button} />
    </View>
  )
}
