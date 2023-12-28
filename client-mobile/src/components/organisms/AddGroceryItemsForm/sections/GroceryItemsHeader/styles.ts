import { Sx } from "dripsy"

export const groceryItemsHeaderDefaultStyles: {
  iconButton: Sx
  nameInput: Sx
  unitInput: Sx
  wrapper: Sx
} = {
  iconButton: {
    flexBasis: 40,
  },
  nameInput: {
    flexBasis: "auto",
    flexGrow: 1,
  },
  unitInput: {
    flexBasis: "33%",
  },
  wrapper: {
    alignItems: "flex-end",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "$12",
  },
}
