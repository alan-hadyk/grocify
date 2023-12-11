import { useCallback, useState } from "react"
import { LayoutChangeEvent } from "react-native"

export const useLayoutMeasurements = () => {
  const [elementMeasurements, setElementMeasurements] = useState({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  })

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout

    setElementMeasurements({
      height,
      width,
      x,
      y,
    })
  }, [])

  return {
    ...elementMeasurements,
    onLayout,
  }
}
