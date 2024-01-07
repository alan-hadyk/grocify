import { Typography } from "@client/components/atoms/Typography"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { IInputLabelProps } from "@client/components/molecules/InputLabel/@types"
import { inputLabelDefaultStyles } from "@client/components/molecules/InputLabel/styles"
import { View } from "dripsy"
import React from "react"

export const InputLabel: React.FC<IInputLabelProps> = ({ label, isRequired = false }) => {
  const { label: labelStyles, labelWrapper, requiredStyles } = inputLabelDefaultStyles

  return (
    <View sx={labelWrapper}>
      <Typography sx={labelStyles} text={label} variant={TypographyVariant.InputLabel} />
      {isRequired && (
        <Typography sx={requiredStyles} text="required" variant={TypographyVariant.InputLabel} />
      )}
    </View>
  )
}
