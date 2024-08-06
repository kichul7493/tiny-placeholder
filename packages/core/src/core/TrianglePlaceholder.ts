import { Placeholder, PlaceholderOptions } from './Placeholder'

/**
 * Represents a triangle-shaped placeholder.
 */
export class TrianglePlaceholder extends Placeholder {
  /**
   * Creates a new instance of the TrianglePlaceholder class.
   * @param options - The options for the placeholder.
   */
  constructor(options: PlaceholderOptions) {
    super(options)
  }

  /**
   * Draws the triangle shape on the canvas.
   */
  drawShape() {
    const { width, height, borderWidth } = this.options

    this.drawTriangle(
      width / 2,
      borderWidth,
      borderWidth,
      height - borderWidth,
      width - borderWidth,
      height - borderWidth,
    )
  }

  /**
   * Draws a triangle on the canvas.
   * @param x1 - The x-coordinate of the first point.
   * @param y1 - The y-coordinate of the first point.
   * @param x2 - The x-coordinate of the second point.
   * @param y2 - The y-coordinate of the second point.
   * @param x3 - The x-coordinate of the third point.
   * @param y3 - The y-coordinate of the third point.
   */
  private drawTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void {
    this.ctx.beginPath()
    this.ctx.moveTo(x1, y1)
    this.ctx.lineTo(x2, y2)
    this.ctx.lineTo(x3, y3)
    this.ctx.closePath()
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
      // Multiply y by 1.2 to vertically center the text
      this.ctx.fillText(text, x, y * 1.2)
    }
}
