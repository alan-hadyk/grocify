import { queryClient } from "@client/clients/queryClient";
import { QueryClientProvider, focusManager } from "@tanstack/react-query";
import { useEffect } from "react";
import { AppState, AppStateStatus, Platform } from "react-native";

const onAppStateChange = (status: AppStateStatus) => {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
};

/**
 * Higher-order component that provides QueryClientProvider to the wrapped component.
 * @param {React.FC<Record<string, unknown>>} WrappedComponent - The component to wrap with QueryClientProvider.
 * @returns {React.FC<Record<string, unknown>>} - The component wrapped with QueryClientProvider.
 */
export const withQueryClientProvider =
  (WrappedComponent: React.FC<Record<string, unknown>>) =>
  (props: Record<string, unknown>) => {
    useEffect(() => {
      const subscription = AppState.addEventListener(
        "change",
        onAppStateChange,
      );

      return () => subscription.remove();
    }, []);

    return (
      <QueryClientProvider client={queryClient}>
        <WrappedComponent {...props} />
      </QueryClientProvider>
    );
  };
