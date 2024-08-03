import { BorderStyle } from './BorderStyle'
import { Shape } from './Shape'

export type PlaceholderOptions = {
  canvas?: HTMLCanvasElement
  width: number
  height: number
  backgroundColor: string | CanvasGradient | CanvasPattern
  textColor: string | CanvasGradient | CanvasPattern
  text: string
  fontSize: number
  fontFamily: string
  borderWidth: number
  borderColor: string | CanvasGradient | CanvasPattern
  borderStyle: BorderStyle
  borderRadius: number
  shape: Shape
}
