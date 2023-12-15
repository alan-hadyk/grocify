import loader from "@client/assets/animations/loader.json"
import { AnimatedView } from "@client/components/animations/AnimatedView"
import { IAnimatedSplashScreenProps } from "@client/components/molecules/AnimatedSplashScreen/@types"
import {
  animatedSplashScreenAnimationProps,
  animatedSplashScreenDefaultStyles,
} from "@client/components/molecules/AnimatedSplashScreen/styles"
import { useScreenDimensions } from "@client/hooks/useScreenDimensions"
import { Duration } from "@client/theme/@types"
import LottieView from "lottie-react-native"
import React, { useState } from "react"
import { useTimeout } from "usehooks-ts"

export const AnimatedSplashScreen: React.FC<IAnimatedSplashScreenProps> = ({
  children,
  onInit,
}) => {
  const [isLoaderVisible, setIsLoaderVisible] = useState<boolean>(true)
  const { screenHeight, screenWidth } = useScreenDimensions()
  const animatedSplashScreenStyles = animatedSplashScreenDefaultStyles({
    screenHeight,
    screenWidth,
  })

  useTimeout(onInit, 0)

  useTimeout(() => {
    setIsLoaderVisible(false)
  }, Duration.VerySlow)

  return (
    <>
      <AnimatedView
        {...animatedSplashScreenAnimationProps.loaderWrapperProps}
        isVisible={isLoaderVisible}
        sx={animatedSplashScreenStyles.loaderWrapper}>
        <LottieView source={loader} autoPlay loop={false} />
      </AnimatedView>
      <AnimatedView
        {...animatedSplashScreenAnimationProps.childrenWrapperProps}
        isVisible={!isLoaderVisible}
        sx={animatedSplashScreenStyles.childrenWrapper}>
        {children}
      </AnimatedView>
    </>
  )
}
