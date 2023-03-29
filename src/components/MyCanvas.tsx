"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import Floor from "./three/floor";

export interface MyCanvasProps {
  children?: React.ReactNode;
}

export default function MyCanvas({ children }: MyCanvasProps): JSX.Element {
  return (
    <div className="absolute w-screen h-screen top-0 left-0">
      <Canvas
        shadows
        camera={{
          position: [0, 5, 0],
          rotation: [0, 0, 0],
        }}
      >
        <Floor />
        <ambientLight color="white" intensity={0.3} />
        {children}
      </Canvas>
    </div>
  );
}
