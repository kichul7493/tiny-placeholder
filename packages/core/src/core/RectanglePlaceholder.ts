import { Placeholder, PlaceholderOptions } from './Placeholder'

/**
 * Represents a rectangle placeholder shape.
 */
export class RectanglePlaceholder extends Placeholder {
  /**
   * Creates a new instance of RectanglePlaceholder.
   * @param options - The options for the rectangle placeholder.
   */
  constructor(options: PlaceholderOptions) {
    super(options)
  }

  /**
   * Draws the rectangle shape.
   */
  drawShape() {
    const { width, height, borderWidth, borderRadius } = this.options
    this.drawRectangle(borderWidth, borderWidth, width - 2 * borderWidth, height - 2 * borderWidth, borderRadius)
  }

  /**
   * Draws a rectangle on the canvas.
   * @param x - The x-coordinate of the top-left corner of the rectangle.
   * @param y - The y-coordinate of the top-left corner of the rectangle.
   * @param width - The width of the rectangle.
   * @param height - The height of the rectangle.
   * @param borderRadius - The border radius of the rectangle (optional).
   */
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
}
