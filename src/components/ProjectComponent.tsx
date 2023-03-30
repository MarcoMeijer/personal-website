import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

export interface ProjectComponentProps {
  name: string;
  description?: string | null;
  thumbnail: {
    url: string;
    width?: number | null;
    height?: number | null;
  };
  url?: string | null;
  className?: string | null;
  style?: CSSProperties;
}

export default function ProjectComponent({
  thumbnail,
  name,
  url,
  description,
  className,
  style,
}: ProjectComponentProps): JSX.Element {
  const maxWidth = 360;
  const maxHeight = 280;
  let width = thumbnail.width ?? maxWidth;
  let height = thumbnail.height ?? maxWidth;

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
    <Link
      className={`flex flex-col items-center m-4 w-5/12 hover:scale-110 hover:brightness-75 cursor-pointer transition-all duration-300 ${className}`}
      style={style}
      href={url || "/"}
    >
      <h1 className="text-lg lg:text-2xl font-bold text-gray-100">{name}</h1>
      <Image
        className=""
        alt="image"
        src={thumbnail.url}
        width={width}
        height={height}
      />
      <p className="text-gray-300">{description}</p>
    </Link>
  );
}
