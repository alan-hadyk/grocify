import { IAppProps } from "@client/@types/app"
import { darkTheme, theme } from "@client/theme"
import { DripsyProvider } from "dripsy"
import { useColorScheme } from "react-native"

/**
 * Higher-order component that provides DripsyProvider to the wrapped component.
 * @param {React.FC<IAppProps>} WrappedComponent - The component to wrap with DripsyProvider.
 * @returns {React.FC<IAppProps>} - The component wrapped with DripsyProvider.
 */
export const withThemeProvider = (WrappedComponent: React.FC<IAppProps>) => (props: IAppProps) => {
  const colorScheme = useColorScheme()

  return (
    <DripsyProvider theme={colorScheme === "dark" ? darkTheme : theme}>
      <WrappedComponent {...props} />
    </DripsyProvider>
  )
}
