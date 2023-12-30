import { Sx } from "dripsy"

export const modalDefaultStyles = ({
  screenHeight,
}: {
  screenHeight: number
}): {
  animatedWrapper: Sx
  subtitleWithIcon: Sx
  wrapper: Sx
} => ({
  animatedWrapper: {
    backgroundColor: "$white",
    bottom: "$0",
    left: "$0",
    marginTop: "$16",
    position: "absolute",
    right: "$0",
    top: "$0",
  },
  subtitleWithIcon: {
    marginX: "$16",
  },
  wrapper: {
    elevation: 3,
    height: screenHeight,
    zIndex: 1000,
  },
})
