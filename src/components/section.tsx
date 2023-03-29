import { GetSectionsQuery } from "@/generated/graphql";
import TextComponent from "./textComponent";

export type Component =
  | {
      __typename: "Project";
      id: string;
      name: string;
      year: number;
      url?: string | null;
      description: string;
    }
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
}

export default function Section({ title, components }: SectionProps) {
  return (
    <div className="p-5 backdrop-blur-sm w-6/12 bg-white bg-opacity-25">
      <h1 className="text-9xl font-bold text-white animate-move-letter m-4">
        {title}
      </h1>
      {components.map((component, i) => {
        if (component.__typename === "Text") {
          return <TextComponent key={i} {...component} />;
        }
      })}
    </div>
  );
}
