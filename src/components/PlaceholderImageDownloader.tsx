import { useState, useEffect } from 'react'
import { PlaceholderImageGenerator } from '../core'
import { PlaceholderOptions } from '../types'

interface PlaceholderImageDownloadProps {
  options?: Partial<PlaceholderOptions>
  component?: React.ReactNode
}

export const PlaceholderImageDownload = ({ options, component }: PlaceholderImageDownloadProps) => {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    const canvas = new PlaceholderImageGenerator(options)

    setImageUrl(canvas.getDataURL())
  }, [options])

  return (
    <a href={imageUrl} download="placeholder.png">
      {component || 'Download'}
    </a>
  )
}
