import { Theme } from "@client/theme"
import { createText } from "@shopify/restyle"
import { ReactNode } from "react"

const Text = createText<Theme>()

interface IParagraphProps {
  children: ReactNode | ReactNode[]
}

// TODO - Dummy component: remove
export const Paragraph: React.FC<IParagraphProps> = ({ children }) => (
  <Text variant="paragraph" color="mainText">
    {children}
  </Text>
)
