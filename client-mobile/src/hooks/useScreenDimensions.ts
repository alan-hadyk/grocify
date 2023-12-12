import { Dimensions, StatusBar } from "react-native"

export const useScreenDimensions = () => {
  const screenWidth = Dimensions.get("window").width
  const windowHeight = Dimensions.get("window").height
  const screenHeight = StatusBar.currentHeight
    ? windowHeight - StatusBar.currentHeight
    : windowHeight

  return {
    screenHeight,
    screenWidth,
  }
}
