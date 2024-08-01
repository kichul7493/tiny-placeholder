import { BorderStyle } from './BorderStyle'
import { Shape } from './Shape'

export type PlaceholderOptions = {
  canvas?: HTMLCanvasElement
  width: number
  height: number
  backgroundColor: string
  textColor: string
  text: string
  fontSize: number
  fontFamily: string
  borderWidth: number
  borderColor: string
  borderStyle: BorderStyle
  borderRadius: number
  shape: Shape
}
