import { IIconProps } from "@client/components/atoms/Icon/@types/Icon"
import {
  IconButtonSize,
  IconButtonVariant,
} from "@client/components/molecules/IconButton/@types/IconButton"
import { ColorPalette } from "@client/theme/@types"
import { Sx } from "dripsy"

export const iconButtonDefaultStyles: Record<"wrapper", Sx> = {
  wrapper: {
    borderRadius: "$50%",
    justifyContent: "center",
  },
}

export const mapSizeToIconButtonStyles = {
  [IconButtonSize.Small]: {
    wrapper: {
      height: "$24",
      width: "$24",
    },
  },
  [IconButtonSize.Medium]: {
    wrapper: {
      height: "$40",
      width: "$40",
    },
  },
}

export const mapVariantToIconButtonStyles: Record<
  IconButtonVariant,
  {
    icon: IIconProps["svgProps"]
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
