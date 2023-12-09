import { IIconProps } from "@client/components/atoms/Icon/@types"
import { IconButtonSize, IconButtonVariant } from "@client/components/molecules/IconButton/@types"
import { ColorPalette } from "@client/theme/@types"
import { Sx } from "dripsy"

export const iconButtonDefaultStyles: Record<"wrapper", Sx> = {
  wrapper: {
    alignItems: "center",
    borderRadius: "$50%",
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

export const mapVariantToIconButtonStyles: Record<
  IconButtonVariant,
  {
    icon: Pick<IIconProps, "color">
    wrapper: Sx
  }
> = {
  [IconButtonVariant.GraySecondary]: {
    icon: {
      color: ColorPalette.Black400,
    },
    wrapper: {
      backgroundColor: "$white",
      borderColor: "$gray100",
      borderWidth: "$1",
    },
  },
  [IconButtonVariant.GreenPrimary]: {
    icon: {
      color: ColorPalette.Black400,
    },
    wrapper: {
      backgroundColor: "$green400",
    },
  },
  [IconButtonVariant.GreenSecondary]: {
    icon: {
      color: ColorPalette.Black400,
    },
    wrapper: {
      backgroundColor: "$white",
      borderColor: "$green500",
      borderWidth: "$1",
    },
  },
  [IconButtonVariant.RedSecondary]: {
    icon: {
      color: ColorPalette.Red400,
    },
    wrapper: {
      backgroundColor: "$white",
      borderColor: "$red400",
      borderWidth: "$1",
    },
  },
}
