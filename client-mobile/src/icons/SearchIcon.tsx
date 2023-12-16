import { IIconProps } from "@client/icons/@types"
import Svg, { Path } from "react-native-svg"

export const SearchIcon: React.FC<IIconProps> = ({ color, height, width, style }) => (
  <Svg fill="none" viewBox="0 0 20 21" height={height} width={width} style={style}>
    <Path
      fill={color}
      d="M4.485 13.23c1.378.245 2.753.134 4.202-.338a9.657 9.657 0 0 0 2.397-1.147c.14.16.279.32.416.48.337.39.657.759.99 1.129 1.631 1.809 3.401 3.528 5.113 5.191l.932.908c.244.23.511.43.798.599a.45.45 0 0 0 .23.055.548.548 0 0 0 .244-.052.346.346 0 0 0 .174-.212.443.443 0 0 0-.029-.33c-.135-.293-.3-.57-.493-.826-.31-.38-.641-.743-.99-1.086a790.481 790.481 0 0 0-2.443-2.429c-.556-.55-1.111-1.102-1.666-1.654a468.76 468.76 0 0 1-2.448-2.453l.031-.036a2.89 2.89 0 0 1 .12-.13c.923-.924 1.43-2.08 1.504-3.435.13-2.354-.637-4.351-2.282-5.939A4.81 4.81 0 0 0 8.324.145a7.526 7.526 0 0 0-3.2.375c-1.579.555-2.919 1.619-3.982 3.163C.225 5.013-.143 6.489.049 8.07c.126 1.031.53 2.009 1.31 3.17.738 1.096 1.76 1.747 3.126 1.99ZM6.117 1.734c.368-.032.747-.065 1.12-.078l.188-.003c1.7 0 3.005.796 3.883 2.37.786 1.407 1.009 2.756.68 4.124a3.49 3.49 0 0 1-.657 1.401c-.397.499-.88.917-1.423 1.235a8.46 8.46 0 0 1-4.065 1.165 31.24 31.24 0 0 0-.411-.043c-.302-.03-.615-.062-.918-.113a3.058 3.058 0 0 1-1.92-1.127A6.247 6.247 0 0 1 1.35 8.211a4.84 4.84 0 0 1 .27-3.141c.49-1.124 1.14-1.953 1.989-2.535.679-.466 1.298-.705 1.947-.753.187-.014.374-.03.56-.047Z"
    />
  </Svg>
)
