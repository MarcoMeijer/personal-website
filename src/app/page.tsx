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
      <h1 className="flex text-9xl font-bold text-white items-center pointer-events-none relative z-10">
        Marco Lucas <br />
        Meijer
      </h1>
      <div className="relative z-10">
        <LinkButton title="resume" href="/resume" />
      </div>
    </main>
  );
}
