import { PreferredLang, useCreateUserMutation, useUserQuery } from "@client/api/schema"
import { Button } from "@client/components/atoms/Button"
import { Header } from "@client/components/atoms/Header"
import { Paragraph } from "@client/components/atoms/Paragraph"
import { Layout } from "@client/components/layout/Layout"
import { composeFunctions } from "@client/helpers/functions/composeFunctions"
import { withQueryClientProvider } from "@client/hoc/withQueryClientProvider"
import { withThemeProvider } from "@client/hoc/withThemeProvider"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"

// TODO - Dummy code remove
let randomUserName = String(Date.now())

const _App: React.FC = () => {
  const { isLoading: isCreatingUser, mutateAsync, data: createUserData } = useCreateUserMutation()

  // TODO - Dummy code remove
  const onClick = async () => {
    randomUserName = String(Date.now())

    await mutateAsync({
      email: `${randomUserName}@gmail.com`,
      password: "12345678",
      preferredLanguage: PreferredLang.Pl,
      username: randomUserName,
    })
  }

  const [isQueryEnabled, setIsQueryEnabled] = useState<boolean>(false)

  const enableQuery = () => {
    setIsQueryEnabled(true)
  }

  // TODO - Dummy code remove
  const { data, isInitialLoading: isLoadingUser } = useUserQuery(
    {
      username: randomUserName,
    },
    {
      enabled: isQueryEnabled,
    },
  )

  // TODO - Cleanup dummy JSX
  return (
    <Layout>
      <Header>Grocify</Header>
      {!isCreatingUser && !createUserData?.createUser && (
        <Button onPress={onClick} title="Create user" />
      )}
      {isCreatingUser && <Paragraph>Loading...</Paragraph>}
      {createUserData?.createUser.username && (
        <>
          <Paragraph>Created user: {createUserData?.createUser.username}</Paragraph>
          {!data?.user && !isLoadingUser && (
            <Button onPress={enableQuery} title="Search for created user" />
          )}
          {isLoadingUser && <Paragraph>Searching for created user...</Paragraph>}
          {data?.user.username && <Paragraph>Search result: {data?.user.username}</Paragraph>}
        </>
      )}
      <StatusBar style="auto" />
    </Layout>
  )
}

export const App = composeFunctions<Record<string, unknown>>(
  withQueryClientProvider,
  withThemeProvider,
)(_App)

export default App
