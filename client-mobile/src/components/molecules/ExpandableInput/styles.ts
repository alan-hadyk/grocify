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
  },
  mainContainer: {
    alignItems: "center",
    backgroundColor: "$white",
    borderWidth: "$1",
    display: "flex",
    flexDirection: "row",
    gap: "$10",
    height: 40,
    justifyContent: "flex-start",
    paddingLeft: "$10",
    paddingRight: "$0",
  },
  searchIcon: {
    color: ColorPalette.Black400,
    height: 20,
    width: 20,
  },
}
