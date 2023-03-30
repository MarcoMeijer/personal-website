import ImageComponent from "./ImageComponent";
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
  return (
    <div
      className={`flex flex-row flex-wrap items-start justify-center p-5 backdrop-blur-sm w-7/12 m-16 bg-gray-600 bg-opacity-30 rounded-2xl ${
        index % 2 === 0 ? "self-start" : "self-end"
      }`}
    >
      <h1 className="text-9xl font-bold text-white animate-move-letter m-4 w-full">
        {title}
      </h1>
      {components.map((component, i) => {
        if (component.__typename === "Text") {
          return <TextComponent key={i} {...component} />;
        } else if (component.__typename === "Skill") {
          return <SkillComponent key={i} {...component} />;
        } else if (component.__typename === "TimePeriod") {
          return <TimePeriodComponent key={i} {...component} />;
        } else if (component.__typename === "Image") {
          return <ImageComponent key={i} {...component} />;
        }
      })}
    </div>
  );
}
