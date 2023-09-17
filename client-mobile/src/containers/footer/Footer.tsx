import { Theme } from "@client/theme"
import { createBox } from "@shopify/restyle"
import { Link, usePathname } from "expo-router"

const Box = createBox<Theme>()

export const FooterContainer: React.FC = () => {
  const pathname = usePathname()

  // TODO - Refactor dummy JSX
  return (
    <Box
      alignItems="center"
      backgroundColor="footerBackground"
      justifyContent="space-between"
      gap="8"
      height={80}
      flexWrap="nowrap"
      flexDirection="row">
      <Link
        href="/"
        style={{
          color: pathname === "/" ? "#36D399" : "#0B0B0B",
          flexBasis: "50%",
          fontWeight: pathname === "/" ? "bold" : "normal",
          textAlign: "center",
        }}>
        Home
      </Link>
      <Link
        href="/about"
        style={{
          color: pathname === "/about" ? "#36D399" : "#0B0B0B",
          flexBasis: "50%",
          fontWeight: pathname === "/about" ? "bold" : "normal",
          textAlign: "center",
        }}>
        About
      </Link>
    </Box>
  )
}
