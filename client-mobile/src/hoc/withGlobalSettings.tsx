import { IAppProps } from "@client/@types/app"
import { Platform, UIManager } from "react-native"

// Enable layout animation on Android.
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

/**
 * Higher-order component that provides global settings
 * @param {React.FC<IAppProps>} Component - The component to wrap with this HOC.
 * @returns {React.FC<IAppProps>} - The component wrapped with this HOC.
 */
export const withGlobalSettings = (Component: React.FC<IAppProps>) => (props: IAppProps) => (
  <Component {...props} />
)
