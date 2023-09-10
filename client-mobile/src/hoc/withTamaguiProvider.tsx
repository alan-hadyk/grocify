import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "../../tamagui.config";

/**
 * Higher-order component that provides TamaguiProvider to the wrapped component.
 * @param {React.FC<Record<string, unknown>>} WrappedComponent - The component to wrap with TamaguiProvider.
 * @returns {React.FC<Record<string, unknown>>} - The component wrapped with TamaguiProvider.
 */
export const withTamaguiProvider =
  (WrappedComponent: React.FC<Record<string, unknown>>) =>
  (props: Record<string, unknown>) => (
    <TamaguiProvider config={tamaguiConfig}>
      <WrappedComponent {...props} />
    </TamaguiProvider>
  );
