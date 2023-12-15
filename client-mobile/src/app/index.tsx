import { ListPageTemplate } from "@client/components/templates/ListPageTemplate"
import { ShoppingListsContainer } from "@client/containers/ShoppingListsContainer"

const IndexPage: React.FC = () => (
  <ListPageTemplate>
    <ShoppingListsContainer />
  </ListPageTemplate>
)

export default IndexPage
