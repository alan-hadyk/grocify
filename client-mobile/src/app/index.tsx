// import { Layout } from "@client/components/layout/Layout"
// import { useTranslation } from "react-i18next"
import { Layout } from "@client/components/layout/Layout"
import { Text } from "react-native"

const IndexPage: React.FC = () => {
  // Add translation
  // const { t } = useTranslation()

  return (
    <Layout>
      <Text>Main page</Text>
    </Layout>
  )
}

export default IndexPage
