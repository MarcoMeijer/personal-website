import Image from "next/image";
import { CSSProperties } from "react";

export interface ImageComponentProps {
  description?: string | null;
  image: {
    url: string;
    width?: number | null;
    height?: number | null;
  };
  className?: string | null;
  style?: CSSProperties;
}

export default function ImageComponent({
  image,
  description,
  className,
  style,
}: ImageComponentProps): JSX.Element {
  const maxWidth = 360;
  const maxHeight = 280;
  let width = image.width ?? maxWidth;
  let height = image.height ?? maxWidth;

  if (width > maxWidth) {
    const scale = maxWidth / width;
    width *= scale;
    height *= scale;
  }

  if (height > maxHeight) {
    const scale = maxHeight / height;
    width *= scale;
    height *= scale;
  }

  return (
    <div
      className={`flex flex-col items-center m-4 w-5/12 hover:scale-125 transition-all duration-300 ${className}`}
      style={style}
    >
      <Image
        className=""
        alt="image"
        src={image.url}
        width={width}
        height={height}
      />
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
