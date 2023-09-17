import { PreferredLang, useCreateUserMutation, useUserQuery } from "@client/api/schema"
import { Button } from "@client/components/atoms/Button"
import { Header } from "@client/components/atoms/Header"
import { Paragraph } from "@client/components/atoms/Paragraph"
import { Layout } from "@client/components/layout/Layout"
import { useState } from "react"

// TODO - Dummy code remove
let randomUserName = String(Date.now())

const IndexPage: React.FC = () => {
  // TODO - Dummy code remove
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

  // TODO - Dummy code remove
  const [isQueryEnabled, setIsQueryEnabled] = useState<boolean>(false)

  // TODO - Dummy code remove
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
        </>
      )}
      {isLoadingUser && <Paragraph>Searching for created user...</Paragraph>}
      {data?.user.username && <Paragraph>Search result: {data?.user.username}</Paragraph>}
    </Layout>
  )
}

export default IndexPage
