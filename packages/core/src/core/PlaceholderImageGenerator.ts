import { PlaceholderOptions } from '../types'
import { CirclePlaceholder } from './CirclePlaceholder'
import { Placeholder } from './Placeholder'
import { RectanglePlaceholder } from './RectanglePlaceholder'
import { TrianglePlaceholder } from './TrianglePlaceholder'

export class PlaceholderImageGenerator {
  private placeholder: Placeholder

  constructor(options: Partial<PlaceholderOptions> = {}) {
    const { shape } = options

    switch (shape) {
      case 'circle':
        this.placeholder = new CirclePlaceholder(options)
        break
      case 'triangle':
        this.placeholder = new TrianglePlaceholder(options)
        break
      default:
        this.placeholder = new RectanglePlaceholder(options)
    }
  }

  public getDataURL(): string {
    return this.placeholder.getDataURL()
  }

  public getCanvas(): HTMLCanvasElement {
    return this.placeholder.getCanvas()
  }
}
