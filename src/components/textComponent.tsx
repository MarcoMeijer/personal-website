export interface TextComponentProps {
  title?: string | null;
  content?: string | null;
}

export default function TextComponent({
  title,
  content,
}: TextComponentProps): JSX.Element {
  return (
    <div className="m-16">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="text-2xl text-white">{content}</p>
    </div>
  );
}
