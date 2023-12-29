import { Path } from "@client/routing/paths"
import { Redirect } from "expo-router"

const IndexPage: React.FC = () => <Redirect href={Path.ShoppingLists} />

export default IndexPage
