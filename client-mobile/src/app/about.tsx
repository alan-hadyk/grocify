import { Header } from "@client/components/atoms/Header"
import { Paragraph } from "@client/components/atoms/Paragraph"
import { Layout } from "@client/components/layout/Layout"

// TODO - Cleanup dummy JSX and possibly remove this page if not needed
const AboutPage: React.FC = () => (
  <Layout>
    <Header>Grocify</Header>
    <Paragraph>About page</Paragraph>
  </Layout>
)

export default AboutPage
