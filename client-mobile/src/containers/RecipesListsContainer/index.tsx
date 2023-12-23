import { IconName } from "@client/components/atoms/Icon/@types"
import { Button } from "@client/components/molecules/Button"
import { TilesList } from "@client/components/molecules/TilesList"

export const RecipesListsContainer: React.FC = () => (
  <>
    <TilesList
      emptyResultDescription="Recipes will appear here"
      emptyResultIcon={IconName.Recipe}
      title="Recipes"
    />
    <Button disabled iconName={IconName.Plus} text="Add new recipe" />
  </>
)
