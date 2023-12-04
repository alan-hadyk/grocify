import { IExpandableInputStyles } from "@client/components/molecules/ExpandableInput/@types/ExpandableInput"
import { Theme } from "@client/theme"
import { color, composeRestyleFunctions, layout, spacing } from "@shopify/restyle"

export const expandableInputStylesFunctions = {
  closeIcon: composeRestyleFunctions<Theme, IExpandableInputStyles["closeIcon"]>([color, layout]),
  input: composeRestyleFunctions<Theme, IExpandableInputStyles["input"]>([color, layout]),
  mainContainer: composeRestyleFunctions<Theme, IExpandableInputStyles["mainContainer"]>([
    color,
    layout,
    spacing,
  ]),
  searchIcon: composeRestyleFunctions<Theme, IExpandableInputStyles["searchIcon"]>([color, layout]),
}

export const expandableInputDefaultStyles: IExpandableInputStyles = {
  closeIcon: {
    color: "black400",
    height: 12,
    width: 12,
  },
  input: {
    color: "black400",
    fontSize: 20,
    marginLeft: 10,
    width: "80%",
  },
  mainContainer: {
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    paddingBottom: "10",
    paddingLeft: "12",
    paddingRight: "12",
    paddingTop: "10",
    transition: "all 300ms ease-in-out",
  },
  searchIcon: {
    color: "black400",
    height: 20,
    width: 20,
  },
}
