// import { useTranslation } from "react-i18next"
import { Layout } from "@client/components/layout/Layout"
import { H1 } from "dripsy"

const IndexPage: React.FC = () => {
  // Add translation
  // const { t } = useTranslation()

  return (
    <Layout>
      <H1
        sx={{
          fontWeight: "bold",
        }}>
        Main page
      </H1>
    </Layout>
  )
}

export default IndexPage
