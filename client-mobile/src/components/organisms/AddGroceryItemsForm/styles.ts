import { Sx } from "dripsy"
import { StyleProp, ViewStyle } from "react-native"

export const addGroceryItemsFormDefaultStyles: {
  button: Sx
  childrenWrapper: StyleProp<ViewStyle>
  outerWrapper: Sx
  wrapper: Sx
} = {
  button: {
    marginX: "$16",
  },
  childrenWrapper: {
    flex: 1,
    flexBasis: "auto",
    flexGrow: 1,
    gap: 16,
    height: "auto",
    maxHeight: "100%",
  },
  outerWrapper: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: "$16",
  },
  wrapper: {
    flexGrow: 1,
    height: "100%",
  },
}
