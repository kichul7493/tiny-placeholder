import { PlaceholderOptions } from '../types'
import { Placeholder } from './Placeholder'

export class TrianglePlaceholder extends Placeholder {
  constructor(options: PlaceholderOptions) {
    super(options)
  }

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

  private drawTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void {
    this.ctx.beginPath()
    this.ctx.moveTo(x1, y1)
    this.ctx.lineTo(x2, y2)
    this.ctx.lineTo(x3, y3)
    this.ctx.closePath()
  }
}
