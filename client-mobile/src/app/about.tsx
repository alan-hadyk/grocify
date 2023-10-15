import { Paragraph } from "@client/components/atoms/Paragraph"
import { Title } from "@client/components/atoms/Title"
import { Layout } from "@client/components/layout/Layout"
import { useTranslation } from "react-i18next"

// TODO - Cleanup dummy JSX and possibly remove this page if not needed
const AboutPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Title>Grocify</Title>
      <Paragraph>{t("About page")}</Paragraph>
    </Layout>
  )
}

export default AboutPage
