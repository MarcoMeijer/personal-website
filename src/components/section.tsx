import { GetSectionsQuery } from "@/generated/graphql";

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
    <div>
      <h1 className="text-9xl font-bold text-white">{title}</h1>
    </div>
  );
}
