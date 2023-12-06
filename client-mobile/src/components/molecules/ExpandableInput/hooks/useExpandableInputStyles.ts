import { IUseExpandableInputStyles } from "@client/components/molecules/ExpandableInput/@types/ExpandableInput"
import { expandableInputDefaultStyles } from "@client/components/molecules/ExpandableInput/styles"
import { Dimensions } from "react-native"

export const useExpandableInputStyles = ({ value }: IUseExpandableInputStyles) => {
  const inputStyles = expandableInputDefaultStyles.input

  const closeIconStyles = {
    ...expandableInputDefaultStyles.closeIcon,
    ...(value
      ? {
          style: {
            opacity: 1,
          },
        }
      : {
          style: {
            opacity: 0,
          },
        }),
  }

  const searchIconStyles = expandableInputDefaultStyles.searchIcon

  const mainContainerStyles = expandableInputDefaultStyles.mainContainer
  const screenWidth = Dimensions.get("window").width

  return {
    closeIconStyles,
    inputStyles,
    mainContainerStyles,
    screenWidth,
    searchIconStyles,
  }
}
