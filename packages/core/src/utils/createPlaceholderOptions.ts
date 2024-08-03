import { defaultOptions } from '../constants/defaultOptions'
import { PlaceholderOptions } from '../core'

export const createPlaceholderOptions = (options: Partial<PlaceholderOptions> = {}): PlaceholderOptions => {
  return {
    ...defaultOptions,
    ...options,
  }
}
