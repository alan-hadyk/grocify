import { ListPageTemplate } from "@client/components/templates/ListPageTemplate"
import { RecipesListsContainer } from "@client/containers/RecipesListContainer"

const RecipesPage: React.FC = () => (
  <ListPageTemplate>
    <RecipesListsContainer />
  </ListPageTemplate>
)

export default RecipesPage
