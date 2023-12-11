import { darkTheme, theme } from "@client/theme"
import { DripsyProvider } from "dripsy"
import { useColorScheme } from "react-native"

/**
 * Higher-order component that provides DripsyProvider to the wrapped component.
 * @param {React.FC<Record<string, unknown>>} WrappedComponent - The component to wrap with DripsyProvider.
 * @returns {React.FC<Record<string, unknown>>} - The component wrapped with DripsyProvider.
 */
export const withThemeProvider =
  (WrappedComponent: React.FC<Record<string, unknown>>) => (props: Record<string, unknown>) => {
    const colorScheme = useColorScheme()

    return (
      <DripsyProvider theme={colorScheme === "dark" ? darkTheme : theme}>
        <WrappedComponent {...props} />
      </DripsyProvider>
    )
  }
