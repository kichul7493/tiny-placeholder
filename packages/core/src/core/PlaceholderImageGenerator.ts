import { defaultOptions } from '../constants'
import { PlaceholderOptions } from '../types'
import { CirclePlaceholder } from './CirclePlaceholder'
import { Placeholder } from './Placeholder'
import { RectanglePlaceholder } from './RectanglePlaceholder'
import { TrianglePlaceholder } from './TrianglePlaceholder'

export class PlaceholderImageGenerator {
  private placeholder: Placeholder

  constructor(options: Partial<PlaceholderOptions> = {}) {
    const mergeOptions = {
      ...defaultOptions,
      ...options,
    }

    const { shape } = mergeOptions

    switch (shape) {
      case 'circle':
        this.placeholder = new CirclePlaceholder(mergeOptions)
        break
      case 'triangle':
        this.placeholder = new TrianglePlaceholder(mergeOptions)
        break
      default:
        this.placeholder = new RectanglePlaceholder(mergeOptions)
    }
  }

  public getDataURL(): string {
    return this.placeholder.getDataURL()
  }

  public getCanvas(): HTMLCanvasElement {
    return this.placeholder.getCanvas()
  }
}
