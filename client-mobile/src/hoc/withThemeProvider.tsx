import { darkTheme, theme } from "@client/theme";
import { ThemeProvider } from "@shopify/restyle";
import { useColorScheme } from "react-native";

/**
 * Higher-order component that provides ThemeProvider to the wrapped component.
 * @param {React.FC<Record<string, unknown>>} WrappedComponent - The component to wrap with ThemeProvider.
 * @returns {React.FC<Record<string, unknown>>} - The component wrapped with ThemeProvider.
 */
export const withThemeProvider =
  (WrappedComponent: React.FC<Record<string, unknown>>) =>
  (props: Record<string, unknown>) => {
    const colorScheme = useColorScheme();

    return (
      <ThemeProvider theme={colorScheme === "dark" ? darkTheme : theme}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  };
