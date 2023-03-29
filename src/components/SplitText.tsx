export interface SplitTextProps {
  text: string;
  startDelay: number;
  deltaDelay: number;
  className?: string;
}

export default function SplitText({
  text,
  startDelay,
  className,
  deltaDelay,
}: SplitTextProps) {
  return (
    <div className="flex flex-row">
      {text.split("").map((c, i) => (
        <p
          key={i}
          className={className}
          style={{
            animationDelay: `${startDelay + deltaDelay * i}s`,
            animationFillMode: "backwards",
            paddingLeft: c === " " ? 40 : 0,
          }}
        >
          {c}
        </p>
      ))}
    </div>
  );
}
