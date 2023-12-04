import { IIconStyleProps } from "@client/components/atoms/Icon/@types/Icon"
import { Theme } from "@client/theme"
import { color, composeRestyleFunctions, layout, spacing } from "@shopify/restyle"

export const iconStylesFunctions = composeRestyleFunctions<Theme, IIconStyleProps>([
  spacing,
  color,
  layout,
])
