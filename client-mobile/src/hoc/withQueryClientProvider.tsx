import { IAppProps } from "@client/@types/app"
import { queryClient } from "@client/clients/queryClient"
import { QueryClientProvider, focusManager } from "@tanstack/react-query"
import { useEffect } from "react"
import { AppState, AppStateStatus, Platform } from "react-native"

/**
 * Higher-order component that provides QueryClientProvider to the wrapped component.
 * @param {React.FC<IAppProps>} WrappedComponent - The component to wrap with QueryClientProvider.
 * @returns {React.FC<IAppProps>} - The component wrapped with QueryClientProvider.
 */
export const withQueryClientProvider =
  (WrappedComponent: React.FC<IAppProps>) => (props: IAppProps) => {
    useEffect(() => {
      const subscription = AppState.addEventListener("change", (status: AppStateStatus) => {
        if (Platform.OS !== "web") {
          focusManager.setFocused(status === "active")
        }
      })

      return () => subscription.remove()
    }, [])

    return (
      <QueryClientProvider client={queryClient}>
        <WrappedComponent {...props} />
      </QueryClientProvider>
    )
  }
