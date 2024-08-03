/**
 * Represents a circle placeholder shape.
 */
import { Placeholder, PlaceholderOptions } from './Placeholder'

export class CirclePlaceholder extends Placeholder {
  /**
   * Creates a new instance of CirclePlaceholder.
   * @param options - The options for the circle placeholder.
   */
  constructor(options: PlaceholderOptions) {
    super(options)
  }

  /**
   * Draws the circle shape of the placeholder.
   */
  drawShape() {
    const { width, height, borderWidth } = this.options

    this.drawCircle(width / 2, height / 2, Math.min(width, height) / 2 - borderWidth)
  }

  /**
   * Draws a circle on the canvas.
   * @param x - The x-coordinate of the center of the circle.
   * @param y - The y-coordinate of the center of the circle.
   * @param radius - The radius of the circle.
   * @throws Error if the circle is not a perfect circle (x and y are not equal).
   */
  private drawCircle(x: number, y: number, radius: number): void {
    if (x !== y) {
      throw new Error('Ellipses are not supported.')
    }

    this.ctx.beginPath()
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI)
    this.ctx.closePath()
  }
}
