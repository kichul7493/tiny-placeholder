import { PlaceholderOptions } from '../../core'

export const createPlaceholderOptions = (options: Partial<PlaceholderOptions> = {}): PlaceholderOptions => {
  return {
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
    ...options,
  }
}
