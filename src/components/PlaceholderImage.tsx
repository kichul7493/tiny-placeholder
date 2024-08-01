import { useState, useEffect } from 'react'
import { PlaceholderImageGenerator } from '../core'
import { PlaceholderOptions } from '../types'

interface PlaceholderImageProps {
  options?: Partial<PlaceholderOptions>
  alt?: string
}

export const PlaceholderImage = ({ options, alt = 'Placeholder' }: PlaceholderImageProps) => {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    const canvas = new PlaceholderImageGenerator(options)

    setImageUrl(canvas.getDataURL())
  }, [options])

  return <img width={options?.width} height={options?.height} src={imageUrl} alt={alt} />
}
