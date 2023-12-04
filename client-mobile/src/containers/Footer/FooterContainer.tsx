// import { Button } from "@client/components/atoms/Button"
import { Theme } from "@client/theme"
import { createBox } from "@shopify/restyle"
import { Link } from "expo-router"
// import { useTranslation } from "react-i18next"
import { Text } from "react-native"

const Box = createBox<Theme>()

export const FooterContainer: React.FC = () => {
  // const pathname = usePathname()
  // const { t } = useTranslation()

  return (
    <Box
      alignItems="center"
      height={80}
      justifyContent="center"
      flexWrap="nowrap"
      flexDirection="row">
      <Link
        href="/"
        style={{
          flexBasis: "50%",
          height: 80,
        }}>
        <Text>Shop lists</Text>
      </Link>
      <Link
        href="/recipes"
        style={{
          flexBasis: "50%",
          height: 80,
        }}>
        <Text>Recipes</Text>
      </Link>
    </Box>
  )
}
