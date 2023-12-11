import { ClickOutsideProvider } from "react-native-click-outside"

/**
 * Higher-order component that provides DripsyProvider to the wrapped component.
 * @param {React.FC<Record<string, unknown>>} WrappedComponent - The component to wrap with DripsyProvider.
 * @returns {React.FC<Record<string, unknown>>} - The component wrapped with DripsyProvider.
 */
export const withClickOutsideProvider =
  (WrappedComponent: React.FC<Record<string, unknown>>) => (props: Record<string, unknown>) => (
    <ClickOutsideProvider>
      <WrappedComponent {...props} />
    </ClickOutsideProvider>
  )
