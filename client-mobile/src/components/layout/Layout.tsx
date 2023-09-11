import { Theme } from "@client/theme"
import { createBox } from "@shopify/restyle"
import { ReactNode } from "react"
import { Dimensions } from "react-native"

interface IViewProps {
  children: ReactNode | ReactNode[]
}

const Box = createBox<Theme>()

// TODO - Dummy component: remove
export const Layout: React.FC<IViewProps> = ({ children }) => {
  const screenHeight = Dimensions.get("window").height
  const screenWidth = Dimensions.get("window").width

  return (
    <Box
      backgroundColor="mainBackground"
      padding="40"
      alignItems="center"
      justifyContent="center"
      height={screenHeight}
      width={screenWidth}>
      {children}
    </Box>
  )
}
