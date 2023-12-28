import { Sx } from "dripsy"

export const inputStyles = ({
  wrapperWidth,
}: {
  wrapperWidth: number
}): {
  input: Sx
  inputWrapper: Sx
  label: Sx
  outerWrapper: Sx
  wrapper: Sx
} => ({
  input: {
    display: "flex",
    minWidth: wrapperWidth - 84,
    width: wrapperWidth - 84,
  },
  inputWrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "$8",
  },
  label: {
    marginBottom: "$4",
  },
  outerWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  wrapper: {
    alignItems: "center",
    backgroundColor: "$white",
    borderColor: "$gray300",
    borderRadius: "$50",
    borderWidth: "$1",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "$8",
    height: 40,
    justifyContent: "space-between",
    paddingX: "$12",
    paddingY: "$10",
  },
})

export const closeIconStyles = ({ value }: { value: string }) => ({
  opacity: value ? 1 : 0,
})
