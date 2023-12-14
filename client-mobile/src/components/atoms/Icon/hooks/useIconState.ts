import { IIconState, SizeType } from "@client/components/atoms/Icon/@types"
import { useState, useLayoutEffect } from "react"

export const useIconState = ({ size, height, width, sizeType = SizeType.Auto }: IIconState) => {
  const [iconDimensions, setIconDimensions] = useState({
    height: 0,
    width: 0,
  })

  useLayoutEffect(() => {
    const iconHeight = (height * size) / width
    const iconWidth = (width * size) / height

    switch (sizeType) {
      case SizeType.Auto:
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
        break
      case SizeType.Height:
        setIconDimensions({
          height: size,
          width: iconWidth,
        })
        break
      case SizeType.Width:
        setIconDimensions({
          height: iconHeight,
          width: size,
        })
        break
      default:
        break
    }
  }, [height, size, sizeType, width])

  return {
    iconDimensions,
  }
}
