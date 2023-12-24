import { Sx } from "dripsy"

export const shoppingListButtonsDefaultStyles: {
  button: Sx
  recipeButton: Sx
  wrapper: Sx
} = {
  button: {
    flexBasis: "60%",
  },
  recipeButton: {
    flexBasis: "35%",
  },
  wrapper: {
    flexBasis: "40",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}
