import { ListPageTemplate } from "@client/components/templates/ListPageTemplate"
import { H1 } from "dripsy"

const IndexPage: React.FC = () => (
  <ListPageTemplate>
    <H1
      sx={{
        fontWeight: "bold",
      }}>
      Main page
    </H1>
  </ListPageTemplate>
)

export default IndexPage
