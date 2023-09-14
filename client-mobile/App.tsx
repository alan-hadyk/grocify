import { PreferredLang, useCreateUserMutation } from "@client/api/schema"
import { Button } from "@client/components/atoms/Button"
import { Header } from "@client/components/atoms/Header"
import { Paragraph } from "@client/components/atoms/Paragraph"
import { Layout } from "@client/components/layout/Layout"
import { composeFunctions } from "@client/helpers/functions/composeFunctions"
import { withQueryClientProvider } from "@client/hoc/withQueryClientProvider"
import { withThemeProvider } from "@client/hoc/withThemeProvider"
import { StatusBar } from "expo-status-bar"

const _App: React.FC = () => {
  const { isLoading: isCreatingUser, mutateAsync, data } = useCreateUserMutation()

  const onClick = async () => {
    const randomUserName = String(Date.now())

    await mutateAsync({
      email: `${randomUserName}@gmail.com`,
      password: "12345678",
      preferredLanguage: PreferredLang.Pl,
      username: randomUserName,
    })
  }

  return (
    <Layout>
      <Header>Grocify</Header>
      {!isCreatingUser && !data?.createUser && <Button onPress={onClick} title="Create user" />}
      {isCreatingUser && <Paragraph>Loading...</Paragraph>}
      {data?.createUser.username && <Paragraph>User: {data?.createUser.username}</Paragraph>}
      <StatusBar style="auto" />
    </Layout>
  )
}

export const App = composeFunctions<Record<string, unknown>>(
  withQueryClientProvider,
  withThemeProvider,
)(_App)

export default App
