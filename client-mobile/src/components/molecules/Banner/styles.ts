import { IIconProps } from "@client/components/atoms/Icon/@types"
import { BannerVariant } from "@client/components/molecules/Banner/@types"
import { ColorPalette } from "@client/theme/@types"
import { Sx } from "dripsy"

export const bannerDefaultStyles: {
  text: Sx
  wrapper: Sx
} = {
  text: {
    flexWrap: "wrap",
  },
  wrapper: {
    alignItems: "center",
    borderRadius: "$12",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "$12",
    marginX: "$16",
    paddingLeft: "$12",
    paddingRight: "$18",
    paddingY: "$12",
  },
}

export const mapVariantToBannerStyles: Record<BannerVariant, Sx> = {
  [BannerVariant.YellowPrimary]: { backgroundColor: "$yellow300" },
  [BannerVariant.BlueSecondary]: {
    backgroundColor: "$white",
    borderColor: "$blue400",
    borderWidth: "$1",
  },
}

export const mapBannerVariantToIconStyles: Record<BannerVariant, IIconProps["color"]> = {
  [BannerVariant.YellowPrimary]: ColorPalette.Black400,
  [BannerVariant.BlueSecondary]: ColorPalette.Blue400,
}
