import { IUseExpandableInputStyles } from "@client/components/molecules/ExpandableInput/@types"
import { expandableInputDefaultStyles } from "@client/components/molecules/ExpandableInput/styles"
import { useScreenDimensions } from "@client/hooks/useScreenDimensions"

export const useExpandableInputStyles = ({
  value,
  animatedContainerWidth,
}: IUseExpandableInputStyles) => {
  const { screenWidth } = useScreenDimensions()

  const inputStyles = {
    ...expandableInputDefaultStyles.input,
    minWidth: animatedContainerWidth - 80,
    width: "72.125%",
  }

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

  return {
    closeIconStyles,
    inputStyles,
    screenWidth,
  }
}
