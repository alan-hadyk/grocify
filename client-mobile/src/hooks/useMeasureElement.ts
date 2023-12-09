import { RefObject, useState } from "react"
import { View } from "react-native"

export const useMeasureElement = (elementRef: RefObject<View>) => {
  const [elementMeasurements, setElementMeasurements] = useState({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  })

  elementRef.current?.measure((x: number, y: number, width: number, height: number) => {
    setElementMeasurements({
      height,
      width,
      x,
      y,
    })
  })

  return elementMeasurements
}
