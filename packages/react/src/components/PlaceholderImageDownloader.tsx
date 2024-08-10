import { PlaceholderFactory, PlaceholderOptions } from '@tiny-placeholder/core'
import { useState, useEffect } from 'react'

interface PlaceholderImageDownloadProps {
  options?: Partial<PlaceholderOptions>
  component?: React.ReactNode
}

/**
 * Renders a component that generates and downloads a placeholder image.
 *
 * @component
 * @example
 * ```tsx
 * <PlaceholderImageDownload
 * options={{ width: 300, height: 200 }}
 * component={<button>Click</button>}
 * />
 * ```
 *
 * @param options - The options for generating the placeholder image.
 * @param component - The component to render as the download button. If not provided, a default "Download" text will be used.
 * @returns {JSX.Element} The rendered component.
 */
export const PlaceholderImageDownload = ({ options, component }: PlaceholderImageDownloadProps): JSX.Element => {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    const canvas = new PlaceholderFactory(options)

    setImageUrl(canvas.getDataURL())
  }, [options])

  return (
    <a href={imageUrl} download="placeholder.png">
      {component || 'Download'}
    </a>
  )
}
