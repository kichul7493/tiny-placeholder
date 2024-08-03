import { Placeholder, PlaceholderOptions } from './Placeholder'

export class CirclePlaceholder extends Placeholder {
  constructor(options: PlaceholderOptions) {
    super(options)
  }

  drawShape() {
    const { width, height, borderWidth } = this.options

    this.drawCircle(width / 2, height / 2, Math.min(width, height) / 2 - borderWidth)
  }

  private drawCircle(x: number, y: number, radius: number): void {
    if (x !== y) {
      throw new Error('Ellipses are not supported.')
    }

    this.ctx.beginPath()
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI)
    this.ctx.closePath()
  }
}
