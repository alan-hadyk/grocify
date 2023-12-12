import { ITypographyProps, TypographyVariant } from "@client/components/atoms/Typography/@types"
import { variantComponents } from "@client/components/atoms/Typography/config"
import {
  mapVariantToTypographyStyles,
  typographyDefaultStyles,
} from "@client/components/atoms/Typography/styles"
import { Sx, Text } from "dripsy"

export const Typography = ({
  variant = TypographyVariant.Text,
  sx,
  children,
}: ITypographyProps) => {
  const Component = variantComponents[variant] || Text

  const typographyStyles: Sx = {
    ...typographyDefaultStyles,
    ...mapVariantToTypographyStyles[variant],
    ...sx,
  }

  return <Component sx={typographyStyles}>{children}</Component>
}
