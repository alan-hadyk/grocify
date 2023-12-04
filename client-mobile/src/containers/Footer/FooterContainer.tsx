// import { Button } from "@client/components/atoms/Button"
import { View } from "dripsy"
import { Link } from "expo-router"
// import { useTranslation } from "react-i18next"
import { Text } from "react-native"
export const FooterContainer: React.FC = () => {
  // const pathname = usePathname()
  // const { t } = useTranslation()

  return (
    <View
      sx={{
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "nowrap",
        height: 80,
        justifyContent: "center",
      }}>
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
    </View>
  )
}
