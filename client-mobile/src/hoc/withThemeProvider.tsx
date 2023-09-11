import { theme } from "@client/theme";
import { ThemeProvider } from "@shopify/restyle";

/**
 * Higher-order component that provides ThemeProvider to the wrapped component.
 * @param {React.FC<Record<string, unknown>>} WrappedComponent - The component to wrap with ThemeProvider.
 * @returns {React.FC<Record<string, unknown>>} - The component wrapped with ThemeProvider.
 */
export const withThemeProvider =
  (WrappedComponent: React.FC<Record<string, unknown>>) =>
  (props: Record<string, unknown>) => (
    <ThemeProvider theme={theme}>
      <WrappedComponent {...props} />
    </ThemeProvider>
  );
