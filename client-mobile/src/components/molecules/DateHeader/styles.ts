import { Sx } from "dripsy"

export const dateHeaderDefaultStyles: {
  subtitle: Sx
  wrapper: Sx
} = {
  subtitle: {
    textTransform: "capitalize",
  },
  wrapper: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    marginTop: "$12",
  },
}
