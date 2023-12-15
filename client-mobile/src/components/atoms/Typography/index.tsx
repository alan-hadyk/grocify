import { ITypographyProps, TypographyVariant } from "@client/components/atoms/Typography/@types"
import { variantComponents } from "@client/components/atoms/Typography/config"
import {
  mapVariantToTypographyStyles,
  typographyDefaultStyles,
} from "@client/components/atoms/Typography/styles"
import { Sx } from "dripsy"
import { useTranslation } from "react-i18next"

export const Typography: React.FC<ITypographyProps> = ({
  variant = TypographyVariant.Text,
  sx,
  children,
}) => {
  const Component = variantComponents[variant]
  const { t } = useTranslation()

  const typographyStyles: Sx = {
    ...typographyDefaultStyles,
    ...mapVariantToTypographyStyles[variant],
    ...sx,
  }

  return <Component sx={typographyStyles}>{t(children)}</Component>
}
