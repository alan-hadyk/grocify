import { IAnimatedViewProps } from "@client/components/animations/AnimatedView/@types"
import { Duration } from "@client/theme/@types"
import { Sx } from "dripsy"

export const animatedSplashScreenDefaultStyles = ({
  screenHeight,
  screenWidth,
}: {
  screenHeight: number
  screenWidth: number
}): {
  childrenWrapper: Sx
  loaderWrapper: Sx
} => ({
  childrenWrapper: {
    height: screenHeight,
    width: screenWidth,
  },
  loaderWrapper: {
    backgroundColor: "$green400",
    height: screenHeight,
    left: "$0",
    padding: "12.5%",
    position: "absolute",
    top: "$0",
    width: screenWidth,
  },
})

export const animatedSplashScreenAnimationProps = {
  childrenWrapperProps: {
    animate: { opacity: 1 } as IAnimatedViewProps["animate"],
    from: {
      opacity: 0,
    } as IAnimatedViewProps["from"],
    transition: {
      duration: Duration.Slow,
      type: "timing",
    } as IAnimatedViewProps["transition"],
  },
  loaderWrapperProps: {
    exit: { opacity: 0, scale: 2 } as IAnimatedViewProps["exit"],
    exitTransition: {
      duration: Duration.Default,
      type: "timing",
    } as IAnimatedViewProps["exitTransition"],
    from: {
      opacity: 1,
      scale: 1,
    } as IAnimatedViewProps["from"],
  },
}
