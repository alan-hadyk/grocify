import { ItemPageTemplate } from "@client/components/templates/ItemPageTemplate"
import { ShoppingItemContainer } from "@client/containers/ShoppingItemContainer"

const ShoppingListPage: React.FC = () => (
  <ItemPageTemplate>
    <ShoppingItemContainer />
  </ItemPageTemplate>
)

export default ShoppingListPage
