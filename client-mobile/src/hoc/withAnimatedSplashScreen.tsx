import { IAppProps } from "@client/@types/app"
import { AnimatedSplashScreen } from "@client/components/molecules/AnimatedSplashScreen"
import { SplashScreen } from "expo-router"
import React from "react"

/**
 * Higher-order component that renders animated splash screen.
 * @param {React.FC<IAppProps>} Component - The component to wrap with this HOC.
 * @returns {React.FC<IAppProps>} - The component wrapped with this HOC.
 */
export const withAnimatedSplashScreen = (Component: React.FC<IAppProps>) => (props: IAppProps) => (
  <AnimatedSplashScreen
    onInit={() => {
      SplashScreen.hideAsync()
    }}>
    <Component {...props} />
  </AnimatedSplashScreen>
)
