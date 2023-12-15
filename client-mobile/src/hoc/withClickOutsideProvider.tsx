import { IAppProps } from "@client/@types/app"
import { ClickOutsideProvider } from "react-native-click-outside"

/**
 * Higher-order component that provides ClickOutsideProvider to the wrapped component.
 * @param {React.FC<IAppProps>} WrappedComponent - The component to wrap with ClickOutsideProvider.
 * @returns {React.FC<IAppProps>} - The component wrapped with ClickOutsideProvider.
 */
export const withClickOutsideProvider =
  (WrappedComponent: React.FC<IAppProps>) => (props: IAppProps) => (
    <ClickOutsideProvider>
      <WrappedComponent {...props} />
    </ClickOutsideProvider>
  )
