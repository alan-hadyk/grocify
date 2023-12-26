import { ISubtitleWithIconProps } from "@client/components/molecules/SubtitleWithIcon/@types"
import { Sx } from "dripsy"

export const subtitleWithIconDefaultStyles = ({
  subtitle,
}: Pick<ISubtitleWithIconProps, "subtitle">): {
  subtitle: Sx
  wrapper: Sx
} => ({
  subtitle: {
    textTransform: typeof subtitle !== "string" ? "capitalize" : "none",
  },
  wrapper: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
})
