import { MainLayoutTemplate } from "@client/components/templates/MainLayoutTemplate"
import { FooterContainer } from "@client/containers/FooterContainer"
import { HeaderContainer } from "@client/containers/HeaderContainer"
import { Stack } from "expo-router"

const MainLayout: React.FC = () => (
  <MainLayoutTemplate>
    <HeaderContainer />
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
    <FooterContainer />
  </MainLayoutTemplate>
)

export default MainLayout
