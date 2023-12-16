import { ITypographyProps, TypographyVariant } from "@client/components/atoms/Typography/@types"
import { variantComponents } from "@client/components/atoms/Typography/config"
import {
  mapVariantToTypographyStyles,
  typographyDefaultStyles,
} from "@client/components/atoms/Typography/styles"
import { Sx } from "dripsy"

export const Typography: React.FC<ITypographyProps> = ({
  variant = TypographyVariant.Text,
  sx,
  children,
}) => {
  const Component = variantComponents[variant]

  const typographyStyles: Sx = {
    ...typographyDefaultStyles,
    ...mapVariantToTypographyStyles[variant],
    ...sx,
  }

  return <Component sx={typographyStyles}>{children}</Component>
}
