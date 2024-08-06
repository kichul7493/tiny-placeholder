/**
 * Represents the possible border styles for a placeholder.
 */
export type BorderStyle = 'solid' | 'dashed' | 'dotted'

/**
 * Represents the possible shapes for a placeholder.
 */
export type Shape = 'rectangle' | 'circle' | 'triangle'

/**
 * Represents the options for configuring a placeholder.
 */
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

/**
 * Represents an abstract class for generating placeholders.
 */
export abstract class Placeholder {
  protected canvas: HTMLCanvasElement
  protected ctx: CanvasRenderingContext2D
  protected options: PlaceholderOptions

  /**
   * Creates a new instance of the Placeholder class.
   * @param options - The options for configuring the placeholder.
   */
  constructor(options: PlaceholderOptions) {
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
      ...options,
    }

    this.generate()
  }

  /**
   * Generates the placeholder image.
   * This method is called internally during initialization.
   */
  private generate(): void {
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

  /**
   * Draws the shape of the placeholder.
   * This method should be implemented by subclasses.
   */
  abstract drawShape(): void

  /**
   * Sets the border style for the placeholder.
   * @param borderStyle - The border style to set.
   * @param borderWidth - The border width to use.
   */
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

  /**
   * Draws the text on the placeholder.
   * @param text - The text to draw.
   * @param x - The x-coordinate of the text.
   * @param y - The y-coordinate of the text.
   * @param fontSize - The font size of the text.
   * @param fontFamily - The font family of the text.
   * @param color - The color of the text.
   */
  protected drawText(
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

  /**
   * Gets the data URL of the placeholder image.
   * @returns The data URL of the placeholder image.
   */
  public getDataURL(): string {
    return this.canvas.toDataURL()
  }

  /**
   * Gets the canvas element of the placeholder.
   * @returns The canvas element of the placeholder.
   */
  public getCanvas(): HTMLCanvasElement {
    return this.canvas
  }
}
