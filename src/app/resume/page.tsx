import MyCanvas from "@/components/MyCanvas";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Ferris from "@/components/three/Ferris";
import MouseCamera from "@/components/three/MouseCamera";
import ScrollCamera from "@/components/three/ScrollCamera";
import { sdk } from "@/lib/client";

export default async function Resume() {
  const { sections } = await sdk.GetSections();

  return (
    <div className="flex flex-col min-w-screen min-h-screen bg-black items-stretch">
      <MyCanvas camera={{ position: [-2, 4, 10], rotation: [0, 0, 0] }}>
        <MouseCamera />
        <Ferris position={[1, 3, 20]} rotation={[0, -0.6, 0]} />
        <ScrollCamera />
      </MyCanvas>
      <Navbar sections={sections} />
      <div className="flex flex-col m-8">
        {sections.map((props, i) => (
          <Section key={props.title} {...props} index={i} />
        ))}
      </div>
    </div>
  );
}
