import { IUseExpandableInputStyles } from "@client/components/molecules/ExpandableInput/@types/ExpandableInput"
import { expandableInputDefaultStyles } from "@client/components/molecules/ExpandableInput/styles"
import { Sx } from "dripsy"

export const useExpandableInputStyles = ({ isOpen, value }: IUseExpandableInputStyles) => {
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

  const mainContainerStyles: Sx = {
    ...expandableInputDefaultStyles.mainContainer,
    ...(isOpen
      ? {
          borderColor: "$black400",
          borderRadius: "$20",
          paddingLeft: "$10",
          paddingRight: "$10",
          transition: "0.5s, transform 0.5s", // is this needed?
          width: "80%",
        }
      : {
          borderColor: "$gray100",
          borderRadius: "$50%",
          borderWidth: "$1",
          paddingLeft: "$0",
          paddingRight: "$0",
          transition: "0.5s, transform 0.5s", // is this needed?
          width: 40,
        }),
  }

  return {
    closeIconStyles,
    inputStyles,
    mainContainerStyles,
    searchIconStyles,
  }
}
