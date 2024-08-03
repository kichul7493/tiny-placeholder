import { defaultOptions } from '../../src/constants'
import { PlaceholderImageGenerator } from '../../src/core/PlaceholderImageGenerator'
import { CanvasImageChecker } from '../../src/test/CanvasImageChecker'

describe('CirclePlaceholder Spec', () => {
  it('Should no options be provided, the image will be generated in the default format', async () => {
    const placeholder = new PlaceholderImageGenerator({
      shape: 'circle',
    })

    const { width, height } = defaultOptions

    const checker = new CanvasImageChecker()
    await checker.loadImage(placeholder.getDataURL())

    const isTopPixel = checker.isPixelOccupied((width - 1) / 2, 0)

    const isBottomPixel = checker.isPixelOccupied((width - 1) / 2, height - 1)

    const isLeftPixel = checker.isPixelOccupied(0, (height - 1) / 2)

    const isRightPixel = checker.isPixelOccupied(width - 1, (height - 1) / 2)

    expect(isTopPixel).to.be.true
    expect(isBottomPixel).to.be.true
    expect(isLeftPixel).to.be.true
    expect(isRightPixel).to.be.true

    const isLeftTopPixel = checker.isPixelOccupied(0, 0)

    const isLeftBottomPixel = checker.isPixelOccupied(0, height - 1)

    const isRightTopPixel = checker.isPixelOccupied(width - 1, 0)

    const isRightBottomPixel = checker.isPixelOccupied(width - 1, height - 1)

    expect(isLeftTopPixel).to.be.false
    expect(isLeftBottomPixel).to.be.false
    expect(isRightTopPixel).to.be.false
    expect(isRightBottomPixel).to.be.false

    const { r, g, b } = checker.getPixelColor(50, 50)

    expect(r).to.equal(204)
    expect(g).to.equal(204)
    expect(b).to.equal(204)
  })

  it('Should the width, height be specified, the image will be generated with that height.', async () => {
    const width = 500
    const height = 500

    const placeholder = new PlaceholderImageGenerator({ width, height, shape: 'circle' })

    const checker = new CanvasImageChecker()
    await checker.loadImage(placeholder.getDataURL())

    const isTopPixel = checker.isPixelOccupied((width - 1) / 2, 0)

    const isBottomPixel = checker.isPixelOccupied((width - 1) / 2, height - 1)

    const isLeftPixel = checker.isPixelOccupied(0, (height - 1) / 2)

    const isRightPixel = checker.isPixelOccupied(width - 1, (height - 1) / 2)

    expect(isTopPixel).to.be.true
    expect(isBottomPixel).to.be.true
    expect(isLeftPixel).to.be.true
    expect(isRightPixel).to.be.true

    const isLeftTopPixel = checker.isPixelOccupied(0, 0)

    const isLeftBottomPixel = checker.isPixelOccupied(0, height - 1)

    const isRightTopPixel = checker.isPixelOccupied(width - 1, 0)

    const isRightBottomPixel = checker.isPixelOccupied(width - 1, height - 1)

    expect(isLeftTopPixel).to.be.false
    expect(isLeftBottomPixel).to.be.false
    expect(isRightTopPixel).to.be.false
    expect(isRightBottomPixel).to.be.false
  })

  it('Should the background color be specified, the image will be generated with that color.', async () => {
    const backgroundColor = 'black'

    const placeholder = new PlaceholderImageGenerator({ backgroundColor })

    const checker = new CanvasImageChecker()
    await checker.loadImage(placeholder.getDataURL())

    const { r, g, b } = checker.getPixelColor(50, 50)

    expect(r).to.equal(0)
    expect(g).to.equal(0)
    expect(b).to.equal(0)
  })
})
