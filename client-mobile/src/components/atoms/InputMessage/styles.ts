import { InputMessageColor } from "@client/components/atoms/InputMessage/@types"
import { Sx } from "dripsy"

export const inputMessageDefaultStyles: {
  inputMessage: Sx
} = {
  inputMessage: {
    marginTop: "$4",
  },
}

export const mapColorToInputMessageStyles: Record<InputMessageColor, Sx> = {
  [InputMessageColor.Error]: {
    color: "$red400",
  },
  [InputMessageColor.Info]: {
    color: "$blue400",
  },
}
