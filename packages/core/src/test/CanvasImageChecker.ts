export class CanvasImageChecker {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D

  constructor() {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')!
  }

  loadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = src
      img.onerror = reject

      img.onload = () => {
        this.canvas.width = img.width
        this.canvas.height = img.height
        this.ctx.drawImage(img, 0, 0)
        resolve()
      }
    })
  }

  isPixelOccupied(x: number, y: number): boolean {
    const pixelData = this.ctx.getImageData(x, y, 1, 1).data
    // If the alpha value is greater than 0, the pixel is considered filled.
    return pixelData[3] > 0
  }

  getPixelColor(x: number, y: number): { r: number; g: number; b: number; a: number } {
    const pixelData = this.ctx.getImageData(x, y, 1, 1).data
    return {
      r: pixelData[0],
      g: pixelData[1],
      b: pixelData[2],
      a: pixelData[3],
    }
  }
}
