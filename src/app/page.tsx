"use client";
import LinkButton from "@/components/linkButton";
import Floor from "@/components/three/floor";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main className="h-screen p-10">
      <div className="absolute w-screen h-screen top-0 left-0 -z-10">
        <Canvas
          shadows
          camera={{
            position: [-6, 7, 7],
          }}
          className="bg-black"
        >
          <Floor />
          <ambientLight color="white" intensity={0.3} />
        </Canvas>
      </div>
      <h1 className="flex text-9xl font-bold text-white items-center">
        Marco Lucas <br />
        Meijer
      </h1>
      <LinkButton title="resume" href="/resume" />
    </main>
  );
}
