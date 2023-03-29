import MyCanvas from "@/components/MyCanvas";
import Section from "@/components/section";
import { sdk } from "@/lib/client";

export default async function Resume() {
  const { sections } = await sdk.GetSections();

  return (
    <div className="w-screen h-screen bg-black">
      <MyCanvas />
      {sections.map((props) => (
        <Section key={props.title} {...props} />
      ))}
    </div>
  );
}
