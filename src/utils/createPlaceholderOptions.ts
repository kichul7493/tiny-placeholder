import { defaultOptions } from '../constants/defaultOptions'
import { PlaceholderOptions } from '../types'

export const createPlaceholderOptions = (options: Partial<PlaceholderOptions> = {}): PlaceholderOptions => {
  return {
    ...defaultOptions,
    ...options,
  }
}
