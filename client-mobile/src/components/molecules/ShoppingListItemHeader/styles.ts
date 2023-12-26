import { Sx } from "dripsy"

export const shoppingListItemHeaderDefaultStyles: {
  buttonWrapper: Sx
  wrapper: Sx
} = {
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "$12",
  },
  wrapper: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "$12",
    justifyContent: "space-between",
  },
}
