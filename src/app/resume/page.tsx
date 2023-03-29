import MyCanvas from "@/components/MyCanvas";
import Section from "@/components/Section";
import { sdk } from "@/lib/client";

export default async function Resume() {
  const { sections } = await sdk.GetSections();

  return (
    <div className="flex flex-col min-w-screen min-h-screen bg-black items-stretch">
      <MyCanvas />
      <div className="flex flex-col m-8">
        {sections.map((props, i) => (
          <Section key={props.title} {...props} index={i} />
        ))}
      </div>
    </div>
  );
}
