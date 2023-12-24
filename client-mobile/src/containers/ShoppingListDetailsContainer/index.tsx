import { useShoppingList } from "@client/api/queries/useShoppingList"
import { ShoppingList } from "@client/components/molecules/ShoppingList"
import { ShoppingListButtons } from "@client/components/molecules/ShoppingListButtons"
import { ItemPageTemplate } from "@client/components/templates/ItemPageTemplate"
import { useLocalSearchParams } from "expo-router"

export const ShoppingListDetailsContainer: React.FC = () => {
  const { id } = useLocalSearchParams()
  const { data } = useShoppingList({ id: id as string | undefined })

  return (
    <ItemPageTemplate>
      {data && (
        <>
          <ShoppingList date={data.date} />
          <ShoppingListButtons />
        </>
      )}
    </ItemPageTemplate>
  )
}
