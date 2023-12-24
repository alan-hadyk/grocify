import { useShoppingList } from "@client/api/queries/useShoppingList"
import { IconName } from "@client/components/atoms/Icon/@types"
import { Typography } from "@client/components/atoms/Typography"
import { DateHeader } from "@client/components/molecules/DateHeader"
import { DetailsHeader } from "@client/components/molecules/DetailsHeader"
import { EmptyResult } from "@client/components/molecules/EmptyResult"
import { ItemPageTemplate } from "@client/components/templates/ItemPageTemplate"
import { useLocalSearchParams } from "expo-router"

export const ShoppingListDetailsContainer: React.FC = () => {
  const { id } = useLocalSearchParams()
  const { data, isInitialLoading } = useShoppingList({ id: id as string | undefined })

  return (
    <ItemPageTemplate>
      <DetailsHeader />
      {isInitialLoading && <Typography text="Loading..." />}
      {data && (
        <>
          <DateHeader date={data.date} />
          <EmptyResult iconName={IconName.Burger} description="Grocery items will appear here" />
        </>
      )}
    </ItemPageTemplate>
  )
}
