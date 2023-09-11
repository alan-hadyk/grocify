import { Theme } from "@client/theme"
import { createText } from "@shopify/restyle"
import { ReactNode } from "react"

const Text = createText<Theme>()

interface IHeaderProps {
  children: ReactNode | ReactNode[]
}

// TODO - Dummy component: remove
export const Header: React.FC<IHeaderProps> = ({ children }) => (
  <Text variant="header" color="mainText">
    {children}
  </Text>
)
