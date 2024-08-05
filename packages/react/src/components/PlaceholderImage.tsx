import { PlaceholderImageGenerator, PlaceholderOptions } from '@tiny-placeholder/core'
import { useState, useEffect } from 'react'

interface PlaceholderImageProps {
  options?: Partial<PlaceholderOptions>
  alt?: string
}

/**
 * Renders a placeholder image using Tiny Placeholder library.
 *
 * @component
 * @example
 * ```tsx
 * <PlaceholderImage options={{ width: 300, height: 200 }} alt="Placeholder" />
 * ```
 *
 * @param options - The options for generating the placeholder image.
 * @param alt - The alternative text for the image.
 * @returns The JSX element representing the placeholder image.
 */
export const PlaceholderImage = ({ options, alt = 'Placeholder' }: PlaceholderImageProps) => {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    const canvas = new PlaceholderImageGenerator(options)

    setImageUrl(canvas.getDataURL())
  }, [options])

  return <img width={options?.width} height={options?.height} src={imageUrl} alt={alt} />
}
