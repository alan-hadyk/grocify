import { ListPageTemplate } from "@client/components/templates/ListPageTemplate"
import { RecipeListsContainer } from "@client/containers/RecipeListContainer"

const RecipesPage: React.FC = () => (
  <ListPageTemplate>
    <RecipeListsContainer />
  </ListPageTemplate>
)

export default RecipesPage
