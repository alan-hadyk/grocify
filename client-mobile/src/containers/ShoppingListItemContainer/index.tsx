import { useShoppingList } from "@client/api/queries/useShoppingList"
import { IconName } from "@client/components/atoms/Icon/@types"
import { Typography } from "@client/components/atoms/Typography"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { EmptyResult } from "@client/components/molecules/EmptyResult"
import { ItemWrapper } from "@client/components/molecules/ItemWrapper"
import { ShoppingListItemHeader } from "@client/components/molecules/ShoppingListItemHeader"
import { SubtitleWithIcon } from "@client/components/molecules/SubtitleWithIcon"
import { UpdateGroceryItemsModal } from "@client/containers/ShoppingListItemContainer/modals/UpdateGroceryItemsModal"
import { AddGroceryItemModalProvider } from "@client/containers/ShoppingListItemContainer/provider"
import { ShoppingListItemFooter } from "@client/containers/ShoppingListItemContainer/sections/ShoppingListItemFooter"
import dayjs from "dayjs"
import { useLocalSearchParams } from "expo-router"

export const ShoppingListItemContainer: React.FC = () => {
  const { id } = useLocalSearchParams()
  const { data } = useShoppingList({ id: id as string | undefined })

  return (
    <AddGroceryItemModalProvider>
      {data && (
        <>
          <ItemWrapper>
            <ShoppingListItemHeader onDelete={() => {}} onCollab={() => {}} onReuse={() => {}} />
            <SubtitleWithIcon
              subtitle={dayjs(data.date)}
              iconName={IconName.Calendar}
              onIconButtonPress={() => {}}
              iconButtonDisabled
            />
            {data.ingredients.length > 0 ? (
              <>
                {data.ingredients.map((ingredient) => (
                  <Typography
                    variant={TypographyVariant.Text}
                    text="ingredientNameWithUnit"
                    textValues={{
                      name: ingredient.name,
                      unit: `${ingredient.quantity} ${ingredient.unit?.name}`,
                    }}
                  />
                ))}
              </>
            ) : (
              <EmptyResult
                iconName={IconName.Burger}
                description="Grocery items will appear here"
              />
            )}
          </ItemWrapper>
          <ShoppingListItemFooter />
          <UpdateGroceryItemsModal />
        </>
      )}
    </AddGroceryItemModalProvider>
  )
}
