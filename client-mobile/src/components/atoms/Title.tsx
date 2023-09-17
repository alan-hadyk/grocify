import { Theme } from "@client/theme"
import { createText } from "@shopify/restyle"
import { ReactNode } from "react"

const Text = createText<Theme>()

interface ITitleProps {
  children: ReactNode | ReactNode[]
}

// TODO - Dummy component: remove
export const Title: React.FC<ITitleProps> = ({ children }) => (
  <Text variant="title" color="mainText">
    {children}
  </Text>
)
