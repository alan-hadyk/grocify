import { ListPageTemplate } from "@client/components/templates/ListPageTemplate"
import { ShoppingListContainer } from "@client/containers/ShoppingListContainer"

const IndexPage: React.FC = () => (
  <ListPageTemplate>
    <ShoppingListContainer />
  </ListPageTemplate>
)

export default IndexPage
