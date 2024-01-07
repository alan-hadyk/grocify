import { Sx } from "dripsy"

export const inputLabelDefaultStyles: {
  label: Sx
  labelWrapper: Sx
  requiredStyles: Sx
} = {
  label: {
    marginBottom: "$4",
  },
  labelWrapper: {
    flexDirection: "row",
    gap: "$4",
  },
  requiredStyles: {
    fontWeight: "bold",
  },
}
