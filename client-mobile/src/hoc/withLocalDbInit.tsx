import { IAppProps } from "@client/@types/app"
import { useLocalDbInit } from "@client/hooks/useLocalDbInit"

/**
 * Higher-order component that inits local db schema
 * @param {React.FC<IAppProps>} Component - The component to wrap with this HOC.
 * @returns {React.FC<IAppProps>} - The component wrapped with this HOC.
 */
export const withLocalDbInit = (Component: React.FC<IAppProps>) => (props: IAppProps) => {
  const { dbInitError, isDbInitialized } = useLocalDbInit()

  if (dbInitError) {
    throw new Error(dbInitError.message)
  }

  return isDbInitialized && <Component {...props} />
}
