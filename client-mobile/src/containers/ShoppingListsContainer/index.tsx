import { IconName } from "@client/components/atoms/Icon/@types"
import { Button } from "@client/components/molecules/Button"
import { TilesList } from "@client/components/molecules/TilesList"

export const ShoppingListsContainer: React.FC = () => (
  <TilesList
    emptyResultDescription="Shopping lists will appear here"
    emptyResultIcon={IconName.List}
    title="Shopping lists">
    <Button iconName={IconName.Plus} text="Add new shopping list" />
  </TilesList>
)
