import SkillComponent from "./SkillComponent";
import TextComponent from "./textComponent";

export type Component =
  | { __typename: "Image" }
  | {
      __typename: "Project";
      id: string;
      name: string;
      year: number;
      url?: string | null;
      description: string;
    }
  | { __typename: "Skill"; id: string; name: string; percentage: number }
  | { __typename: "Text"; title?: string | null; content?: string | null }
  | {
      __typename: "TimePeriod";
      name: string;
      description: string;
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
      className={`p-5 backdrop-blur-sm w-6/12 m-16 bg-white bg-opacity-25 rounded-2xl ${
        index % 2 === 0 ? "self-start" : "self-end"
      }`}
    >
      <h1 className="text-9xl font-bold text-white animate-move-letter m-4">
        {title}
      </h1>
      {components.map((component, i) => {
        if (component.__typename === "Text") {
          return <TextComponent key={i} {...component} />;
        } else if (component.__typename === "Skill") {
          return <SkillComponent key={i} {...component} />;
        }
      })}
    </div>
  );
}
