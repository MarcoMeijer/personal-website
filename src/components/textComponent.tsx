export interface TextComponentProps {
  title?: string | null;
  content?: string | null;
}

export default function TextComponent({
  title,
  content,
}: TextComponentProps): JSX.Element {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      <p className="text-white">{content}</p>
    </div>
  );
}
