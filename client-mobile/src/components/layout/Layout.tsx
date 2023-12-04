import { Theme } from "@client/theme"
import { createBox } from "@shopify/restyle"
import { ReactNode } from "react"
import { Dimensions } from "react-native"

interface ILayoutProps {
  children: ReactNode | ReactNode[]
}

const Box = createBox<Theme>()

// TODO - Dummy component: remove
export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const screenHeight = Dimensions.get("window").height
  const screenWidth = Dimensions.get("window").width

  return (
    <Box
      padding="40"
      alignItems="center"
      justifyContent="center"
      gap="16"
      height={screenHeight - 80}
      width={screenWidth}>
      {children}
    </Box>
  )
}
