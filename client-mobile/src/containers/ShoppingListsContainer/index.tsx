import { useCreateShoppingList } from "@client/api/mutations/useCreateShoppingList"
import { IconName } from "@client/components/atoms/Icon/@types"
import { Button } from "@client/components/molecules/Button"
import { TilesList } from "@client/components/molecules/TilesList"
import { Path } from "@client/routing/paths"
import { router } from "expo-router"

export const ShoppingListsContainer: React.FC = () => {
  const { isLoading, mutate: createShoppingList } = useCreateShoppingList({
    onSuccess: (data) => {
      router.push({
        params: { id: data.id },
        pathname: Path.ShoppingListItem,
      })
    },
  })

  return (
    <>
      <TilesList
        emptyResultDescription="Shopping lists will appear here"
        emptyResultIcon={IconName.List}
        title="Shopping lists"
      />

      <Button
        iconName={IconName.Plus}
        text={isLoading ? "Adding new shopping list..." : "Add new shopping list"}
        isLoading={isLoading}
        onPress={() => createShoppingList()}
      />
    </>
  )
}
