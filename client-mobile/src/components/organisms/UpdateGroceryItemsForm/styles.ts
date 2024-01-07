import { Sx } from "dripsy"
import { StyleProp, ViewStyle } from "react-native"

export const addGroceryItemsFormDefaultStyles: {
  button: Sx
  childrenWrapper: StyleProp<ViewStyle>
  outerWrapper: Sx
} = {
  button: {
    flexBasis: 40,
    marginTop: "$16",
    marginX: "$16",
  },
  childrenWrapper: {
    flexGrow: 1,
    gap: 16,
  },
  outerWrapper: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "space-between",
    paddingBottom: "$16",
  },
}
