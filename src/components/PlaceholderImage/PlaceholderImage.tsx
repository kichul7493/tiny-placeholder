import { useState, useEffect } from 'react'
import { PlaceholderImageGenerator, PlaceholderOptions } from '../../core'

interface PlaceholderImageProps {
  options?: Partial<PlaceholderOptions>
}

export const PlaceholderImage = ({ options }: PlaceholderImageProps) => {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    const canvas = new PlaceholderImageGenerator(options)

    setImageUrl(canvas.getDataURL())
  }, [options])

  return <img src={imageUrl} alt="Placeholder" />
}
