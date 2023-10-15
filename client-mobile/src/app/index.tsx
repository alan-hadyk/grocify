import { PreferredLang, useCreateUserMutation, useUserQuery } from "@client/api/schema"
import { Button } from "@client/components/atoms/Button"
import { Paragraph } from "@client/components/atoms/Paragraph"
import { Title } from "@client/components/atoms/Title"
import { Layout } from "@client/components/layout/Layout"
import { useState } from "react"
import { useTranslation } from "react-i18next"

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

  const { t } = useTranslation()

  // TODO - Cleanup dummy JSX
  return (
    <Layout>
      <Title>Grocify</Title>
      {!isCreatingUser && !createUserData?.createUser && (
        <Button onPress={onClick} title={t("Create user")} />
      )}
      {isCreatingUser && <Paragraph>{t("Loading...")}</Paragraph>}
      {createUserData?.createUser.username && (
        <>
          <Paragraph>Created user: {createUserData?.createUser.username}</Paragraph>
          {!data?.user && !isLoadingUser && (
            <Button onPress={enableQuery} title={t("Search for created user")} />
          )}
        </>
      )}
      {isLoadingUser && <Paragraph>{t("Searching for created user...")}</Paragraph>}
      {data?.user.username && (
        <Paragraph>
          {t("Search result")}: {data?.user.username}
        </Paragraph>
      )}
    </Layout>
  )
}

export default IndexPage
