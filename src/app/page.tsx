"use client";
import LinkButton from "@/components/linkButton";
import Floor from "@/components/three/floor";
import MouseCamera from "@/components/three/mouseCamera";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLElement>(null);

  return (
    <main className="h-screen p-10 bg-black" ref={ref}>
      <div className="absolute w-screen h-screen top-0 left-0">
        <Canvas
          shadows
          camera={{
            position: [0, 10, 0],
            rotation: [0, 0, 0],
          }}
        >
          <MouseCamera />
          <Floor />
          <ambientLight color="white" intensity={0.3} />
        </Canvas>
      </div>
      <div className="flex flex-col text-10xl leading-none font-bold text-white items-begin pointer-events-none relative z-100">
        <h1>Marco Lucas</h1>
        <h1 className="ml-32">Meijer</h1>
      </div>
      <div className="left-80 bottom-60 absolute z-10">
        <LinkButton title="resume" href="/resume" />
      </div>
    </main>
  );
}
