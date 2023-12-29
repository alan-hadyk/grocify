import { ItemPageTemplate } from "@client/components/templates/ItemPageTemplate"
import { ShoppingListItemContainer } from "@client/containers/ShoppingListItemContainer"

const ShoppingListItemPage: React.FC = () => (
  <ItemPageTemplate>
    <ShoppingListItemContainer />
  </ItemPageTemplate>
)

export default ShoppingListItemPage
