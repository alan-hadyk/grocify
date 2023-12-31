import { IIconProps } from "@client/icons/@types"
import Svg, { Path } from "react-native-svg"

export const DecreaseIcon: React.FC<IIconProps> = ({ color, height, width, style }) => (
  <Svg fill="none" viewBox="0 0 20 4" width={width} height={height} style={style}>
    <Path
      fill={color}
      d="M9.633.987C11.7.945 13.77.883 15.837.872c.928-.004 1.858.079 2.784.156.309.028.61.115.886.257a.789.789 0 0 1 .493.72c-.006.263-.28.649-.513.693a7.21 7.21 0 0 1-1.21.21c-4.653.088-9.306.174-13.96.22a27.412 27.412 0 0 1-3.09-.226c-.295-.03-.576-.205-.861-.32-.252-.1-.451-.528-.33-.778.088-.177.193-.446.337-.48a8.23 8.23 0 0 1 1.813-.301c2.482-.033 4.965-.014 7.447-.014V.987Z"
    />
  </Svg>
)
