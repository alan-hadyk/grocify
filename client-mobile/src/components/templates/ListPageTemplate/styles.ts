import { Sx } from "dripsy"
import { StyleProp, ViewStyle } from "react-native"

export const getlistPageTemplateDefaultStyles = ({ screenWidth }: { screenWidth: number }): Sx => ({
  height: "100%",
  paddingTop: "$32",
  paddingX: "$16",
  width: screenWidth,
})

export const listPageDefaultStyles: {
  childrenWrapper: StyleProp<ViewStyle>
} = {
  childrenWrapper: {
    height: "100%",
  },
}
