import { IIconProps } from "@client/icons/@types"
import Svg, { Path } from "react-native-svg"

export const BurgerIcon: React.FC<IIconProps> = ({ color, height, width, style }) => (
  <Svg fill="none" viewBox="0 0 74 64" width={width} height={height} style={style}>
    <Path
      fill={color}
      d="M4.248 54.7a1.482 1.482 0 0 0-.329-.116C1.195 54.41-.046 52.948.504 50.265a19.325 19.325 0 0 1 1.524-4.47c.431-.893 1.32-1.564 1.98-2.31-.22-.957-.647-1.985-.634-3.008.013-.99.48-1.974.769-3.04-2.15-2.007-2.21-2.436-.686-5.917-.843-.872-.936-1.928-.804-3.13.364-3.309.798-6.6 2.063-9.705 3.217-7.893 8.92-13.31 16.891-16.131 9.68-3.426 19.452-3.478 29.088.287 4.452 1.739 8.383 4.331 11.189 8.309a24.45 24.45 0 0 1 2.779 4.885c.975 2.426 1.67 4.969 2.4 7.486.509 1.751.667 3.524-.608 5.169 1.19.962 2.226 1.921 2.726 3.328.517 1.455.127 2.722-.706 3.985 1.523 1.555 1.742 3.378 1.06 5.44 1.29.987 2.469 2.121 3 3.726.309.832.507 1.7.591 2.584.162 2.845-.954 4.107-3.716 4.431-.067 1.277-.079 2.549-.21 3.808-.264 2.564-1.75 4.228-4.179 4.834a57.27 57.27 0 0 1-7.016 1.217c-4.428.532-8.863 1.028-13.307 1.381-7.322.58-14.659.842-21.992.21-4.096-.354-8.184-.804-12.265-1.295a16.369 16.369 0 0 1-3.438-.898 3.56 3.56 0 0 1-2.439-3.101c-.153-1.217-.216-2.446-.316-3.64Zm60.154-27.45c-.63-2.646-1.143-5.16-1.84-7.622a20.427 20.427 0 0 0-3.422-7.035c-2.765-3.582-6.45-5.813-10.59-7.368-6.274-2.356-12.762-2.782-19.324-1.697-9.14 1.51-16.442 5.793-20.903 14.247-1.784 3.38-2.616 7.003-3.269 10.814.479.199.973.357 1.478.471 1.664.222 3.338.57 5.003.543 6.539-.108 13.075-.357 19.613-.522 5.3-.133 10.603-.216 15.904-.33 4.855-.102 9.711-.193 14.521-.958.915-.145 1.821-.347 2.83-.542Zm-4.497 23.056c-.808.625-1.572 1.159-2.273 1.769-1.273 1.105-2.628 1.294-4.11.49a14.573 14.573 0 0 1-1.67-.965c-1.358-.99-2.676-1.083-4.108-.112a26.95 26.95 0 0 1-2.979 1.665 5.795 5.795 0 0 1-5.43.034 27.785 27.785 0 0 1-2.212-1.21 2.691 2.691 0 0 0-2.82-.144c-.877.456-1.753.92-2.586 1.449a4.264 4.264 0 0 1-4.247.348 12.906 12.906 0 0 1-2.445-1.386c-1.268-.946-2.55-1.005-3.89-.284-.782.421-1.525.92-2.275 1.398-1.932 1.233-3.832 1.135-5.698-.134-.45-.306-.875-.65-1.302-.988-1.115-.883-2.274-.893-3.44-.138-.524.34-.994.76-1.414 1.086.174 1.109.298 2.041.466 2.965.369 2.026.496 2.148 2.48 2.567.145.03.296.038.442.064a125.526 125.526 0 0 0 18.628 1.732c10.037.246 19.981-.94 29.916-2.172 1.52-.188 3.027-.491 4.526-.81 1.089-.231 1.684-.98 1.79-2.091.088-.915.16-1.83.247-2.834-2.266.25-3.966-.651-5.596-2.3ZM3.344 51.784c.675-.343 1.204-.577 1.697-.87.51-.304.97-.689 1.476-1 2.445-1.5 4.632-1.364 6.86.413.309.247.616.498.921.751 1.001.829 2.038.898 3.141.192a26.008 26.008 0 0 1 2.418-1.45c2.218-1.1 4.375-1.089 6.418.479.519.38 1.066.718 1.638 1.012a2.364 2.364 0 0 0 2.651-.14 17.464 17.464 0 0 1 2.574-1.47c1.777-.803 3.544-.81 5.23.317.451.303.94.55 1.406.83a3.88 3.88 0 0 0 4.217.068c.944-.544 1.902-1.065 2.822-1.645 1.971-1.238 3.89-1.176 5.869.017 2.43 1.465 2.45 1.432 4.698-.249 1.883-1.409 3.3-1.455 5.321-.16.565.362 1.112.754 1.71 1.162.783-.976 1.002-2.572 2.414-2.474 1.102.077 2.164.736 3.275 1.148 1.111-1.673.137-4.502-1.889-5.58-1.647.493-3.133 1.07-4.671 1.376-5.747 1.146-11.6 1.344-17.42 1.832-2.845.239-5.697-.11-8.539.234-.538.065-1.124-.275-1.69-.417-.554-.14-1.112-.384-1.667-.383-5.896.011-11.794.143-17.688.066-2.81-.037-5.618-.468-8.43-.679a3.808 3.808 0 0 0-1.58.205c-2.072.781-3.382 3.33-3.182 6.415ZM23.245 32.09l.05.3c3.983 3.09 7.946 6.207 11.958 9.26 2.072 1.576 1.778 2.136 4.037-.28 2.637-2.818 5.15-5.751 7.71-8.64.218-.245.388-.532.78-1.076l-24.535.436Zm8.333 10.726c-1.525-1.282-2.788-2.308-4.008-3.384-.562-.495-1.133-.601-1.884-.589-5.494.087-10.99.642-16.485-.03-.67-.082-1.374.08-2.058.148-.664.066-.91.518-.967 1.118-.076.815.26 1.393 1.189 1.633a16.53 16.53 0 0 0 3.498.625c6.388.228 12.78.381 19.168.554.382.012.768-.034 1.547-.074v-.001Zm35.16-5.472c-1.84.472-3.54 1.074-5.289 1.323a101.94 101.94 0 0 1-15.232 1.082 1.405 1.405 0 0 0-.93.242c-.95.977-1.84 2.013-2.87 3.16 1.488 0 2.716.078 3.932-.014 4.44-.332 8.885-.644 13.312-1.121 2.113-.232 4.2-.657 6.234-1.271 1.836-.551 2.073-1.9.843-3.4Zm-18.472-.929c.673 0 1.068.022 1.46-.003 3.259-.209 6.532-.303 9.77-.685a33.878 33.878 0 0 0 6.038-1.427c1.26-.392 1.506-1.117 1.155-2.165-.41-1.22-1.294-1.85-2.377-1.647a60.552 60.552 0 0 1-10.62 1.047c-.685.007-1.368.066-1.812.087l-3.614 4.793ZM6.276 31.57a19.26 19.26 0 0 0-.949 1.945c-.331.933-.21 1.241.764 1.569.982.332 1.995.57 3.024.708 4.194.55 8.406.31 12.613.187a8.4 8.4 0 0 0 1.128-.215c-.679-.515-1.135-.882-1.614-1.219-.73-.512-1.613-.882-2.173-1.535-.58-.675-1.183-.744-1.942-.745-3.561-.004-7.136.23-10.852-.695Z"
    />
    <Path
      fill={color}
      d="M30.58 10.203c.067-.576-.033-1.178.653-1.397.672-.215 1.18.117 1.458.706.3.619.537 1.266.704 1.933.141.603.022 1.208-.655 1.483-.598.243-1.246-.036-1.562-.76a16.811 16.811 0 0 1-.597-1.965ZM19.8 18.196c.22.153.757.332.843.637a1.584 1.584 0 0 1-.27 1.304c-.737.792-1.784 1.043-2.83 1.082-.755.03-1.091-.837-.579-1.543.635-.872 1.547-1.344 2.836-1.48Zm35.76 6.692c-.48-.356-1.013-.56-1.148-.915-.108-.282.165-.891.455-1.105a5.833 5.833 0 0 1 1.96-.98c.372-.096 1.07.145 1.236.446a1.348 1.348 0 0 1-.279 1.282c-.62.513-1.407.824-2.225 1.272Zm-16.11-4.62c-.041-.965.682-1.447 1.475-1.084.723.33 1.555 1.95 1.417 2.757-.124.725-.833 1.104-1.426.687a3.744 3.744 0 0 1-1.466-2.36Zm13.972-6.508c-.006.863-1.189 2.05-2.043 2.049-.538-.002-1.047-.6-.78-1.144a4.914 4.914 0 0 1 1.416-1.783c.645-.469 1.412.085 1.407.878ZM27.393 26.659c-.911-.052-1.978-1.132-1.96-1.88a1.104 1.104 0 0 1 .772-.983c.142-.044.291-.059.439-.044.718.092 1.54 1.162 1.517 1.979-.017.567-.21.97-.768.928Z"
    />
  </Svg>
)