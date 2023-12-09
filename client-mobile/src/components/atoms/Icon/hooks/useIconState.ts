import { IIconState } from "@client/components/atoms/Icon/@types"
import { useState, useLayoutEffect } from "react"

export const useIconState = ({ size, height, width }: IIconState) => {
  const [iconDimensions, setIconDimensions] = useState({
    height: 0,
    width: 0,
  })

  useLayoutEffect(() => {
    const iconHeight = (height * size) / width
    const iconWidth = (width * size) / height

    if (width > height) {
      setIconDimensions({
        height: iconHeight,
        width: size,
      })
    } else if (height > width) {
      setIconDimensions({
        height: size,
        width: iconWidth,
      })
    } else {
      setIconDimensions({
        height: size,
        width: size,
      })
    }
  }, [height, size, width])

  return {
    iconDimensions,
  }
}
