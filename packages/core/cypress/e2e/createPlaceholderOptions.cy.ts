import { defaultOptions } from '../../src/constants'
import { PlaceholderOptions } from '../../src/core'
import { createPlaceholderOptions } from '../../src/utils/createPlaceholderOptions'

describe('CreatePlaceholderOptions Spec', () => {
  it('Should no options be provided, the default options should be returned.', () => {
    const options = createPlaceholderOptions()

    expect(options).to.deep.equal(defaultOptions)
  })

  it('Should options be provided, the provided options should be returned.', () => {
    const customOptions: PlaceholderOptions = {
      width: 100,
      height: 100,
      backgroundColor: 'black',
      textColor: 'white',
      text: 'Test',
      fontSize: 16,
      fontFamily: 'Arial',
      borderWidth: 4,
      borderColor: 'red',
      borderStyle: 'dashed',
      borderRadius: 10,
      shape: 'circle',
    }

    const options = createPlaceholderOptions(customOptions)

    expect(options).to.deep.equal(customOptions)
  })

  it('Should only some options be provided, the options not provided should default to the default options.', () => {
    const customOptions = { width: 100, height: 100 }

    const options = createPlaceholderOptions(customOptions)

    expect(options).to.deep.equal({ ...defaultOptions, ...customOptions })
  })
})
