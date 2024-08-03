import { defaultOptions } from '../constants'
import { createPlaceholderOptions } from './createPlaceholderOptions'
import { PlaceholderOptions } from '../types'
import { describe, it, expect } from 'vitest'

describe('createPlaceholderOptions', () => {
  it('should return the default options if no options are provided', () => {
    const result = createPlaceholderOptions()
    expect(result).toEqual(defaultOptions)
  })

  it('should return the received input options.', () => {
    const customOptions: PlaceholderOptions = {
      width: 200,
      height: 200,
      backgroundColor: '#cccccc',
      textColor: '#333333',
      text: 'Placeholder',
      fontSize: 20,
      fontFamily: 'Arial, sans-serif',
      borderWidth: 0,
      borderColor: '#000000',
      borderStyle: 'solid',
      borderRadius: 0,
      shape: 'rectangle',
    }
    const result = createPlaceholderOptions(customOptions)
    expect(result).toEqual(customOptions)
  })
})
