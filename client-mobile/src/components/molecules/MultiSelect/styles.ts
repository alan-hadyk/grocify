import { Sx } from "dripsy"

export const multiSelectDefaultStyles = ({
  isSelected,
}: {
  isSelected: boolean
}): {
  wrapper: Sx
} => ({
  wrapper: {
    borderTopColor: isSelected ? "$green400" : "$gray100",
    borderTopWidth: "$1",
    flexDirection: "column",
  },
})
