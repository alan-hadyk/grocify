import { IIconProps } from "@client/components/atoms/Icon/@types/Icon"
import { ColorPalette } from "@client/theme/@types"
import { Sx } from "dripsy"

export const expandableInputDefaultStyles: {
  closeIcon: IIconProps["svgProps"]
  input: Sx
  mainContainer: Sx
  searchIcon: IIconProps["svgProps"]
} = {
  closeIcon: {
    color: ColorPalette.Black400,
    height: 12,
    width: 12,
  },
  input: {
    color: "$black400",
    fontSize: "$14",
    marginLeft: "$10",
    width: "80%",
  },
  mainContainer: {
    alignItems: "center",
    backgroundColor: "$white",
    borderRadius: "$100%",
    borderWidth: "$1",
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    transition: "all 300ms ease-in-out", // Needed?
  },
  searchIcon: {
    color: ColorPalette.Black400,
    height: 20,
    width: 20,
  },
}
