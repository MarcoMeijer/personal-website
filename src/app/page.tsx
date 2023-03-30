"use client";
import LinkButton from "@/components/LinkButton";
import MyCanvas from "@/components/MyCanvas";
import SplitText from "@/components/SplitText";
import Ferris from "@/components/three/Ferris";
import MouseCamera from "@/components/three/MouseCamera";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLElement>(null);

  return (
    <main className="h-screen p-10 bg-black" ref={ref}>
      <MyCanvas camera={{ position: [0, 5, 0], rotation: [0, 0, 0] }}>
        <Ferris position={[1, 4, -2]} rotation={[0, -0.6, 0]} />
        <MouseCamera />
      </MyCanvas>
      <div className="flex flex-col text-8xl lg:text-10xl leading-none font-bold text-white items-begin pointer-events-none relative z-100">
        <SplitText
          text="Marco Lucas"
          startDelay={0.5}
          deltaDelay={0.08}
          className="animate-move-letter fill-mode-backwards"
        />
        <div className="pl-24">
          <SplitText
            text="Meijer"
            startDelay={1.4}
            deltaDelay={0.08}
            className="animate-move-letter fill-mode-backwards"
          />
        </div>
      </div>
      <div
        className="left-40 bottom-28 lg:left-80 lg:bottom-60 absolute z-10 animate-enter-up"
        style={{ animationDelay: "2.3s", animationFillMode: "backwards" }}
      >
        <LinkButton title="resume" href="/resume" />
      </div>
    </main>
  );
}
