import { useCreateShoppingList } from "@client/api/mutations/useCreateShoppingList"
import { IconName } from "@client/components/atoms/Icon/@types"
import { Button } from "@client/components/molecules/Button"
import { TilesList } from "@client/components/molecules/TilesList"
import { Path } from "@client/routing/paths"
import { router } from "expo-router"

export const ShoppingListsContainer: React.FC = () => {
  const { isLoading, mutateAsync: createShoppingList } = useCreateShoppingList({
    onSuccess: (data) => {
      router.push({
        params: { id: data.id },
        pathname: Path.ShoppingList,
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
        text="Add new shopping list"
        isLoading={isLoading}
        onPress={() => createShoppingList()}
      />
    </>
  )
}
