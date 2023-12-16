import { Sx } from "dripsy"

export const footerMenuItemStyles = ({
  isActive,
}: {
  isActive: boolean
}): {
  label: Sx
  wrapper: Sx
} => ({
  label: {
    color: isActive ? "$black400" : "$gray400",
    textTransform: "capitalize",
  },
  wrapper: {
    alignItems: "center",
    display: "flex",
    gap: "$6",
    height: "100%",
    justifyContent: "center",
  },
})
