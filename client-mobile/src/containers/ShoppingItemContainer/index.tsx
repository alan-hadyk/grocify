import { useShoppingList } from "@client/api/queries/useShoppingList"
import { IconName } from "@client/components/atoms/Icon/@types"
import { EmptyResult } from "@client/components/molecules/EmptyResult"
import { ItemWrapper } from "@client/components/molecules/ItemWrapper"
import { ShoppingListItemFooterButtons } from "@client/components/molecules/ShoppingListItemFooterButtons"
import { ShoppingListItemHeader } from "@client/components/molecules/ShoppingListItemHeader"
import { SubtitleWithIcon } from "@client/components/molecules/SubtitleWithIcon"
import dayjs from "dayjs"
import { useLocalSearchParams } from "expo-router"

export const ShoppingItemContainer: React.FC = () => {
  const { id } = useLocalSearchParams()
  const { data } = useShoppingList({ id: id as string | undefined })

  return (
    <>
      {data && (
        <>
          <ItemWrapper>
            <ShoppingListItemHeader onDelete={() => {}} onCollab={() => {}} onReuse={() => {}} />
            <SubtitleWithIcon
              subtitle={dayjs(data.date)}
              iconName={IconName.Calendar}
              onIconButtonPress={() => {}}
              iconButtonDisabled
              sx={{
                marginTop: "$16",
              }}
            />
            <EmptyResult iconName={IconName.Burger} description="Grocery items will appear here" />
          </ItemWrapper>
          <ShoppingListItemFooterButtons />
        </>
      )}
    </>
  )
}
