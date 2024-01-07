import { IInputMessageProps, InputMessageColor } from "@client/components/atoms/InputMessage/@types"
import {
  inputMessageDefaultStyles,
  mapColorToInputMessageStyles,
} from "@client/components/atoms/InputMessage/styles"
import { Typography } from "@client/components/atoms/Typography"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { Sx } from "dripsy"

export const InputMessage: React.FC<IInputMessageProps> = ({
  color = InputMessageColor.Error,
  text,
  textValues,
}) => {
  const { inputMessage } = inputMessageDefaultStyles

  const inputMessageStyles: Sx = {
    ...inputMessage,
    ...mapColorToInputMessageStyles[color],
  }

  return (
    <Typography
      text={text}
      textValues={textValues}
      variant={TypographyVariant.InputMessage}
      sx={inputMessageStyles}
    />
  )
}
