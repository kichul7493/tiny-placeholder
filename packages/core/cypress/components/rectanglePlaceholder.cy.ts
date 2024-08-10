import { defaultOptions } from '../../src/constants'
import { PlaceholderFactory } from '../../src/core'
import { CanvasImageChecker } from '../../src/test/CanvasImageChecker'

describe('RectanglePlaceholder Spec', () => {
  it('Should no options be provided, the image will be generated in the default format', async () => {
    const placeholder = new PlaceholderFactory()

    const { width, height } = defaultOptions

    const checker = new CanvasImageChecker()
    await checker.loadImage(placeholder.getDataURL())

    const isLeftTopPixel = checker.isPixelOccupied(0, 0)

    const isLeftBottomPixel = checker.isPixelOccupied(0, height - 1)

    const isRightTopPixel = checker.isPixelOccupied(width - 1, 0)

    const isRightBottomPixel = checker.isPixelOccupied(width - 1, height - 1)

    const { r, g, b } = checker.getPixelColor(50, 50)

    expect(r).to.equal(204)
    expect(g).to.equal(204)
    expect(b).to.equal(204)

    expect(isLeftTopPixel).to.be.true
    expect(isLeftBottomPixel).to.be.true
    expect(isRightTopPixel).to.be.true
    expect(isRightBottomPixel).to.be.true
  })

  it('Should the width be specified, the image will be generated with that width.', async () => {
    const width = 300
    const height = 300

    const placeholder = new PlaceholderFactory({ width, height })

    const checker = new CanvasImageChecker()
    await checker.loadImage(placeholder.getDataURL())

    const isRightTopPixel = checker.isPixelOccupied(width - 1, 0)
    const isLeftBottomPixel = checker.isPixelOccupied(0, height - 1)

    expect(isRightTopPixel).to.be.true
    expect(isLeftBottomPixel).to.be.true
  })

  it('Should the background color be specified, the image will be generated with that color.', async () => {
    const backgroundColor = 'black'

    const placeholder = new PlaceholderFactory({ backgroundColor })

    const checker = new CanvasImageChecker()
    await checker.loadImage(placeholder.getDataURL())

    const { r, g, b } = checker.getPixelColor(50, 50)

    expect(r).to.equal(0)
    expect(g).to.equal(0)
    expect(b).to.equal(0)
  })
})
