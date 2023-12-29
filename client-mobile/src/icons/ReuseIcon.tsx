import { IIconProps } from "@client/icons/@types"
import Svg, { Path } from "react-native-svg"

export const ReuseIcon: React.FC<IIconProps> = ({ color, height, width, style }) => (
  <Svg fill="none" viewBox="0 0 13 12" width={width} height={height} style={style}>
    <Path
      fill={color}
      d="M10.37 7.9c-.12-.027-.279-.012-.36.217-.115.325-.322.588-.51.802-.536.61-1.234 1.04-2.076 1.274-.636.178-1.392.336-2.18.162-1.174-.259-2.13-.906-2.84-1.923-.315-.452-.496-.884-.553-1.32a6.226 6.226 0 0 1 .1-2.232 8.019 8.019 0 0 1 .185-.64c.04.075.075.139.114.202l.01.016c.074.128.157.25.247.367.127.156.31.203.454.118.114-.068.204-.23.08-.463-.142-.263-.33-.608-.54-.944-.155-.249-.35-.316-.63-.218a31.88 31.88 0 0 0-1.308.495.587.587 0 0 0-.268.212c-.056.088-.045.233-.002.317.057.113.181.144.331.084.295-.119.594-.23.9-.344.046-.017.095-.03.144-.044-.266.617-.414 1.313-.45 2.124-.042.962.104 1.675.473 2.313.638 1.102 1.587 1.896 2.82 2.361a3.84 3.84 0 0 0 1.147.239 5.973 5.973 0 0 0 2.01-.25c.939-.277 1.687-.729 2.288-1.38.293-.318.478-.619.584-.946a.958.958 0 0 0 .055-.266c.006-.23-.12-.308-.226-.332Zm1.835-2.294c-.062-.082-.17-.117-.296-.097a.785.785 0 0 0-.351.181c-.142.12-.278.247-.422.382l-.005.005-.032.03a5.663 5.663 0 0 0-.013-1.425A4.302 4.302 0 0 0 9.79 2.136C9.083 1.464 8.168 1.053 7.143.948 6.088.839 5.03 1.015 4 1.472c-.325.144-.7.332-1.015.634a.949.949 0 0 0-.2.303c-.034.077.01.233.094.272a.31.31 0 0 0 .26-.025.869.869 0 0 0 .14-.107.865.865 0 0 1 .095-.075c1.299-.85 2.685-1.138 4.119-.858.878.172 1.595.597 2.13 1.263.617.768.903 1.681.85 2.714-.013.19-.037.379-.07.566l-.02.13a6.29 6.29 0 0 1-.16-.186 60.176 60.176 0 0 1-.338-.414l-.006-.008-.242-.297a.87.87 0 0 0-.118-.126c-.116-.095-.25-.102-.36-.018a.258.258 0 0 0-.07.337c.042.085.093.166.15.242.327.42.648.828.919 1.171.114.145.221.21.348.21a.57.57 0 0 0 .252-.072 4.802 4.802 0 0 0 1.3-.969.825.825 0 0 0 .16-.227c.055-.123.05-.242-.014-.326Z"
    />
  </Svg>
)
