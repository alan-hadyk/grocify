import { Theme } from "@client/theme"
import { LayoutProps, BorderProps, ColorProps, SpacingProps } from "@shopify/restyle"
import { Dispatch, SetStateAction } from "react"

export interface IExpandableInputProps {
  value: string
  onChangeText: Dispatch<SetStateAction<string>>
}

export interface IExpandableInputStyles {
  closeIcon: ColorProps<Theme> & LayoutProps<Theme>
  searchIcon: ColorProps<Theme> & LayoutProps<Theme>
  mainContainer: LayoutProps<Theme> &
    BorderProps<Theme> &
    ColorProps<Theme> &
    SpacingProps<Theme> &
    any
  input: LayoutProps<Theme> & BorderProps<Theme> & ColorProps<Theme>
}
