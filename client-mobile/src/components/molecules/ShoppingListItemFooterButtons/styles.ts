import { Sx } from "dripsy"

export const shoppingListItemFooterButtonsDefaultStyle: {
  button: Sx
  recipeButton: Sx
  wrapper: Sx
} = {
  button: {
    flexBasis: "auto",
    flexGrow: 1,
  },
  recipeButton: {
    flexBasis: "35%",
  },
  wrapper: {
    flexBasis: 40,
    flexDirection: "row",
    gap: "$12",
    justifyContent: "space-between",
  },
}
