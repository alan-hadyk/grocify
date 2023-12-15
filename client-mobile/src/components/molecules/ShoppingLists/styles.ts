import { Sx } from "dripsy"

export const shoppingListsDefaultStyles: {
  button: Sx
  mainWrapper: Sx
  textWrapper: Sx
} = {
  button: {
    marginTop: "$16",
  },
  mainWrapper: {
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    width: "100%",
  },
  textWrapper: {
    alignItems: "center",
  },
}
