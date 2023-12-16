import { IIconProps } from "@client/components/atoms/Icon/@types"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { ButtonSize, ButtonVariant } from "@client/components/molecules/Button/@types"
import { ColorPalette } from "@client/theme/@types"
import { Sx } from "dripsy"

export const buttonDefaultStyles: Sx = {
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "center",
}

export const mapVariantToButtonStyles = ({
  disabled,
}: {
  disabled: boolean
}): Record<ButtonVariant, Sx> => ({
  [ButtonVariant.GreenPrimary]: disabled
    ? {
        backgroundColor: "$gray100",
        color: "$gray400",
      }
    : {
        backgroundColor: "$green400",
        color: "$black400",
      },
  [ButtonVariant.GreenSecondary]: {
    backgroundColor: "$white",
    borderWidth: "$1",
    ...(disabled
      ? {
          borderColor: "$gray300",
          color: "$gray400",
        }
      : {
          borderColor: "$green500",
          color: "$black400",
        }),
  },
  [ButtonVariant.RedPrimary]: disabled
    ? {
        backgroundColor: "$gray100",
        color: "$gray400",
      }
    : {
        backgroundColor: "$red400",
        color: "$white",
      },
  [ButtonVariant.RedSecondary]: {
    backgroundColor: "$white",
    borderWidth: "$1",
    ...(disabled
      ? {
          borderColor: "$gray300",
          color: "$gray400",
        }
      : {
          borderColor: "$red400",
          color: "$red400",
        }),
  },
  [ButtonVariant.BlueSecondary]: {
    backgroundColor: "$white",
    borderWidth: "$1",
    ...(disabled
      ? {
          borderColor: "$gray300",
          color: "$gray400",
        }
      : {
          borderColor: "$blue400",
          color: "$black400",
        }),
  },
  [ButtonVariant.BlackSecondary]: {
    backgroundColor: "$white",
    borderWidth: "$1",
    ...(disabled
      ? {
          borderColor: "$gray300",
          color: "$gray400",
        }
      : {
          borderColor: "$black400",
          color: "$black400",
        }),
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

export const mapButtonSizeTextVariant: Record<ButtonSize, TypographyVariant> = {
  [ButtonSize.LargeFlexible]: TypographyVariant.ButtonLG,
  [ButtonSize.LargeFixed]: TypographyVariant.ButtonLG,
  [ButtonSize.LargeRectangular]: TypographyVariant.ButtonMD,
  [ButtonSize.SmallFlexible]: TypographyVariant.ButtonSM,
  [ButtonSize.SmallFixed]: TypographyVariant.ButtonSM,
}
