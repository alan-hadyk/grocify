import { IAppProps } from "@client/@types/app"
import { useLoadFonts } from "@client/hooks/useLoadFonts"

/**
 * Higher-order component that loads needed fonts
 * @param {React.FC<IAppProps>>} Component - The component to wrap with this HOC.
 * @returns {React.FC<IAppProps>>} - The component wrapped with this HOC.
 */
export const withFonts = (Component: React.FC<IAppProps>) => (props: IAppProps) => {
  const { fontError, fontsLoaded } = useLoadFonts()
  const isLoaded = fontError || fontsLoaded

  if (!isLoaded) {
    return null
  }

  return <Component {...props} fontError={fontError} fontsLoaded={fontsLoaded} />
}
