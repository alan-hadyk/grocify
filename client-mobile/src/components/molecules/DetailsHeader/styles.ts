import { Sx } from "dripsy"

export const detailsHeaderDefaultStyles: {
  buttonWrapper: Sx
  wrapper: Sx
} = {
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "$8",
  },
  wrapper: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "$8",
    justifyContent: "space-between",
  },
}
