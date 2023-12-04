import { View } from "dripsy"
import { ReactNode } from "react"
import { Dimensions } from "react-native"

interface ILayoutProps {
  children: ReactNode | ReactNode[]
}

// TODO - Dummy component: remove
export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const screenHeight = Dimensions.get("window").height
  const screenWidth = Dimensions.get("window").width

  return (
    <View
      sx={{
        alignItems: "center",
        gap: "$16",
        height: screenHeight - 160,
        justifyContent: "center",
        padding: "$40",
        width: screenWidth,
      }}>
      {children}
    </View>
  )
}
