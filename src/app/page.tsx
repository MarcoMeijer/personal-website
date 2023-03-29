"use client";
import LinkButton from "@/components/LinkButton";
import MyCanvas from "@/components/MyCanvas";
import SplitText from "@/components/SplitText";
import MouseCamera from "@/components/three/MouseCamera";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLElement>(null);

  return (
    <main className="h-screen p-10 bg-black" ref={ref}>
      <MyCanvas>
        <MouseCamera />
      </MyCanvas>
      <div className="flex flex-col text-10xl leading-none font-bold text-white items-begin pointer-events-none relative z-100">
        <SplitText
          text="Marco Lucas"
          startDelay={1}
          deltaDelay={0.08}
          className="animate-move-letter fill-mode-backwards"
        />
        <div className="pl-24">
          <SplitText
            text="Meijer"
            startDelay={2.2}
            deltaDelay={0.08}
            className="animate-move-letter fill-mode-backwards"
          />
        </div>
      </div>
      <div className="left-80 bottom-60 absolute z-10">
        <LinkButton title="resume" href="/resume" />
      </div>
    </main>
  );
}
