import { Sx } from "dripsy"

export const footerMenuItemDefaultStyles: Sx = {
  alignItems: "center",
  display: "flex",
  height: 80,
  justifyContent: "center",
}

export const footerMenuItemStyles = ({ isActive }: { isActive: boolean }): Record<"text", Sx> => ({
  text: {
    color: isActive ? "$black400" : "$gray400",
    marginTop: "$6",
  },
})
