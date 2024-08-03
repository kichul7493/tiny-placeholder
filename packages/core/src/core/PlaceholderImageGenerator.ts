import { defaultOptions } from '../constants'
import { CirclePlaceholder } from './CirclePlaceholder'
import { Placeholder, PlaceholderOptions } from './Placeholder'
import { RectanglePlaceholder } from './RectanglePlaceholder'
import { TrianglePlaceholder } from './TrianglePlaceholder'

/**
 * Generates a placeholder image based on the provided options.
 */
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

  /**
   * Returns the data URL of the generated placeholder image.
   * @returns The data URL of the placeholder image.
   */
  public getDataURL(): string {
    return this.placeholder.getDataURL()
  }

  /**
   * Returns the canvas element of the generated placeholder image.
   * @returns The canvas element of the placeholder image.
   */
  public getCanvas(): HTMLCanvasElement {
    return this.placeholder.getCanvas()
  }
}
