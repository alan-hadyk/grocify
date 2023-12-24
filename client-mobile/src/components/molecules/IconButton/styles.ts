import { IIconProps } from "@client/components/atoms/Icon/@types"
import { IconButtonSize, IconButtonVariant } from "@client/components/molecules/IconButton/@types"
import { ColorPalette } from "@client/theme/@types"
import { Sx } from "dripsy"

export const iconButtonDefaultStyles: Record<"wrapper", Sx> = {
  wrapper: {
    alignItems: "center",
    borderRadius: "$50",
    justifyContent: "center",
  },
}

export const mapSizeToIconButtonStyles = {
  [IconButtonSize.Small]: {
    icon: {
      size: 14,
    },
    wrapper: {
      height: 24,
      width: 24,
    },
  },
  [IconButtonSize.Medium]: {
    icon: {
      size: 20,
    },
    wrapper: {
      height: 40,
      width: 40,
    },
  },
}

export const mapVariantToIconButtonStyles = ({
  disabled,
}: {
  disabled: boolean
}): Record<
  IconButtonVariant,
  {
    icon: Pick<IIconProps, "color">
    wrapper: Sx
  }
> => ({
  [IconButtonVariant.GraySecondary]: {
    icon: disabled
      ? {
          color: ColorPalette.Gray400,
        }
      : {
          color: ColorPalette.Black400,
        },
    wrapper: {
      backgroundColor: "$white",
      borderWidth: "$1",
      ...(disabled
        ? {
            borderColor: "$gray300",
          }
        : {
            borderColor: "$gray100",
          }),
    },
  },
  [IconButtonVariant.GreenPrimary]: {
    icon: disabled
      ? {
          color: ColorPalette.Gray400,
        }
      : {
          color: ColorPalette.Black400,
        },
    wrapper: disabled
      ? {
          backgroundColor: "$gray100",
        }
      : {
          backgroundColor: "$green400",
        },
  },
  [IconButtonVariant.GreenSecondary]: {
    icon: disabled
      ? {
          color: ColorPalette.Gray400,
        }
      : {
          color: ColorPalette.Black400,
        },
    wrapper: {
      backgroundColor: "$white",
      borderWidth: "$1",
      ...(disabled
        ? {
            borderColor: "$gray300",
          }
        : {
            borderColor: "$green500",
          }),
    },
  },
  [IconButtonVariant.RedSecondary]: {
    icon: disabled
      ? {
          color: ColorPalette.Gray400,
        }
      : {
          color: ColorPalette.Red400,
        },
    wrapper: {
      backgroundColor: "$white",
      borderWidth: "$1",
      ...(disabled
        ? {
            borderColor: "$gray300",
            color: "$gray400",
          }
        : {
            borderColor: "$red400",
          }),
    },
  },
})
