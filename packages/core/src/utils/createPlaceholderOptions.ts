import { defaultOptions } from '../constants/defaultOptions'
import { PlaceholderOptions } from '../core'

/**
 * Creates placeholder options by merging the provided options with the default options.
 * @param options - The partial options object to merge with the default options.
 * @returns The merged placeholder options.
 */
export const createPlaceholderOptions = (options: Partial<PlaceholderOptions> = {}): PlaceholderOptions => {
  return {
    ...defaultOptions,
    ...options,
  }
}
