import {
  PlaceholderImageGenerator,
  PlaceholderOptions,
} from "@tiny-placeholder/core";
import { useState, useEffect } from "react";

interface PlaceholderImageProps {
  options?: Partial<PlaceholderOptions>;
  alt?: string;
}

export const PlaceholderImage = ({
  options,
  alt = "Placeholder",
}: PlaceholderImageProps) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const canvas = new PlaceholderImageGenerator(options);

    setImageUrl(canvas.getDataURL());
  }, [options]);

  return (
    <img
      width={options?.width}
      height={options?.height}
      src={imageUrl}
      alt={alt}
    />
  );
};
