"use client";

import { CSSProperties } from "react";

export interface TextComponentProps {
  title?: string | null;
  content?: string | null;
  className?: string | null;
  style?: CSSProperties;
}

export default function TextComponent({
  title,
  content,
  className,
  style,
}: TextComponentProps): JSX.Element {
  return (
    <div className={`my-4 ${className}`} style={style}>
      <h1 className="text-xl lg:text-4xl font-bold text-gray-200 my-4">
        {title}
      </h1>
      {content?.split("\n").map((paragraph, i) => {
        return (
          <p key={i} className="lg:text-2xl text-gray-300 my-4">
            {paragraph}
          </p>
        );
      })}
    </div>
  );
}
