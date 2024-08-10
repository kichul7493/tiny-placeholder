import { defaultOptions } from '../../src/constants'
import { PlaceholderFactory } from '../../src/core'
import { CanvasImageChecker } from '../../src/test/CanvasImageChecker'

describe('TrianglePlaceholder Spec', () => {
  it('Should no options be provided, the image will be generated in the default format', async () => {
    const placeholder = new PlaceholderFactory({
      shape: 'triangle',
      backgroundColor: 'black',
    })

    const { width, height } = defaultOptions

    const checker = new CanvasImageChecker()
    await checker.loadImage(placeholder.getDataURL())

    const isCenterTopPixel = checker.isPixelOccupied((width - 1) / 2, 0)
    const isLeftBottomPixel = checker.isPixelOccupied(0, height - 1)
    const isRightBottomPixel = checker.isPixelOccupied(width - 1, height - 1)

    expect(isCenterTopPixel).to.be.true
    expect(isLeftBottomPixel).to.be.true
    expect(isRightBottomPixel).to.be.true

    const isLeftTopPixel = checker.isPixelOccupied(0, 0)
    const isRightTopPixel = checker.isPixelOccupied(width - 1, 0)

    expect(isLeftTopPixel).to.be.false
    expect(isRightTopPixel).to.be.false

    const { r, g, b } = checker.getPixelColor((width - 1) / 2, 0)

    expect(r).to.equal(0)
    expect(g).to.equal(0)
    expect(b).to.equal(0)
  })

  it('Should the width, height be specified, the image will be generated with that width.', async () => {
    const width = 300
    const height = 300

    const placeholder = new PlaceholderFactory({ width, height, shape: 'triangle' })

    const checker = new CanvasImageChecker()
    await checker.loadImage(placeholder.getDataURL())

    const isCenterTopPixel = checker.isPixelOccupied((width - 1) / 2, 0)
    const isLeftBottomPixel = checker.isPixelOccupied(0, height - 1)
    const isRightBottomPixel = checker.isPixelOccupied(width - 1, height - 1)

    expect(isCenterTopPixel).to.be.true
    expect(isLeftBottomPixel).to.be.true
    expect(isRightBottomPixel).to.be.true

    const isLeftTopPixel = checker.isPixelOccupied(0, 0)
    const isRightTopPixel = checker.isPixelOccupied(width - 1, 0)

    expect(isLeftTopPixel).to.be.false
    expect(isRightTopPixel).to.be.false
  })

  it('Should the background color be specified, the image will be generated with that color.', async () => {
    const backgroundColor = 'black'

    const { width, height } = defaultOptions

    const placeholder = new PlaceholderFactory({ backgroundColor })

    const checker = new CanvasImageChecker()
    await checker.loadImage(placeholder.getDataURL())

    const { r, g, b } = checker.getPixelColor((width - 1) / 2, height - 1)

    expect(r).to.equal(0)
    expect(g).to.equal(0)
    expect(b).to.equal(0)
  })
})
