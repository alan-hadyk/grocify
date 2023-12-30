import { Sx } from "dripsy"

export const addGroceryItemFormDefaultStyles = ({
  hasErrors,
}: {
  hasErrors: boolean
}): {
  iconButton: Sx
  nameInput: Sx
  unitInput: Sx
  outerWrapper: Sx
  wrapper: Sx
} => ({
  iconButton: {
    flexBasis: 40,
  },
  nameInput: {
    flexBasis: "auto",
    flexGrow: 1,
  },
  outerWrapper: {
    alignItems: hasErrors ? "center" : "flex-end",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "$12",
    marginTop: "$16",
    paddingX: "$16",
  },
  unitInput: {
    flexBasis: "40%",
  },
  wrapper: {
    alignItems: "flex-start",
    flexBasis: "85%",
    flexDirection: "row",
    gap: "$12",
  },
})
