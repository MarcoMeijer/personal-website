import Image from "next/image";

export interface ImageComponentProps {
  image: {
    url: string;
    width?: number | null;
    height?: number | null;
  };
}

export default function ImageComponent({
  image,
}: ImageComponentProps): JSX.Element {
  const maxWidth = 360;
  let width = image.width ?? maxWidth;
  let height = image.height ?? maxWidth;

  if (width > maxWidth) {
    const scale = maxWidth / width;
    width *= scale;
    height *= scale;
  }

  return <Image alt="image" src={image.url} width={width} height={height} />;
}
