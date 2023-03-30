export interface TextComponentProps {
  title?: string | null;
  content?: string | null;
}

export default function TextComponent({
  title,
  content,
}: TextComponentProps): JSX.Element {
  return (
    <div className="my-4">
      <h1 className="text-4xl font-bold text-gray-200 my-4">{title}</h1>
      {content?.split("\n").map((paragraph, i) => {
        return (
          <p key={i} className="text-2xl text-gray-300 my-4">
            {paragraph}
          </p>
        );
      })}
    </div>
  );
}
