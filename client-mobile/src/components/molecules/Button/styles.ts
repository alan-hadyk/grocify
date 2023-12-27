import { IIconProps } from "@client/components/atoms/Icon/@types"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { ButtonSize, ButtonVariant } from "@client/components/molecules/Button/@types"
import { ColorPalette } from "@client/theme/@types"
import { Sx } from "dripsy"

export const buttonDefaultStyles: {
  loader: Sx
  wrapper: Sx
} = {
  loader: {
    height: 20,
    width: 20,
  },
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
  },
}

export const mapVariantToButtonStyles = ({
  disabled,
}: {
  disabled: boolean
}): Record<ButtonVariant, Sx> => ({
  [ButtonVariant.GreenPrimary]: { backgroundColor: disabled ? "$gray100" : "$green400" },
  [ButtonVariant.GreenSecondary]: {
    backgroundColor: "$white",
    borderColor: disabled ? "$gray300" : "$green500",
    borderWidth: "$1",
  },
  [ButtonVariant.RedPrimary]: { backgroundColor: disabled ? "$gray100" : "$red400" },
  [ButtonVariant.RedSecondary]: {
    backgroundColor: "$white",
    borderColor: disabled ? "$gray300" : "$red400",
    borderWidth: "$1",
  },
  [ButtonVariant.BlueSecondary]: {
    backgroundColor: "$white",
    borderColor: disabled ? "$gray300" : "$blue400",
    borderWidth: "$1",
  },
  [ButtonVariant.BlackSecondary]: {
    backgroundColor: "$white",
    borderColor: disabled ? "$gray300" : "$black400",
    borderWidth: "$1",
  },
})

export const mapButtonVariantToIconStyles = ({
  disabled,
}: {
  disabled: boolean
}): Record<ButtonVariant, IIconProps["color"]> => ({
  [ButtonVariant.GreenPrimary]: disabled ? ColorPalette.Gray400 : ColorPalette.Black400,
  [ButtonVariant.GreenSecondary]: disabled ? ColorPalette.Gray400 : ColorPalette.Black400,
  [ButtonVariant.RedPrimary]: disabled ? ColorPalette.Gray400 : ColorPalette.White,
  [ButtonVariant.RedSecondary]: disabled ? ColorPalette.Gray400 : ColorPalette.Red400,
  [ButtonVariant.BlueSecondary]: disabled ? ColorPalette.Gray400 : ColorPalette.Blue400,
  [ButtonVariant.BlackSecondary]: disabled ? ColorPalette.Gray400 : ColorPalette.Black400,
})

export const mapSizeToButtonStyles: Record<ButtonSize, Sx> = {
  [ButtonSize.LargeFlexible]: {
    borderRadius: "$20",
    gap: "$8",
    height: 40,
    paddingHorizontal: "$16",
    paddingVertical: "$8",
    width: "100%",
  },
  [ButtonSize.LargeFixed]: {
    borderRadius: "$20",
    gap: "$8",
    height: 40,
    paddingHorizontal: "$16",
    paddingVertical: "$8",
  },
  [ButtonSize.LargeRectangular]: {
    borderRadius: "$16",
    flexDirection: "column",
    gap: "$4",
    minHeight: 56,
    paddingHorizontal: "$8",
    paddingVertical: "$8",
  },
  [ButtonSize.SmallFlexible]: {
    borderRadius: "$20",
    gap: "$6",
    height: 24,
    paddingHorizontal: "$12",
    paddingVertical: "$0",
    width: "100%",
  },
  [ButtonSize.SmallFixed]: {
    borderRadius: "$20",
    gap: "$6",
    height: 24,
    paddingHorizontal: "$12",
    paddingVertical: "$0",
  },
}

export const mapSizeToButtonIconStyles: Record<ButtonSize, IIconProps["size"]> = {
  [ButtonSize.LargeFlexible]: 20,
  [ButtonSize.LargeFixed]: 20,
  [ButtonSize.LargeRectangular]: 20,
  [ButtonSize.SmallFlexible]: 12,
  [ButtonSize.SmallFixed]: 12,
}

export const mapButtonSizeToTextVariant: Record<ButtonSize, TypographyVariant> = {
  [ButtonSize.LargeFlexible]: TypographyVariant.ButtonLG,
  [ButtonSize.LargeFixed]: TypographyVariant.ButtonLG,
  [ButtonSize.LargeRectangular]: TypographyVariant.ButtonMD,
  [ButtonSize.SmallFlexible]: TypographyVariant.ButtonSM,
  [ButtonSize.SmallFixed]: TypographyVariant.ButtonSM,
}

export const mapButtonVariantToTextStyles = ({
  disabled,
}: {
  disabled: boolean
}): Record<ButtonVariant, Sx> => ({
  [ButtonVariant.GreenPrimary]: { color: disabled ? "$gray400" : "$black400" },
  [ButtonVariant.GreenSecondary]: { color: disabled ? "$gray400" : "$black400" },
  [ButtonVariant.RedPrimary]: { color: disabled ? "$gray400" : "$white" },
  [ButtonVariant.RedSecondary]: { color: disabled ? "$gray400" : "$red400" },
  [ButtonVariant.BlueSecondary]: { color: disabled ? "$gray400" : "$black400" },
  [ButtonVariant.BlackSecondary]: { color: disabled ? "$gray400" : "$black400" },
})
