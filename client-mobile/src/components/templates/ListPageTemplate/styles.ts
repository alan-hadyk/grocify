import { Sx } from "dripsy"

export const getlistPageTemplateDefaultStyles = ({
  screenHeight,
  screenWidth,
}: {
  screenHeight: number
  screenWidth: number
}): Sx => {
  return {
    alignItems: "center",
    height: screenHeight - 40,
    paddingBottom: "$16",
    paddingTop: "$32",
    paddingX: "$16",
    width: screenWidth,
  }
}
