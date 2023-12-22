import { useShoppingList } from "@client/api/queries/useShoppingList"
import { useLocalSearchParams } from "expo-router"
import { Text } from "react-native"

const ShoppingListPage: React.FC = () => {
  const { id } = useLocalSearchParams()
  const { data, isInitialLoading } = useShoppingList({ id: id as string | undefined })

  return (
    <>
      <Text>ShoppingListPage</Text>
      {isInitialLoading && <Text>Loading...</Text>}
      {data && (
        <>
          <Text>ID: {data.id}</Text>
          <Text>date: {data.date}</Text>
          <Text>created_at: {data.created_at}</Text>
        </>
      )}
    </>
  )
}

export default ShoppingListPage
