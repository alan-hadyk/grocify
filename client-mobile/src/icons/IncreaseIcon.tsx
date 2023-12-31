import { IIconProps } from "@client/icons/@types"
import Svg, { Path } from "react-native-svg"

export const IncreaseIcon: React.FC<IIconProps> = ({ color, height, width, style }) => (
  <Svg fill="none" viewBox="0 0 20 20" width={width} height={height} style={style}>
    <Path
      fill={color}
      d="M4.484 8.425c1.207 0 2.415.01 3.622-.005a1.076 1.076 0 0 0 .955-.92c.078-1.575.123-3.15.217-4.723a6.614 6.614 0 0 1 .29-1.78.9.9 0 0 1 .808-.621.895.895 0 0 1 .866.537c.192.443.297.92.309 1.402.093 1.21.132 2.423.204 3.634.022.362.077.723.126 1.082.117.858.61 1.37 1.406 1.365 1.207-.008 2.414-.084 3.622-.096.962-.008 1.942-.03 2.823.44.154.082.21.388.263.602a.4.4 0 0 1-.106.336 1.4 1.4 0 0 1-.608.368c-.716.098-1.44.155-2.162.187-1.328.058-2.658.075-3.986.132a1.26 1.26 0 0 0-1.127 1.205c-.104 1.816-.175 3.634-.285 5.45-.037.6-.143 1.196-.233 1.792-.06.396-.714.868-1.074.808-.389-.065-.95-.572-.999-.947-.079-.598-.166-1.199-.187-1.8-.064-1.817-.093-3.636-.15-5.453a1.076 1.076 0 0 0-.91-.966c-1.449-.077-2.898-.13-4.345-.209a85.925 85.925 0 0 1-2.89-.21C.435 9.991-.13 9.4.027 9.098a.943.943 0 0 1 .833-.554c1.207-.01 2.415-.004 3.622-.004l.002-.115Z"
    />
  </Svg>
)
