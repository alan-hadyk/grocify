import { IconName } from "@client/components/atoms/Icon/@types"
import { Button } from "@client/components/molecules/Button"
import { ShoppingLists } from "@client/components/molecules/ShoppingLists"
import { useTranslation } from "react-i18next"

export const ShoppingListsContainer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <ShoppingLists>
      <Button iconName={IconName.Plus}>{t("Add new shopping list")}</Button>
    </ShoppingLists>
  )
}
