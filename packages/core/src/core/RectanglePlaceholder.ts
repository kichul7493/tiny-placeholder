import { PlaceholderOptions } from '../types'
import { Placeholder } from './Placeholder'

export class RectanglePlaceholder extends Placeholder {
  constructor(options: Partial<PlaceholderOptions> = {}) {
    super(options)
  }

  drawShape() {
    const { width, height, borderWidth, borderRadius } = this.options
    this.drawRectangle(borderWidth, borderWidth, width - 2 * borderWidth, height - 2 * borderWidth, borderRadius)
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
}
