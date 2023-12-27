import { ListPageTemplate } from "@client/components/templates/ListPageTemplate"
import { ShoppingListsContainer } from "@client/containers/ShoppingListsContainer"

const ShoppingListsPage: React.FC = () => (
  <ListPageTemplate>
    <ShoppingListsContainer />
  </ListPageTemplate>
)

export default ShoppingListsPage
