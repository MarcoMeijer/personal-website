"use client";
import { CSSProperties, useState } from "react";
import ImageComponent from "./ImageComponent";
import OnScrollListener from "./OnScrollListener";
import SkillComponent from "./SkillComponent";
import TextComponent from "./TextComponent";
import TimePeriodComponent from "./TimePeriodComponent";

export type Component =
  | {
      __typename: "Image";
      id: string;
      description?: string | null;
      image: { url: string; width?: number | null; height?: number | null };
    }
  | {
      __typename: "Project";
      id: string;
      name: string;
      year: number;
      url?: string | null;
      description?: string | null;
    }
  | { __typename: "Skill"; id: string; name: string; percentage: number }
  | { __typename: "Text"; title?: string | null; content?: string | null }
  | {
      __typename: "TimePeriod";
      name: string;
      description?: string | null;
      fromYear: number;
      toYear?: number | null;
    };

export interface SectionProps {
  title: string;
  components: Array<Component>;
  index: number;
}

export default function Section({ title, components, index }: SectionProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`p-5 backdrop-blur-sm w-7/12 m-4 lg:m-16 bg-gray-600 bg-opacity-30 rounded-2xl ${
        index % 2 === 0 ? "self-start" : "self-end"
      }`}
      id={title}
    >
      <OnScrollListener
        className="flex flex-row flex-wrap items-start justify-center"
        onScroll={() => setVisible(true)}
      >
        <h1
          className={`text-4xl lg:text-8xl font-bold text-white m-4 w-full ${
            visible ? "animate-move-letter" : "opacity-0"
          }`}
        >
          {title}
        </h1>
        {components.map((component, i) => {
          const className = visible
            ? "animate-enter-up fill-mode-backwards"
            : "opacity-0";
          const style: CSSProperties = {
            animationDelay: `${0.3 + 0.3 * i}s`,
            animationFillMode: "backwards",
          };
          const props = {
            className,
            style,
          };
          if (component.__typename === "Text") {
            return <TextComponent key={i} {...component} {...props} />;
          } else if (component.__typename === "Skill") {
            return <SkillComponent key={i} {...component} {...props} />;
          } else if (component.__typename === "TimePeriod") {
            return <TimePeriodComponent key={i} {...component} {...props} />;
          } else if (component.__typename === "Image") {
            return <ImageComponent key={i} {...component} {...props} />;
          }
        })}
      </OnScrollListener>
    </div>
  );
}
