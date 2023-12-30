import { IIconProps } from "@client/icons/@types"
import Svg, { Path } from "react-native-svg"

export const CheckIcon: React.FC<IIconProps> = ({ color, height, width, style }) => (
  <Svg fill="none" viewBox="0 0 15 10" width={width} height={height} style={style}>
    <Path
      fill={color}
      d="M4.2 8.962c.175-.166.27-.25.358-.342 2.809-2.936 5.885-5.58 8.979-8.203.117-.099.236-.225.375-.26.167-.043.439-.071.513.02.1.121.118.387.057.547-.072.191-.25.354-.41.497-.96.853-1.945 1.676-2.887 2.547a584.322 584.322 0 0 0-5.87 5.5c-.853.808-1.18.84-1.965-.022C2.834 8.678 1.277 6.762.8 6.159a2.238 2.238 0 0 1-.18-.296c-.107-.191-.177-.401.036-.55.239-.164.408.008.549.187.143.181.265.38.418.552.475.534 2.065 2.347 2.578 2.91Z"
    />
  </Svg>
)
