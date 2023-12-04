import {
  IIconButtonDefaultStyles,
  IIconButtonStyleProps,
  IconButtonSize,
} from "@client/components/molecules/IconButton/@types/IconButton"
import { Theme } from "@client/theme"
import { color, composeRestyleFunctions, createVariant, layout, spacing } from "@shopify/restyle"

export const variant = createVariant<Theme, "iconButtonVariants">({
  themeKey: "iconButtonVariants",
})

export const iconButtonStylesFunctions = composeRestyleFunctions<Theme, IIconButtonStyleProps>([
  spacing,
  variant,
  color,
  layout,
])

export const iconButtonDefaultStyles: IIconButtonDefaultStyles = {
  wrapper: {
    alignItems: "center",
    borderRadius: 100,
    justifyContent: "center",
  },
}

export const mapSizeToIconButtonStyles = {
  [IconButtonSize.Small]: {
    wrapper: {
      height: 24,
      width: 24,
    },
  },
  [IconButtonSize.Medium]: {
    wrapper: {
      height: 40,
      width: 40,
    },
  },
}
