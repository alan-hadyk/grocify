import { Sx } from "dripsy"

export const footerMenuDefaultStyles: Record<"menu" | "wrapper", Sx> = {
  menu: {
    backgroundColor: "$white",
    boxShadow: "md",
    flexBasis: 80,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    width: "100%",
  },
  wrapper: {
    flexBasis: 96,
    overflow: "hidden",
    paddingTop: "$16",
    width: "100%",
  },
}
