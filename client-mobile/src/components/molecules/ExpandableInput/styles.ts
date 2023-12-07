import { IAnimatedViewProps } from "@client/components/animations/AnimatedView/@types"
import { IIconProps } from "@client/components/atoms/Icon/@types/Icon"
import { ColorPalette, Duration } from "@client/theme/@types"
import { Sx } from "dripsy"

export const expandableInputDefaultStyles: {
  closeIcon: Pick<IIconProps, "color" | "size">
  input: Sx
  mainContainer: Sx
  searchIcon: Pick<IIconProps, "color" | "size">
} = {
  closeIcon: {
    color: ColorPalette.Black400,
    size: 20,
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
    paddingLeft: "$9",
    paddingRight: "$9",
  },
  searchIcon: {
    color: ColorPalette.Black400,
    size: 20,
  },
}

export const getAnimatedViewProps = ({
  isOpen,
  screenWidth,
}: {
  isOpen: boolean
  screenWidth: number
}) => ({
  animate: {
    borderColor: isOpen ? ColorPalette.Black400 : ColorPalette.Gray100,
    borderRadius: isOpen ? 20 : 50,
    width: isOpen ? screenWidth - 88 : 40,
  },
  exitTransition: {
    duration: Duration.Fast,
    type: "timing",
  } as IAnimatedViewProps["exitTransition"],
  from: {
    borderColor: ColorPalette.Gray100,
    borderRadius: 50,
    width: 40,
  },
  transition: {
    duration: Duration.Fast,
    type: "timing",
  } as IAnimatedViewProps["transition"],
})
