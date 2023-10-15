import { Button } from "@client/components/atoms/Button"
import { Theme } from "@client/theme"
import { createBox } from "@shopify/restyle"
import { Link, usePathname } from "expo-router"
import { useTranslation } from "react-i18next"

const Box = createBox<Theme>()

export const FooterContainer: React.FC = () => {
  const pathname = usePathname()
  const { t } = useTranslation()

  // TODO - Refactor dummy JSX
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
        }}
        asChild>
        <Button
          color={pathname === "/" ? "buttonFooterActiveText" : "buttonFooterDefaultText"}
          title="Home"
          variant="footer"
        />
      </Link>
      <Link
        href="/about"
        style={{
          flexBasis: "50%",
          height: 80,
        }}
        asChild>
        <Button
          color={pathname === "/about" ? "buttonFooterActiveText" : "buttonFooterDefaultText"}
          title={t("About page")}
          variant="footer"
        />
      </Link>
    </Box>
  )
}
