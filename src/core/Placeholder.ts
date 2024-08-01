import { defaultOptions } from '../constants'
import { BorderStyle, PlaceholderOptions } from '../types'

export class PlaceholderImageGenerator {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private options: PlaceholderOptions

  constructor(options: Partial<PlaceholderOptions> = {}) {
    if (options.canvas) {
      this.canvas = options.canvas
    } else {
      this.canvas = document.createElement('canvas')
    }

    const ctx = this.canvas.getContext('2d')
    if (!ctx) {
      throw new Error('CanvasRenderingContext2D를 가져올 수 없습니다.')
    }
    this.ctx = ctx
    this.options = {
      ...defaultOptions,
      ...options,
    }

    this.generate()
  }

  private generate() {
    const {
      width,
      height,
      backgroundColor,
      textColor,
      text,
      fontSize,
      fontFamily,
      borderWidth,
      borderColor,
      borderStyle,
      borderRadius,
      shape,
    } = this.options

    this.canvas.width = width
    this.canvas.height = height

    // Clear canvas
    this.ctx.clearRect(0, 0, width, height)

    // Draw shape
    switch (shape) {
      case 'circle':
        this.drawCircle(width / 2, height / 2, Math.min(width, height) / 2 - borderWidth)
        break
      case 'triangle':
        this.drawTriangle(
          width / 2,
          borderWidth,
          borderWidth,
          height - borderWidth,
          width - borderWidth,
          height - borderWidth,
        )
        break
      default: // rectangle
        this.drawRectangle(borderWidth, borderWidth, width - 2 * borderWidth, height - 2 * borderWidth, borderRadius)
    }

    // Set clipping region
    this.ctx.save()
    this.ctx.clip()

    // Draw background
    this.ctx.fillStyle = backgroundColor
    this.ctx.fillRect(0, 0, width, height)

    // Restore clipping region
    this.ctx.restore()

    // Draw border
    if (borderWidth > 0) {
      this.ctx.lineWidth = borderWidth
      this.ctx.strokeStyle = borderColor
      this.setBorderStyle(borderStyle, borderWidth)
      this.ctx.stroke()
    }

    // Draw text
    this.drawText(text, width / 2, height / 2, fontSize, fontFamily, textColor)
  }

  private drawRectangle(x: number, y: number, width: number, height: number, borderRadius: number = 0): void {
    this.ctx.beginPath()
    if (borderRadius > 0) {
      this.ctx.moveTo(x + borderRadius, y)
      this.ctx.arcTo(x + width, y, x + width, y + height, borderRadius)
      this.ctx.arcTo(x + width, y + height, x, y + height, borderRadius)
      this.ctx.arcTo(x, y + height, x, y, borderRadius)
      this.ctx.arcTo(x, y, x + width, y, borderRadius)
    } else {
      this.ctx.rect(x, y, width, height)
    }
    this.ctx.closePath()
  }

  private drawCircle(x: number, y: number, radius: number): void {
    if (x !== y) {
      throw new Error('타원은 지원하지 않습니다.')
    }

    this.ctx.beginPath()
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI)
    this.ctx.closePath()
  }

  private drawTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void {
    this.ctx.beginPath()
    this.ctx.moveTo(x1, y1)
    this.ctx.lineTo(x2, y2)
    this.ctx.lineTo(x3, y3)
    this.ctx.closePath()
  }

  private setBorderStyle(borderStyle: BorderStyle, borderWidth: number): void {
    switch (borderStyle) {
      case 'dashed':
        this.ctx.setLineDash([borderWidth * 2, borderWidth])
        break
      case 'dotted':
        this.ctx.setLineDash([borderWidth, borderWidth])
        break
      default:
        this.ctx.setLineDash([])
    }
  }

  private drawText(
    text: string,
    x: number,
    y: number,
    fontSize: number,
    fontFamily: string,
    color: string | CanvasGradient | CanvasPattern,
  ): void {
    this.ctx.fillStyle = color
    this.ctx.font = `${fontSize}px ${fontFamily}`
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    this.ctx.fillText(text, x, y)
  }

  public getDataURL(): string {
    return this.canvas.toDataURL()
  }

  public getCanvas(): HTMLCanvasElement {
    return this.canvas
  }
}
