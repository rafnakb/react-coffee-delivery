import { useEffect, useState } from "react";
import { ImageContainer } from "./styles";

interface ImageProps {
  src: string;
}

export function ProductImage({ ...props }: ImageProps) {

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    async function loadImage() {
      const image = await import(props.src);
      setImageSrc(image.default);
    }
    loadImage();
  }, [props.src]);

  return (
    <ImageContainer
      src={imageSrc || ''}
    ></ImageContainer>
  );
}