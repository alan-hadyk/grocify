import {
  expandableInputDefaultStyles,
  expandableInputStylesFunctions,
} from "@client/components/molecules/ExpandableInput/styles"
import { ColorPalette } from "@client/theme/@types"
import { useRestyle } from "@shopify/restyle"

export const useExpandableInputStyles = ({ isOpen }) => {
  const inputStyles = useRestyle(
    expandableInputStylesFunctions.input,
    expandableInputDefaultStyles.input,
  )

  const closeIconStyles = useRestyle(
    expandableInputStylesFunctions.searchIcon,
    expandableInputDefaultStyles.searchIcon,
  )

  const searchIconStyles = useRestyle(
    expandableInputStylesFunctions.searchIcon,
    expandableInputDefaultStyles.searchIcon,
  )

  const mainContainerStyles = {
    // style: StyleSheet.create({
    //   transitionTiming: 300,
    // }),
    ...useRestyle(expandableInputStylesFunctions.mainContainer, {
      ...expandableInputDefaultStyles.mainContainer,

      ...(isOpen
        ? {
            borderColor: ColorPalette.Black400,
            transition: "0.5s, transform 0.5s",
            width: "80%",
          }
        : {
            borderColor: ColorPalette.Gray100,
            borderRadius: 100,
            borderWidth: 1,
            transition: "0.5s, transform 0.5s",
            width: 40,
          }),
    }),
  }
  return {
    closeIconStyles,
    inputStyles,
    mainContainerStyles,
    searchIconStyles,
  }
}
