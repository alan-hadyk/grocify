import { Sx } from "dripsy"

export const multiSelectItemDefaultStyles = ({
  isSelected,
}: {
  isSelected: boolean
}): {
  checkboxWrapper: Sx
  wrapper: Sx
} => ({
  checkboxWrapper: {
    alignItems: "center",
    backgroundColor: isSelected ? "$green400" : "$white",
    borderColor: "$green500",
    borderRadius: "$50",
    borderWidth: "$1",
    height: 24,
    justifyContent: "center",
    width: 24,
  },
  wrapper: {
    alignItems: "center",
    backgroundColor: isSelected ? "$green100" : "$white",
    borderBottomColor: isSelected ? "$green400" : "$gray100",
    borderBottomWidth: "$1",
    flexDirection: "row",
    gap: "$8",
    paddingX: "$16",
    paddingY: isSelected ? "$10" : "$12",
  },
})
