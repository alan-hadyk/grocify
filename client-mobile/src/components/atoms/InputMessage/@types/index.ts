import { ITranslation } from "@client/translations/@types"

export enum InputMessageColor {
  Error,
  Info,
}

export interface IInputMessageProps {
  color?: InputMessageColor
  text: keyof ITranslation
  textValues?: Record<string, string>
}
