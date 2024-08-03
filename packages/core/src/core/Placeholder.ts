import { defaultOptions } from '../constants'
import { BorderStyle, PlaceholderOptions } from '../types'

export abstract class Placeholder {
  protected canvas: HTMLCanvasElement
  protected ctx: CanvasRenderingContext2D
  protected options: PlaceholderOptions

  constructor(options: Partial<PlaceholderOptions> = {}) {
    if (options.canvas) {
      this.canvas = options.canvas
    } else {
      this.canvas = document.createElement('canvas')
    }

    const ctx = this.canvas.getContext('2d')
    if (!ctx) {
      throw new Error('Failed to obtain CanvasRenderingContext2D.')
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
    } = this.options

    this.canvas.width = width
    this.canvas.height = height

    // Clear canvas
    this.ctx.clearRect(0, 0, width, height)

    this.drawShape()

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

  abstract drawShape(): void

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
