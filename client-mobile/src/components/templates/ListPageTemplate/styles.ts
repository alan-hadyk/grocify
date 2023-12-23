import { Sx } from "dripsy"
import { StyleProp, ViewStyle } from "react-native"

export const listPageDefaultStyles: {
  childrenWrapper: StyleProp<ViewStyle>
  mainWrapper: Sx
} = {
  childrenWrapper: {
    height: "100%",
  },
  mainWrapper: {
    backgroundColor: "$white",
    paddingTop: "$32",
    paddingX: "$16",
  },
}
